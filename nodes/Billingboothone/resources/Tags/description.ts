import { INodeProperties } from 'n8n-workflow';

/**
 * Tags resource description
 * Contains operation definitions and field configurations
 */
export const TagsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Tags",
        "value": "Get All Tags",
        "action": "Get all tag",
        "description": "Retrieves all tags.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/tag"
          }
        }
      },
      {
        "name": "Create Tag",
        "value": "Create Tag",
        "action": "Create tag",
        "description": "Creates a new tag.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/tag"
          }
        }
      },
      {
        "name": "Delete Multiple Tags",
        "value": "Delete Multiple Tags",
        "action": "Delete multiple tags",
        "description": "Deletes all tags with an `id` matching the supplied list",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/tag"
          }
        }
      },
      {
        "name": "Get Tag",
        "value": "Get Tag",
        "action": "Get a single tag",
        "description": "Retrieves a single tag.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/tag/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Tag",
        "value": "Update Tag",
        "action": "Update tag",
        "description": "Updates an existing tag.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/tag/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Tag",
        "value": "Delete Tag",
        "action": "Delete tag",
        "description": "Deletes an existing tag.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/tag/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /tag",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Get All Tags"
        ]
      }
    }
  },
  {
    "displayName": "POST /tag",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Create Tag"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /tag",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Delete Multiple Tags"
        ]
      }
    }
  },
  {
    "displayName": "GET /tag/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Get Tag"
        ]
      }
    }
  },
  {
    "displayName": "PUT /tag/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Update Tag"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /tag/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Delete Tag"
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
          "Tags"
        ],
        "operation": [
          "Get Tag"
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
          "Tags"
        ],
        "operation": [
          "Update Tag"
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
          "Tags"
        ],
        "operation": [
          "Delete Tag"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Description",
    "name": "description",
    "type": "string",
    "default": "",
    "description": "Unique alphanumerical tag name",
    "routing": {
      "send": {
        "property": "description",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Create Tag"
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
          "Tags"
        ],
        "operation": [
          "Create Tag"
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
        "displayName": "Customer Count",
        "name": "customer_count",
        "type": "number",
        "default": 0,
        "description": "Number of customers associated to this tag",
        "routing": {
          "send": {
            "property": "customer_count",
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
          "Tags"
        ],
        "operation": [
          "Delete Multiple Tags"
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
    "displayName": "Description",
    "name": "description",
    "type": "string",
    "default": "",
    "description": "Unique alphanumerical tag name",
    "routing": {
      "send": {
        "property": "description",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Tags"
        ],
        "operation": [
          "Update Tag"
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
          "Tags"
        ],
        "operation": [
          "Update Tag"
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
        "displayName": "Customer Count",
        "name": "customer_count",
        "type": "number",
        "default": 0,
        "description": "Number of customers associated to this tag",
        "routing": {
          "send": {
            "property": "customer_count",
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
          "Tags"
        ],
        "operation": [
          "Get All Tags"
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
        "description": "Search description",
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
        "description": "Sort order of results. Possible values include: description, -description",
        "default": "description",
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
