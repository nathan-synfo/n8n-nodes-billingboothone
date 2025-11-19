import { ILoadOptionsFunctions, INodePropertyOptions, IDataObject } from 'n8n-workflow';
import { getAuthenticatedContext } from './helpers';

/**
 * Fetch all customers for dropdown selection
 * Returns customer names with IDs as values
 */
export async function getCustomers(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const { baseUrl, accessToken, helpers } = await getAuthenticatedContext(this);

		// Fetch all customers with pagination
		let allCustomers: IDataObject[] = [];
		let offset = 0;
		const limit = 100;
		let hasMore = true;

		while (hasMore) {
			const response = await helpers.httpRequest({
				method: 'GET',
				url: `${baseUrl}/customer?limit=${limit}&offset=${offset}`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
				json: true,
			});

			// Handle empty or null response
			if (!response) {
				console.warn('No customer data returned from API');
				break;
			}

			// Extract customers array from paginated response
			let customers: IDataObject[];

			if (response.data && Array.isArray(response.data)) {
				// Paginated response - API returns: { limit, offset, count, data: [...] }
				customers = response.data as IDataObject[];

				// Add to all customers
				allCustomers = allCustomers.concat(customers);

				// Check if we have more pages
				// If we got less than the limit, we're on the last page
				if (customers.length < limit) {
					hasMore = false;
				} else {
					offset += limit;
				}
			} else if (Array.isArray(response)) {
				// Direct array response (no pagination)
				allCustomers = response;
				hasMore = false;
			} else {
				// Single customer object
				allCustomers = [response as IDataObject];
				hasMore = false;
			}
		}

		console.log(`Found ${allCustomers.length} total customers`);

		const options = allCustomers.map((customer: IDataObject) => ({
			name: (customer.name as string) || `Customer ${customer.id}`, // What user sees in dropdown
			value: customer.id as number, // What gets sent to the API
			description: customer.email as string, // Optional: shows under the name
		}));

		return options;
	} catch (error) {
		console.error('Error loading customers:', error);
		// Return empty array instead of throwing - n8n will show "No data"
		return [];
	}
}
