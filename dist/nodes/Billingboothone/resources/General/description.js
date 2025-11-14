"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralFields = void 0;
exports.GeneralFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ]
            }
        },
        "options": [
            {
                "name": "Get General Settings",
                "value": "Get General Settings",
                "action": "Get General Settings",
                "description": "Retrieves the general settings",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/settings/general"
                    }
                }
            },
            {
                "name": "Update General Settings",
                "value": "Update General Settings",
                "action": "Update General Settings",
                "description": "Update the general settings",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/settings/general"
                    }
                }
            },
            {
                "name": "Test Invoice Reference Code",
                "value": "Test Invoice Reference Code",
                "action": "Test Invoice Reference Code",
                "description": "Test code for generating an invoice reference",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/settings/general/test"
                    }
                }
            },
            {
                "name": "Get Ledger Settings",
                "value": "Get Ledger Settings",
                "action": "Get Ledger Settings",
                "description": "Retrieves the ledger settings",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/ledger/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            },
            {
                "name": "Update Ledger Settings",
                "value": "Update Ledger Settings",
                "action": "Update Ledger Settings",
                "description": "Update the ledger settings",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/ledger/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /settings/general",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ],
                "operation": [
                    "Get General Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /settings/general",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ],
                "operation": [
                    "Update General Settings"
                ]
            }
        }
    },
    {
        "displayName": "POST /settings/general/test",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ],
                "operation": [
                    "Test Invoice Reference Code"
                ]
            }
        }
    },
    {
        "displayName": "GET /ledger/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ],
                "operation": [
                    "Get Ledger Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /ledger/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "General"
                ],
                "operation": [
                    "Update Ledger Settings"
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
                    "General"
                ],
                "operation": [
                    "Get Ledger Settings"
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
                    "General"
                ],
                "operation": [
                    "Update Ledger Settings"
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
                    "General"
                ],
                "operation": [
                    "Update General Settings"
                ]
            }
        },
        "options": [
            {
                "displayName": "Suppress Delivery",
                "name": "suppress_delivery",
                "type": "boolean",
                "default": true,
                "description": "Suppress delivery of invoice emails when performing a billing run",
                "routing": {
                    "send": {
                        "property": "suppress_delivery",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Suppress Integrations",
                "name": "suppress_integrations",
                "type": "boolean",
                "default": true,
                "description": "Suppress execution of integrations when performing a billing run",
                "routing": {
                    "send": {
                        "property": "suppress_integrations",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Include Old Unbilled Charges",
                "name": "include_old_unbilled_charges",
                "type": "boolean",
                "default": true,
                "description": "If true, charges from previous billing periods that have not yet been billed will also be included in billing runs",
                "routing": {
                    "send": {
                        "property": "include_old_unbilled_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Last Day Adjustment",
                "name": "use_last_day_adjustment",
                "type": "boolean",
                "default": true,
                "description": "If true, the platform will utilise last-day adjustment for charges that start on the 29th, 30th or 31st of any given month",
                "routing": {
                    "send": {
                        "property": "use_last_day_adjustment",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Custom Invoice Reference",
                "name": "use_custom_invoice_reference",
                "type": "boolean",
                "default": true,
                "description": "If true, a custom bit of code will be used to generate the invoice reference rather than use sequential numbers",
                "routing": {
                    "send": {
                        "property": "use_custom_invoice_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Invoice Reference Code",
                "name": "custom_invoice_reference_code",
                "type": "string",
                "default": "",
                "description": "Invoice reference generation code",
                "routing": {
                    "send": {
                        "property": "custom_invoice_reference_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Daily Digest",
                "name": "daily_digest",
                "type": "boolean",
                "default": true,
                "description": "If true, daily digest emails will be sent",
                "routing": {
                    "send": {
                        "property": "daily_digest",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Weekly Digest",
                "name": "weekly_digest",
                "type": "boolean",
                "default": true,
                "description": "If true, weekly digest emails will be sent",
                "routing": {
                    "send": {
                        "property": "weekly_digest",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Monthly Digest",
                "name": "monthly_digest",
                "type": "boolean",
                "default": true,
                "description": "If true, monthly digest emails will be sent",
                "routing": {
                    "send": {
                        "property": "monthly_digest",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            }
        ]
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
                    "General"
                ],
                "operation": [
                    "Test Invoice Reference Code"
                ]
            }
        },
        "options": [
            {
                "displayName": "Code",
                "name": "code",
                "type": "string",
                "default": "",
                "routing": {
                    "send": {
                        "property": "code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            }
        ]
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
                    "General"
                ],
                "operation": [
                    "Update Ledger Settings"
                ]
            }
        },
        "options": [
            {
                "displayName": "Invoices Use Previous Balance",
                "name": "invoices_use_previous_balance",
                "type": "boolean",
                "default": true,
                "description": "If true, invoices will show previous balance, payments received and total outstanding balance based on the customers running balance.",
                "routing": {
                    "send": {
                        "property": "invoices_use_previous_balance",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Payments Use Previous Balance",
                "name": "payments_use_previous_balance",
                "type": "boolean",
                "default": true,
                "description": "If true, payments will take into account any previous balances as well as current invoice balance when determining amount outstanding.",
                "routing": {
                    "send": {
                        "property": "payments_use_previous_balance",
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