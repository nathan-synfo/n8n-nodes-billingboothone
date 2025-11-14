import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';

/**
 * Token cache to avoid unnecessary authentication requests
 * Key format: email_baseUrl
 * Tokens are cached for 55 minutes (API tokens expire after 60 minutes)
 */
const tokenCache = new Map<string, { token: string; expires: number }>();

/**
 * Fetch and cache access token for Billing Booth One API
 * Automatically handles token caching and refresh
 */
export async function getAccessToken(context: IExecuteFunctions): Promise<string> {
	const credentials = await context.getCredentials('billingboothoneApi');
	let baseUrl = String(credentials.baseUrl || 'https://api.billingbooth.app');

	// Clean the base URL
	baseUrl = baseUrl.trim().replace(/[=/\s]+$/, '');
	if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
		baseUrl = 'https://' + baseUrl;
	}

	const cacheKey = `${credentials.email}_${baseUrl}`;

	// Return cached token if still valid
	const cached = tokenCache.get(cacheKey);
	if (cached && cached.expires > Date.now()) {
		return cached.token;
	}

	// Fetch new token from API
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

	if (!tokenResponse?.token) {
		throw new NodeOperationError(
			context.getNode(),
			`Failed to fetch access token. Response: ${JSON.stringify(tokenResponse)}`,
		);
	}

	// Cache the token for 55 minutes (API tokens expire after 60 minutes)
	tokenCache.set(cacheKey, {
		token: tokenResponse.token,
		expires: Date.now() + 55 * 60 * 1000,
	});

	return tokenResponse.token;
}

/**
 * Clean and normalize base URL
 */
export function cleanBaseUrl(baseUrl: string): string {
	baseUrl = baseUrl.trim().replace(/[=/\s]+$/, '');

	if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
		baseUrl = 'https://' + baseUrl;
	}

	return baseUrl;
}
