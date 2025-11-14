import { INodeProperties } from 'n8n-workflow';

/**
 * Endpoints resource description
 * Contains operation definitions and field configurations
 */
export const EndpointsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Endpoints",
        "value": "Get All Endpoints",
        "action": "Get all endpoints",
        "description": "Retrieves all configured endpoints.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/webhooks/endpoint"
          }
        }
      },
      {
        "name": "Create Endpoint",
        "value": "Create Endpoint",
        "action": "Create endpoint",
        "description": "Create a webhook endpoint.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/webhooks/endpoint"
          }
        }
      },
      {
        "name": "Delete Multiple Endpoints",
        "value": "Delete Multiple Endpoints",
        "action": "Delete multiple endpoints",
        "description": "Deletes all webhook endpoints with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/webhooks/endpoint"
          }
        }
      },
      {
        "name": "Get Endpoint",
        "value": "Get Endpoint",
        "action": "Get a single endpoint",
        "description": "Retrieves a single webhook endpoint.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/webhooks/endpoint/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Endpoint",
        "value": "Update Endpoint",
        "action": "Update endpoint",
        "description": "Updates an existing webhook endpoint.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/webhooks/endpoint/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Endpoint",
        "value": "Delete Endpoint",
        "action": "Delete endpoint",
        "description": "Deletes an existing webhook endpoint.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/webhooks/endpoint/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Enable Multiple Endpoints",
        "value": "Enable Multiple Endpoints",
        "action": "Enable multiple endpoints",
        "description": "Enables all webhook endpoints with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/webhooks/endpoint/enable"
          }
        }
      },
      {
        "name": "Disable Multiple Endpoints",
        "value": "Disable Multiple Endpoints",
        "action": "Disable multiple endpoints",
        "description": "Disables all webhook endpoints with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/webhooks/endpoint/disable"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /webhooks/endpoint",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Get All Endpoints"
        ]
      }
    }
  },
  {
    "displayName": "POST /webhooks/endpoint",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Create Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /webhooks/endpoint",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Delete Multiple Endpoints"
        ]
      }
    }
  },
  {
    "displayName": "GET /webhooks/endpoint/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Get Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "PUT /webhooks/endpoint/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Update Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /webhooks/endpoint/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Delete Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "PUT /webhooks/endpoint/enable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Enable Multiple Endpoints"
        ]
      }
    }
  },
  {
    "displayName": "PUT /webhooks/endpoint/disable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Disable Multiple Endpoints"
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
          "Endpoints"
        ],
        "operation": [
          "Get Endpoint"
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
          "Endpoints"
        ],
        "operation": [
          "Update Endpoint"
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
          "Endpoints"
        ],
        "operation": [
          "Delete Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Url",
    "name": "url",
    "type": "string",
    "default": "",
    "description": "Endpoint URL, used for posting events",
    "routing": {
      "send": {
        "property": "url",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Create Endpoint"
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
          "Endpoints"
        ],
        "operation": [
          "Create Endpoint"
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
        "displayName": "Secret",
        "name": "secret",
        "type": "string",
        "default": "",
        "description": "Secret key to sign event messages with",
        "routing": {
          "send": {
            "property": "secret",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Invoices",
        "name": "subscription_invoices",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to invoice events",
        "routing": {
          "send": {
            "property": "subscription_invoices",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Payments",
        "name": "subscription_payments",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to payment events",
        "routing": {
          "send": {
            "property": "subscription_payments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Mandates",
        "name": "subscription_mandates",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to mandate events",
        "routing": {
          "send": {
            "property": "subscription_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Customers",
        "name": "subscription_customers",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to customer events",
        "routing": {
          "send": {
            "property": "subscription_customers",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Ledger",
        "name": "subscription_ledger",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to ledger events",
        "routing": {
          "send": {
            "property": "subscription_ledger",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Audit",
        "name": "subscription_audit",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to audit",
        "routing": {
          "send": {
            "property": "subscription_audit",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Credit Notes",
        "name": "subscription_credit_notes",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to credit notes",
        "routing": {
          "send": {
            "property": "subscription_credit_notes",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Enabled",
        "name": "is_enabled",
        "type": "boolean",
        "default": true,
        "description": "Enabled endpoints will receive events",
        "routing": {
          "send": {
            "property": "is_enabled",
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
          "Endpoints"
        ],
        "operation": [
          "Delete Multiple Endpoints"
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
    "displayName": "Url",
    "name": "url",
    "type": "string",
    "default": "",
    "description": "Endpoint URL, used for posting events",
    "routing": {
      "send": {
        "property": "url",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Update Endpoint"
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
          "Endpoints"
        ],
        "operation": [
          "Update Endpoint"
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
        "displayName": "Secret",
        "name": "secret",
        "type": "string",
        "default": "",
        "description": "Secret key to sign event messages with",
        "routing": {
          "send": {
            "property": "secret",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Invoices",
        "name": "subscription_invoices",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to invoice events",
        "routing": {
          "send": {
            "property": "subscription_invoices",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Payments",
        "name": "subscription_payments",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to payment events",
        "routing": {
          "send": {
            "property": "subscription_payments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Mandates",
        "name": "subscription_mandates",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to mandate events",
        "routing": {
          "send": {
            "property": "subscription_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Customers",
        "name": "subscription_customers",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to customer events",
        "routing": {
          "send": {
            "property": "subscription_customers",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Ledger",
        "name": "subscription_ledger",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to ledger events",
        "routing": {
          "send": {
            "property": "subscription_ledger",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Audit",
        "name": "subscription_audit",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to audit",
        "routing": {
          "send": {
            "property": "subscription_audit",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Subscription Credit Notes",
        "name": "subscription_credit_notes",
        "type": "boolean",
        "default": true,
        "description": "Subscribe to credit notes",
        "routing": {
          "send": {
            "property": "subscription_credit_notes",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Enabled",
        "name": "is_enabled",
        "type": "boolean",
        "default": true,
        "description": "Enabled endpoints will receive events",
        "routing": {
          "send": {
            "property": "is_enabled",
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
          "Endpoints"
        ],
        "operation": [
          "Enable Multiple Endpoints"
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
          "Endpoints"
        ],
        "operation": [
          "Disable Multiple Endpoints"
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
    "displayName": "Additional Fields",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "Endpoints"
        ],
        "operation": [
          "Get All Endpoints"
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
        "description": "Search url",
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
        "displayName": "Is Enabled",
        "name": "is_enabled",
        "description": "Filter by `is_enabled`",
        "default": true,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "is_enabled",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: url, -url",
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
