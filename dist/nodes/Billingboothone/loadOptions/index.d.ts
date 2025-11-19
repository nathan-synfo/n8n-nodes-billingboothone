import { getCustomers } from './customers';
import { getBundles } from './bundles';
export declare const loadOptionsMethods: {
    loadOptions: {
        getCustomers: typeof getCustomers;
        getBundles: typeof getBundles;
    };
};
export type LoadOptionsMethod = keyof typeof loadOptionsMethods.loadOptions;
