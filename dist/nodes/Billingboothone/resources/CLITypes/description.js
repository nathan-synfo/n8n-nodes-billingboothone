"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLITypesFields = void 0;
exports.CLITypesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Cli Types",
                "value": "Get All Cli Types",
                "action": "Get all types",
                "description": "Retrieves all CLI types.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cli/type"
                    }
                }
            },
            {
                "name": "Create Cli Type",
                "value": "Create Cli Type",
                "action": "Create type",
                "description": "Create a CLI type.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/cli/type"
                    }
                }
            },
            {
                "name": "Delete Multiple Cli Types",
                "value": "Delete Multiple Cli Types",
                "action": "Delete multiple types",
                "description": "Deletes all CLI types with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/cli/type"
                    }
                }
            },
            {
                "name": "Get C Li Type",
                "value": "Get C Li Type",
                "action": "Get a single type",
                "description": "Retrieves a single CLI type.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cli/type/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Cli Type",
                "value": "Update Cli Type",
                "action": "Update type",
                "description": "Updates an existing CLI type.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/cli/type/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Cli Type",
                "value": "Delete Cli Type",
                "action": "Delete type",
                "description": "Deletes an existing CLI type.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/cli/type/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /cli/type",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Get All Cli Types"
                ]
            }
        }
    },
    {
        "displayName": "POST /cli/type",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Create Cli Type"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /cli/type",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Delete Multiple Cli Types"
                ]
            }
        }
    },
    {
        "displayName": "GET /cli/type/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Get C Li Type"
                ]
            }
        }
    },
    {
        "displayName": "PUT /cli/type/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Update Cli Type"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /cli/type/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI Types"
                ],
                "operation": [
                    "Delete Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Get C Li Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Update Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Delete Cli Type"
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
        "description": "Description utilised in the line items of invoices",
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
                    "CLI Types"
                ],
                "operation": [
                    "Create Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Create Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Delete Multiple Cli Types"
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
        "description": "Description utilised in the line items of invoices",
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
                    "CLI Types"
                ],
                "operation": [
                    "Update Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Update Cli Type"
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
                    "CLI Types"
                ],
                "operation": [
                    "Get All Cli Types"
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
                "displayName": "Search",
                "name": "search",
                "description": "Search name",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "search",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name",
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