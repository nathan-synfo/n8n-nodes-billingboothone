"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billingboothone = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const resources_1 = require("./resources");
const utils_1 = require("./utils");
class Billingboothone {
    constructor() {
        this.description = {
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
                utils_1.resourceSelector,
                ...resources_1.allResourceFields,
            ],
            usableAsTool: true,
        };
    }
    async execute() {
        var _a, _b, _c, _d, _e;
        const items = this.getInputData();
        const returnData = [];
        const accessToken = await (0, utils_1.getAccessToken)(this);
        const credentials = await this.getCredentials('billingboothoneApi');
        const baseUrl = (0, utils_1.cleanBaseUrl)(String(credentials.baseUrl || 'https://api.billingbooth.app'));
        for (let i = 0; i < items.length; i++) {
            try {
                const resource = this.getNodeParameter('resource', i);
                const operation = this.getNodeParameter('operation', i);
                let method = 'GET';
                let endpoint = '';
                const qs = {};
                let body;
                let binaryData = undefined;
                let operationDef = null;
                for (const prop of resources_1.allResourceFields) {
                    if (prop.name === 'operation' &&
                        ((_c = (_b = (_a = prop.displayOptions) === null || _a === void 0 ? void 0 : _a.show) === null || _b === void 0 ? void 0 : _b.resource) === null || _c === void 0 ? void 0 : _c[0]) === resource) {
                        const matchingOp = (_d = prop.options) === null || _d === void 0 ? void 0 : _d.find((opt) => opt.value === operation);
                        if (matchingOp) {
                            operationDef = matchingOp;
                            break;
                        }
                    }
                }
                const opDef = operationDef;
                if ((opDef === null || opDef === void 0 ? void 0 : opDef.routing) && typeof opDef.routing === 'object') {
                    const routing = opDef.routing;
                    const request = routing.request;
                    if (request) {
                        method = request.method || 'GET';
                        endpoint = request.url || '';
                        if (endpoint.startsWith('=')) {
                            endpoint = endpoint.substring(1);
                        }
                    }
                }
                if (!endpoint) {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), `No routing information found for resource: ${resource}, operation: ${operation}`);
                }
                endpoint = this.evaluateExpression(endpoint, i);
                let options = {};
                try {
                    options = this.getNodeParameter('options', i, {});
                }
                catch {
                }
                for (const [key, value] of Object.entries(options)) {
                    if (value !== undefined && value !== '' && value !== null) {
                        qs[key] = value;
                    }
                }
                let isBinaryUpload = false;
                let binaryPropertyName = '';
                try {
                    binaryPropertyName = this.getNodeParameter('binaryPropertyName', i, '');
                    if (binaryPropertyName) {
                        isBinaryUpload = true;
                        binaryData = (_e = items[i].binary) === null || _e === void 0 ? void 0 : _e[binaryPropertyName];
                        if (!binaryData) {
                            throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Binary property "${binaryPropertyName}" does not exist on item ${i}`);
                        }
                        try {
                            const supplierId = this.getNodeParameter('supplier_id', i);
                            if (supplierId) {
                                qs.supplier_id = supplierId;
                            }
                        }
                        catch {
                        }
                    }
                }
                catch {
                }
                if (['POST'].includes(method) && !isBinaryUpload) {
                    try {
                        const bodyFields = this.getNodeParameter('body', i, {});
                        if (Object.keys(bodyFields).length > 0) {
                            body = bodyFields;
                        }
                    }
                    catch {
                    }
                }
                const requestOptions = {
                    method,
                    url: `${baseUrl}${endpoint}`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/json',
                    },
                };
                if (isBinaryUpload && binaryData) {
                    const binaryBuffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);
                    const binData = binaryData;
                    const fileName = binData.fileName || 'file.csv';
                    const mimeType = binData.mimeType || 'text/csv';
                    const multipartData = (0, utils_1.buildMultipartFormData)(binaryBuffer, fileName, mimeType);
                    requestOptions.body = multipartData.body;
                    requestOptions.headers = {
                        ...requestOptions.headers,
                        ...multipartData.headers,
                    };
                    requestOptions.json = false;
                }
                else {
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
                const responseData = await this.helpers.httpRequest(requestOptions);
                let jsonData;
                if (responseData === null || responseData === undefined) {
                    jsonData = {};
                }
                else if (typeof responseData === 'object') {
                    if (Array.isArray(responseData) || responseData.constructor === Object) {
                        jsonData = responseData;
                    }
                    else {
                        jsonData = {
                            data: String(responseData),
                        };
                    }
                }
                else {
                    jsonData = { data: responseData };
                }
                returnData.push({
                    json: jsonData,
                });
            }
            catch (error) {
                let errorMessage = 'Unknown error occurred';
                let errorDetails = {};
                if (error instanceof Error) {
                    errorMessage = error.message;
                    errorDetails = {
                        name: error.name,
                        message: error.message,
                    };
                    if (error.stack) {
                        errorDetails.stack = error.stack;
                    }
                }
                else if (typeof error === 'object' && error !== null) {
                    try {
                        errorMessage = JSON.stringify(error);
                        errorDetails = { error };
                    }
                    catch {
                        errorMessage = String(error);
                        errorDetails = { error: errorMessage };
                    }
                }
                else {
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
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), errorMessage);
            }
        }
        return [returnData];
    }
}
exports.Billingboothone = Billingboothone;
//# sourceMappingURL=Billingboothone.node.js.map