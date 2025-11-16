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

				// Handle request body for POST operations (not needed for binary uploads)
				if (['POST'].includes(method) && !isBinaryUpload) {
					try {
						const bodyFields = this.getNodeParameter('body', i, {}) as IDataObject;
						if (Object.keys(bodyFields).length > 0) {
							body = bodyFields;
						}
					} catch {
						// No body fields for this operation
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

				/* Optional Debug logging for binary uploads
				this.logger.info('=== REQUEST DEBUG ===');
				this.logger.info(`Method: ${method}`);
				this.logger.info(`URL: ${requestOptions.url}`);
				this.logger.info(`Query params: ${JSON.stringify(qs)}`);
				this.logger.info(`Headers: ${JSON.stringify(requestOptions.headers)}`);
				this.logger.info(`Is binary upload: ${isBinaryUpload}`);
				this.logger.info(`Body type: ${typeof requestOptions.body}`);
				if (!isBinaryUpload && requestOptions.body) {
					this.logger.info(`Body: ${JSON.stringify(requestOptions.body)}`);
				}
				this.logger.info('====================');
				*/

				const responseData = await this.helpers.httpRequest(requestOptions);

				// Ensure we only return the JSON data, not the full response object
				const jsonData = typeof responseData === 'object' ? responseData : { data: responseData };

				returnData.push({
					json: jsonData,
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: (error as Error).message,
						},
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
