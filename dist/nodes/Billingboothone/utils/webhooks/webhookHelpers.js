"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebhookAuth = getWebhookAuth;
exports.createWebhookEndpoint = createWebhookEndpoint;
exports.checkWebhookExists = checkWebhookExists;
exports.deleteWebhookEndpoint = deleteWebhookEndpoint;
const helpers_1 = require("../helpers");
async function getWebhookAuth(context) {
    const credentials = await context.getCredentials('billingboothoneApi');
    const baseUrl = (0, helpers_1.cleanBaseUrl)(String(credentials.baseUrl || 'https://api.billingbooth.app'));
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
    return { baseUrl, accessToken };
}
function buildSubscriptions(events) {
    const allEvents = [
        'subscription_invoices',
        'subscription_payments',
        'subscription_mandates',
        'subscription_customers',
        'subscription_ledger',
        'subscription_audit',
        'subscription_credit_notes',
    ];
    const subscriptions = {};
    for (const event of allEvents) {
        subscriptions[event] = events.includes(event);
    }
    return subscriptions;
}
async function createWebhookEndpoint(httpRequest, baseUrl, accessToken, webhookUrl, events) {
    const subscriptions = buildSubscriptions(events);
    const payload = {
        url: webhookUrl,
        ...subscriptions,
        is_enabled: true,
    };
    const options = {
        method: 'POST',
        url: `${baseUrl}/webhooks/endpoint`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: payload,
        json: true,
    };
    console.log('Creating webhook with payload:', payload);
    console.log('Webhook endpoint URL:', options.url);
    console.log('Using access token:', accessToken ? `${accessToken.substring(0, 10)}...` : 'MISSING');
    const response = await httpRequest(options);
    console.log('Webhook creation response:', response);
    return response;
}
async function checkWebhookExists(httpRequest, baseUrl, accessToken, webhookId) {
    if (!webhookId) {
        return false;
    }
    try {
        const options = {
            method: 'GET',
            url: `${baseUrl}/webhooks/endpoint/${webhookId}`,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            json: true,
        };
        await httpRequest(options);
        return true;
    }
    catch (error) {
        return false;
    }
}
async function deleteWebhookEndpoint(httpRequest, baseUrl, accessToken, webhookId) {
    if (!webhookId) {
        return;
    }
    try {
        const options = {
            method: 'DELETE',
            url: `${baseUrl}/webhooks/endpoint/${webhookId}`,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            json: true,
        };
        await httpRequest(options);
    }
    catch (error) {
    }
}
//# sourceMappingURL=webhookHelpers.js.map