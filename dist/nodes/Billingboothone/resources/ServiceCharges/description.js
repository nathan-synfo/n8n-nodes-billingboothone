"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceChargesFields = void 0;
exports.ServiceChargesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Charges"
                ]
            }
        },
        "options": [
            {
                "name": "Get Cli Orphans",
                "value": "Get Cli Orphans",
                "action": "Get orphan CLIs",
                "description": "Gets a list of orphan CLIs",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"serviceFileId\"]}}/charges/orphan/cli"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /servicefile/{serviceFileId}/charges/orphan/cli",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Charges"
                ],
                "operation": [
                    "Get Cli Orphans"
                ]
            }
        }
    },
    {
        "displayName": "Service File Id",
        "name": "serviceFileId",
        "required": true,
        "description": "Service file unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Charges"
                ],
                "operation": [
                    "Get Cli Orphans"
                ]
            }
        }
    }
];
//# sourceMappingURL=description.js.map