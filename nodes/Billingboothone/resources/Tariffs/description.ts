import { INodeProperties } from 'n8n-workflow';

/**
 * Tariffs resource description
 * Contains operation definitions and field configurations
 */
export const TariffsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Tariffs",
        "value": "Get All Tariffs",
        "action": "Get all tariffs",
        "description": "Retrieves all tariffs.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/tariff"
          }
        }
      },
      {
        "name": "Create Tariff",
        "value": "Create Tariff",
        "action": "Create tariff",
        "description": "Create a tariff.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/tariff"
          }
        }
      },
      {
        "name": "Delete Multiple Tariffs",
        "value": "Delete Multiple Tariffs",
        "action": "Delete multiple tariffs",
        "description": "Deletes all tariffs with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/tariff"
          }
        }
      },
      {
        "name": "Get Tariff",
        "value": "Get Tariff",
        "action": "Get a single tariff",
        "description": "Retrieves a single tariff.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/tariff/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Tariff",
        "value": "Update Tariff",
        "action": "Update tariff",
        "description": "Updates an existing tariff.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/tariff/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Tariff",
        "value": "Delete Tariff",
        "action": "Delete tariff",
        "description": "Deletes an existing tariff.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/tariff/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /tariff",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Get All Tariffs"
        ]
      }
    }
  },
  {
    "displayName": "POST /tariff",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Create Tariff"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /tariff",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Delete Multiple Tariffs"
        ]
      }
    }
  },
  {
    "displayName": "GET /tariff/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Get Tariff"
        ]
      }
    }
  },
  {
    "displayName": "PUT /tariff/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Update Tariff"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /tariff/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Delete Tariff"
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
          "Tariffs"
        ],
        "operation": [
          "Get Tariff"
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
          "Tariffs"
        ],
        "operation": [
          "Update Tariff"
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
          "Tariffs"
        ],
        "operation": [
          "Delete Tariff"
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
    "description": "Tariff name",
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
          "Tariffs"
        ],
        "operation": [
          "Create Tariff"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Category Id",
    "name": "category_id",
    "type": "number",
    "default": 0,
    "description": "Id of the associated category for the tariff",
    "routing": {
      "send": {
        "property": "category_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Create Tariff"
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
          "Tariffs"
        ],
        "operation": [
          "Create Tariff"
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
        "displayName": "Category Name",
        "name": "category_name",
        "type": "string",
        "default": "",
        "description": "Name of the associate category",
        "routing": {
          "send": {
            "property": "category_name",
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
          "Tariffs"
        ],
        "operation": [
          "Delete Multiple Tariffs"
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
    "description": "Tariff name",
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
          "Tariffs"
        ],
        "operation": [
          "Update Tariff"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Category Id",
    "name": "category_id",
    "type": "number",
    "default": 0,
    "description": "Id of the associated category for the tariff",
    "routing": {
      "send": {
        "property": "category_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Tariffs"
        ],
        "operation": [
          "Update Tariff"
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
          "Tariffs"
        ],
        "operation": [
          "Update Tariff"
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
        "displayName": "Category Name",
        "name": "category_name",
        "type": "string",
        "default": "",
        "description": "Name of the associate category",
        "routing": {
          "send": {
            "property": "category_name",
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
          "Tariffs"
        ],
        "operation": [
          "Get All Tariffs"
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
        "displayName": "Category Id",
        "name": "categoryId",
        "description": "Filter by `category_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "categoryId",
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
