import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import {
	createWebhookEndpoint,
	checkWebhookExists,
	deleteWebhookEndpoint,
	getWebhookAuth,
} from './utils/webhooks/webhookHelpers';

import type { WebhookStaticData } from './utils/webhooks/types';

export class BillingboothoneTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Billing Booth One Trigger',
		name: 'billingboothoneTrigger',
		icon: 'file:billingboothone.svg',
		group: ['trigger'],
		version: 1,
		subtitle: 'On Webhook Event',
		description: 'Starts the workflow when BillingBoothOne events occur',
		defaults: {
			name: 'Billing Booth One Trigger',
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

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node') as unknown as WebhookStaticData;

				if (!webhookData.webhookId) {
					return false;
				}

				const { baseUrl, accessToken } = await getWebhookAuth(this);

				return await checkWebhookExists(
					this.helpers.httpRequest,
					baseUrl,
					accessToken,
					webhookData.webhookId,
				);
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;

				// Collect all enabled event types
				const eventTypes = [
					'subscription_invoices',
					'subscription_payments',
					'subscription_mandates',
					'subscription_customers',
					'subscription_ledger',
					'subscription_audit',
					'subscription_credit_notes',
				];

				const events: string[] = [];
				for (const eventType of eventTypes) {
					const isEnabled = this.getNodeParameter(eventType) as boolean;
					if (isEnabled) {
						events.push(eventType);
					}
				}

				if (events.length === 0) {
					throw new Error('At least one event type must be enabled');
				}

				const { baseUrl, accessToken } = await getWebhookAuth(this);

				// Create webhook endpoint
				const webhookData = await createWebhookEndpoint(
					this.helpers.httpRequest,
					baseUrl,
					accessToken,
					webhookUrl,
					events,
				);

				// Store webhook data in workflow static data
				const staticData = this.getWorkflowStaticData('node') as unknown as WebhookStaticData;
				staticData.webhookId = webhookData.id;
				staticData.events = events;

				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node') as unknown as WebhookStaticData;

				if (!webhookData.webhookId) {
					return true;
				}

				const { baseUrl, accessToken } = await getWebhookAuth(this);

				await deleteWebhookEndpoint(
					this.helpers.httpRequest,
					baseUrl,
					accessToken,
					webhookData.webhookId,
				);

				// Clear static data
				delete webhookData.webhookId;
				delete webhookData.secret;
				delete webhookData.events;

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();

		return {
			workflowData: [this.helpers.returnJsonArray(bodyData)],
		};
	}
}
