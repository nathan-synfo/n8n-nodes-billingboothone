import { INodeProperties } from 'n8n-workflow';

/**
 * Suppliers resource description
 * Contains operation definitions and field configurations
 */
export const SuppliersFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Suppliers",
        "value": "Get All Suppliers",
        "action": "Get all suppliers",
        "description": "Retrieves all suppliers.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/supplier"
          }
        }
      },
      {
        "name": "Create Supplier",
        "value": "Create Supplier",
        "action": "Create supplier",
        "description": "Create a supplier.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/supplier"
          }
        }
      },
      {
        "name": "Delete Multiple Suppliers",
        "value": "Delete Multiple Suppliers",
        "action": "Delete multiple suppliers",
        "description": "Deletes all suppliers with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/supplier"
          }
        }
      },
      {
        "name": "Get Supplier",
        "value": "Get Supplier",
        "action": "Get a single supplier",
        "description": "Retrieves a single supplier.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/supplier/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Supplier",
        "value": "Update Supplier",
        "action": "Update supplier",
        "description": "Updates an existing supplier.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/supplier/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Supplier",
        "value": "Delete Supplier",
        "action": "Delete supplier",
        "description": "Deletes an existing supplier.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/supplier/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Get Supplier Cdr",
        "value": "Get Supplier Cdr",
        "action": "Get supplier CDR parser",
        "description": "Retrieves the CDR parser of the supplier.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/supplier/{{$parameter[\"id\"]}}/cdr"
          }
        }
      },
      {
        "name": "Update Supplier Cdr",
        "value": "Update Supplier Cdr",
        "action": "Update supplier CDR parser",
        "description": "Updates an existing supplier's CDR parser code.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/supplier/{{$parameter[\"id\"]}}/cdr"
          }
        }
      },
      {
        "name": "Get Supplier Service File",
        "value": "Get Supplier Service File",
        "action": "Get supplier Service File parser",
        "description": "Retrieves the service file parser of the supplier.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/supplier/{{$parameter[\"id\"]}}/servicefile"
          }
        }
      },
      {
        "name": "Update Supplier Service File",
        "value": "Update Supplier Service File",
        "action": "Update supplier Service File parser",
        "description": "Updates an existing supplier's Service File parser code.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/supplier/{{$parameter[\"id\"]}}/servicefile"
          }
        }
      },
      {
        "name": "Test Supplier Cdr",
        "value": "Test Supplier Cdr",
        "action": "Test CDR parser",
        "description": "Tests the CDR parser settings against a sample file.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/supplier/{{$parameter[\"id\"]}}/cdr/test"
          }
        }
      },
      {
        "name": "Test Supplier Service File",
        "value": "Test Supplier Service File",
        "action": "Test Service FIle parser",
        "description": "Tests the Service File parser settings against a sample file.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/supplier/{{$parameter[\"id\"]}}/servicefile/test"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /supplier",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Get All Suppliers"
        ]
      }
    }
  },
  {
    "displayName": "POST /supplier",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Create Supplier"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /supplier",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Delete Multiple Suppliers"
        ]
      }
    }
  },
  {
    "displayName": "GET /supplier/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Get Supplier"
        ]
      }
    }
  },
  {
    "displayName": "PUT /supplier/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Update Supplier"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /supplier/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Delete Supplier"
        ]
      }
    }
  },
  {
    "displayName": "GET /supplier/{id}/cdr",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Get Supplier Cdr"
        ]
      }
    }
  },
  {
    "displayName": "PUT /supplier/{id}/cdr",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Cdr"
        ]
      }
    }
  },
  {
    "displayName": "GET /supplier/{id}/servicefile",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Get Supplier Service File"
        ]
      }
    }
  },
  {
    "displayName": "PUT /supplier/{id}/servicefile",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Service File"
        ]
      }
    }
  },
  {
    "displayName": "POST /supplier/{id}/cdr/test",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Cdr"
        ]
      }
    }
  },
  {
    "displayName": "POST /supplier/{id}/servicefile/test",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Service File"
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
          "Suppliers"
        ],
        "operation": [
          "Get Supplier"
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier"
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
          "Suppliers"
        ],
        "operation": [
          "Delete Supplier"
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
          "Suppliers"
        ],
        "operation": [
          "Get Supplier Cdr"
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Cdr"
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
          "Suppliers"
        ],
        "operation": [
          "Get Supplier Service File"
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Service File"
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
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Cdr"
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
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Service File"
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
    "description": "Supplier name",
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
          "Suppliers"
        ],
        "operation": [
          "Create Supplier"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Cdr Sell Price Decimal Places",
    "name": "cdr_sell_price_decimal_places",
    "type": "number",
    "default": 0,
    "description": "Rounding of the CDR Sell Price",
    "routing": {
      "send": {
        "property": "cdr_sell_price_decimal_places",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Create Supplier"
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
          "Suppliers"
        ],
        "operation": [
          "Create Supplier"
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
        "displayName": "Parser Identifier",
        "name": "parser_identifier",
        "type": "string",
        "default": "",
        "description": "File parser identifier",
        "routing": {
          "send": {
            "property": "parser_identifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Has Cdr Support",
        "name": "has_cdr_support",
        "type": "boolean",
        "default": true,
        "description": "True if supplier supports parsing CDRs",
        "routing": {
          "send": {
            "property": "has_cdr_support",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Version",
        "name": "cdr_parser_version",
        "type": "number",
        "default": 0,
        "description": "Cdr parser version",
        "routing": {
          "send": {
            "property": "cdr_parser_version",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Has Service File Support",
        "name": "has_service_file_support",
        "type": "boolean",
        "default": true,
        "description": "True if supplier supports parsing service files",
        "routing": {
          "send": {
            "property": "has_service_file_support",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Version",
        "name": "service_file_parser_version",
        "type": "number",
        "default": 0,
        "description": "Service file parser version",
        "routing": {
          "send": {
            "property": "service_file_parser_version",
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
          "Suppliers"
        ],
        "operation": [
          "Delete Multiple Suppliers"
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
    "description": "Supplier name",
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Cdr Sell Price Decimal Places",
    "name": "cdr_sell_price_decimal_places",
    "type": "number",
    "default": 0,
    "description": "Rounding of the CDR Sell Price",
    "routing": {
      "send": {
        "property": "cdr_sell_price_decimal_places",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Suppliers"
        ],
        "operation": [
          "Update Supplier"
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier"
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
        "displayName": "Parser Identifier",
        "name": "parser_identifier",
        "type": "string",
        "default": "",
        "description": "File parser identifier",
        "routing": {
          "send": {
            "property": "parser_identifier",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Has Cdr Support",
        "name": "has_cdr_support",
        "type": "boolean",
        "default": true,
        "description": "True if supplier supports parsing CDRs",
        "routing": {
          "send": {
            "property": "has_cdr_support",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Version",
        "name": "cdr_parser_version",
        "type": "number",
        "default": 0,
        "description": "Cdr parser version",
        "routing": {
          "send": {
            "property": "cdr_parser_version",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Has Service File Support",
        "name": "has_service_file_support",
        "type": "boolean",
        "default": true,
        "description": "True if supplier supports parsing service files",
        "routing": {
          "send": {
            "property": "has_service_file_support",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Version",
        "name": "service_file_parser_version",
        "type": "number",
        "default": 0,
        "description": "Service file parser version",
        "routing": {
          "send": {
            "property": "service_file_parser_version",
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Cdr"
        ]
      }
    },
    "options": [
      {
        "displayName": "Enabled",
        "name": "enabled",
        "type": "boolean",
        "default": true,
        "description": "Can we support a CDR from this supplier?",
        "routing": {
          "send": {
            "property": "enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Type",
        "name": "cdr_parser_type",
        "type": "options",
        "default": "csv",
        "options": [
          {
            "name": "Csv",
            "value": "csv"
          },
          {
            "name": "Tsv",
            "value": "tsv"
          }
        ],
        "routing": {
          "send": {
            "property": "cdr_parser_type",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Match Type",
        "name": "cdr_match_type",
        "type": "options",
        "default": "exact",
        "options": [
          {
            "name": "Exact",
            "value": "exact"
          },
          {
            "name": "Recursive",
            "value": "recursive"
          }
        ],
        "routing": {
          "send": {
            "property": "cdr_match_type",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Has Header",
        "name": "cdr_has_header",
        "type": "boolean",
        "default": true,
        "description": "Has the CDR file got a header?",
        "routing": {
          "send": {
            "property": "cdr_has_header",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Start At Row",
        "name": "cdr_start_at_row",
        "type": "number",
        "default": 0,
        "description": "Optional start at line X on the file",
        "routing": {
          "send": {
            "property": "cdr_start_at_row",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Delimiter",
        "name": "cdr_delimiter",
        "type": "string",
        "default": "",
        "description": "Optional delimiter separating character on the file",
        "routing": {
          "send": {
            "property": "cdr_delimiter",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Validate Header Code",
        "name": "cdr_validate_header_code",
        "type": "string",
        "default": "",
        "description": "Optional Javascript code to validate the CDR file format",
        "routing": {
          "send": {
            "property": "cdr_validate_header_code",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parse Row Code",
        "name": "cdr_parse_row_code",
        "type": "string",
        "default": "",
        "description": "Javascript code to parse each CDR row",
        "routing": {
          "send": {
            "property": "cdr_parse_row_code",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Version",
        "name": "cdr_parser_version",
        "type": "number",
        "default": 0,
        "description": "Cdr parser version",
        "routing": {
          "send": {
            "property": "cdr_parser_version",
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
          "Suppliers"
        ],
        "operation": [
          "Update Supplier Service File"
        ]
      }
    },
    "options": [
      {
        "displayName": "Enabled",
        "name": "enabled",
        "type": "boolean",
        "default": true,
        "description": "Can we support a service file from this supplier?",
        "routing": {
          "send": {
            "property": "enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Type",
        "name": "service_file_parser_type",
        "type": "options",
        "default": "csv",
        "options": [
          {
            "name": "Csv",
            "value": "csv"
          },
          {
            "name": "Tsv",
            "value": "tsv"
          }
        ],
        "routing": {
          "send": {
            "property": "service_file_parser_type",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Has Header",
        "name": "service_file_has_header",
        "type": "boolean",
        "default": true,
        "description": "Has the service file got a header?",
        "routing": {
          "send": {
            "property": "service_file_has_header",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Start At Row",
        "name": "service_file_start_at_row",
        "type": "number",
        "default": 0,
        "description": "Optional start at line X on the file",
        "routing": {
          "send": {
            "property": "service_file_start_at_row",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Delimiter",
        "name": "service_file_delimiter",
        "type": "string",
        "default": "",
        "description": "Optional delimiter separating character on the file",
        "routing": {
          "send": {
            "property": "service_file_delimiter",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Validate Header Code",
        "name": "service_file_validate_header_code",
        "type": "string",
        "default": "",
        "description": "Optional Javascript code to validate the service file format",
        "routing": {
          "send": {
            "property": "service_file_validate_header_code",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parse Row Code",
        "name": "service_file_parse_row_code",
        "type": "string",
        "default": "",
        "description": "Javascript code to parse each service file row",
        "routing": {
          "send": {
            "property": "service_file_parse_row_code",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Version",
        "name": "service_file_parser_version",
        "type": "number",
        "default": 0,
        "description": "Service file parser version",
        "routing": {
          "send": {
            "property": "service_file_parser_version",
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
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Cdr"
        ]
      }
    },
    "options": [
      {
        "displayName": "Enabled",
        "name": "Enabled",
        "type": "boolean",
        "default": true,
        "description": "Can we support a CDR from this supplier?",
        "routing": {
          "send": {
            "property": "Enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Type",
        "name": "CdrParserType",
        "type": "options",
        "default": "csv",
        "options": [
          {
            "name": "Csv",
            "value": "csv"
          },
          {
            "name": "Tsv",
            "value": "tsv"
          }
        ],
        "routing": {
          "send": {
            "property": "CdrParserType",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Match Type",
        "name": "CdrMatchType",
        "type": "options",
        "default": "exact",
        "options": [
          {
            "name": "Exact",
            "value": "exact"
          },
          {
            "name": "Recursive",
            "value": "recursive"
          }
        ],
        "routing": {
          "send": {
            "property": "CdrMatchType",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Has Header",
        "name": "CdrHasHeader",
        "type": "boolean",
        "default": true,
        "description": "Has the CDR file got a header?",
        "routing": {
          "send": {
            "property": "CdrHasHeader",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Start At Row",
        "name": "CdrStartAtRow",
        "type": "number",
        "default": 0,
        "description": "Optional start at line X on the file",
        "routing": {
          "send": {
            "property": "CdrStartAtRow",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Delimiter",
        "name": "CdrDelimiter",
        "type": "string",
        "default": "",
        "description": "Optional delimiter separating character on the file",
        "routing": {
          "send": {
            "property": "CdrDelimiter",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Validate Header Code",
        "name": "CdrValidateHeaderCode",
        "type": "string",
        "default": "",
        "description": "Optional Javascript code to validate the CDR file format",
        "routing": {
          "send": {
            "property": "CdrValidateHeaderCode",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parse Row Code",
        "name": "CdrParseRowCode",
        "type": "string",
        "default": "",
        "description": "Javascript code to parse each CDR row",
        "routing": {
          "send": {
            "property": "CdrParseRowCode",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Parser Version",
        "name": "CdrParserVersion",
        "type": "number",
        "default": 0,
        "description": "Cdr parser version",
        "routing": {
          "send": {
            "property": "CdrParserVersion",
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
          "Suppliers"
        ],
        "operation": [
          "Test Supplier Service File"
        ]
      }
    },
    "options": [
      {
        "displayName": "Enabled",
        "name": "Enabled",
        "type": "boolean",
        "default": true,
        "description": "Can we support a service file from this supplier?",
        "routing": {
          "send": {
            "property": "Enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Type",
        "name": "ServiceFileParserType",
        "type": "options",
        "default": "csv",
        "options": [
          {
            "name": "Csv",
            "value": "csv"
          },
          {
            "name": "Tsv",
            "value": "tsv"
          }
        ],
        "routing": {
          "send": {
            "property": "ServiceFileParserType",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Has Header",
        "name": "ServiceFileHasHeader",
        "type": "boolean",
        "default": true,
        "description": "Has the service file got a header?",
        "routing": {
          "send": {
            "property": "ServiceFileHasHeader",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Start At Row",
        "name": "ServiceFileStartAtRow",
        "type": "number",
        "default": 0,
        "description": "Optional start at line X on the file",
        "routing": {
          "send": {
            "property": "ServiceFileStartAtRow",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Delimiter",
        "name": "ServiceFileDelimiter",
        "type": "string",
        "default": "",
        "description": "Optional delimiter separating character on the file",
        "routing": {
          "send": {
            "property": "ServiceFileDelimiter",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Validate Header Code",
        "name": "ServiceFileValidateHeaderCode",
        "type": "string",
        "default": "",
        "description": "Optional Javascript code to validate the service file format",
        "routing": {
          "send": {
            "property": "ServiceFileValidateHeaderCode",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parse Row Code",
        "name": "ServiceFileParseRowCode",
        "type": "string",
        "default": "",
        "description": "Javascript code to parse each service file row",
        "routing": {
          "send": {
            "property": "ServiceFileParseRowCode",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Parser Version",
        "name": "ServiceFileParserVersion",
        "type": "number",
        "default": 0,
        "description": "Service file parser version",
        "routing": {
          "send": {
            "property": "ServiceFileParserVersion",
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
          "Suppliers"
        ],
        "operation": [
          "Get All Suppliers"
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
        "displayName": "Supports Cdr",
        "name": "supports_cdr",
        "description": "CDR Support",
        "default": true,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "supports_cdr",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Supports Service File",
        "name": "supports_service_file",
        "description": "Service Support",
        "default": true,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "supports_service_file",
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
