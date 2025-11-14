"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFields = void 0;
exports.HomeFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Home"
                ]
            }
        },
        "options": [
            {
                "name": "GET /",
                "value": "GET -",
                "action": "GET /",
                "description": "",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Home"
                ],
                "operation": [
                    "GET /"
                ]
            }
        }
    }
];
//# sourceMappingURL=description.js.map