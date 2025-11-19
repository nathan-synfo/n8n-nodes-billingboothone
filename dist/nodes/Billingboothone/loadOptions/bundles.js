"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundles = getBundles;
const helpers_1 = require("./helpers");
async function getBundles() {
    try {
        const { baseUrl, accessToken, helpers } = await (0, helpers_1.getAuthenticatedContext)(this);
        let allBundles = [];
        let offset = 0;
        const limit = 100;
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
            if (!response) {
                console.warn('No bundle data returned from API');
                break;
            }
            let bundles;
            if (response.data && Array.isArray(response.data)) {
                bundles = response.data;
                allBundles = allBundles.concat(bundles);
                if (bundles.length < limit) {
                    hasMore = false;
                }
                else {
                    offset += limit;
                }
            }
            else if (Array.isArray(response)) {
                allBundles = response;
                hasMore = false;
            }
            else {
                allBundles = [response];
                hasMore = false;
            }
        }
        console.log(`Found ${allBundles.length} total bundles`);
        const options = allBundles.map((bundle) => ({
            name: bundle.name || `Bundle ${bundle.id}`,
            value: bundle.id,
            description: bundle.description,
        }));
        return options;
    }
    catch (error) {
        console.error('Error loading bundles:', error);
        return [];
    }
}
//# sourceMappingURL=bundles.js.map