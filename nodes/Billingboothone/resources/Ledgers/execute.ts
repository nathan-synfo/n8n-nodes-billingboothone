import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

/**
 * Execute Ledgers operations
 */
export async function executeLedgersOperation(
    this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    // The operation routing is handled by the routing configuration in description.ts
    // This function is called by the main node after routing determines this resource should execute

    // For now, we return the items as-is since routing is declarative
    // Custom logic can be added here if needed for specific operations

    for (let i = 0; i < items.length; i++) {
        returnData.push({
            json: items[i].json,
            pairedItem: { item: i }
        });
    }

    return returnData;
}
