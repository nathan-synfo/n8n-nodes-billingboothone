import { INodeProperties } from 'n8n-workflow';

/**
 * Credit Notes resource description
 * Contains operation definitions and field configurations
 */
export const CreditNotesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Credit Notes",
        "value": "Get All Credit Notes",
        "action": "Get all credit notes",
        "description": "Retrieves all credit notes.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote"
          }
        }
      },
      {
        "name": "Create Credit Note",
        "value": "Create Credit Note",
        "action": "Create credit note",
        "description": "Create a credit note.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote"
          }
        }
      },
      {
        "name": "Delete Multiple Credit Notes",
        "value": "Delete Multiple Credit Notes",
        "action": "Delete multiple credit notes",
        "description": "Deletes all credit notes with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote"
          }
        }
      },
      {
        "name": "Get Credit Note",
        "value": "Get Credit Note",
        "action": "Get a single credit note",
        "description": "Retrieves a single credit note.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Credit Note",
        "value": "Delete Credit Note",
        "action": "Delete credit note",
        "description": "Deletes an existing credit note.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Get Credit Note Binary",
        "value": "Get Credit Note Binary",
        "action": "Get credit note PDF",
        "description": "Retrieves a single credit note as a fully-rendered PDF.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote/{{$parameter[\"id\"]}}/pdf"
          }
        }
      },
      {
        "name": "Get All Credit Notes V 2",
        "value": "Get All Credit Notes V 2",
        "action": "Get all credit notes",
        "description": "Retrieves all credit notes.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/creditnote"
          }
        }
      },
      {
        "name": "Send Credit Note",
        "value": "Send Credit Note",
        "action": "Send credit note",
        "description": "Send an existing credit note.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote/{{$parameter[\"id\"]}}/send"
          }
        }
      },
      {
        "name": "Bulk Send Credit Notes",
        "value": "Bulk Send Credit Notes",
        "action": "Bulk send credit notes",
        "description": "Bulk send one or more credit notes.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/customer/{{$parameter[\"customerId\"]}}/creditnote/send"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /customer/{customerId}/creditnote",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Get All Credit Notes"
        ]
      }
    }
  },
  {
    "displayName": "POST /customer/{customerId}/creditnote",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Create Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/creditnote",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Delete Multiple Credit Notes"
        ]
      }
    }
  },
  {
    "displayName": "GET /customer/{customerId}/creditnote/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /customer/{customerId}/creditnote/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Delete Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "GET /customer/{customerId}/creditnote/{id}/pdf",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note Binary"
        ]
      }
    }
  },
  {
    "displayName": "GET /creditnote",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Get All Credit Notes V 2"
        ]
      }
    }
  },
  {
    "displayName": "POST /customer/{customerId}/creditnote/{id}/send",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Send Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "POST /customer/{customerId}/creditnote/send",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Bulk Send Credit Notes"
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
          "Credit Notes"
        ],
        "operation": [
          "Get All Credit Notes"
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
          "Credit Notes"
        ],
        "operation": [
          "Create Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "default": "",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Delete Multiple Credit Notes"
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
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note"
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
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note"
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
          "Credit Notes"
        ],
        "operation": [
          "Delete Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "default": "",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Delete Credit Note"
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
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note Binary"
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
          "Credit Notes"
        ],
        "operation": [
          "Get Credit Note Binary"
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
          "Credit Notes"
        ],
        "operation": [
          "Send Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "default": "",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Send Credit Note"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "default": "",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Bulk Send Credit Notes"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Credit Date",
    "name": "credit_date",
    "type": "string",
    "default": "",
    "description": "Credit Date",
    "routing": {
      "send": {
        "property": "credit_date",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Create Credit Note"
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
          "Credit Notes"
        ],
        "operation": [
          "Create Credit Note"
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
        "displayName": "Number",
        "name": "number",
        "type": "number",
        "default": 0,
        "description": "Credit Note Number",
        "routing": {
          "send": {
            "property": "number",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Number Prefix",
        "name": "number_prefix",
        "type": "string",
        "default": "",
        "description": "Credit Note Number Prefix, if applicable",
        "routing": {
          "send": {
            "property": "number_prefix",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "Description of the credit note, if present",
        "routing": {
          "send": {
            "property": "description",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Inclusive Tax",
        "name": "inclusive_tax",
        "type": "boolean",
        "default": true,
        "description": "When creating a credit note, line item unit amounts are inclusive of tax",
        "routing": {
          "send": {
            "property": "inclusive_tax",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Amount",
        "name": "amount",
        "type": "number",
        "default": 0,
        "description": "Total Amount for credit note, excluding Tax",
        "routing": {
          "send": {
            "property": "amount",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Tax",
        "name": "tax",
        "type": "number",
        "default": 0,
        "description": "Tax applied onto credit note",
        "routing": {
          "send": {
            "property": "tax",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Id",
        "name": "invoice_id",
        "type": "number",
        "default": 0,
        "description": "Associated invoice id, if applicable",
        "routing": {
          "send": {
            "property": "invoice_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Reference",
        "name": "invoice_reference",
        "type": "string",
        "default": "",
        "description": "Associated invoice reference, if applicable",
        "routing": {
          "send": {
            "property": "invoice_reference",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "First Sent At",
        "name": "first_sent_at",
        "type": "string",
        "default": "",
        "description": "The date/time when the credit note was first emailed, if applicable",
        "routing": {
          "send": {
            "property": "first_sent_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Sent At",
        "name": "last_sent_at",
        "type": "string",
        "default": "",
        "description": "The date/time when the credit note was last sent, if applicable. If the credit note has only been sent once, this property is always empty",
        "routing": {
          "send": {
            "property": "last_sent_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Line Items",
        "name": "line_items",
        "type": "json",
        "default": "[\n  {}\n]",
        "description": "Line Items",
        "routing": {
          "send": {
            "property": "line_items",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Allocations",
        "name": "allocations",
        "type": "json",
        "default": "[\n  {}\n]",
        "description": "Credit Note allocations if applicable",
        "routing": {
          "send": {
            "property": "allocations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "type": "number",
        "default": 0,
        "description": "The customer id",
        "routing": {
          "send": {
            "property": "customer_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Name",
        "name": "customer_name",
        "type": "string",
        "default": "",
        "description": "The customer name",
        "routing": {
          "send": {
            "property": "customer_name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Reference",
        "name": "customer_reference",
        "type": "string",
        "default": "",
        "description": "The customer reference",
        "routing": {
          "send": {
            "property": "customer_reference",
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
          "Credit Notes"
        ],
        "operation": [
          "Delete Multiple Credit Notes"
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
    "displayName": "Id",
    "name": "id",
    "type": "json",
    "default": "[\n  null\n]",
    "description": "List of unique invoice ids",
    "routing": {
      "send": {
        "property": "id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Send Credit Note"
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
          "Credit Notes"
        ],
        "operation": [
          "Send Credit Note"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email",
        "name": "email",
        "type": "string",
        "default": "",
        "description": "Optional email address to send invoice(s) to",
        "routing": {
          "send": {
            "property": "email",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      }
    ]
  },
  {
    "required": true,
    "displayName": "Id",
    "name": "id",
    "type": "json",
    "default": "[\n  null\n]",
    "description": "List of unique invoice ids",
    "routing": {
      "send": {
        "property": "id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Credit Notes"
        ],
        "operation": [
          "Bulk Send Credit Notes"
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
          "Credit Notes"
        ],
        "operation": [
          "Bulk Send Credit Notes"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email",
        "name": "email",
        "type": "string",
        "default": "",
        "description": "Optional email address to send invoice(s) to",
        "routing": {
          "send": {
            "property": "email",
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
          "Credit Notes"
        ],
        "operation": [
          "Get All Credit Notes"
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
        "displayName": "From",
        "name": "from",
        "description": "Filter by `from` date",
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
        "description": "Filter by `to` date",
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: creditdate, -creditdate, amount, -amount, number, -number",
        "default": "-creditdate",
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
          "Credit Notes"
        ],
        "operation": [
          "Get All Credit Notes V 2"
        ]
      }
    },
    "options": [
      {
        "displayName": "Customer Id",
        "name": "customerId",
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "customerId",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
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
        "displayName": "From",
        "name": "from",
        "description": "Filter by `from` date",
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
        "description": "Filter by `to` date",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Filter by `organisation_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "organisation_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Credit Note Number",
        "name": "credit_note_number",
        "description": "Filter by `credit_note_number`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "credit_note_number",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: creditdate, -creditdate, amount, -amount, number, -number",
        "default": "-creditdate",
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
