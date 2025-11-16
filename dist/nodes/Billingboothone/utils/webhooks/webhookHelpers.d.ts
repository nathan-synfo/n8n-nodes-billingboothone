import type { IHookFunctions } from 'n8n-workflow';
import type { WebhookEndpointResponse } from './types';
export declare function getWebhookAuth(context: IHookFunctions): Promise<{
    baseUrl: string;
    accessToken: string;
}>;
export declare function createWebhookEndpoint(httpRequest: Function, baseUrl: string, accessToken: string, webhookUrl: string, events: string[]): Promise<WebhookEndpointResponse>;
export declare function checkWebhookExists(httpRequest: Function, baseUrl: string, accessToken: string, webhookId: number): Promise<boolean>;
export declare function deleteWebhookEndpoint(httpRequest: Function, baseUrl: string, accessToken: string, webhookId: number): Promise<void>;
