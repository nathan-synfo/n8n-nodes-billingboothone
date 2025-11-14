"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeMetadataOperation = executeMetadataOperation;
async function executeMetadataOperation() {
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