"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingboothoneTrigger = void 0;
const webhookHelpers_1 = require("./utils/webhooks/webhookHelpers");
class BillingboothoneTrigger {
    constructor() {
        this.description = {
            displayName: 'BillingBoothOne Trigger',
            name: 'billingboothoneTrigger',
            icon: 'file:billingboothone.svg',
            group: ['trigger'],
            version: 1,
            subtitle: 'On Webhook Event',
            description: 'Starts the workflow when BillingBoothOne events occur',
            defaults: {
                name: 'BillingBoothOne Trigger',
            },
            inputs: [],
            outputs: ['main'],
            credentials: [
                {
                    name: 'billingboothoneApi',
                    required: true,
                },
            ],
            webhooks: [
                {
                    name: 'default',
                    httpMethod: 'POST',
                    responseMode: 'onReceived',
                    path: 'webhook',
                },
            ],
            properties: [
                {
                    displayName: 'On Invoice Events',
                    name: 'subscription_invoices',
                    type: 'options',
                    default: true,
                    description: 'Trigger on invoice events (created, updated, sent, etc.)',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Payment Events',
                    name: 'subscription_payments',
                    type: 'options',
                    default: true,
                    description: 'Trigger on payment events (received, failed, etc.)',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Mandate Events',
                    name: 'subscription_mandates',
                    type: 'options',
                    default: true,
                    description: 'Trigger on mandate events (created, cancelled, etc.)',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Customer Events',
                    name: 'subscription_customers',
                    type: 'options',
                    default: true,
                    description: 'Trigger on customer events (created, updated, etc.)',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Ledger Events',
                    name: 'subscription_ledger',
                    type: 'options',
                    default: true,
                    description: 'Trigger on ledger events',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Audit Events',
                    name: 'subscription_audit',
                    type: 'options',
                    default: true,
                    description: 'Trigger on audit events',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
                {
                    displayName: 'On Credit Note Events',
                    name: 'subscription_credit_notes',
                    type: 'options',
                    default: true,
                    description: 'Trigger on credit note events',
                    options: [
                        {
                            name: 'Yes',
                            value: true,
                        },
                        {
                            name: 'No',
                            value: false,
                        },
                    ],
                },
            ],
        };
        this.webhookMethods = {
            default: {
                async checkExists() {
                    const webhookData = this.getWorkflowStaticData('node');
                    if (!webhookData.webhookId) {
                        return false;
                    }
                    const { baseUrl, accessToken } = await (0, webhookHelpers_1.getWebhookAuth)(this);
                    return await (0, webhookHelpers_1.checkWebhookExists)(this.helpers.httpRequest, baseUrl, accessToken, webhookData.webhookId);
                },
                async create() {
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    const eventTypes = [
                        'subscription_invoices',
                        'subscription_payments',
                        'subscription_mandates',
                        'subscription_customers',
                        'subscription_ledger',
                        'subscription_audit',
                        'subscription_credit_notes',
                    ];
                    const events = [];
                    for (const eventType of eventTypes) {
                        const isEnabled = this.getNodeParameter(eventType);
                        if (isEnabled) {
                            events.push(eventType);
                        }
                    }
                    if (events.length === 0) {
                        throw new Error('At least one event type must be enabled');
                    }
                    const { baseUrl, accessToken } = await (0, webhookHelpers_1.getWebhookAuth)(this);
                    const webhookData = await (0, webhookHelpers_1.createWebhookEndpoint)(this.helpers.httpRequest, baseUrl, accessToken, webhookUrl, events);
                    const staticData = this.getWorkflowStaticData('node');
                    staticData.webhookId = webhookData.id;
                    staticData.events = events;
                    return true;
                },
                async delete() {
                    const webhookData = this.getWorkflowStaticData('node');
                    if (!webhookData.webhookId) {
                        return true;
                    }
                    const { baseUrl, accessToken } = await (0, webhookHelpers_1.getWebhookAuth)(this);
                    await (0, webhookHelpers_1.deleteWebhookEndpoint)(this.helpers.httpRequest, baseUrl, accessToken, webhookData.webhookId);
                    delete webhookData.webhookId;
                    delete webhookData.secret;
                    delete webhookData.events;
                    return true;
                },
            },
        };
    }
    async webhook() {
        const bodyData = this.getBodyData();
        return {
            workflowData: [this.helpers.returnJsonArray(bodyData)],
        };
    }
}
exports.BillingboothoneTrigger = BillingboothoneTrigger;
//# sourceMappingURL=BillingboothoneTrigger.node.js.map