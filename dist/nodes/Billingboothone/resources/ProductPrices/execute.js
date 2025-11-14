"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeProductPricesOperation = executeProductPricesOperation;
async function executeProductPricesOperation() {
    const items = this.getInputData();
    const returnData = [];
    for (let i = 0; i < items.length; i++) {
        returnData.push({
            json: items[i].json,
            pairedItem: { item: i }
        });
    }
    return returnData;
}
//# sourceMappingURL=execute.js.map