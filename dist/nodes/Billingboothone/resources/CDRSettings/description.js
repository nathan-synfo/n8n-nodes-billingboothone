"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDRSettingsFields = void 0;
exports.CDRSettingsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "CDR Settings"
                ]
            }
        },
        "options": [
            {
                "name": "Get Cdr Settings",
                "value": "Get Cdr Settings",
                "action": "Get CDR settings",
                "description": "Retrieves CDR settings for the specified `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cdr/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            },
            {
                "name": "Update Cdr Settings",
                "value": "Update Cdr Settings",
                "action": "Update CDR settings",
                "description": "Updates CDR settings for the specified `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/cdr/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            },
            {
                "name": "Delete Cdr Settings",
                "value": "Delete Cdr Settings",
                "action": "Clear CDR settings",
                "description": "Clears CDR settings back to default for `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/cdr/{{$parameter[\"organisationId\"]}}/settings"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /cdr/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CDR Settings"
                ],
                "operation": [
                    "Get Cdr Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /cdr/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CDR Settings"
                ],
                "operation": [
                    "Update Cdr Settings"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /cdr/{organisationId}/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CDR Settings"
                ],
                "operation": [
                    "Delete Cdr Settings"
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
                    "CDR Settings"
                ],
                "operation": [
                    "Get Cdr Settings"
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
                    "CDR Settings"
                ],
                "operation": [
                    "Update Cdr Settings"
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
                    "CDR Settings"
                ],
                "operation": [
                    "Delete Cdr Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Display Mode",
        "name": "display_mode",
        "type": "options",
        "default": "cli",
        "options": [
            {
                "name": "Cli",
                "value": "cli"
            },
            {
                "name": "Cli And Description",
                "value": "cliAndDescription"
            },
            {
                "name": "Description",
                "value": "description"
            }
        ],
        "routing": {
            "send": {
                "property": "display_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CDR Settings"
                ],
                "operation": [
                    "Update Cdr Settings"
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
                    "CDR Settings"
                ],
                "operation": [
                    "Update Cdr Settings"
                ]
            }
        },
        "options": [
            {
                "displayName": "Aggregation Mode",
                "name": "aggregation_mode",
                "type": "options",
                "default": "single",
                "options": [
                    {
                        "name": "Single",
                        "value": "single"
                    },
                    {
                        "name": "Cli Type",
                        "value": "cliType"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "aggregation_mode",
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
                "description": "Description utilised in the line items of invoices",
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
                "displayName": "Description Tax Exempt",
                "name": "description_tax_exempt",
                "type": "string",
                "default": "",
                "description": "Description utilised in the line items of invoices if any tax exempt records exist",
                "routing": {
                    "send": {
                        "property": "description_tax_exempt",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Accounting Code",
                "name": "accounting_code",
                "type": "string",
                "default": "",
                "description": "Accounting Code for exporting to third-party systems",
                "routing": {
                    "send": {
                        "property": "accounting_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Sort Priority",
                "name": "sort_priority",
                "type": "number",
                "default": 0,
                "description": "Sort priority",
                "routing": {
                    "send": {
                        "property": "sort_priority",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Category Id",
                "name": "category_id",
                "type": "number",
                "default": 0,
                "description": "Associated category",
                "routing": {
                    "send": {
                        "property": "category_id",
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