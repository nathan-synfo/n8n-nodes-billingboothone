"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupsFields = void 0;
exports.CustomerGroupsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Customer Groups",
                "value": "Get All Customer Groups",
                "action": "Get all customer groups",
                "description": "Retrieves all customer groups.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customergroup"
                    }
                }
            },
            {
                "name": "Create Customer Group",
                "value": "Create Customer Group",
                "action": "Create customer group",
                "description": "Create a customer group.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customergroup"
                    }
                }
            },
            {
                "name": "Delete Multiple Customer Groups",
                "value": "Delete Multiple Customer Groups",
                "action": "Delete multiple customer groups",
                "description": "Deletes all customer groups with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customergroup"
                    }
                }
            },
            {
                "name": "Get Customer Group",
                "value": "Get Customer Group",
                "action": "Get a single customer group",
                "description": "Retrieves a single customer group.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customergroup/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Customer Group",
                "value": "Update Customer Group",
                "action": "Update customer group",
                "description": "Updates an existing customer group.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customergroup/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Customer Group",
                "value": "Delete Customer Group",
                "action": "Delete customer group",
                "description": "Deletes an existing customer group.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customergroup/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /customergroup",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Get All Customer Groups"
                ]
            }
        }
    },
    {
        "displayName": "POST /customergroup",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customergroup",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Delete Multiple Customer Groups"
                ]
            }
        }
    },
    {
        "displayName": "GET /customergroup/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Get Customer Group"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customergroup/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customergroup/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Delete Customer Group"
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
                    "Customer Groups"
                ],
                "operation": [
                    "Get Customer Group"
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
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
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
                    "Customer Groups"
                ],
                "operation": [
                    "Delete Customer Group"
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
        "description": "Group name",
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
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Billing Type",
        "name": "billing_type",
        "type": "options",
        "default": "manual",
        "options": [
            {
                "name": "Manual",
                "value": "manual"
            },
            {
                "name": "Automatic",
                "value": "automatic"
            }
        ],
        "routing": {
            "send": {
                "property": "billing_type",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Billing Period",
        "name": "billing_period",
        "type": "options",
        "default": "monthly",
        "options": [
            {
                "name": "Monthly",
                "value": "monthly"
            },
            {
                "name": "Quarterly",
                "value": "quarterly"
            }
        ],
        "routing": {
            "send": {
                "property": "billing_period",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Method",
        "name": "method",
        "type": "options",
        "default": "standard",
        "options": [
            {
                "name": "Standard",
                "value": "standard"
            },
            {
                "name": "Anniversary",
                "value": "anniversary"
            }
        ],
        "routing": {
            "send": {
                "property": "method",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
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
                    "Customer Groups"
                ],
                "operation": [
                    "Create Customer Group"
                ]
            }
        },
        "options": [
            {
                "displayName": "Id",
                "name": "id",
                "type": "number",
                "default": 0,
                "description": "Unique Identifier",
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
                "displayName": "Is Default",
                "name": "is_default",
                "type": "boolean",
                "default": true,
                "description": "Is the default group on the account?",
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
                "displayName": "Billing Period Offset",
                "name": "billing_period_offset",
                "type": "number",
                "default": 0,
                "description": "If the group is automatic, offset the billing period by an offset amount of months (-3 to +3)",
                "routing": {
                    "send": {
                        "property": "billing_period_offset",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Service Charges",
                "name": "exclude_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Exclude service charges in billing run",
                "routing": {
                    "send": {
                        "property": "exclude_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billed Service Charges",
                "name": "exclude_billed_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Exclude service charges that have already been billed in the 'billing_period` specified",
                "routing": {
                    "send": {
                        "property": "exclude_billed_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Cdr",
                "name": "exclude_cdr",
                "type": "boolean",
                "default": true,
                "description": "Exclude voice, data and SMS charges in billing run",
                "routing": {
                    "send": {
                        "property": "exclude_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Start At",
                "name": "start_at",
                "type": "string",
                "default": "",
                "description": "The start date for automatic `billing_type`.",
                "routing": {
                    "send": {
                        "property": "start_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Last Triggered At",
                "name": "last_triggered_at",
                "type": "string",
                "default": "",
                "description": "Last date/time the group was billed",
                "routing": {
                    "send": {
                        "property": "last_triggered_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Next Trigger At",
                "name": "next_trigger_at",
                "type": "string",
                "default": "",
                "description": "If `billing_type` is monthly, this property will be populated with the next estimated trigger date/time",
                "routing": {
                    "send": {
                        "property": "next_trigger_at",
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
                    "Customer Groups"
                ],
                "operation": [
                    "Delete Multiple Customer Groups"
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
        "description": "Group name",
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
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Billing Type",
        "name": "billing_type",
        "type": "options",
        "default": "manual",
        "options": [
            {
                "name": "Manual",
                "value": "manual"
            },
            {
                "name": "Automatic",
                "value": "automatic"
            }
        ],
        "routing": {
            "send": {
                "property": "billing_type",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Billing Period",
        "name": "billing_period",
        "type": "options",
        "default": "monthly",
        "options": [
            {
                "name": "Monthly",
                "value": "monthly"
            },
            {
                "name": "Quarterly",
                "value": "quarterly"
            }
        ],
        "routing": {
            "send": {
                "property": "billing_period",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Method",
        "name": "method",
        "type": "options",
        "default": "standard",
        "options": [
            {
                "name": "Standard",
                "value": "standard"
            },
            {
                "name": "Anniversary",
                "value": "anniversary"
            }
        ],
        "routing": {
            "send": {
                "property": "method",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
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
                    "Customer Groups"
                ],
                "operation": [
                    "Update Customer Group"
                ]
            }
        },
        "options": [
            {
                "displayName": "Id",
                "name": "id",
                "type": "number",
                "default": 0,
                "description": "Unique Identifier",
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
                "displayName": "Is Default",
                "name": "is_default",
                "type": "boolean",
                "default": true,
                "description": "Is the default group on the account?",
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
                "displayName": "Billing Period Offset",
                "name": "billing_period_offset",
                "type": "number",
                "default": 0,
                "description": "If the group is automatic, offset the billing period by an offset amount of months (-3 to +3)",
                "routing": {
                    "send": {
                        "property": "billing_period_offset",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Service Charges",
                "name": "exclude_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Exclude service charges in billing run",
                "routing": {
                    "send": {
                        "property": "exclude_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Billed Service Charges",
                "name": "exclude_billed_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Exclude service charges that have already been billed in the 'billing_period` specified",
                "routing": {
                    "send": {
                        "property": "exclude_billed_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Exclude Cdr",
                "name": "exclude_cdr",
                "type": "boolean",
                "default": true,
                "description": "Exclude voice, data and SMS charges in billing run",
                "routing": {
                    "send": {
                        "property": "exclude_cdr",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Start At",
                "name": "start_at",
                "type": "string",
                "default": "",
                "description": "The start date for automatic `billing_type`.",
                "routing": {
                    "send": {
                        "property": "start_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Last Triggered At",
                "name": "last_triggered_at",
                "type": "string",
                "default": "",
                "description": "Last date/time the group was billed",
                "routing": {
                    "send": {
                        "property": "last_triggered_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Next Trigger At",
                "name": "next_trigger_at",
                "type": "string",
                "default": "",
                "description": "If `billing_type` is monthly, this property will be populated with the next estimated trigger date/time",
                "routing": {
                    "send": {
                        "property": "next_trigger_at",
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
                    "Customer Groups"
                ],
                "operation": [
                    "Get All Customer Groups"
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
                "displayName": "Billing Type",
                "name": "billing_type",
                "description": "Filter by `billing_type`",
                "default": "manual",
                "type": "options",
                "options": [
                    {
                        "name": "Manual",
                        "value": "manual"
                    },
                    {
                        "name": "Automatic",
                        "value": "automatic"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "billing_type",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Method",
                "name": "method",
                "description": "Filter by `method`",
                "default": "standard",
                "type": "options",
                "options": [
                    {
                        "name": "Standard",
                        "value": "standard"
                    },
                    {
                        "name": "Anniversary",
                        "value": "anniversary"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "method",
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