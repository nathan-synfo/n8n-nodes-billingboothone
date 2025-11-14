import { INodeProperties } from 'n8n-workflow';

/**
 * Cost Centres resource description
 * Contains operation definitions and field configurations
 */
export const CostCentresFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Cost Centres",
        "value": "Get All Cost Centres",
        "action": "Get all cost centres",
        "description": "Retrieves all cost centres for the associated `customer_id`.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre"
          }
        }
      },
      {
        "name": "Create Cost Centre",
        "value": "Create Cost Centre",
        "action": "Create cost centre",
        "description": "Create a cost centre.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre"
          }
        }
      },
      {
        "name": "Delete Multiple Cost Centres",
        "value": "Delete Multiple Cost Centres",
        "action": "Delete multiple cost centres",
        "description": "Deletes all cost centres with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre"
          }
        }
      },
      {
        "name": "Get Cost Centre",
        "value": "Get Cost Centre",
        "action": "Get a single cost centre",
        "description": "Retrieves a single cost centre.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Cost Centre",
        "value": "Update Cost Centre",
        "action": "Update cost centre",
        "description": "Updates an existing cost centre.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Cost Centre",
        "value": "Delete Cost Centre",
        "action": "Delete cost centre",
        "description": "Deletes an existing cost centre.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/costcentre/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /customer/{customerId}/costcentre",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Get All Cost Centres"
        ]
      }
    }
  },
  {
    "displayName": "POST /customer/{customerId}/costcentre",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Create Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/costcentre",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Delete Multiple Cost Centres"
        ]
      }
    }
  },
  {
    "displayName": "GET /customer/{customerId}/costcentre/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Get Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "PUT /customer/{customerId}/costcentre/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Update Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/costcentre/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Delete Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Get All Cost Centres"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Create Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Delete Multiple Cost Centres"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Get Cost Centre"
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
          "Cost Centres"
        ],
        "operation": [
          "Get Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Update Cost Centre"
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
          "Cost Centres"
        ],
        "operation": [
          "Update Cost Centre"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Customer unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Cost Centres"
        ],
        "operation": [
          "Delete Cost Centre"
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
          "Cost Centres"
        ],
        "operation": [
          "Delete Cost Centre"
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
    "description": "Cost Centre Name",
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
          "Cost Centres"
        ],
        "operation": [
          "Create Cost Centre"
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
          "Cost Centres"
        ],
        "operation": [
          "Create Cost Centre"
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
        "displayName": "Reference",
        "name": "reference",
        "type": "string",
        "default": "",
        "description": "Cost Centre Reference",
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
        "displayName": "Address",
        "name": "address",
        "type": "json",
        "default": "{}",
        "routing": {
          "send": {
            "property": "address",
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
          "Cost Centres"
        ],
        "operation": [
          "Delete Multiple Cost Centres"
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
    "description": "Cost Centre Name",
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
          "Cost Centres"
        ],
        "operation": [
          "Update Cost Centre"
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
          "Cost Centres"
        ],
        "operation": [
          "Update Cost Centre"
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
        "displayName": "Reference",
        "name": "reference",
        "type": "string",
        "default": "",
        "description": "Cost Centre Reference",
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
        "displayName": "Address",
        "name": "address",
        "type": "json",
        "default": "{}",
        "routing": {
          "send": {
            "property": "address",
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
          "Cost Centres"
        ],
        "operation": [
          "Get All Cost Centres"
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, reference, -reference",
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
