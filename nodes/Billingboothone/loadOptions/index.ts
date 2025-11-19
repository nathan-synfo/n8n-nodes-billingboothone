import { getCustomers } from './customers';
import { getBundles } from './bundles';

/**
 * Load options methods for the Billing Booth One node
 * These methods are called by n8n to populate dropdown fields dynamically
 */
export const loadOptionsMethods = {
	loadOptions: {
		getCustomers,
		getBundles,
		// Add more load options as needed
	},
};

/**
 * Type-safe method registry for load options
 * Useful for ensuring correct method names in property definitions
 */
export type LoadOptionsMethod = keyof typeof loadOptionsMethods.loadOptions;
