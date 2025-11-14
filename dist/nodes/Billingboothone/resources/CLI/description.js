"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIFields = void 0;
exports.CLIFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Clis",
                "value": "Get All Clis",
                "action": "Get all CLIs by customer",
                "description": "Retrieves all CLIs belonging to a specific customer.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cli"
                    }
                }
            },
            {
                "name": "Create Cli",
                "value": "Create Cli",
                "action": "Create CLI",
                "description": "Create a CLI.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/cli"
                    }
                }
            },
            {
                "name": "Delete Multiple Clis",
                "value": "Delete Multiple Clis",
                "action": "Delete multiple CLIs",
                "description": "Deletes all CLIs with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/cli"
                    }
                }
            },
            {
                "name": "Get Cli",
                "value": "Get Cli",
                "action": "Get a single CLI",
                "description": "Retrieves a single CLI.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cli/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update CLI",
                "value": "Update CLI",
                "action": "Update CLI",
                "description": "Updates an existing CLI.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/cli/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Cli",
                "value": "Delete Cli",
                "action": "Delete CLI",
                "description": "Deletes an existing CLI.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/cli/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Cli By Identifier",
                "value": "Get Cli By Identifier",
                "action": "Get a CLI by identifier",
                "description": "Retrieves a single CLI by its identifier.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/cli/identifier/{{$parameter[\"identifier\"]}}"
                    }
                }
            },
            {
                "name": "Bulk Import Cli",
                "value": "Bulk Import Cli",
                "action": "Bulk Import CLIs",
                "description": "Create a CLI.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/cli/bulk/import"
                    }
                }
            },
            {
                "name": "Bulk Create Cli",
                "value": "Bulk Create Cli",
                "action": "Bulk Create CLIs",
                "description": "Create a CLI.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/cli/bulk"
                    }
                }
            },
            {
                "name": "Bulk Move Cli",
                "value": "Bulk Move Cli",
                "action": "Re-assign CLIs",
                "description": "Moves the specified CLIs to another customer",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/cli/move"
                    }
                }
            },
            {
                "name": "Update Multiple Clis",
                "value": "Update Multiple Clis",
                "action": "Bulk Update CLIs",
                "description": "Updates all CLIs with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/cli/bulk"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /cli",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Get All Clis"
                ]
            }
        }
    },
    {
        "displayName": "POST /cli",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Create Cli"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /cli",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Delete Multiple Clis"
                ]
            }
        }
    },
    {
        "displayName": "GET /cli/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Get Cli"
                ]
            }
        }
    },
    {
        "displayName": "PUT /cli/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /cli/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Delete Cli"
                ]
            }
        }
    },
    {
        "displayName": "GET /cli/identifier/{identifier}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Get Cli By Identifier"
                ]
            }
        }
    },
    {
        "displayName": "POST /cli/bulk/import",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Bulk Import Cli"
                ]
            }
        }
    },
    {
        "displayName": "POST /cli/bulk",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Bulk Create Cli"
                ]
            }
        }
    },
    {
        "displayName": "POST /cli/move",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Bulk Move Cli"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/cli/bulk",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update Multiple Clis"
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
                    "CLI"
                ],
                "operation": [
                    "Get Cli"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Delete Cli"
                ]
            }
        }
    },
    {
        "displayName": "Identifier",
        "name": "identifier",
        "required": true,
        "description": "Caller line identifier",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Get Cli By Identifier"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update Multiple Clis"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Identifier",
        "name": "identifier",
        "type": "string",
        "default": "",
        "description": "Line identifier",
        "routing": {
            "send": {
                "property": "identifier",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Create Cli"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Cli Type Id",
        "name": "cli_type_id",
        "type": "number",
        "default": 0,
        "description": "Type of line",
        "routing": {
            "send": {
                "property": "cli_type_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Create Cli"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer Id",
        "name": "customer_id",
        "type": "number",
        "default": 0,
        "description": "`customer_id` association",
        "routing": {
            "send": {
                "property": "customer_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Create Cli"
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
                    "CLI"
                ],
                "operation": [
                    "Create Cli"
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
                "description": "Optional description, e.g. Bob's Number",
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
                "displayName": "Type",
                "name": "type",
                "type": "string",
                "default": "",
                "description": "No longer in use, please use `cli_type_id`",
                "routing": {
                    "send": {
                        "property": "type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Type Name",
                "name": "cli_type_name",
                "type": "string",
                "default": "",
                "description": "Name of type of line",
                "routing": {
                    "send": {
                        "property": "cli_type_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing",
                "name": "exclude_billing",
                "type": "boolean",
                "default": true,
                "description": "No longer in use, please use exclude_billing_cdr and exclude_billing_service_file",
                "routing": {
                    "send": {
                        "property": "exclude_billing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Maximum Spend",
                "name": "maximum_spend",
                "type": "number",
                "default": 0,
                "description": "Optional spending cap for calls",
                "routing": {
                    "send": {
                        "property": "maximum_spend",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Associated `cost_centre_id`",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Name",
                "name": "cost_centre_name",
                "type": "string",
                "default": "",
                "description": "Associate cost centre name",
                "routing": {
                    "send": {
                        "property": "cost_centre_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Customer Name",
                "name": "customer_name",
                "type": "string",
                "default": "",
                "description": "Customer name",
                "routing": {
                    "send": {
                        "property": "customer_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Cdr",
                "name": "exclude_billing_cdr",
                "type": "boolean",
                "default": true,
                "routing": {
                    "send": {
                        "property": "exclude_billing_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Service File",
                "name": "exclude_billing_service_file",
                "type": "boolean",
                "default": true,
                "description": "Exclude any service file charges associated to this CLI from billing",
                "routing": {
                    "send": {
                        "property": "exclude_billing_service_file",
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
                    "CLI"
                ],
                "operation": [
                    "Delete Multiple Clis"
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
        "displayName": "Identifier",
        "name": "identifier",
        "type": "string",
        "default": "",
        "description": "Line identifier",
        "routing": {
            "send": {
                "property": "identifier",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Cli Type Id",
        "name": "cli_type_id",
        "type": "number",
        "default": 0,
        "description": "Type of line",
        "routing": {
            "send": {
                "property": "cli_type_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer Id",
        "name": "customer_id",
        "type": "number",
        "default": 0,
        "description": "`customer_id` association",
        "routing": {
            "send": {
                "property": "customer_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
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
                    "CLI"
                ],
                "operation": [
                    "Update CLI"
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
                "description": "Optional description, e.g. Bob's Number",
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
                "displayName": "Type",
                "name": "type",
                "type": "string",
                "default": "",
                "description": "No longer in use, please use `cli_type_id`",
                "routing": {
                    "send": {
                        "property": "type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Type Name",
                "name": "cli_type_name",
                "type": "string",
                "default": "",
                "description": "Name of type of line",
                "routing": {
                    "send": {
                        "property": "cli_type_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing",
                "name": "exclude_billing",
                "type": "boolean",
                "default": true,
                "description": "No longer in use, please use exclude_billing_cdr and exclude_billing_service_file",
                "routing": {
                    "send": {
                        "property": "exclude_billing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Maximum Spend",
                "name": "maximum_spend",
                "type": "number",
                "default": 0,
                "description": "Optional spending cap for calls",
                "routing": {
                    "send": {
                        "property": "maximum_spend",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Associated `cost_centre_id`",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Name",
                "name": "cost_centre_name",
                "type": "string",
                "default": "",
                "description": "Associate cost centre name",
                "routing": {
                    "send": {
                        "property": "cost_centre_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Customer Name",
                "name": "customer_name",
                "type": "string",
                "default": "",
                "description": "Customer name",
                "routing": {
                    "send": {
                        "property": "customer_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Cdr",
                "name": "exclude_billing_cdr",
                "type": "boolean",
                "default": true,
                "routing": {
                    "send": {
                        "property": "exclude_billing_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Service File",
                "name": "exclude_billing_service_file",
                "type": "boolean",
                "default": true,
                "description": "Exclude any service file charges associated to this CLI from billing",
                "routing": {
                    "send": {
                        "property": "exclude_billing_service_file",
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
                    "CLI"
                ],
                "operation": [
                    "Bulk Import Cli"
                ]
            }
        },
        "options": [
            {
                "displayName": "Clis",
                "name": "clis",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "List of Line Identifiers to import",
                "routing": {
                    "send": {
                        "property": "clis",
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
        "displayName": "Identifiers",
        "name": "identifiers",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of line identifiers",
        "routing": {
            "send": {
                "property": "identifiers",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Bulk Create Cli"
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
                    "CLI"
                ],
                "operation": [
                    "Bulk Create Cli"
                ]
            }
        },
        "options": [
            {
                "displayName": "Description",
                "name": "description",
                "type": "string",
                "default": "",
                "description": "Optional description, e.g. Bob's Number",
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
                "displayName": "Cli Type Id",
                "name": "cli_type_id",
                "type": "number",
                "default": 0,
                "description": "Type of line",
                "routing": {
                    "send": {
                        "property": "cli_type_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Cdr",
                "name": "exclude_billing_cdr",
                "type": "boolean",
                "default": true,
                "routing": {
                    "send": {
                        "property": "exclude_billing_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Service File",
                "name": "exclude_billing_service_file",
                "type": "boolean",
                "default": true,
                "description": "Exclude any service file charges associated to this CLI from billing",
                "routing": {
                    "send": {
                        "property": "exclude_billing_service_file",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Maximum Spend",
                "name": "maximum_spend",
                "type": "number",
                "default": 0,
                "description": "Optional spending cap for calls",
                "routing": {
                    "send": {
                        "property": "maximum_spend",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Associated `cost_centre_id`",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Customer Id",
                "name": "customer_id",
                "type": "number",
                "default": 0,
                "description": "Associated `customer_id`",
                "routing": {
                    "send": {
                        "property": "customer_id",
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
                    "CLI"
                ],
                "operation": [
                    "Bulk Move Cli"
                ]
            }
        },
        "options": [
            {
                "displayName": "Customer Id",
                "name": "customer_id",
                "type": "number",
                "default": 0,
                "description": "Destination customer identifier",
                "routing": {
                    "send": {
                        "property": "customer_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Optional cost centre association",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Id",
                "name": "id",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of unique CLI identifiers",
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
        "displayName": "Additional Body Fields",
        "name": "bodyOptions",
        "type": "collection",
        "placeholder": "Add Field",
        "default": {},
        "displayOptions": {
            "show": {
                "resource": [
                    "CLI"
                ],
                "operation": [
                    "Update Multiple Clis"
                ]
            }
        },
        "options": [
            {
                "displayName": "Ids",
                "name": "ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "The selected CLIs to update",
                "routing": {
                    "send": {
                        "property": "ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Cli Type Id",
                "name": "cli_type_id",
                "type": "number",
                "default": 0,
                "description": "The `cli_type_id` to change the selected CLIs to, if provided",
                "routing": {
                    "send": {
                        "property": "cli_type_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "The cost_centre_id to change the selected CLIs to, if provided. If -1 is specified, existing cost centre will be removed.",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Cdr",
                "name": "exclude_billing_cdr",
                "type": "boolean",
                "default": true,
                "routing": {
                    "send": {
                        "property": "exclude_billing_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billing Service File",
                "name": "exclude_billing_service_file",
                "type": "boolean",
                "default": true,
                "description": "Exclude any service file charges associated to the selected CLIs from billing",
                "routing": {
                    "send": {
                        "property": "exclude_billing_service_file",
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
                    "CLI"
                ],
                "operation": [
                    "Get All Clis"
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
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "description": "Filter by `cost_centre_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cost_centre_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Cli Type Id",
                "name": "cli_type_id",
                "description": "Filter by `cli_type_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cli_type_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Exclude Billing Cdr",
                "name": "exclude_billing_cdr",
                "description": "Filter by `exclude_billing_cdr`",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "exclude_billing_cdr",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Exclude Billing Service File",
                "name": "exclude_billing_service_file",
                "description": "Filter by `exclude_billing_service_file`",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "exclude_billing_service_file",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search identifier",
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: identity, -identity",
                "default": "identity",
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