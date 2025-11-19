import { INodeProperties } from 'n8n-workflow';

/**
 * Customer Access Banner resource description
 * Contains operation definitions and field configurations
 */
export const CustomerAccessBannerFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Customer Access Banners",
        "value": "Get All Customer Access Banners",
        "action": "Get all banners",
        "description": "Retrieves all customer access banners.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners"
          }
        }
      },
      {
        "name": "Create Customer Access Banner",
        "value": "Create Customer Access Banner",
        "action": "Create banner",
        "description": "Create a customer access banner.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners"
          }
        }
      },
      {
        "name": "Delete Multiple Customer Access Banners",
        "value": "Delete Multiple Customer Access Banners",
        "action": "Delete multiple banners",
        "description": "Deletes all customer access banners with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners"
          }
        }
      },
      {
        "name": "Get Customer Access Banner",
        "value": "Get Customer Access Banner",
        "action": "Get a single banner",
        "description": "Retrieves a single banner.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Customer Access Banner",
        "value": "Update Customer Access Banner",
        "action": "Update banner",
        "description": "Updates an existing customer access banner.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Customer Access Banner",
        "value": "Delete Customer Access Banner",
        "action": "Delete banner",
        "description": "Deletes an existing customer access banner.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Customer Access Banner Image",
        "value": "Update Customer Access Banner Image",
        "action": "Update banner image",
        "description": "Updates an existing customer access banner image.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners/{{$parameter[\"id\"]}}/image"
          }
        }
      },
      {
        "name": "Get Customer Access Banner Image",
        "value": "Get Customer Access Banner Image",
        "action": "Get banner image",
        "description": "Retrieves the customer access banner image.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/banners/{{$parameter[\"id\"]}}/image"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /settings/access/{organisationId}/banners",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get All Customer Access Banners"
        ]
      }
    }
  },
  {
    "displayName": "POST /settings/access/{organisationId}/banners",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Create Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/banners",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Multiple Customer Access Banners"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/banners/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/banners/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/banners/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/banners/{id}/image",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner Image"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/banners/{id}/image",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner Image"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get All Customer Access Banners"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Create Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Multiple Customer Access Banners"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Customer Access Banner"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Customer Access Banner"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner Image"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner Image"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner Image"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Get Customer Access Banner Image"
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
    "description": "Banner description",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Create Customer Access Banner"
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
    "description": "Destination Url when banner gets clicked",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Create Customer Access Banner"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Create Customer Access Banner"
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
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": "",
        "description": "Accessibility text",
        "routing": {
          "send": {
            "property": "title",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Light",
        "name": "display_light",
        "type": "boolean",
        "default": true,
        "description": "Display banner under light theme",
        "routing": {
          "send": {
            "property": "display_light",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Dark",
        "name": "display_dark",
        "type": "boolean",
        "default": true,
        "description": "Display banner under dark theme",
        "routing": {
          "send": {
            "property": "display_dark",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Clicks",
        "name": "clicks",
        "type": "number",
        "default": 0,
        "description": "Total number of clicks",
        "routing": {
          "send": {
            "property": "clicks",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Delete Multiple Customer Access Banners"
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
    "description": "Banner description",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
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
    "description": "Destination Url when banner gets clicked",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
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
          "Customer Access Banner"
        ],
        "operation": [
          "Update Customer Access Banner"
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
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": "",
        "description": "Accessibility text",
        "routing": {
          "send": {
            "property": "title",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Light",
        "name": "display_light",
        "type": "boolean",
        "default": true,
        "description": "Display banner under light theme",
        "routing": {
          "send": {
            "property": "display_light",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Dark",
        "name": "display_dark",
        "type": "boolean",
        "default": true,
        "description": "Display banner under dark theme",
        "routing": {
          "send": {
            "property": "display_dark",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Clicks",
        "name": "clicks",
        "type": "number",
        "default": 0,
        "description": "Total number of clicks",
        "routing": {
          "send": {
            "property": "clicks",
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
          "Customer Access Banner"
        ],
        "operation": [
          "Get All Customer Access Banners"
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: description, -description, clicks, -clicks",
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
