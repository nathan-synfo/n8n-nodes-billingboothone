"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsFields = void 0;
exports.IntegrationsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Integrations",
                "value": "Get All Integrations",
                "action": "Get all integrations",
                "description": "Retrieves a list of all integration plugins on the account.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/integrations"
                    }
                }
            },
            {
                "name": "Add Integration",
                "value": "Add Integration",
                "action": "Add integration",
                "description": "Add a new integration plugin on the account.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/integrations"
                    }
                }
            },
            {
                "name": "Remove Multiple Integrations",
                "value": "Remove Multiple Integrations",
                "action": "Remove multiple integrations",
                "description": "Removes all integrations with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/integrations"
                    }
                }
            },
            {
                "name": "Get Integration",
                "value": "Get Integration",
                "action": "Get a single integration",
                "description": "Retrieves a single integration.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/integrations/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Integration",
                "value": "Update Integration",
                "action": "Update integration",
                "description": "Updates an existing integration.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/integrations/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Remove Integration",
                "value": "Remove Integration",
                "action": "Remove integration",
                "description": "Removes an existing integration.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/integrations/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Build Integration O Auth Url",
                "value": "Build Integration O Auth Url",
                "action": "Build OAuth URL",
                "description": "Builds a new OAuth URL for the specified integration.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/integrations/oauth/build"
                    }
                }
            },
            {
                "name": "Verify Integration",
                "value": "Verify Integration",
                "action": "Verify integration status",
                "description": "Checks the connected status of a connector integration",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/integrations/{{$parameter[\"id\"]}}/verify"
                    }
                }
            },
            {
                "name": "Accounting Codes",
                "value": "Accounting Codes",
                "action": "Get accounting Codes",
                "description": "Returns a list of nominal accounts for a specified integration plugin",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/integrations/{{$parameter[\"id\"]}}/codes"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /integrations",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Get All Integrations"
                ]
            }
        }
    },
    {
        "displayName": "POST /integrations",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Add Integration"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /integrations",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Remove Multiple Integrations"
                ]
            }
        }
    },
    {
        "displayName": "GET /integrations/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Get Integration"
                ]
            }
        }
    },
    {
        "displayName": "PUT /integrations/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Update Integration"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /integrations/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Remove Integration"
                ]
            }
        }
    },
    {
        "displayName": "POST /integrations/oauth/build",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Build Integration O Auth Url"
                ]
            }
        }
    },
    {
        "displayName": "GET /integrations/{id}/verify",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Verify Integration"
                ]
            }
        }
    },
    {
        "displayName": "GET /integrations/{id}/codes",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Accounting Codes"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Get Integration"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Update Integration"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Remove Integration"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Verify Integration"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Accounting Codes"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Name",
        "name": "name",
        "type": "options",
        "default": "xero",
        "options": [
            {
                "name": "Xero",
                "value": "xero"
            },
            {
                "name": "Sage",
                "value": "sage"
            },
            {
                "name": "Kashflow",
                "value": "kashflow"
            },
            {
                "name": "Quickfile",
                "value": "quickfile"
            },
            {
                "name": "Xero Offline",
                "value": "xeroOffline"
            },
            {
                "name": "Quick Books Desktop",
                "value": "quickBooksDesktop"
            },
            {
                "name": "Quick Books Cloud",
                "value": "quickBooksCloud"
            },
            {
                "name": "Q 360",
                "value": "q360"
            },
            {
                "name": "Adept Sage",
                "value": "adeptSage"
            },
            {
                "name": "Clear Books",
                "value": "clearBooks"
            },
            {
                "name": "Access Pay Suite",
                "value": "accessPaySuite"
            },
            {
                "name": "Sage 200",
                "value": "sage200"
            },
            {
                "name": "Sage 50",
                "value": "sage50"
            },
            {
                "name": "Sage Intacct",
                "value": "sageIntacct"
            }
        ],
        "routing": {
            "send": {
                "property": "name",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Add Integration"
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
                    "Integrations"
                ],
                "operation": [
                    "Add Integration"
                ]
            }
        },
        "options": [
            {
                "displayName": "Description",
                "name": "description",
                "type": "string",
                "default": "",
                "description": "Optional friendly description of the integration, useful if multiple app integrations of the same app are added and need to be differentiated",
                "routing": {
                    "send": {
                        "property": "description",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "O Auth Token",
                "name": "o_auth_token",
                "type": "string",
                "default": "",
                "description": "OAuth code/token, if required",
                "routing": {
                    "send": {
                        "property": "o_auth_token",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "O Auth Tenant",
                "name": "o_auth_tenant",
                "type": "string",
                "default": "",
                "description": "OAuth tenant, if required",
                "routing": {
                    "send": {
                        "property": "o_auth_tenant",
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
                    "Integrations"
                ],
                "operation": [
                    "Remove Multiple Integrations"
                ]
            }
        },
        "options": [
            {
                "displayName": "Id",
                "name": "id",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of unique identifiers",
                "routing": {
                    "send": {
                        "property": "id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            }
        ]
    },
    {
        "required": true,
        "displayName": "Mode",
        "name": "mode",
        "type": "options",
        "default": "automatic",
        "options": [
            {
                "name": "Automatic",
                "value": "automatic"
            },
            {
                "name": "Manual",
                "value": "manual"
            }
        ],
        "routing": {
            "send": {
                "property": "mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Integrations"
                ],
                "operation": [
                    "Update Integration"
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
                    "Integrations"
                ],
                "operation": [
                    "Update Integration"
                ]
            }
        },
        "options": [
            {
                "displayName": "Id",
                "name": "id",
                "type": "number",
                "default": 0,
                "description": "Unique identifier",
                "routing": {
                    "send": {
                        "property": "id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Name",
                "name": "name",
                "type": "options",
                "default": "xero",
                "options": [
                    {
                        "name": "Xero",
                        "value": "xero"
                    },
                    {
                        "name": "Sage",
                        "value": "sage"
                    },
                    {
                        "name": "Kashflow",
                        "value": "kashflow"
                    },
                    {
                        "name": "Quickfile",
                        "value": "quickfile"
                    },
                    {
                        "name": "Xero Offline",
                        "value": "xeroOffline"
                    },
                    {
                        "name": "Quick Books Desktop",
                        "value": "quickBooksDesktop"
                    },
                    {
                        "name": "Quick Books Cloud",
                        "value": "quickBooksCloud"
                    },
                    {
                        "name": "Q 360",
                        "value": "q360"
                    },
                    {
                        "name": "Adept Sage",
                        "value": "adeptSage"
                    },
                    {
                        "name": "Clear Books",
                        "value": "clearBooks"
                    },
                    {
                        "name": "Access Pay Suite",
                        "value": "accessPaySuite"
                    },
                    {
                        "name": "Sage 200",
                        "value": "sage200"
                    },
                    {
                        "name": "Sage 50",
                        "value": "sage50"
                    },
                    {
                        "name": "Sage Intacct",
                        "value": "sageIntacct"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Description",
                "name": "description",
                "type": "string",
                "default": "",
                "description": "Optional friendly description of the integration, useful if multiple app integrations of the same app are added and need to be differentiated",
                "routing": {
                    "send": {
                        "property": "description",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Integration Type",
                "name": "integration_type",
                "type": "options",
                "default": "connector",
                "options": [
                    {
                        "name": "Connector",
                        "value": "connector"
                    },
                    {
                        "name": "Exporter",
                        "value": "exporter"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "integration_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supports Invoices",
                "name": "supports_invoices",
                "type": "boolean",
                "default": true,
                "description": "Plugin supports invoice operations",
                "routing": {
                    "send": {
                        "property": "supports_invoices",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supports Customers",
                "name": "supports_customers",
                "type": "boolean",
                "default": true,
                "description": "Plugin supports customer operations",
                "routing": {
                    "send": {
                        "property": "supports_customers",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Status",
                "name": "status",
                "type": "options",
                "default": "connected",
                "options": [
                    {
                        "name": "Connected",
                        "value": "connected"
                    },
                    {
                        "name": "Disconnected",
                        "value": "disconnected"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "status",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Push Invoices",
                "name": "push_invoices",
                "type": "boolean",
                "default": true,
                "description": "When `integration_mode` is `automatic`, push invoices if supported",
                "routing": {
                    "send": {
                        "property": "push_invoices",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Reference",
                "name": "invoice_reference",
                "type": "string",
                "default": "",
                "description": "Custom invoice reference if available",
                "routing": {
                    "send": {
                        "property": "invoice_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Push Invoice Binary",
                "name": "push_invoice_binary",
                "type": "boolean",
                "default": true,
                "description": "If `push_invoices` is true, push the invoice PDF binary",
                "routing": {
                    "send": {
                        "property": "push_invoice_binary",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Push Attachments",
                "name": "push_attachments",
                "type": "boolean",
                "default": true,
                "description": "If `push_invoices` is true, push the attachment binaries",
                "routing": {
                    "send": {
                        "property": "push_attachments",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Push Customers",
                "name": "push_customers",
                "type": "boolean",
                "default": true,
                "description": "When `integration_mode` is `automatic`, push customers if supported",
                "routing": {
                    "send": {
                        "property": "push_customers",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Metadata",
                "name": "metadata",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Plugin metadata, contains implementation-specific settings",
                "routing": {
                    "send": {
                        "property": "metadata",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
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
                    "Integrations"
                ],
                "operation": [
                    "Build Integration O Auth Url"
                ]
            }
        },
        "options": [
            {
                "displayName": "Name",
                "name": "name",
                "type": "options",
                "default": "xero",
                "options": [
                    {
                        "name": "Xero",
                        "value": "xero"
                    },
                    {
                        "name": "Sage",
                        "value": "sage"
                    },
                    {
                        "name": "Kashflow",
                        "value": "kashflow"
                    },
                    {
                        "name": "Quickfile",
                        "value": "quickfile"
                    },
                    {
                        "name": "Xero Offline",
                        "value": "xeroOffline"
                    },
                    {
                        "name": "Quick Books Desktop",
                        "value": "quickBooksDesktop"
                    },
                    {
                        "name": "Quick Books Cloud",
                        "value": "quickBooksCloud"
                    },
                    {
                        "name": "Q 360",
                        "value": "q360"
                    },
                    {
                        "name": "Adept Sage",
                        "value": "adeptSage"
                    },
                    {
                        "name": "Clear Books",
                        "value": "clearBooks"
                    },
                    {
                        "name": "Access Pay Suite",
                        "value": "accessPaySuite"
                    },
                    {
                        "name": "Sage 200",
                        "value": "sage200"
                    },
                    {
                        "name": "Sage 50",
                        "value": "sage50"
                    },
                    {
                        "name": "Sage Intacct",
                        "value": "sageIntacct"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Callback State",
                "name": "callback_state",
                "type": "string",
                "default": "",
                "description": "Callback state storage",
                "routing": {
                    "send": {
                        "property": "callback_state",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            }
        ]
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
                    "Integrations"
                ],
                "operation": [
                    "Get All Integrations"
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
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, description, -description",
                "default": "name",
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