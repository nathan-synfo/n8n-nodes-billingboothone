import { INodeProperties } from 'n8n-workflow';

/**
 * Commission Plans resource description
 * Contains operation definitions and field configurations
 */
export const CommissionPlansFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Commission Plans",
        "value": "Get All Commission Plans",
        "action": "Get all plans",
        "description": "Retrieves all commission plans.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/commission/plan"
          }
        }
      },
      {
        "name": "Create Commission Plan",
        "value": "Create Commission Plan",
        "action": "Create commission plan",
        "description": "Create a commission plan.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/commission/plan"
          }
        }
      },
      {
        "name": "Delete Multiple Commission Plans",
        "value": "Delete Multiple Commission Plans",
        "action": "Delete multiple commission plans",
        "description": "Deletes all commission plans with an `id` matching the commission plan list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/commission/plan"
          }
        }
      },
      {
        "name": "Get Commission Plan",
        "value": "Get Commission Plan",
        "action": "Get a single commission plan",
        "description": "Retrieves a single commission plan.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/commission/plan/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Commission Plan",
        "value": "Update Commission Plan",
        "action": "Update commission plan",
        "description": "Updates an existing commission plan.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/commission/plan/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Commission Plan",
        "value": "Delete Commission Plan",
        "action": "Delete commission plan",
        "description": "Deletes a commission plan.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/commission/plan/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /commission/plan",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Get All Commission Plans"
        ]
      }
    }
  },
  {
    "displayName": "POST /commission/plan",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /commission/plan",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Delete Multiple Commission Plans"
        ]
      }
    }
  },
  {
    "displayName": "GET /commission/plan/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Get Commission Plan"
        ]
      }
    }
  },
  {
    "displayName": "PUT /commission/plan/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /commission/plan/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Delete Commission Plan"
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
          "Commission Plans"
        ],
        "operation": [
          "Get Commission Plan"
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
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
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
          "Commission Plans"
        ],
        "operation": [
          "Delete Commission Plan"
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
    "description": "Description of the commission plan",
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
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "default": "salePrice",
    "options": [
      {
        "name": "Sale Price",
        "value": "salePrice"
      },
      {
        "name": "Profit",
        "value": "profit"
      }
    ],
    "routing": {
      "send": {
        "property": "type",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Items",
    "name": "items",
    "type": "json",
    "default": "[\n  {\n    \"bands\": [\n      {}\n    ]\n  }\n]",
    "description": "Custom sell prices by tariff",
    "routing": {
      "send": {
        "property": "items",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Bands",
    "name": "bands",
    "type": "json",
    "default": "[\n  {}\n]",
    "description": "Custom sell prices by tariff",
    "routing": {
      "send": {
        "property": "bands",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
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
          "Commission Plans"
        ],
        "operation": [
          "Create Commission Plan"
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
        "displayName": "Include Loses",
        "name": "include_loses",
        "type": "boolean",
        "default": true,
        "description": "If `type` is `Profit` then include loses in the calculation",
        "routing": {
          "send": {
            "property": "include_loses",
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
          "Commission Plans"
        ],
        "operation": [
          "Delete Multiple Commission Plans"
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
    "description": "Description of the commission plan",
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
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "default": "salePrice",
    "options": [
      {
        "name": "Sale Price",
        "value": "salePrice"
      },
      {
        "name": "Profit",
        "value": "profit"
      }
    ],
    "routing": {
      "send": {
        "property": "type",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Items",
    "name": "items",
    "type": "json",
    "default": "[\n  {\n    \"bands\": [\n      {}\n    ]\n  }\n]",
    "description": "Custom sell prices by tariff",
    "routing": {
      "send": {
        "property": "items",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Bands",
    "name": "bands",
    "type": "json",
    "default": "[\n  {}\n]",
    "description": "Custom sell prices by tariff",
    "routing": {
      "send": {
        "property": "bands",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
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
          "Commission Plans"
        ],
        "operation": [
          "Update Commission Plan"
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
        "displayName": "Include Loses",
        "name": "include_loses",
        "type": "boolean",
        "default": true,
        "description": "If `type` is `Profit` then include loses in the calculation",
        "routing": {
          "send": {
            "property": "include_loses",
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
          "Commission Plans"
        ],
        "operation": [
          "Get All Commission Plans"
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
        "displayName": "Type",
        "name": "type",
        "description": "Filter by `type`",
        "default": "salePrice",
        "type": "options",
        "options": [
          {
            "name": "Sale Price",
            "value": "salePrice"
          },
          {
            "name": "Profit",
            "value": "profit"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "type",
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
