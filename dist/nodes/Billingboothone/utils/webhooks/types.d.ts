export interface WebhookSubscriptions {
    subscription_invoices?: boolean;
    subscription_payments?: boolean;
    subscription_mandates?: boolean;
    subscription_customers?: boolean;
    subscription_ledger?: boolean;
    subscription_audit?: boolean;
    subscription_credit_notes?: boolean;
}
export interface WebhookStaticData {
    webhookId?: number;
    secret?: string;
    events?: string[];
}
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
