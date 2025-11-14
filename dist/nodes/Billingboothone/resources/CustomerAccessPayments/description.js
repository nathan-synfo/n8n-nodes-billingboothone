"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAccessPaymentsFields = void 0;
exports.CustomerAccessPaymentsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ]
            }
        },
        "options": [
            {
                "name": "Get Customer Access Payment Providers",
                "value": "Get Customer Access Payment Providers",
                "action": "Get Payment Providers",
                "description": "Retrieves all configured payment providers for customer access",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/payments"
                    }
                }
            },
            {
                "name": "Update Customer Access Payment Providers",
                "value": "Update Customer Access Payment Providers",
                "action": "Update Payment Provider",
                "description": "Update payment provider configuration for use in customer access ",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/payments"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /settings/access/{organisationId}/payments",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Get Customer Access Payment Providers"
                ]
            }
        }
    },
    {
        "displayName": "PUT /settings/access/{organisationId}/payments",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Update Customer Access Payment Providers"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Get Customer Access Payment Providers"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Update Customer Access Payment Providers"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings unique identified",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Update Customer Access Payment Providers"
                ]
            }
        }
    },
    {
        "displayName": "Additional Body Fields",
        "name": "bodyOptions",
        "type": "collection",
        "placeholder": "Add Field",
        "default": {},
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Access Payments"
                ],
                "operation": [
                    "Update Customer Access Payment Providers"
                ]
            }
        },
        "options": [
            {
                "displayName": "Allow Method Setup",
                "name": "allow_method_setup",
                "type": "boolean",
                "default": true,
                "description": "Allow customers to set up a regular payment method",
                "routing": {
                    "send": {
                        "property": "allow_method_setup",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Allow Invoice Settlement",
                "name": "allow_invoice_settlement",
                "type": "boolean",
                "default": true,
                "description": "Allow customers to pay outstanding invoices with one-off payments",
                "routing": {
                    "send": {
                        "property": "allow_invoice_settlement",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            }
        ]
    }
];
//# sourceMappingURL=description.js.map