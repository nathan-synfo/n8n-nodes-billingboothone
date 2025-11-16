/**
 * Webhook-specific TypeScript interfaces and types
 */

/**
 * Event subscription types for BillingBoothOne webhooks
 */
export interface WebhookSubscriptions {
	subscription_invoices?: boolean;
	subscription_payments?: boolean;
	subscription_mandates?: boolean;
	subscription_customers?: boolean;
	subscription_ledger?: boolean;
	subscription_audit?: boolean;
	subscription_credit_notes?: boolean;
}

/**
 * Static data stored in workflow for webhook management
 */
export interface WebhookStaticData {
	webhookId?: number;
	secret?: string;
	events?: string[];
}

/**
 * Payload sent to BillingBoothOne API when creating a webhook endpoint
 */
export interface WebhookEndpointCreatePayload {
	url: string;
	subscription_invoices: boolean;
	subscription_payments: boolean;
	subscription_mandates: boolean;
	subscription_customers: boolean;
	subscription_ledger: boolean;
	subscription_audit: boolean;
	subscription_credit_notes: boolean;
	is_enabled: boolean;
}

/**
 * Response from BillingBoothOne API when creating a webhook endpoint
 */
export interface WebhookEndpointResponse {
	id: number;
	url: string;
	secret?: string;
	subscription_invoices: boolean;
	subscription_payments: boolean;
	subscription_mandates: boolean;
	subscription_customers: boolean;
	subscription_ledger: boolean;
	subscription_audit: boolean;
	subscription_credit_notes: boolean;
	is_enabled: boolean;
}