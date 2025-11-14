"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingboothoneApi = void 0;
class BillingboothoneApi {
    constructor() {
        this.name = 'billingboothoneApi';
        this.displayName = 'Billing Booth One API';
        this.documentationUrl = 'https://api.billingbooth.app/docs';
        this.icon = 'file:billingboothone.svg';
        this.properties = [
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                required: true,
                placeholder: 'user@example.com',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                required: true,
            },
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'https://api.billingbooth.app',
                required: true,
                placeholder: 'https://api.billingbooth.app',
            },
        ];
        this.test = {
            request: {
                baseURL: '={{$credentials.baseUrl}}',
                url: '/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    email: '={{$credentials.email}}',
                    password: '={{$credentials.password}}',
                    grant_type: 'password',
                },
                json: true,
            },
        };
    }
}
exports.BillingboothoneApi = BillingboothoneApi;
//# sourceMappingURL=BillingboothoneApi.credentials.js.map