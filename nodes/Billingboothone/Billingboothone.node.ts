import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { allResourceFields } from './resources';
import { getAccessToken, cleanBaseUrl, resourceSelector, buildMultipartFormData } from './utils';
import { loadOptionsMethods } from './loadOptions';

export class Billingboothone implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Billing Booth One',
		name: 'billingboothone',
		icon: 'file:billingboothone.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Billing Booth One API',
		defaults: {
			name: 'Billing Booth One',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'billingboothoneApi',
				required: true,
			},
		],
		properties: [
			resourceSelector,
			...allResourceFields,
		],
		usableAsTool: true,
	};

	methods = loadOptionsMethods;

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Get authentication token and base configuration
		const accessToken = await getAccessToken(this);
		const credentials = await this.getCredentials('billingboothoneApi');
		const baseUrl = cleanBaseUrl(String(credentials.baseUrl || 'https://api.billingbooth.app'));

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				// Initialize request parameters
				let method: IHttpRequestMethods = 'GET';
				let endpoint = '';
				const qs: IDataObject = {};
				let body: IDataObject | undefined;
				let binaryData: unknown = undefined;
				let operationDef: unknown = null;
				for (const prop of allResourceFields) {
					if (prop.name === 'operation' &&
					    prop.displayOptions?.show?.resource?.[0] === resource) {
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						const matchingOp = prop.options?.find((opt: any) => opt.value === operation);
						if (matchingOp) {
							operationDef = matchingOp;
							break;
						}
					}
				}

				// Extract routing from operation definition
				const opDef = operationDef as IDataObject;
				if (opDef?.routing && typeof opDef.routing === 'object') {
					const routing = opDef.routing as IDataObject;
					const request = routing.request as IDataObject;
					if (request) {
						method = (request.method as IHttpRequestMethods) || 'GET';
						endpoint = (request.url as string) || '';

						// Remove = sign if present
						if (endpoint.startsWith('=')) {
							endpoint = endpoint.substring(1);
						}
					}
				}

			if (!endpoint) {
					throw new NodeOperationError(
						this.getNode(),
						`No routing information found for resource: ${resource}, operation: ${operation}`,
					);
				}

				// Resolve n8n expressions in the endpoint
				// The endpoint might contain expressions like {{$parameter["id"]}}
				endpoint = this.evaluateExpression(endpoint, i) as string;

				// Get optional parameters from the 'options' collection
				let options: IDataObject = {};
				try {
					options = this.getNodeParameter('options', i, {}) as IDataObject;
				} catch {
					// No options collection for this operation
				}

				// Add query parameters from options (excluding path params)
				for (const [key, value] of Object.entries(options)) {
					if (value !== undefined && value !== '' && value !== null) {
						qs[key] = value;
					}
				}

				// Special handling for CDR Export: default format to 'csv' if not provided
				if (resource === 'CDR' && operation === 'Cdr Export' && !qs.format) {
					qs.format = 'csv';
				}

				// Check if this is a file upload operation
				let isBinaryUpload = false;
				let binaryPropertyName = '';
				try {
					binaryPropertyName = this.getNodeParameter('binaryPropertyName', i, '') as string;
					if (binaryPropertyName) {
						isBinaryUpload = true;
						binaryData = items[i].binary?.[binaryPropertyName];

						if (!binaryData) {
							throw new NodeOperationError(
								this.getNode(),
								`Binary property "${binaryPropertyName}" does not exist on item ${i}`,
							);
						}

						// Get supplier_id for file uploads (CDR and Service Files)
						try {
							const supplierId = this.getNodeParameter('supplier_id', i) as number;
							if (supplierId) {
								qs.supplier_id = supplierId;
							}
						} catch {
							// supplier_id not available for this operation
						}
					}
				} catch {
					// No binary property field for this operation
				}

				// Handle request body for POST/PUT/PATCH operations (not needed for binary uploads)
				if (['POST', 'PUT', 'PATCH'].includes(method) && !isBinaryUpload) {
					body = {};

					// Collect all fields that should be sent in the body based on routing configuration
					for (const prop of allResourceFields) {
						// Check if this property is for the current resource/operation
						if (prop.displayOptions?.show?.resource?.[0] === resource &&
						    prop.displayOptions?.show?.operation?.[0] === operation) {

							// Check if this field has routing config that sends to body
							const routing = (prop as any).routing;
							if (routing?.send?.type === 'body') {
								try {
									const paramValue = this.getNodeParameter(prop.name, i);
									if (paramValue !== undefined && paramValue !== null && paramValue !== '') {
										const propertyName = routing.send.property || prop.name;
										body[propertyName] = paramValue;
									}
								} catch {
									// Parameter not set or optional
								}
							}
						}
					}

					// Also check for bodyOptions collection (for remaining optional fields)
					try {
						const bodyOptions = this.getNodeParameter('bodyOptions', i, {}) as IDataObject;
						if (bodyOptions && Object.keys(bodyOptions).length > 0) {
							body = { ...body, ...bodyOptions };
						}
					} catch {
						// No bodyOptions collection for this operation
					}
				}

				// Build request options
				const requestOptions: IHttpRequestOptions = {
					method,
					url: `${baseUrl}${endpoint}`,
					headers: {
						Authorization: `Bearer ${accessToken}`,
						Accept: 'application/json',
					},
				};

				// Handle binary file upload with multipart/form-data
				// Set up defaults for csv is nothing is provided
				if (isBinaryUpload && binaryData) {
					const binaryBuffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);
					const binData = binaryData as IDataObject;
					const fileName = (binData.fileName as string) || 'file.csv';
					const mimeType = (binData.mimeType as string) || 'text/csv';

					// Build multipart form data using helper
					const multipartData = buildMultipartFormData(binaryBuffer, fileName, mimeType);

					requestOptions.body = multipartData.body;
					requestOptions.headers = {
						...requestOptions.headers,
						...multipartData.headers,
					};
					// Explicitly disable JSON mode for multipart uploads
					requestOptions.json = false;
				} else {
					// Regular JSON request
					if (requestOptions.headers) {
						requestOptions.headers['Content-Type'] = 'application/json';
					}
					requestOptions.json = true;
				}

				if (Object.keys(qs).length > 0) {
					requestOptions.qs = qs;
				}

				if (body && Object.keys(body).length > 0 && !isBinaryUpload) {
					requestOptions.body = body;
				}

				// Log all node parameters
				const allParams: IDataObject = {};
				try {
					// Get all parameter names from the properties
					for (const prop of allResourceFields) {
						if (prop.displayOptions?.show?.resource?.[0] === resource &&
						    prop.displayOptions?.show?.operation?.[0] === operation) {
							try {
								const paramValue = this.getNodeParameter(prop.name, i);
								allParams[prop.name] = paramValue;
							} catch {
								// Parameter not available for this operation
							}
						}
					}
				} catch (error) {
				}

				const responseData = await this.helpers.httpRequest(requestOptions);

				// Safely extract JSON data, avoiding circular references
				let jsonData: IDataObject;

				if (responseData === null || responseData === undefined) {
					jsonData = {};
				} else if (typeof responseData === 'object') {
					// Check if it's a plain object or array (not a complex HTTP object)
					if (Array.isArray(responseData) || responseData.constructor === Object) {
						jsonData = responseData as IDataObject;
					} else {
						// If it's a complex object (like HTTP response), try to extract the data
						// This handles cases where the full response object is returned
						jsonData = {
							data: String(responseData),
						};
					}
				} else {
					jsonData = { data: responseData };
				}

				returnData.push({
					json: jsonData,
				});
			} catch (error) {
				// Enhanced error handling to avoid circular references
				let errorMessage = 'Unknown error occurred';
				let errorDetails: IDataObject = {};

				if (error instanceof Error) {
					errorMessage = error.message;
					errorDetails = {
						name: error.name,
						message: error.message,
					};

					// Safely add stack trace if available
					if (error.stack) {
						errorDetails.stack = error.stack;
					}
				} else if (typeof error === 'object' && error !== null) {
					// Try to extract useful error information without circular refs
					try {
						errorMessage = JSON.stringify(error);
						errorDetails = { error };
					} catch {
						errorMessage = String(error);
						errorDetails = { error: errorMessage };
					}
				} else {
					errorMessage = String(error);
					errorDetails = { error: errorMessage };
				}

				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: errorMessage,
							...errorDetails,
						},
					});
					continue;
				}
				throw new NodeOperationError(this.getNode(), errorMessage);
			}
		}

		return [returnData];
	}
}
