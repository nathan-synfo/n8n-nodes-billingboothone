"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceTemplateFields = void 0;
exports.InvoiceTemplateFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ]
            }
        },
        "options": [
            {
                "name": "Get Invoice Template Settings",
                "value": "Get Invoice Template Settings",
                "action": "Get invoice template settings",
                "description": "Retrieves invoice and usage statement settings for the specified `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            },
            {
                "name": "Update Invoice Template Settings",
                "value": "Update Invoice Template Settings",
                "action": "Update invoice template settings",
                "description": "Updates invoice and usage statement template settings for the specified `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            },
            {
                "name": "Get Invoice Template Binary",
                "value": "Get Invoice Template Binary",
                "action": "Get invoice preview binary",
                "description": "Retrieves an invoice preview binary as a fully-rendered PDF.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings/preview/invoice"
                    }
                }
            },
            {
                "name": "Get Credit Note Template Binary",
                "value": "Get Credit Note Template Binary",
                "action": "Get credit note preview binary",
                "description": "Retrieves a credit note preview binary as a fully-rendered PDF.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings/preview/creditnote"
                    }
                }
            },
            {
                "name": "Get Cdr Template Binary",
                "value": "Get Cdr Template Binary",
                "action": "Get CDR preview binary",
                "description": "Retrieves a rendered CDR usage statement binary as a PDF.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings/preview/cdr"
                    }
                }
            },
            {
                "name": "Get Statement Template Binary",
                "value": "Get Statement Template Binary",
                "action": "Get statement preview binary",
                "description": "Retrieves an statement preview binary as a fully-rendered PDF.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/invoice-template/{{$parameter[\"organisationId\"]}}/settings/preview/statement"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /invoice-template/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Invoice Template Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /invoice-template/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "displayName": "GET /invoice-template/{organisationId}/settings/preview/invoice",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Invoice Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "GET /invoice-template/{organisationId}/settings/preview/creditnote",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Credit Note Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "GET /invoice-template/{organisationId}/settings/preview/cdr",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Cdr Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "GET /invoice-template/{organisationId}/settings/preview/statement",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Statement Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Invoice Template Settings"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Invoice Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Credit Note Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Cdr Template Binary"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Get Statement Template Binary"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Template",
        "name": "invoice_template",
        "type": "string",
        "default": "",
        "description": "Invoice template",
        "routing": {
            "send": {
                "property": "invoice_template",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Template Font",
        "name": "invoice_template_font",
        "type": "string",
        "default": "",
        "description": "Font used by invoice template",
        "routing": {
            "send": {
                "property": "invoice_template_font",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Credit Note Template",
        "name": "credit_note_template",
        "type": "string",
        "default": "",
        "description": "Credit note template",
        "routing": {
            "send": {
                "property": "credit_note_template",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Credit Note Template Font",
        "name": "credit_note_template_font",
        "type": "string",
        "default": "",
        "description": "Font used by credit note template",
        "routing": {
            "send": {
                "property": "credit_note_template_font",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Cdr Template",
        "name": "cdr_template",
        "type": "string",
        "default": "",
        "description": "Usage statement template",
        "routing": {
            "send": {
                "property": "cdr_template",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Cdr Template Font",
        "name": "cdr_template_font",
        "type": "string",
        "default": "",
        "description": "Font used by usage statement template",
        "routing": {
            "send": {
                "property": "cdr_template_font",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Line Item Sort Mode",
        "name": "line_item_sort_mode",
        "type": "options",
        "default": "creationDate",
        "options": [
            {
                "name": "Creation Date",
                "value": "creationDate"
            },
            {
                "name": "Period Start",
                "value": "periodStart"
            }
        ],
        "routing": {
            "send": {
                "property": "line_item_sort_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
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
                    "Invoice Template"
                ],
                "operation": [
                    "Update Invoice Template Settings"
                ]
            }
        },
        "options": [
            {
                "displayName": "Display Invoice Customer Reference",
                "name": "display_invoice_customer_reference",
                "type": "boolean",
                "default": true,
                "description": "Display customer reference on invoices",
                "routing": {
                    "send": {
                        "property": "display_invoice_customer_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Display Credit Note Customer Reference",
                "name": "display_credit_note_customer_reference",
                "type": "boolean",
                "default": true,
                "description": "Display customer reference on credit notes",
                "routing": {
                    "send": {
                        "property": "display_credit_note_customer_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Statement Template",
                "name": "statement_template",
                "type": "string",
                "default": "",
                "description": "Name of the statement template to use",
                "routing": {
                    "send": {
                        "property": "statement_template",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Statement Template Font",
                "name": "statement_template_font",
                "type": "string",
                "default": "",
                "description": "Name of the statement template font to use",
                "routing": {
                    "send": {
                        "property": "statement_template_font",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Statement Number Format",
                "name": "statement_number_format",
                "type": "options",
                "default": "accounting",
                "options": [
                    {
                        "name": "Accounting",
                        "value": "accounting"
                    },
                    {
                        "name": "Consumer",
                        "value": "consumer"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "statement_number_format",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Statement Activity Two Columns",
                "name": "statement_activity_two_columns",
                "type": "boolean",
                "default": true,
                "description": "Displays transaction amounts in a single column or splits it across two columns (\"in\", \"out\"),\r\ndisplays in a single column by default",
                "routing": {
                    "send": {
                        "property": "statement_activity_two_columns",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cdr Itemise Sms",
                "name": "cdr_itemise_sms",
                "type": "boolean",
                "default": true,
                "description": "Display an itemised sms usage table for cdr template 2\r\ntrue by default",
                "routing": {
                    "send": {
                        "property": "cdr_itemise_sms",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cdr Itemise Data",
                "name": "cdr_itemise_data",
                "type": "boolean",
                "default": true,
                "description": "Display an itemised data usage table for cdr template 2\r\ntrue by default",
                "routing": {
                    "send": {
                        "property": "cdr_itemise_data",
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
                    "Invoice Template"
                ],
                "operation": [
                    "Get Invoice Template Binary"
                ]
            }
        },
        "options": [
            {
                "displayName": "Template",
                "name": "template",
                "description": "Template",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "template",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Template Font",
                "name": "templateFont",
                "description": "Font",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "templateFont",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Lime Item Sort Mode",
                "name": "limeItemSortMode",
                "description": "Line item sort mode",
                "default": "creationDate",
                "type": "options",
                "options": [
                    {
                        "name": "Creation Date",
                        "value": "creationDate"
                    },
                    {
                        "name": "Period Start",
                        "value": "periodStart"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "limeItemSortMode",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Display Customer Reference",
                "name": "displayCustomerReference",
                "description": "Display customer reference",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "displayCustomerReference",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
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
                    "Invoice Template"
                ],
                "operation": [
                    "Get Credit Note Template Binary"
                ]
            }
        },
        "options": [
            {
                "displayName": "Template",
                "name": "template",
                "description": "Template",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "template",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Template Font",
                "name": "templateFont",
                "description": "Font",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "templateFont",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Display Customer Reference",
                "name": "displayCustomerReference",
                "description": "Display customer reference",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "displayCustomerReference",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
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
                    "Invoice Template"
                ],
                "operation": [
                    "Get Cdr Template Binary"
                ]
            }
        },
        "options": [
            {
                "displayName": "Template",
                "name": "template",
                "description": "Template",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "template",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Template Font",
                "name": "templateFont",
                "description": "Font",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "templateFont",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Itemise Sms",
                "name": "itemiseSms",
                "description": "Itemise Sms",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "itemiseSms",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Itemise Data",
                "name": "itemiseData",
                "description": "Itemise Data",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "itemiseData",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
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
                    "Invoice Template"
                ],
                "operation": [
                    "Get Statement Template Binary"
                ]
            }
        },
        "options": [
            {
                "displayName": "Statement Template",
                "name": "statementTemplate",
                "description": "Statement Template",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "statementTemplate",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Statement Template Font",
                "name": "statementTemplateFont",
                "description": "Statement Template Font",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "statementTemplateFont",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Statement Activity Two Columns",
                "name": "statementActivityTwoColumns",
                "description": "Statement Activity Two Columns",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "statementActivityTwoColumns",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Statement Number Format",
                "name": "statementNumberFormat",
                "description": "Statement Number Format",
                "default": "accounting",
                "type": "options",
                "options": [
                    {
                        "name": "Accounting",
                        "value": "accounting"
                    },
                    {
                        "name": "Consumer",
                        "value": "consumer"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "statementNumberFormat",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            }
        ]
    }
];
//# sourceMappingURL=description.js.map