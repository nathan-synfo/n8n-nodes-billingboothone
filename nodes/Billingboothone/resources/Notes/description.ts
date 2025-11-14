import { INodeProperties } from 'n8n-workflow';

/**
 * Notes resource description
 * Contains operation definitions and field configurations
 */
export const NotesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Customer Notes",
        "value": "Get All Customer Notes",
        "action": "Get all notes",
        "description": "Retrieves all customer notes.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note"
          }
        }
      },
      {
        "name": "Create Note",
        "value": "Create Note",
        "action": "Create note",
        "description": "Create a customer note.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note"
          }
        }
      },
      {
        "name": "Delete Multiple Notes",
        "value": "Delete Multiple Notes",
        "action": "Delete multiple notes",
        "description": "Deletes all notes with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note"
          }
        }
      },
      {
        "name": "Get Note",
        "value": "Get Note",
        "action": "Get a single note",
        "description": "Retrieves a single customer note.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Note",
        "value": "Update Note",
        "action": "Update note",
        "description": "Updates an existing note.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Note",
        "value": "Delete Note",
        "action": "Delete note",
        "description": "Deletes an existing note.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/note/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /customer/{customerId}/note",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Get All Customer Notes"
        ]
      }
    }
  },
  {
    "displayName": "POST /customer/{customerId}/note",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Create Note"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/note",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Delete Multiple Notes"
        ]
      }
    }
  },
  {
    "displayName": "GET /customer/{customerId}/note/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Get Note"
        ]
      }
    }
  },
  {
    "displayName": "PUT /customer/{customerId}/note/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Update Note"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/note/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Delete Note"
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
          "Notes"
        ],
        "operation": [
          "Get All Customer Notes"
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
          "Notes"
        ],
        "operation": [
          "Create Note"
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
          "Notes"
        ],
        "operation": [
          "Delete Multiple Notes"
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
          "Notes"
        ],
        "operation": [
          "Get Note"
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
          "Notes"
        ],
        "operation": [
          "Get Note"
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
          "Notes"
        ],
        "operation": [
          "Update Note"
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
          "Notes"
        ],
        "operation": [
          "Update Note"
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
          "Notes"
        ],
        "operation": [
          "Delete Note"
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
          "Notes"
        ],
        "operation": [
          "Delete Note"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "default": "",
    "description": "Content",
    "routing": {
      "send": {
        "property": "content",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Create Note"
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
          "Notes"
        ],
        "operation": [
          "Create Note"
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
        "displayName": "Created At",
        "name": "created_at",
        "type": "string",
        "default": "",
        "description": "Date/time the note was created",
        "routing": {
          "send": {
            "property": "created_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Created By",
        "name": "created_by",
        "type": "string",
        "default": "",
        "description": "Author of the note",
        "routing": {
          "send": {
            "property": "created_by",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Updated At",
        "name": "last_updated_at",
        "type": "string",
        "default": "",
        "description": "Last date/time when the note was updated, if applicable",
        "routing": {
          "send": {
            "property": "last_updated_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Updated By",
        "name": "last_updated_by",
        "type": "string",
        "default": "",
        "description": "Author of the last update",
        "routing": {
          "send": {
            "property": "last_updated_by",
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
          "Notes"
        ],
        "operation": [
          "Delete Multiple Notes"
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
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "default": "",
    "description": "Content",
    "routing": {
      "send": {
        "property": "content",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Notes"
        ],
        "operation": [
          "Update Note"
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
          "Notes"
        ],
        "operation": [
          "Update Note"
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
        "displayName": "Created At",
        "name": "created_at",
        "type": "string",
        "default": "",
        "description": "Date/time the note was created",
        "routing": {
          "send": {
            "property": "created_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Created By",
        "name": "created_by",
        "type": "string",
        "default": "",
        "description": "Author of the note",
        "routing": {
          "send": {
            "property": "created_by",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Updated At",
        "name": "last_updated_at",
        "type": "string",
        "default": "",
        "description": "Last date/time when the note was updated, if applicable",
        "routing": {
          "send": {
            "property": "last_updated_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Updated By",
        "name": "last_updated_by",
        "type": "string",
        "default": "",
        "description": "Author of the last update",
        "routing": {
          "send": {
            "property": "last_updated_by",
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
          "Notes"
        ],
        "operation": [
          "Get All Customer Notes"
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
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: created, -created",
        "default": "-created",
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
