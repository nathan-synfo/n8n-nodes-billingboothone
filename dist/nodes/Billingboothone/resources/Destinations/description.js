"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsFields = void 0;
exports.DestinationsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Destinations",
                "value": "Get All Destinations",
                "action": "Get all destinations",
                "description": "Retrieves all destinations.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/destination"
                    }
                }
            },
            {
                "name": "Create Destination",
                "value": "Create Destination",
                "action": "Create destination",
                "description": "Create a destination.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/destination"
                    }
                }
            },
            {
                "name": "Delete Multiple Destinations",
                "value": "Delete Multiple Destinations",
                "action": "Delete multiple destinations",
                "description": "Deletes all destinations with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/destination"
                    }
                }
            },
            {
                "name": "Get Destination",
                "value": "Get Destination",
                "action": "Get a single destination",
                "description": "Retrieves a single destination.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/destination/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Destination",
                "value": "Update Destination",
                "action": "Update destination",
                "description": "Updates an existing destination.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/destination/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Destination",
                "value": "Delete Destination",
                "action": "Delete destination",
                "description": "Deletes an existing destination.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/destination/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Bulk Create Destination",
                "value": "Bulk Create Destination",
                "action": "Bulk create destination",
                "description": "Create multiple destinations.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/destination/bulk"
                    }
                }
            },
            {
                "name": "Bulk Update Pricing Destination",
                "value": "Bulk Update Pricing Destination",
                "action": "Bulk update destination pricing",
                "description": "Bulk update pricing only of destinations",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/destination/bulk/pricing"
                    }
                }
            },
            {
                "name": "Clear Multiple Destinations",
                "value": "Clear Multiple Destinations",
                "action": "Clear multiple destinations",
                "description": "Clears all destinations by supplier id and data type.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/destination/clear"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /destination",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Get All Destinations"
                ]
            }
        }
    },
    {
        "displayName": "POST /destination",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Create Destination"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /destination",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Delete Multiple Destinations"
                ]
            }
        }
    },
    {
        "displayName": "GET /destination/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Get Destination"
                ]
            }
        }
    },
    {
        "displayName": "PUT /destination/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Update Destination"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /destination/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Delete Destination"
                ]
            }
        }
    },
    {
        "displayName": "POST /destination/bulk",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Bulk Create Destination"
                ]
            }
        }
    },
    {
        "displayName": "POST /destination/bulk/pricing",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Bulk Update Pricing Destination"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /destination/clear",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Clear Multiple Destinations"
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
                    "Destinations"
                ],
                "operation": [
                    "Get Destination"
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
                    "Destinations"
                ],
                "operation": [
                    "Update Destination"
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
                    "Destinations"
                ],
                "operation": [
                    "Delete Destination"
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
                    "Destinations"
                ],
                "operation": [
                    "Create Destination"
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
                "type": "string",
                "default": "",
                "description": "Descriptive name of the destination, e.g. UK Mobile",
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
                "displayName": "Unit Type",
                "name": "unit_type",
                "type": "options",
                "default": "voice",
                "options": [
                    {
                        "name": "Voice",
                        "value": "voice"
                    },
                    {
                        "name": "Data",
                        "value": "data"
                    },
                    {
                        "name": "Sms",
                        "value": "sms"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "unit_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Currency Unit",
                "name": "currency_unit",
                "type": "options",
                "default": "minor",
                "options": [
                    {
                        "name": "Minor",
                        "value": "minor"
                    },
                    {
                        "name": "Major",
                        "value": "major"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "currency_unit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Fallback",
                "name": "is_fallback",
                "type": "boolean",
                "default": true,
                "description": "True if the destination is a fallback one",
                "routing": {
                    "send": {
                        "property": "is_fallback",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Tax Exempt",
                "name": "is_tax_exempt",
                "type": "boolean",
                "default": true,
                "description": "True if the destination should not have tax applied to it",
                "routing": {
                    "send": {
                        "property": "is_tax_exempt",
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
                "description": "If true, any records associated to this destination will not be billed to the customer when issuing a billing run",
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
                "displayName": "Use Supplier Description",
                "name": "use_supplier_description",
                "type": "boolean",
                "default": true,
                "description": "If true, the description of the record will come directly form the CDR rather than using the `name` property",
                "routing": {
                    "send": {
                        "property": "use_supplier_description",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Buy Pricing",
                "name": "buy_pricing",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "buy_pricing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Sell Pricing",
                "name": "sell_pricing",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "sell_pricing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Charge Codes",
                "name": "charge_codes",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "List of charge codes that match this destination",
                "routing": {
                    "send": {
                        "property": "charge_codes",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Output Charge Code",
                "name": "output_charge_code",
                "type": "string",
                "default": "",
                "description": "Output charge code to use when outputting to CDR",
                "routing": {
                    "send": {
                        "property": "output_charge_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Id",
                "name": "destination_group_id",
                "type": "number",
                "default": 0,
                "description": "Destination group identifier if applicable",
                "routing": {
                    "send": {
                        "property": "destination_group_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Name",
                "name": "destination_group_name",
                "type": "string",
                "default": "",
                "description": "Destination group name if applicable",
                "routing": {
                    "send": {
                        "property": "destination_group_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "type": "number",
                "default": 0,
                "description": "Supplier identifier",
                "routing": {
                    "send": {
                        "property": "supplier_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Name",
                "name": "supplier_name",
                "type": "string",
                "default": "",
                "description": "Supplier name",
                "routing": {
                    "send": {
                        "property": "supplier_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Platform Id",
                "name": "supplier_platform_id",
                "type": "number",
                "default": 0,
                "description": "Supplier platform identifier, if applicable",
                "routing": {
                    "send": {
                        "property": "supplier_platform_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Platform Name",
                "name": "supplier_platform_name",
                "type": "string",
                "default": "",
                "description": "Supplier platform name, if applicable",
                "routing": {
                    "send": {
                        "property": "supplier_platform_name",
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
                    "Destinations"
                ],
                "operation": [
                    "Delete Multiple Destinations"
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
        "displayName": "Additional Body Fields",
        "name": "bodyOptions",
        "type": "collection",
        "placeholder": "Add Field",
        "default": {},
        "displayOptions": {
            "show": {
                "resource": [
                    "Destinations"
                ],
                "operation": [
                    "Update Destination"
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
                "type": "string",
                "default": "",
                "description": "Descriptive name of the destination, e.g. UK Mobile",
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
                "displayName": "Unit Type",
                "name": "unit_type",
                "type": "options",
                "default": "voice",
                "options": [
                    {
                        "name": "Voice",
                        "value": "voice"
                    },
                    {
                        "name": "Data",
                        "value": "data"
                    },
                    {
                        "name": "Sms",
                        "value": "sms"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "unit_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Currency Unit",
                "name": "currency_unit",
                "type": "options",
                "default": "minor",
                "options": [
                    {
                        "name": "Minor",
                        "value": "minor"
                    },
                    {
                        "name": "Major",
                        "value": "major"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "currency_unit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Fallback",
                "name": "is_fallback",
                "type": "boolean",
                "default": true,
                "description": "True if the destination is a fallback one",
                "routing": {
                    "send": {
                        "property": "is_fallback",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Tax Exempt",
                "name": "is_tax_exempt",
                "type": "boolean",
                "default": true,
                "description": "True if the destination should not have tax applied to it",
                "routing": {
                    "send": {
                        "property": "is_tax_exempt",
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
                "description": "If true, any records associated to this destination will not be billed to the customer when issuing a billing run",
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
                "displayName": "Use Supplier Description",
                "name": "use_supplier_description",
                "type": "boolean",
                "default": true,
                "description": "If true, the description of the record will come directly form the CDR rather than using the `name` property",
                "routing": {
                    "send": {
                        "property": "use_supplier_description",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Buy Pricing",
                "name": "buy_pricing",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "buy_pricing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Sell Pricing",
                "name": "sell_pricing",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "sell_pricing",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Charge Codes",
                "name": "charge_codes",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "List of charge codes that match this destination",
                "routing": {
                    "send": {
                        "property": "charge_codes",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Output Charge Code",
                "name": "output_charge_code",
                "type": "string",
                "default": "",
                "description": "Output charge code to use when outputting to CDR",
                "routing": {
                    "send": {
                        "property": "output_charge_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Id",
                "name": "destination_group_id",
                "type": "number",
                "default": 0,
                "description": "Destination group identifier if applicable",
                "routing": {
                    "send": {
                        "property": "destination_group_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Name",
                "name": "destination_group_name",
                "type": "string",
                "default": "",
                "description": "Destination group name if applicable",
                "routing": {
                    "send": {
                        "property": "destination_group_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "type": "number",
                "default": 0,
                "description": "Supplier identifier",
                "routing": {
                    "send": {
                        "property": "supplier_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Name",
                "name": "supplier_name",
                "type": "string",
                "default": "",
                "description": "Supplier name",
                "routing": {
                    "send": {
                        "property": "supplier_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Platform Id",
                "name": "supplier_platform_id",
                "type": "number",
                "default": 0,
                "description": "Supplier platform identifier, if applicable",
                "routing": {
                    "send": {
                        "property": "supplier_platform_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Supplier Platform Name",
                "name": "supplier_platform_name",
                "type": "string",
                "default": "",
                "description": "Supplier platform name, if applicable",
                "routing": {
                    "send": {
                        "property": "supplier_platform_name",
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
                    "Destinations"
                ],
                "operation": [
                    "Bulk Create Destination"
                ]
            }
        },
        "options": [
            {
                "displayName": "Destinations",
                "name": "destinations",
                "type": "json",
                "default": "[\n  {\n    \"buy_pricing\": {},\n    \"sell_pricing\": {},\n    \"charge_codes\": [\n      {}\n    ]\n  }\n]",
                "description": "List of destinations",
                "routing": {
                    "send": {
                        "property": "destinations",
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
                    "Destinations"
                ],
                "operation": [
                    "Bulk Update Pricing Destination"
                ]
            }
        },
        "options": [
            {
                "displayName": "Destinations",
                "name": "destinations",
                "type": "json",
                "default": "[\n  {\n    \"buy_pricing\": {},\n    \"sell_pricing\": {},\n    \"charge_codes\": [\n      {}\n    ]\n  }\n]",
                "description": "List of destinations",
                "routing": {
                    "send": {
                        "property": "destinations",
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
                    "Destinations"
                ],
                "operation": [
                    "Clear Multiple Destinations"
                ]
            }
        },
        "options": [
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "type": "number",
                "default": 0,
                "description": "Supplier unique identifier",
                "routing": {
                    "send": {
                        "property": "supplier_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Data Type",
                "name": "data_type",
                "type": "options",
                "default": "voice",
                "options": [
                    {
                        "name": "Voice",
                        "value": "voice"
                    },
                    {
                        "name": "Data",
                        "value": "data"
                    },
                    {
                        "name": "Sms",
                        "value": "sms"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "data_type",
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
                    "Destinations"
                ],
                "operation": [
                    "Get All Destinations"
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
                "displayName": "Unit Type",
                "name": "unit_type",
                "description": "Filter by `unit_type`",
                "default": "voice",
                "type": "options",
                "options": [
                    {
                        "name": "Voice",
                        "value": "voice"
                    },
                    {
                        "name": "Data",
                        "value": "data"
                    },
                    {
                        "name": "Sms",
                        "value": "sms"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "unit_type",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "description": "Filter by `supplier_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "supplier_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Supplier Platform Id",
                "name": "supplier_platform_id",
                "description": "Filter by `supplier_platform_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "supplier_platform_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Destination Group Id",
                "name": "destination_group_id",
                "description": "Filter by `destination_group_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "destination_group_id",
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