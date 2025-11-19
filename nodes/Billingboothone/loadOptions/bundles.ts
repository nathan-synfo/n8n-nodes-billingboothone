import { ILoadOptionsFunctions, INodePropertyOptions, IDataObject } from 'n8n-workflow';
import { getAuthenticatedContext } from './helpers';

/**
 * Load all bundles from the API for dropdown display
 * Fetches bundles with pagination support
 */
export async function getBundles(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const { baseUrl, accessToken, helpers } = await getAuthenticatedContext(this);

		// Fetch all bundles with pagination
		let allBundles: IDataObject[] = [];
		let offset = 0;
		const limit = 100; // Fetch in batches of 100
		let hasMore = true;

		while (hasMore) {
			const response = await helpers.httpRequest({
				method: 'GET',
				url: `${baseUrl}/bundle?limit=${limit}&offset=${offset}`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
				json: true,
			});

			// Handle empty or null response
			if (!response) {
				console.warn('No bundle data returned from API');
				break;
			}

			// Extract bundles array from paginated response
			let bundles: IDataObject[];

			if (response.data && Array.isArray(response.data)) {
				// Paginated response - API returns: { limit, offset, count, data: [...] }
				bundles = response.data as IDataObject[];

				// Add to all bundles
				allBundles = allBundles.concat(bundles);

				// Check if we have more pages
				// If we got less than the limit, we're on the last page
				if (bundles.length < limit) {
					hasMore = false;
				} else {
					offset += limit;
				}
			} else if (Array.isArray(response)) {
				// Direct array response (no pagination)
				allBundles = response;
				hasMore = false;
			} else {
				// Single bundle object
				allBundles = [response as IDataObject];
				hasMore = false;
			}
		}

		console.log(`Found ${allBundles.length} total bundles`);

		const options = allBundles.map((bundle: IDataObject) => ({
			name: (bundle.name as string) || `Bundle ${bundle.id}`, // What user sees in dropdown
			value: bundle.id as number, // What gets sent to the API
			description: bundle.description as string, // Optional: shows under the name
		}));

		return options;
	} catch (error) {
		console.error('Error loading bundles:', error);
		return [];
	}
}
