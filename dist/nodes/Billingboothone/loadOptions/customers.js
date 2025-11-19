"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomers = getCustomers;
const helpers_1 = require("./helpers");
async function getCustomers() {
    try {
        const { baseUrl, accessToken, helpers } = await (0, helpers_1.getAuthenticatedContext)(this);
        let allCustomers = [];
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
            if (!response) {
                console.warn('No customer data returned from API');
                break;
            }
            let customers;
            if (response.data && Array.isArray(response.data)) {
                customers = response.data;
                allCustomers = allCustomers.concat(customers);
                if (customers.length < limit) {
                    hasMore = false;
                }
                else {
                    offset += limit;
                }
            }
            else if (Array.isArray(response)) {
                allCustomers = response;
                hasMore = false;
            }
            else {
                allCustomers = [response];
                hasMore = false;
            }
        }
        console.log(`Found ${allCustomers.length} total customers`);
        const options = allCustomers.map((customer) => ({
            name: customer.name || `Customer ${customer.id}`,
            value: customer.id,
            description: customer.email,
        }));
        return options;
    }
    catch (error) {
        console.error('Error loading customers:', error);
        return [];
    }
}
//# sourceMappingURL=customers.js.map