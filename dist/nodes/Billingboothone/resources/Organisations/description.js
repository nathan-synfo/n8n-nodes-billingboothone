"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationsFields = void 0;
exports.OrganisationsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Organisations",
                "value": "Get All Organisations",
                "action": "Get all organisations",
                "description": "Retrieves all organisations.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/organisation"
                    }
                }
            },
            {
                "name": "Create Organisation",
                "value": "Create Organisation",
                "action": "Create organisation",
                "description": "Create an organisation.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/organisation"
                    }
                }
            },
            {
                "name": "Delete Multiple Organisation",
                "value": "Delete Multiple Organisation",
                "action": "Delete organisations",
                "description": "Deletes existing multiple organisations.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/organisation"
                    }
                }
            },
            {
                "name": "Get Organisation By Id",
                "value": "Get Organisation By Id",
                "action": "Get a single organisation",
                "description": "Retrieves a single organisation.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/organisation/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Organisation",
                "value": "Update Organisation",
                "action": "Update organisation",
                "description": "Updates an existing organisation.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/organisation/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Organisation",
                "value": "Delete Organisation",
                "action": "Delete organisation",
                "description": "Deletes an existing organisation.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/organisation/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Organisation",
                "value": "Get Organisation",
                "action": "Get default organisation",
                "description": "Retrieves the default organisation.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/organisation/default"
                    }
                }
            },
            {
                "name": "Update Organisation Logo",
                "value": "Update Organisation Logo",
                "action": "Update organisation logo",
                "description": "Updates an existing organisation's logo.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/organisation/{{$parameter[\"id\"]}}/logo"
                    }
                }
            },
            {
                "name": "Get Organisation Logo",
                "value": "Get Organisation Logo",
                "action": "Get organisation logo",
                "description": "Retrieves the organisation logo.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/organisation/{{$parameter[\"id\"]}}/logo"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /organisation",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Get All Organisations"
                ]
            }
        }
    },
    {
        "displayName": "POST /organisation",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /organisation",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Delete Multiple Organisation"
                ]
            }
        }
    },
    {
        "displayName": "GET /organisation/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Get Organisation By Id"
                ]
            }
        }
    },
    {
        "displayName": "PUT /organisation/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /organisation/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Delete Organisation"
                ]
            }
        }
    },
    {
        "displayName": "GET /organisation/default",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Get Organisation"
                ]
            }
        }
    },
    {
        "displayName": "PUT /organisation/{id}/logo",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation Logo"
                ]
            }
        }
    },
    {
        "displayName": "GET /organisation/{id}/logo",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Get Organisation Logo"
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
                    "Organisations"
                ],
                "operation": [
                    "Get Organisation By Id"
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
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
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
                    "Organisations"
                ],
                "operation": [
                    "Delete Organisation"
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
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation Logo"
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
                    "Organisations"
                ],
                "operation": [
                    "Get Organisation Logo"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Organisation name",
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
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Theme Colour",
        "name": "theme_colour",
        "type": "string",
        "default": "",
        "description": "The branding theme colour, in hexadecimal (e.g. #000000)",
        "routing": {
            "send": {
                "property": "theme_colour",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Line 1",
        "name": "line1",
        "type": "string",
        "default": "",
        "description": "Address Line 1",
        "routing": {
            "send": {
                "property": "line1",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Town",
        "name": "town",
        "type": "string",
        "default": "",
        "description": "Village/Town",
        "routing": {
            "send": {
                "property": "town",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Postcode",
        "name": "postcode",
        "type": "string",
        "default": "",
        "description": "Post code/Zip code",
        "routing": {
            "send": {
                "property": "postcode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Country",
        "name": "country",
        "type": "string",
        "default": "",
        "description": "Country",
        "routing": {
            "send": {
                "property": "country",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Tax Rate",
        "name": "tax_rate",
        "type": "number",
        "default": 0,
        "description": "Standard taxation rate",
        "routing": {
            "send": {
                "property": "tax_rate",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Terms",
        "name": "payment_terms",
        "type": "number",
        "default": 0,
        "description": "Net payment terms in days",
        "routing": {
            "send": {
                "property": "payment_terms",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Region Id",
        "name": "region_id",
        "type": "number",
        "default": 0,
        "description": "Region unique identifier",
        "routing": {
            "send": {
                "property": "region_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Tax Mode",
        "name": "invoice_tax_mode",
        "type": "options",
        "default": "aggregate",
        "options": [
            {
                "name": "Aggregate",
                "value": "aggregate"
            },
            {
                "name": "Per Line Item",
                "value": "perLineItem"
            }
        ],
        "routing": {
            "send": {
                "property": "invoice_tax_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
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
                    "Organisations"
                ],
                "operation": [
                    "Create Organisation"
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
                "displayName": "Invoice Name",
                "name": "invoice_name",
                "type": "string",
                "default": "",
                "description": "Alternative organisation name to use in invoices",
                "routing": {
                    "send": {
                        "property": "invoice_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Company registration number",
                "routing": {
                    "send": {
                        "property": "reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Default",
                "name": "is_default",
                "type": "boolean",
                "default": true,
                "description": "Default organisation within the account",
                "routing": {
                    "send": {
                        "property": "is_default",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 2",
                "name": "line2",
                "type": "string",
                "default": "",
                "description": "Address Line 2",
                "routing": {
                    "send": {
                        "property": "line2",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 3",
                "name": "line3",
                "type": "string",
                "default": "",
                "description": "Address Line 3",
                "routing": {
                    "send": {
                        "property": "line3",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 4",
                "name": "line4",
                "type": "string",
                "default": "",
                "description": "Address Line 4",
                "routing": {
                    "send": {
                        "property": "line4",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "County",
                "name": "county",
                "type": "string",
                "default": "",
                "description": "County/State",
                "routing": {
                    "send": {
                        "property": "county",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Telephone",
                "name": "telephone",
                "type": "string",
                "default": "",
                "description": "Telephone contact number",
                "routing": {
                    "send": {
                        "property": "telephone",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Email",
                "name": "email",
                "type": "string",
                "default": "",
                "description": "Contact email address",
                "routing": {
                    "send": {
                        "property": "email",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Web",
                "name": "web",
                "type": "string",
                "default": "",
                "description": "Web site address",
                "routing": {
                    "send": {
                        "property": "web",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Reference",
                "name": "tax_reference",
                "type": "string",
                "default": "",
                "description": "VAT registration number",
                "routing": {
                    "send": {
                        "property": "tax_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Payment Details",
                "name": "payment_details",
                "type": "string",
                "default": "",
                "description": "Payment details contained in the invoice",
                "routing": {
                    "send": {
                        "property": "payment_details",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Terms Conditions",
                "name": "terms_conditions",
                "type": "string",
                "default": "",
                "description": "Terms and conditions contained in the invoice",
                "routing": {
                    "send": {
                        "property": "terms_conditions",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Advice",
                "name": "credit_advice",
                "type": "string",
                "default": "",
                "description": "Credit advice given at the bottom of credit notes",
                "routing": {
                    "send": {
                        "property": "credit_advice",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "From Address",
                "name": "from_address",
                "type": "string",
                "default": "",
                "description": "From address appearing in all outbound emails",
                "routing": {
                    "send": {
                        "property": "from_address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Bcc Address",
                "name": "bcc_address",
                "type": "string",
                "default": "",
                "description": "BCC address for any invoice emails sent out",
                "routing": {
                    "send": {
                        "property": "bcc_address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Prefix",
                "name": "invoice_prefix",
                "type": "string",
                "default": "",
                "description": "Invoice prefix",
                "routing": {
                    "send": {
                        "property": "invoice_prefix",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Note Prefix",
                "name": "credit_note_prefix",
                "type": "string",
                "default": "",
                "description": "Credit Note prefix",
                "routing": {
                    "send": {
                        "property": "credit_note_prefix",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Notes Enabled",
                "name": "credit_notes_enabled",
                "type": "boolean",
                "default": true,
                "description": "Determines whether credit notes are enabled for the organisation",
                "routing": {
                    "send": {
                        "property": "credit_notes_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 1 Enabled",
                "name": "overdue_invoice_reminder1_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #1",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder1_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 1 Days",
                "name": "overdue_invoice_reminder1_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #1",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder1_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 2 Enabled",
                "name": "overdue_invoice_reminder2_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #2",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder2_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 2 Days",
                "name": "overdue_invoice_reminder2_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #2",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder2_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 3 Enabled",
                "name": "overdue_invoice_reminder3_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #3",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder3_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 3 Days",
                "name": "overdue_invoice_reminder3_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #3",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder3_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Charge Early Termination Credit",
                "name": "charge_early_termination_credit",
                "type": "string",
                "default": "",
                "description": "Text to display in invoices when an early termination credit is applied",
                "routing": {
                    "send": {
                        "property": "charge_early_termination_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Charge Early Termination Charge",
                "name": "charge_early_termination_charge",
                "type": "string",
                "default": "",
                "description": "Text to display in invoices when an early termination charge is applied",
                "routing": {
                    "send": {
                        "property": "charge_early_termination_charge",
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
                    "Organisations"
                ],
                "operation": [
                    "Delete Multiple Organisation"
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
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Organisation name",
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
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Theme Colour",
        "name": "theme_colour",
        "type": "string",
        "default": "",
        "description": "The branding theme colour, in hexadecimal (e.g. #000000)",
        "routing": {
            "send": {
                "property": "theme_colour",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Line 1",
        "name": "line1",
        "type": "string",
        "default": "",
        "description": "Address Line 1",
        "routing": {
            "send": {
                "property": "line1",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Town",
        "name": "town",
        "type": "string",
        "default": "",
        "description": "Village/Town",
        "routing": {
            "send": {
                "property": "town",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Postcode",
        "name": "postcode",
        "type": "string",
        "default": "",
        "description": "Post code/Zip code",
        "routing": {
            "send": {
                "property": "postcode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Country",
        "name": "country",
        "type": "string",
        "default": "",
        "description": "Country",
        "routing": {
            "send": {
                "property": "country",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Tax Rate",
        "name": "tax_rate",
        "type": "number",
        "default": 0,
        "description": "Standard taxation rate",
        "routing": {
            "send": {
                "property": "tax_rate",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Terms",
        "name": "payment_terms",
        "type": "number",
        "default": 0,
        "description": "Net payment terms in days",
        "routing": {
            "send": {
                "property": "payment_terms",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Region Id",
        "name": "region_id",
        "type": "number",
        "default": 0,
        "description": "Region unique identifier",
        "routing": {
            "send": {
                "property": "region_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Tax Mode",
        "name": "invoice_tax_mode",
        "type": "options",
        "default": "aggregate",
        "options": [
            {
                "name": "Aggregate",
                "value": "aggregate"
            },
            {
                "name": "Per Line Item",
                "value": "perLineItem"
            }
        ],
        "routing": {
            "send": {
                "property": "invoice_tax_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
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
                    "Organisations"
                ],
                "operation": [
                    "Update Organisation"
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
                "displayName": "Invoice Name",
                "name": "invoice_name",
                "type": "string",
                "default": "",
                "description": "Alternative organisation name to use in invoices",
                "routing": {
                    "send": {
                        "property": "invoice_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Company registration number",
                "routing": {
                    "send": {
                        "property": "reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Default",
                "name": "is_default",
                "type": "boolean",
                "default": true,
                "description": "Default organisation within the account",
                "routing": {
                    "send": {
                        "property": "is_default",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 2",
                "name": "line2",
                "type": "string",
                "default": "",
                "description": "Address Line 2",
                "routing": {
                    "send": {
                        "property": "line2",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 3",
                "name": "line3",
                "type": "string",
                "default": "",
                "description": "Address Line 3",
                "routing": {
                    "send": {
                        "property": "line3",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Line 4",
                "name": "line4",
                "type": "string",
                "default": "",
                "description": "Address Line 4",
                "routing": {
                    "send": {
                        "property": "line4",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "County",
                "name": "county",
                "type": "string",
                "default": "",
                "description": "County/State",
                "routing": {
                    "send": {
                        "property": "county",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Telephone",
                "name": "telephone",
                "type": "string",
                "default": "",
                "description": "Telephone contact number",
                "routing": {
                    "send": {
                        "property": "telephone",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Email",
                "name": "email",
                "type": "string",
                "default": "",
                "description": "Contact email address",
                "routing": {
                    "send": {
                        "property": "email",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Web",
                "name": "web",
                "type": "string",
                "default": "",
                "description": "Web site address",
                "routing": {
                    "send": {
                        "property": "web",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Reference",
                "name": "tax_reference",
                "type": "string",
                "default": "",
                "description": "VAT registration number",
                "routing": {
                    "send": {
                        "property": "tax_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Payment Details",
                "name": "payment_details",
                "type": "string",
                "default": "",
                "description": "Payment details contained in the invoice",
                "routing": {
                    "send": {
                        "property": "payment_details",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Terms Conditions",
                "name": "terms_conditions",
                "type": "string",
                "default": "",
                "description": "Terms and conditions contained in the invoice",
                "routing": {
                    "send": {
                        "property": "terms_conditions",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Advice",
                "name": "credit_advice",
                "type": "string",
                "default": "",
                "description": "Credit advice given at the bottom of credit notes",
                "routing": {
                    "send": {
                        "property": "credit_advice",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "From Address",
                "name": "from_address",
                "type": "string",
                "default": "",
                "description": "From address appearing in all outbound emails",
                "routing": {
                    "send": {
                        "property": "from_address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Bcc Address",
                "name": "bcc_address",
                "type": "string",
                "default": "",
                "description": "BCC address for any invoice emails sent out",
                "routing": {
                    "send": {
                        "property": "bcc_address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Prefix",
                "name": "invoice_prefix",
                "type": "string",
                "default": "",
                "description": "Invoice prefix",
                "routing": {
                    "send": {
                        "property": "invoice_prefix",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Note Prefix",
                "name": "credit_note_prefix",
                "type": "string",
                "default": "",
                "description": "Credit Note prefix",
                "routing": {
                    "send": {
                        "property": "credit_note_prefix",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Credit Notes Enabled",
                "name": "credit_notes_enabled",
                "type": "boolean",
                "default": true,
                "description": "Determines whether credit notes are enabled for the organisation",
                "routing": {
                    "send": {
                        "property": "credit_notes_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 1 Enabled",
                "name": "overdue_invoice_reminder1_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #1",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder1_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 1 Days",
                "name": "overdue_invoice_reminder1_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #1",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder1_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 2 Enabled",
                "name": "overdue_invoice_reminder2_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #2",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder2_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 2 Days",
                "name": "overdue_invoice_reminder2_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #2",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder2_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 3 Enabled",
                "name": "overdue_invoice_reminder3_enabled",
                "type": "boolean",
                "default": true,
                "description": "Enable overdue invoice reminder #3",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder3_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Overdue Invoice Reminder 3 Days",
                "name": "overdue_invoice_reminder3_days",
                "type": "number",
                "default": 0,
                "description": "Number of days after invoice becomes overdue to send reminder #3",
                "routing": {
                    "send": {
                        "property": "overdue_invoice_reminder3_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Charge Early Termination Credit",
                "name": "charge_early_termination_credit",
                "type": "string",
                "default": "",
                "description": "Text to display in invoices when an early termination credit is applied",
                "routing": {
                    "send": {
                        "property": "charge_early_termination_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Charge Early Termination Charge",
                "name": "charge_early_termination_charge",
                "type": "string",
                "default": "",
                "description": "Text to display in invoices when an early termination charge is applied",
                "routing": {
                    "send": {
                        "property": "charge_early_termination_charge",
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
                    "Organisations"
                ],
                "operation": [
                    "Get All Organisations"
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, is_default, -is_default",
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