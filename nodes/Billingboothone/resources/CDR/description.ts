import { INodeProperties } from 'n8n-workflow';

/**
 * CDR resource description
 * Contains operation definitions and field configurations
 */
export const CDRFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Cdrs",
        "value": "Get All Cdrs",
        "action": "Get all CDR files",
        "description": "Retrieves all CDR files.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr"
          }
        }
      },
      {
        "name": "Upload Cdr",
        "value": "Upload Cdr",
        "action": "Upload CDR",
        "description": "Upload one or more CDR files.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/cdr"
          }
        }
      },
      {
        "name": "Delete Multiple Cdrs",
        "value": "Delete Multiple Cdrs",
        "action": "Delete CDRs",
        "description": "Deletes all CDRs with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/cdr"
          }
        }
      },
      {
        "name": "Download Cdr",
        "value": "Download Cdr",
        "action": "Download CDR file",
        "description": "Downloads the binary CDR file.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/{{$parameter[\"id\"]}}/download"
          }
        }
      },
      {
        "name": "Apply Pricing",
        "value": "Apply Pricing",
        "action": "Apply pricing",
        "description": "Applies pricing the selected range of voice, data & SMS records.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/cdr/apply"
          }
        }
      },
      {
        "name": "Cdr Action Status",
        "value": "Cdr Action Status",
        "action": "Check CDR action status",
        "description": "Gets the current status ",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/action/status"
          }
        }
      },
      {
        "name": "Delete Cdr",
        "value": "Delete Cdr",
        "action": "Delete CDR",
        "description": "Deletes a CDR file along with all associated records.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/cdr/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Cdr Export",
        "value": "Cdr Export",
        "action": "Export CDR records",
        "description": "Export a criteria of customer voice, data & SMS records to either CDR, CSV or PDF.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/cdr/export"
          }
        }
      },
      {
        "name": "Get All Cdr Records",
        "value": "Get All Cdr Records",
        "action": "Get all CDR records",
        "description": "Retrieves all CDR records.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/records"
          }
        }
      },
      {
        "name": "Get CDR Details",
        "value": "Get CDR Details",
        "action": "Get CDR Details By Id",
        "description": "Gets call detail record details for the id provided.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/records/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /cdr",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Get All Cdrs"
        ]
      }
    }
  },
  {
    "displayName": "POST /cdr",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Upload Cdr"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /cdr",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Delete Multiple Cdrs"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/{id}/download",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Download Cdr"
        ]
      }
    }
  },
  {
    "displayName": "POST /cdr/apply",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Apply Pricing"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/action/status",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Cdr Action Status"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /cdr/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Delete Cdr"
        ]
      }
    }
  },
  {
    "displayName": "GET /customer/{customerId}/cdr/export",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Cdr Export"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/records",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Get All Cdr Records"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/records/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Get CDR Details"
        ]
      }
    }
  },
  {
    "displayName": "Binary Property",
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "description": "Name of the binary property containing the file to upload",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Upload Cdr"
        ]
      }
    }
  },
  {
    "displayName": "Supplier Id",
    "name": "supplier_id",
    "description": "Supplier",
    "default": 1,
    "type": "number",
    "routing": {
      "send": {
        "type": "query",
        "property": "supplier_id",
        "value": "={{ $value }}",
        "propertyInDotNotation": false
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Upload Cdr"
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
          "CDR"
        ],
        "operation": [
          "Download Cdr"
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
          "CDR"
        ],
        "operation": [
          "Delete Cdr"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR"
        ],
        "operation": [
          "Cdr Export"
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
          "CDR"
        ],
        "operation": [
          "Get CDR Details"
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
          "CDR"
        ],
        "operation": [
          "Delete Multiple Cdrs"
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
          "CDR"
        ],
        "operation": [
          "Apply Pricing"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "type": "string",
        "default": "",
        "description": "From date/time period",
        "routing": {
          "send": {
            "property": "from",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "To",
        "name": "to",
        "type": "string",
        "default": "",
        "description": "To date/time period",
        "routing": {
          "send": {
            "property": "to",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "One or more CDR files",
        "routing": {
          "send": {
            "property": "cdr_file_id",
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
          "CDR"
        ],
        "operation": [
          "Get All Cdrs"
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
        "displayName": "Id",
        "name": "id",
        "description": "Filter by `id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Search",
        "name": "search",
        "description": "Search file name",
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
        "displayName": "From",
        "name": "from",
        "description": "From date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "from",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "To",
        "name": "to",
        "description": "To date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "to",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "description": "Filter by status",
        "default": "queued",
        "type": "options",
        "options": [
          {
            "name": "Queued",
            "value": "queued"
          },
          {
            "name": "Processing",
            "value": "processing"
          },
          {
            "name": "Processed",
            "value": "processed"
          },
          {
            "name": "Error",
            "value": "error"
          },
          {
            "name": "Deleting",
            "value": "deleting"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "status",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, created_at, -created_at",
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
          "CDR"
        ],
        "operation": [
          "Upload Cdr"
        ]
      }
    },
    "options": [
      {
        "displayName": "Supplier Platform Id",
        "name": "supplier_platform_id",
        "description": "Supplier platform",
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
          "CDR"
        ],
        "operation": [
          "Cdr Export"
        ]
      }
    },
    "options": [
      {
        "displayName": "Format",
        "name": "format",
        "description": "Cdr output format",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "format",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "From",
        "name": "from",
        "description": "From date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "from",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "To",
        "name": "to",
        "description": "To date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "to",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Cf Id",
        "name": "cfId",
        "description": "CDR file ids",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cfId",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Call Amount Threshold",
        "name": "callAmountThreshold",
        "description": "Call amount threshold",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "callAmountThreshold",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Threshold Include Bundled Calls",
        "name": "thresholdIncludeBundledCalls",
        "description": "Threshold include bundled calls",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "thresholdIncludeBundledCalls",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
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
          "CDR"
        ],
        "operation": [
          "Get All Cdr Records"
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "Filter by one or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "From",
        "name": "from",
        "description": "Filter by `from`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "from",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "To",
        "name": "to",
        "description": "Filter by `to`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "to",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -date, date",
        "default": "-date",
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
