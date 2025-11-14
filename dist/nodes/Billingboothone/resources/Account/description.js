"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountFields = void 0;
exports.AccountFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Account"
                ]
            }
        },
        "options": [
            {
                "name": "Get Entities Count",
                "value": "Get Entities Count",
                "action": "Get account analytics",
                "description": "Retrieves",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/account"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /analytics/account",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Account"
                ],
                "operation": [
                    "Get Entities Count"
                ]
            }
        }
    }
];
//# sourceMappingURL=description.js.map