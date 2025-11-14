"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFields = void 0;
exports.ProductFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Product"
                ]
            }
        },
        "options": [
            {
                "name": "Get Product Pricing Report",
                "value": "Get Product Pricing Report",
                "action": "Get product pricing report",
                "description": "Gets all active product pricing report",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/product/pricing"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /analytics/product/pricing",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Product"
                ],
                "operation": [
                    "Get Product Pricing Report"
                ]
            }
        }
    }
];
//# sourceMappingURL=description.js.map