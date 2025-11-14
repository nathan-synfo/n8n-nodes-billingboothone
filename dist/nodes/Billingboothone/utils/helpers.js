"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = getAccessToken;
exports.cleanBaseUrl = cleanBaseUrl;
const n8n_workflow_1 = require("n8n-workflow");
const tokenCache = new Map();
async function getAccessToken(context) {
    const credentials = await context.getCredentials('billingboothoneApi');
    let baseUrl = String(credentials.baseUrl || 'https://api.billingbooth.app');
    baseUrl = baseUrl.trim().replace(/[=/\s]+$/, '');
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        baseUrl = 'https://' + baseUrl;
    }
    const cacheKey = `${credentials.email}_${baseUrl}`;
    const cached = tokenCache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
        return cached.token;
    }
    const tokenResponse = await context.helpers.httpRequest({
        method: 'POST',
        url: `${baseUrl}/token`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            email: credentials.email,
            password: credentials.password,
            grant_type: 'password',
        },
        json: true,
    });
    if (!(tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.token)) {
        throw new n8n_workflow_1.NodeOperationError(context.getNode(), `Failed to fetch access token. Response: ${JSON.stringify(tokenResponse)}`);
    }
    tokenCache.set(cacheKey, {
        token: tokenResponse.token,
        expires: Date.now() + 55 * 60 * 1000,
    });
    return tokenResponse.token;
}
function cleanBaseUrl(baseUrl) {
    baseUrl = baseUrl.trim().replace(/[=/\s]+$/, '');
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        baseUrl = 'https://' + baseUrl;
    }
    return baseUrl;
}
//# sourceMappingURL=helpers.js.map