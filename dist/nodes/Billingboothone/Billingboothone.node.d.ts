import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class Billingboothone implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getCustomers: typeof import("./loadOptions/customers").getCustomers;
            getBundles: typeof import("./loadOptions/bundles").getBundles;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
