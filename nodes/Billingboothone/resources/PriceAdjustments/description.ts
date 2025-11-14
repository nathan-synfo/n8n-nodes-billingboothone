import { INodeProperties } from 'n8n-workflow';

/**
 * Price Adjustments resource description
 * Contains operation definitions and field configurations
 */
export const PriceAdjustmentsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Price Adjustments",
        "value": "Get All Price Adjustments",
        "action": "Get all price adjustments",
        "description": "Retrieves all price adjustments.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/priceadjustment"
          }
        }
      },
      {
        "name": "Create Price Adjustment",
        "value": "Create Price Adjustment",
        "action": "Create price adjustment",
        "description": "Create a price adjustment.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/priceadjustment"
          }
        }
      },
      {
        "name": "Delete Multiple Price Adjustments",
        "value": "Delete Multiple Price Adjustments",
        "action": "Delete multiple price adjustments",
        "description": "Deletes all price adjustments with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/priceadjustment"
          }
        }
      },
      {
        "name": "Get Price Adjustment",
        "value": "Get Price Adjustment",
        "action": "Get a single price adjustment",
        "description": "Retrieves a single price adjustment.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/priceadjustment/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Price Adjustment",
        "value": "Update Price Adjustment",
        "action": "Update price adjustment",
        "description": "Updates an existing price adjustment.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/priceadjustment/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete D Price Adjustment",
        "value": "Delete D Price Adjustment",
        "action": "Delete price adjustment",
        "description": "Deletes an existing price adjustment.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/priceadjustment/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /priceadjustment",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Get All Price Adjustments"
        ]
      }
    }
  },
  {
    "displayName": "POST /priceadjustment",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Create Price Adjustment"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /priceadjustment",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Delete Multiple Price Adjustments"
        ]
      }
    }
  },
  {
    "displayName": "GET /priceadjustment/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Get Price Adjustment"
        ]
      }
    }
  },
  {
    "displayName": "PUT /priceadjustment/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Update Price Adjustment"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /priceadjustment/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Price Adjustments"
        ],
        "operation": [
          "Delete D Price Adjustment"
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
          "Price Adjustments"
        ],
        "operation": [
          "Get Price Adjustment"
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
          "Price Adjustments"
        ],
        "operation": [
          "Update Price Adjustment"
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
          "Price Adjustments"
        ],
        "operation": [
          "Delete D Price Adjustment"
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
          "Price Adjustments"
        ],
        "operation": [
          "Create Price Adjustment"
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
        "displayName": "Action",
        "name": "action",
        "type": "options",
        "default": "increase",
        "options": [
          {
            "name": "Increase",
            "value": "increase"
          },
          {
            "name": "Decrease",
            "value": "decrease"
          },
          {
            "name": "Fixed",
            "value": "fixed"
          }
        ],
        "routing": {
          "send": {
            "property": "action",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Adjustment Type",
        "name": "adjustment_type",
        "type": "options",
        "default": "absolute",
        "options": [
          {
            "name": "Absolute",
            "value": "absolute"
          },
          {
            "name": "Percentage",
            "value": "percentage"
          }
        ],
        "routing": {
          "send": {
            "property": "adjustment_type",
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
        "displayName": "Exclude Zero Pricing",
        "name": "exclude_zero_pricing",
        "type": "boolean",
        "default": true,
        "description": "If the pricing total is zero, do not apply this price adjustment",
        "routing": {
          "send": {
            "property": "exclude_zero_pricing",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Per Unit Modifier",
        "name": "per_unit_modifier",
        "type": "number",
        "default": 0,
        "description": "The per unit modifier, such as per minute, megabyte or SMS message",
        "routing": {
          "send": {
            "property": "per_unit_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Per Instance Modifier",
        "name": "per_instance_modifier",
        "type": "number",
        "default": 0,
        "description": "The modifier to apply per call. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "per_instance_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Minimum Charge Modifier",
        "name": "minimum_charge_modifier",
        "type": "number",
        "default": 0,
        "description": "Minimum charge per call modifier. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "minimum_charge_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Duration Block Modifier",
        "name": "duration_block_modifier",
        "type": "number",
        "default": 0,
        "description": "The duration block modifier. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "duration_block_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Destination Id",
        "name": "destination_id",
        "type": "number",
        "default": 0,
        "description": "Destination identifier if applicable",
        "routing": {
          "send": {
            "property": "destination_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Destination Name",
        "name": "destination_name",
        "type": "string",
        "default": "",
        "description": "Destination name if applicable",
        "routing": {
          "send": {
            "property": "destination_name",
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
      },
      {
        "displayName": "Tariff Id",
        "name": "tariff_id",
        "type": "number",
        "default": 0,
        "description": "Tariff identifier, if applicable",
        "routing": {
          "send": {
            "property": "tariff_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Tariff Name",
        "name": "tariff_name",
        "type": "string",
        "default": "",
        "description": "Tariff name, if applicable",
        "routing": {
          "send": {
            "property": "tariff_name",
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
        "description": "Customer identifier, if applicable",
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
        "displayName": "Customer Name",
        "name": "customer_name",
        "type": "string",
        "default": "",
        "description": "Customer name, if applicable",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "type": "number",
        "default": 0,
        "description": "Organisation identifier, if applicable",
        "routing": {
          "send": {
            "property": "organisation_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Organisation Name",
        "name": "organisation_name",
        "type": "string",
        "default": "",
        "description": "Organisation name, if applicable",
        "routing": {
          "send": {
            "property": "organisation_name",
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
          "Price Adjustments"
        ],
        "operation": [
          "Delete Multiple Price Adjustments"
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
          "Price Adjustments"
        ],
        "operation": [
          "Update Price Adjustment"
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
        "displayName": "Action",
        "name": "action",
        "type": "options",
        "default": "increase",
        "options": [
          {
            "name": "Increase",
            "value": "increase"
          },
          {
            "name": "Decrease",
            "value": "decrease"
          },
          {
            "name": "Fixed",
            "value": "fixed"
          }
        ],
        "routing": {
          "send": {
            "property": "action",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Adjustment Type",
        "name": "adjustment_type",
        "type": "options",
        "default": "absolute",
        "options": [
          {
            "name": "Absolute",
            "value": "absolute"
          },
          {
            "name": "Percentage",
            "value": "percentage"
          }
        ],
        "routing": {
          "send": {
            "property": "adjustment_type",
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
        "displayName": "Exclude Zero Pricing",
        "name": "exclude_zero_pricing",
        "type": "boolean",
        "default": true,
        "description": "If the pricing total is zero, do not apply this price adjustment",
        "routing": {
          "send": {
            "property": "exclude_zero_pricing",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Per Unit Modifier",
        "name": "per_unit_modifier",
        "type": "number",
        "default": 0,
        "description": "The per unit modifier, such as per minute, megabyte or SMS message",
        "routing": {
          "send": {
            "property": "per_unit_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Per Instance Modifier",
        "name": "per_instance_modifier",
        "type": "number",
        "default": 0,
        "description": "The modifier to apply per call. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "per_instance_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Minimum Charge Modifier",
        "name": "minimum_charge_modifier",
        "type": "number",
        "default": 0,
        "description": "Minimum charge per call modifier. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "minimum_charge_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Duration Block Modifier",
        "name": "duration_block_modifier",
        "type": "number",
        "default": 0,
        "description": "The duration block modifier. Only valid if the `unit_type` is `Voice`",
        "routing": {
          "send": {
            "property": "duration_block_modifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Destination Id",
        "name": "destination_id",
        "type": "number",
        "default": 0,
        "description": "Destination identifier if applicable",
        "routing": {
          "send": {
            "property": "destination_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Destination Name",
        "name": "destination_name",
        "type": "string",
        "default": "",
        "description": "Destination name if applicable",
        "routing": {
          "send": {
            "property": "destination_name",
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
      },
      {
        "displayName": "Tariff Id",
        "name": "tariff_id",
        "type": "number",
        "default": 0,
        "description": "Tariff identifier, if applicable",
        "routing": {
          "send": {
            "property": "tariff_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Tariff Name",
        "name": "tariff_name",
        "type": "string",
        "default": "",
        "description": "Tariff name, if applicable",
        "routing": {
          "send": {
            "property": "tariff_name",
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
        "description": "Customer identifier, if applicable",
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
        "displayName": "Customer Name",
        "name": "customer_name",
        "type": "string",
        "default": "",
        "description": "Customer name, if applicable",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "type": "number",
        "default": 0,
        "description": "Organisation identifier, if applicable",
        "routing": {
          "send": {
            "property": "organisation_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Organisation Name",
        "name": "organisation_name",
        "type": "string",
        "default": "",
        "description": "Organisation name, if applicable",
        "routing": {
          "send": {
            "property": "organisation_name",
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
          "Price Adjustments"
        ],
        "operation": [
          "Get All Price Adjustments"
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
        "displayName": "Tariff Id",
        "name": "tariff_id",
        "description": "Filter by `tariff_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "tariff_id",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Filter by `organisation_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "organisation_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: action, -action",
        "default": "action",
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
