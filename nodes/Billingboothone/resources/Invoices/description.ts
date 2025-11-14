import { INodeProperties } from 'n8n-workflow';

/**
 * Invoices resource description
 * Contains operation definitions and field configurations
 */
export const InvoicesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Invoices",
        "value": "Get All Invoices",
        "action": "Get all invoices (By page)",
        "description": "Retrieves all invoices.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice"
          }
        }
      },
      {
        "name": "Delete Multiple Invoices",
        "value": "Delete Multiple Invoices",
        "action": "Delete multiple invoices",
        "description": "Deletes all invoices with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/invoice"
          }
        }
      },
      {
        "name": "Get All Invoices By Cursor",
        "value": "Get All Invoices By Cursor",
        "action": "Get all invoices (By cursor)",
        "description": "Retrieves all invoices via cursor pagination. Sorting is not available",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/cursor"
          }
        }
      },
      {
        "name": "Get All Line Items",
        "value": "Get All Line Items",
        "action": "Get invoices by line item (By page)",
        "description": "Retrieves all line items belonging to a criteria of invoices.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/lineitems"
          }
        }
      },
      {
        "name": "Get All Line Items By Cursor",
        "value": "Get All Line Items By Cursor",
        "action": "Get invoices by line item (By cursor)",
        "description": "Retrieves all line items via cursor pagination. Sorting is not available.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/lineitems/cursor"
          }
        }
      },
      {
        "name": "Get Invoice",
        "value": "Get Invoice",
        "action": "Get a single invoice",
        "description": "Retrieves a single invoice.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Invoice",
        "value": "Delete Invoice",
        "action": "Delete invoice",
        "description": "Deletes an existing invoice.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/invoice/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Get Invoice Binary",
        "value": "Get Invoice Binary",
        "action": "Get invoice PDF",
        "description": "Retrieves a single invoice as a fully-rendered PDF.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/{{$parameter[\"id\"]}}/pdf"
          }
        }
      },
      {
        "name": "Download Invoices",
        "value": "Download Invoices",
        "action": "Bulk download invoices",
        "description": "Downloads invoices within a specified date range or as a selection of invoice `id`. Can also include attachments to those invoices.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/download"
          }
        }
      },
      {
        "name": "Get Invoice Service File Binary",
        "value": "Get Invoice Service File Binary",
        "action": "Get invoice service file",
        "description": "Retrieves an invoice's service file.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/{{$parameter[\"id\"]}}/servicefile"
          }
        }
      },
      {
        "name": "Get Invoice Attachments Binary",
        "value": "Get Invoice Attachments Binary",
        "action": "Get invoice attachments",
        "description": "Retrieves an invoice's attachments. If there is more than one attachment, or the attachment is larger than 10Mb, this endpoint will return a zip file",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/{{$parameter[\"id\"]}}/attachments"
          }
        }
      },
      {
        "name": "Settle Invoice",
        "value": "Settle Invoice",
        "action": "Settle invoice",
        "description": "Settle an invoice.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/{{$parameter[\"id\"]}}/settle"
          }
        }
      },
      {
        "name": "Settle Invoice Ledger Entry",
        "value": "Settle Invoice Ledger Entry",
        "action": "Settle invoice with credit",
        "description": "Settele an invoice using an unallocated credit ledger entry.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/{{$parameter[\"id\"]}}/settle/ledger"
          }
        }
      },
      {
        "name": "Bulk Settle Invoices",
        "value": "Bulk Settle Invoices",
        "action": "Bulk settle invoices",
        "description": "Bulk settle one or more invoices.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/settle"
          }
        }
      },
      {
        "name": "Batch Settle Invoices",
        "value": "Batch Settle Invoices",
        "action": "Batch settle invoices",
        "description": "Batch settle one or more invoices.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/settle/batch"
          }
        }
      },
      {
        "name": "Void Invoice",
        "value": "Void Invoice",
        "action": "Void invoice",
        "description": "Voids an existing invoice.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/{{$parameter[\"id\"]}}/void"
          }
        }
      },
      {
        "name": "Bulk Void Invoices",
        "value": "Bulk Void Invoices",
        "action": "Bulk void invoices",
        "description": "Bulk void one or more invoices.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/void"
          }
        }
      },
      {
        "name": "Restore Invoice",
        "value": "Restore Invoice",
        "action": "Restore invoice",
        "description": "Restores the invoice status to outstanding.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/{{$parameter[\"id\"]}}/outstanding"
          }
        }
      },
      {
        "name": "Bulk Restore Invoices",
        "value": "Bulk Restore Invoices",
        "action": "Bulk restore invoices",
        "description": "Bulk restore one or more invoices to outstanding.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/invoice/outstanding"
          }
        }
      },
      {
        "name": "Send Invoice",
        "value": "Send Invoice",
        "action": "Send invoice",
        "description": "Send an existing invoice.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/{{$parameter[\"id\"]}}/send"
          }
        }
      },
      {
        "name": "Bulk Send Invoices",
        "value": "Bulk Send Invoices",
        "action": "Bulk send invoices",
        "description": "Bulk send one or more invoices.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/send"
          }
        }
      },
      {
        "name": "Send Invoice Reminder",
        "value": "Send Invoice Reminder",
        "action": "Send invoice reminder",
        "description": "Send an existing invoice reminder.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/{{$parameter[\"id\"]}}/reminder"
          }
        }
      },
      {
        "name": "Bulk Send Invoice Reminders",
        "value": "Bulk Send Invoice Reminders",
        "action": "Bulk send invoice reminders",
        "description": "Bulk send one or more invoice reminders.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/reminder"
          }
        }
      },
      {
        "name": "Refresh Invoice",
        "value": "Refresh Invoice",
        "action": "Refresh invoice",
        "description": "Refreshes the invoice PDF with the latest organisation settings.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/{{$parameter[\"id\"]}}/refresh"
          }
        }
      },
      {
        "name": "Bulk Refresh Invoice",
        "value": "Bulk Refresh Invoice",
        "action": "Bulk refresh invoices",
        "description": "Bulk refresh invoice PDFs with the latest organisation settings",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/refresh"
          }
        }
      },
      {
        "name": "Export Invoices",
        "value": "Export Invoices",
        "action": "Export invoices",
        "description": "Exports the invoices through the specified app integration. This may be an inline file download, or a background task to push invoices to a third-party application",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/invoice/export"
          }
        }
      },
      {
        "name": "Refresh Accounting Code",
        "value": "Refresh Accounting Code",
        "action": "Refresh accounting code",
        "description": "Refreshes the accounting code of invoice line item",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/{{$parameter[\"id\"]}}/refresh/accountingcode"
          }
        }
      },
      {
        "name": "Bulk Refresh Accounting Code",
        "value": "Bulk Refresh Accounting Code",
        "action": "Bulk refresh accounting codes",
        "description": "Bulk refreshes the accounting codes of invoice line items",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/invoice/refresh/accountingcode"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /invoice",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get All Invoices"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /invoice",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Delete Multiple Invoices"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/cursor",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get All Invoices By Cursor"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/lineitems",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get All Line Items"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/lineitems/cursor",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get All Line Items By Cursor"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get Invoice"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /invoice/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Delete Invoice"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/{id}/pdf",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get Invoice Binary"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/download",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Download Invoices"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/{id}/servicefile",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get Invoice Service File Binary"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/{id}/attachments",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Get Invoice Attachments Binary"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/{id}/settle",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Settle Invoice"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/{id}/settle/ledger",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Settle Invoice Ledger Entry"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/settle",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Settle Invoices"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/settle/batch",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Batch Settle Invoices"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/{id}/void",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Void Invoice"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/void",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Void Invoices"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/{id}/outstanding",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Restore Invoice"
        ]
      }
    }
  },
  {
    "displayName": "PUT /invoice/outstanding",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Restore Invoices"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/{id}/send",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Send Invoice"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/send",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoices"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/{id}/reminder",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Send Invoice Reminder"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/reminder",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoice Reminders"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/{id}/refresh",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Refresh Invoice"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/refresh",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Refresh Invoice"
        ]
      }
    }
  },
  {
    "displayName": "GET /invoice/export",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Export Invoices"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/{id}/refresh/accountingcode",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Refresh Accounting Code"
        ]
      }
    }
  },
  {
    "displayName": "POST /invoice/refresh/accountingcode",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Refresh Accounting Code"
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
          "Invoices"
        ],
        "operation": [
          "Get Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Delete Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Get Invoice Binary"
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
          "Invoices"
        ],
        "operation": [
          "Get Invoice Service File Binary"
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
          "Invoices"
        ],
        "operation": [
          "Get Invoice Attachments Binary"
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
          "Invoices"
        ],
        "operation": [
          "Settle Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Settle Invoice Ledger Entry"
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
          "Invoices"
        ],
        "operation": [
          "Void Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Restore Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice Reminder"
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
          "Invoices"
        ],
        "operation": [
          "Refresh Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Refresh Accounting Code"
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
          "Invoices"
        ],
        "operation": [
          "Delete Multiple Invoices"
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
    "displayName": "Ledger Entry Type Id",
    "name": "ledger_entry_type_id",
    "type": "number",
    "default": 0,
    "description": "Type of settlement",
    "routing": {
      "send": {
        "property": "ledger_entry_type_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Settle Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Settle Invoice"
        ]
      }
    },
    "options": [
      {
        "displayName": "Details",
        "name": "details",
        "type": "string",
        "default": "",
        "description": "Optional comments or details",
        "routing": {
          "send": {
            "property": "details",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Date",
        "name": "date",
        "type": "string",
        "default": "",
        "description": "Settlement date",
        "routing": {
          "send": {
            "property": "date",
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
        "description": "Settle amount",
        "routing": {
          "send": {
            "property": "amount",
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
    "displayName": "Entries",
    "name": "entries",
    "type": "json",
    "default": "[\n  {}\n]",
    "description": "One or more unallocated credit ledger entries",
    "routing": {
      "send": {
        "property": "entries",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Settle Invoice Ledger Entry"
        ]
      }
    }
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
          "Invoices"
        ],
        "operation": [
          "Bulk Settle Invoices"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Ledger Entry Type Id",
    "name": "ledger_entry_type_id",
    "type": "number",
    "default": 0,
    "description": "Type of settlement",
    "routing": {
      "send": {
        "property": "ledger_entry_type_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Bulk Settle Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Settle Invoices"
        ]
      }
    },
    "options": [
      {
        "displayName": "Details",
        "name": "details",
        "type": "string",
        "default": "",
        "description": "Optional comments or details",
        "routing": {
          "send": {
            "property": "details",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Date",
        "name": "date",
        "type": "string",
        "default": "",
        "description": "Settlement date",
        "routing": {
          "send": {
            "property": "date",
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
    "displayName": "Entries",
    "name": "entries",
    "type": "json",
    "default": "[\n  {}\n]",
    "description": "List of batch settlement entries",
    "routing": {
      "send": {
        "property": "entries",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ JSON.parse($value) }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Invoices"
        ],
        "operation": [
          "Batch Settle Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Void Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Restore Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoices"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice Reminder"
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
          "Invoices"
        ],
        "operation": [
          "Send Invoice Reminder"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoice Reminders"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Send Invoice Reminders"
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
          "Invoices"
        ],
        "operation": [
          "Bulk Refresh Invoice"
        ]
      }
    }
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
          "Invoices"
        ],
        "operation": [
          "Bulk Refresh Accounting Code"
        ]
      }
    }
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
          "Invoices"
        ],
        "operation": [
          "Get All Invoices"
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
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "description": "Filter by `customer_group_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "customer_group_id",
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
        "displayName": "Invoice Reference",
        "name": "invoice_reference",
        "description": "Filter by `invoice_reference`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "invoice_reference",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Filter by `billing_period`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "billing_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "description": "Filter by `status`",
        "default": "outstanding",
        "type": "options",
        "options": [
          {
            "name": "Outstanding",
            "value": "outstanding"
          },
          {
            "name": "Settled",
            "value": "settled"
          },
          {
            "name": "Void",
            "value": "void"
          },
          {
            "name": "Partially Settled",
            "value": "partiallySettled"
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: invoice_date, -invoice_date, billing_period, -billing_period, number, -number, due_date, -due_date, amount, -amount, balance, -balance",
        "default": "-number",
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
          "Invoices"
        ],
        "operation": [
          "Get All Invoices By Cursor"
        ]
      }
    },
    "options": [
      {
        "displayName": "Next Cursor",
        "name": "next_cursor",
        "description": "Cursor to start at",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "next_cursor",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Previous Cursor",
        "name": "previous_cursor",
        "description": "Cursor to start at",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "previous_cursor",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Page Size",
        "name": "page_size",
        "description": "Maximum number of entries to return",
        "default": 20,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "page_size",
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
        "displayName": "Invoice Reference",
        "name": "invoice_reference",
        "description": "Filter by `invoice_reference`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "invoice_reference",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Filter by `billing_period`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "billing_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "description": "Filter by `status`",
        "default": "outstanding",
        "type": "options",
        "options": [
          {
            "name": "Outstanding",
            "value": "outstanding"
          },
          {
            "name": "Settled",
            "value": "settled"
          },
          {
            "name": "Void",
            "value": "void"
          },
          {
            "name": "Partially Settled",
            "value": "partiallySettled"
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
          "Invoices"
        ],
        "operation": [
          "Get All Line Items"
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
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "description": "Filter by `customer_group_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "customer_group_id",
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
        "displayName": "Invoice Reference",
        "name": "invoice_reference",
        "description": "Filter by `invoice_reference`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "invoice_reference",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Filter by `billing_period`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "billing_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "description": "Filter by `status`",
        "default": "outstanding",
        "type": "options",
        "options": [
          {
            "name": "Outstanding",
            "value": "outstanding"
          },
          {
            "name": "Settled",
            "value": "settled"
          },
          {
            "name": "Void",
            "value": "void"
          },
          {
            "name": "Partially Settled",
            "value": "partiallySettled"
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. invoice_number,description. Possible values include:invoice_number, -invoice_number, description, -description",
        "default": "invoice_number",
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
          "Invoices"
        ],
        "operation": [
          "Get All Line Items By Cursor"
        ]
      }
    },
    "options": [
      {
        "displayName": "Next Cursor",
        "name": "next_cursor",
        "description": "Cursor to start at",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "next_cursor",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Previous Cursor",
        "name": "previous_cursor",
        "description": "Cursor to start at",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "previous_cursor",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Page Size",
        "name": "page_size",
        "description": "Maximum number of entries to return",
        "default": 20,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "page_size",
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
        "displayName": "Invoice Reference",
        "name": "invoice_reference",
        "description": "Filter by `invoice_reference`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "invoice_reference",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Filter by `billing_period`",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "billing_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "description": "Filter by `status`",
        "default": "outstanding",
        "type": "options",
        "options": [
          {
            "name": "Outstanding",
            "value": "outstanding"
          },
          {
            "name": "Settled",
            "value": "settled"
          },
          {
            "name": "Void",
            "value": "void"
          },
          {
            "name": "Partially Settled",
            "value": "partiallySettled"
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
          "Invoices"
        ],
        "operation": [
          "Download Invoices"
        ]
      }
    },
    "options": [
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
        "displayName": "Id",
        "name": "id",
        "description": "Filter by invoice `id`",
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
        "displayName": "Folders",
        "name": "folders",
        "description": "Group invoices into customer folders",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "folders",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Attachments",
        "name": "attachments",
        "description": "Include invoice attachments",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "attachments",
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
          "Invoices"
        ],
        "operation": [
          "Export Invoices"
        ]
      }
    },
    "options": [
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
        "displayName": "Integration Id",
        "name": "integration_id",
        "description": "Integration plugin identifier",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "integration_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "description": "Filter by `customer_group_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "customer_group_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      }
    ]
  }
];
