import { ILoadOptionsFunctions } from 'n8n-workflow';
import { cleanBaseUrl } from '../utils';

/**
 * Authenticated context for load options
 */
export interface AuthenticatedContext {
	baseUrl: string;
	accessToken: string;
	helpers: ILoadOptionsFunctions['helpers'];
}

/**
 * Get authenticated context for making API requests in load options
 * Handles credential retrieval and token authentication
 */
export async function getAuthenticatedContext(
	context: ILoadOptionsFunctions,
): Promise<AuthenticatedContext> {
	try {
		const credentials = await context.getCredentials('billingboothoneApi');
		const baseUrl = cleanBaseUrl(String(credentials.baseUrl || 'https://api.billingbooth.app'));

		console.log('Authenticating with Billing Booth One API...');

		// Get access token
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
	} catch (error) {
		console.error('Authentication error:', error);
		throw error;
	}
}
