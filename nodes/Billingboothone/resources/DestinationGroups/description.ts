import { INodeProperties } from 'n8n-workflow';

/**
 * Destination Groups resource description
 * Contains operation definitions and field configurations
 */
export const DestinationGroupsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Destination Groups",
        "value": "Get All Destination Groups",
        "action": "Get all destination groups",
        "description": "Retrieves all destination groups.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/destinationgroup"
          }
        }
      },
      {
        "name": "Create Destination Group",
        "value": "Create Destination Group",
        "action": "Create destination group",
        "description": "Create a destination group.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/destinationgroup"
          }
        }
      },
      {
        "name": "Delete Multiple Destination Groups",
        "value": "Delete Multiple Destination Groups",
        "action": "Delete multiple destination groups",
        "description": "Deletes all destination groups.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/destinationgroup"
          }
        }
      },
      {
        "name": "Get Destination Group",
        "value": "Get Destination Group",
        "action": "Get a single destination group",
        "description": "Retrieves a single destination group.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/destinationgroup/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Destination Group",
        "value": "Update Destination Group",
        "action": "Update destination group",
        "description": "Updates an existing destination group.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/destinationgroup/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Destination Group",
        "value": "Delete Destination Group",
        "action": "Delete destination group",
        "description": "Deletes an existing destination group.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/destinationgroup/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /destinationgroup",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Get All Destination Groups"
        ]
      }
    }
  },
  {
    "displayName": "POST /destinationgroup",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Create Destination Group"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /destinationgroup",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Delete Multiple Destination Groups"
        ]
      }
    }
  },
  {
    "displayName": "GET /destinationgroup/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Get Destination Group"
        ]
      }
    }
  },
  {
    "displayName": "PUT /destinationgroup/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Update Destination Group"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /destinationgroup/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Destination Groups"
        ],
        "operation": [
          "Delete Destination Group"
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
          "Destination Groups"
        ],
        "operation": [
          "Get Destination Group"
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
          "Destination Groups"
        ],
        "operation": [
          "Update Destination Group"
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
          "Destination Groups"
        ],
        "operation": [
          "Delete Destination Group"
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
          "Destination Groups"
        ],
        "operation": [
          "Create Destination Group"
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
        "description": "Descriptive name of the destination group",
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
          "Destination Groups"
        ],
        "operation": [
          "Delete Multiple Destination Groups"
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
          "Destination Groups"
        ],
        "operation": [
          "Update Destination Group"
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
        "description": "Descriptive name of the destination group",
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
          "Destination Groups"
        ],
        "operation": [
          "Get All Destination Groups"
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
