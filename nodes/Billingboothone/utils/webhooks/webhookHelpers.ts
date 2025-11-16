import type { IHookFunctions, IHttpRequestOptions } from 'n8n-workflow';
import type {
	WebhookEndpointCreatePayload,
	WebhookEndpointResponse,
} from './types';
import { cleanBaseUrl } from '../helpers';

/**
 * Fetch access token for webhook operations
 * @param context - The IHookFunctions context
 * @returns Object containing baseUrl and accessToken
 */
export async function getWebhookAuth(context: IHookFunctions): Promise<{ baseUrl: string; accessToken: string }> {
	const credentials = await context.getCredentials('billingboothoneApi');
	const baseUrl = cleanBaseUrl(String(credentials.baseUrl || 'https://api.billingbooth.app'));

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

	const accessToken = tokenResponse?.token as string;

	return { baseUrl, accessToken };
}

/**
 * Build subscriptions object for webhook endpoint
 * @param events - Array of event type strings to enable (e.g., ['subscription_invoices', 'subscription_payments'])
 * @returns Object with all event types as keys and boolean values indicating if they're enabled
 */
function buildSubscriptions(events: string[]): Record<string, boolean> {
	const allEvents = [
		'subscription_invoices',
		'subscription_payments',
		'subscription_mandates',
		'subscription_customers',
		'subscription_ledger',
		'subscription_audit',
		'subscription_credit_notes',
	];

	const subscriptions: Record<string, boolean> = {};

	for (const event of allEvents) {
		subscriptions[event] = events.includes(event);
	}

	return subscriptions;
}

export async function createWebhookEndpoint(
	httpRequest: Function,
	baseUrl: string,
	accessToken: string,
	webhookUrl: string,
	events: string[],
): Promise<WebhookEndpointResponse> {
	const subscriptions = buildSubscriptions(events);
	const payload: WebhookEndpointCreatePayload = {
		url: webhookUrl,
		...subscriptions,
		is_enabled: true,
	} as WebhookEndpointCreatePayload;

	const options: IHttpRequestOptions = {
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
	return response as WebhookEndpointResponse;
}

/**
 * Check if a webhook endpoint exists in BillingBoothOne
 * @param httpRequest - n8n's HTTP request function
 * @param baseUrl - The API base URL
 * @param accessToken - The access token for authentication
 * @param webhookId - The webhook endpoint ID
 */
export async function checkWebhookExists(
	httpRequest: Function,
	baseUrl: string,
	accessToken: string,
	webhookId: number,
): Promise<boolean> {
	if (!webhookId) {
		return false;
	}

	try {
		const options: IHttpRequestOptions = {
			method: 'GET',
			url: `${baseUrl}/webhooks/endpoint/${webhookId}`,
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			},
			json: true,
		};

		await httpRequest(options);
		return true;
	} catch (error) {
		// 404 means webhook doesn't exist
		return false;
	}
}

/**
 * Delete a webhook endpoint from BillingBoothOne
 * @param httpRequest - n8n's HTTP request function
 * @param baseUrl - The API base URL
 * @param accessToken - The access token for authentication
 * @param webhookId - The webhook endpoint ID to delete
 */
export async function deleteWebhookEndpoint(
	httpRequest: Function,
	baseUrl: string,
	accessToken: string,
	webhookId: number,
): Promise<void> {
	if (!webhookId) {
		return;
	}

	try {
		const options: IHttpRequestOptions = {
			method: 'DELETE',
			url: `${baseUrl}/webhooks/endpoint/${webhookId}`,
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			},
			json: true,
		};

		await httpRequest(options);
	} catch (error) {
		// Ignore errors on delete (webhook might already be deleted)
	}
}
