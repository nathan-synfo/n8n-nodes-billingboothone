"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthenticatedContext = getAuthenticatedContext;
const utils_1 = require("../utils");
async function getAuthenticatedContext(context) {
    try {
        const credentials = await context.getCredentials('billingboothoneApi');
        const baseUrl = (0, utils_1.cleanBaseUrl)(String(credentials.baseUrl || 'https://api.billingbooth.app'));
        console.log('Authenticating with Billing Booth One API...');
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
        const accessToken = tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.token;
        if (!accessToken) {
            console.error('No access token received from API');
            throw new Error('Authentication failed: No token received');
        }
        console.log('Authentication successful');
        return {
            baseUrl,
            accessToken,
            helpers: context.helpers,
        };
    }
    catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
}
//# sourceMappingURL=helpers.js.map