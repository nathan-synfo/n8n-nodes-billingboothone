"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEntryFields = void 0;
exports.AuditEntryFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Audit Entry"
                ]
            }
        },
        "options": [
            {
                "name": "Get Audit Entry",
                "value": "Get Audit Entry",
                "action": "Get all audit entry",
                "description": "Gets all audit entries",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/audit"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /audit",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Audit Entry"
                ],
                "operation": [
                    "Get Audit Entry"
                ]
            }
        }
    },
    {
        "displayName": "Additional Fields",
        "name": "options",
        "type": "collection",
        "placeholder": "Add Field",
        "default": {},
        "displayOptions": {
            "show": {
                "resource": [
                    "Audit Entry"
                ],
                "operation": [
                    "Get Audit Entry"
                ]
            }
        },
        "options": [
            {
                "displayName": "Limit",
                "name": "limit",
                "description": "Maximum number of entries to return",
                "default": 10,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "limit",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Offset",
                "name": "offset",
                "description": "Starting offset",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "offset",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "From",
                "name": "from",
                "description": "Filter by `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "To",
                "name": "to",
                "description": "Filter by `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Category",
                "name": "category",
                "description": "Filter by `category`",
                "default": "autoCollection",
                "type": "options",
                "options": [
                    {
                        "name": "Auto Collection",
                        "value": "autoCollection"
                    },
                    {
                        "name": "Billing",
                        "value": "billing"
                    },
                    {
                        "name": "Bundles",
                        "value": "bundles"
                    },
                    {
                        "name": "Category",
                        "value": "category"
                    },
                    {
                        "name": "Cdr",
                        "value": "cdr"
                    },
                    {
                        "name": "Charge",
                        "value": "charge"
                    },
                    {
                        "name": "Cli",
                        "value": "cli"
                    },
                    {
                        "name": "Commission",
                        "value": "commission"
                    },
                    {
                        "name": "Cost Centre",
                        "value": "costCentre"
                    },
                    {
                        "name": "Customer",
                        "value": "customer"
                    },
                    {
                        "name": "Customer Group",
                        "value": "customerGroup"
                    },
                    {
                        "name": "Destination",
                        "value": "destination"
                    },
                    {
                        "name": "Destination Group",
                        "value": "destinationGroup"
                    },
                    {
                        "name": "Invoice",
                        "value": "invoice"
                    },
                    {
                        "name": "Ledger",
                        "value": "ledger"
                    },
                    {
                        "name": "Payment Mandate",
                        "value": "paymentMandate"
                    },
                    {
                        "name": "Payments",
                        "value": "payments"
                    },
                    {
                        "name": "Price Adjustments",
                        "value": "priceAdjustments"
                    },
                    {
                        "name": "Product",
                        "value": "product"
                    },
                    {
                        "name": "Role",
                        "value": "role"
                    },
                    {
                        "name": "Service File",
                        "value": "serviceFile"
                    },
                    {
                        "name": "Settings",
                        "value": "settings"
                    },
                    {
                        "name": "Supplier",
                        "value": "supplier"
                    },
                    {
                        "name": "Tag",
                        "value": "tag"
                    },
                    {
                        "name": "Tariff",
                        "value": "tariff"
                    },
                    {
                        "name": "Time Schedule",
                        "value": "timeSchedule"
                    },
                    {
                        "name": "User",
                        "value": "user"
                    },
                    {
                        "name": "Credit Note",
                        "value": "creditNote"
                    },
                    {
                        "name": "Ledger Entry Type",
                        "value": "ledgerEntryType"
                    },
                    {
                        "name": "Notes",
                        "value": "notes"
                    },
                    {
                        "name": "Customer Access User",
                        "value": "customerAccessUser"
                    },
                    {
                        "name": "Contact",
                        "value": "contact"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "category",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "User Id",
                "name": "user_id",
                "description": "Filter by `user_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "user_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Customer Id",
                "name": "customer_id",
                "description": "Filter by `customer_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customer_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: date_time, -date_time",
                "default": "-date_time",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "sort",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            }
        ]
    }
];
//# sourceMappingURL=description.js.map