import { INodeProperties } from 'n8n-workflow';

/**
 * Charge Imports resource description
 * Contains operation definitions and field configurations
 */
export const ChargeImportsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Charge Imports"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Charge Imports",
        "value": "Get All Charge Imports",
        "action": "Get all charge imports",
        "description": "Retrieves all charges imports for an instance",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/chargeimports"
          }
        }
      },
      {
        "name": "Delete Multiple Charge Imports",
        "value": "Delete Multiple Charge Imports",
        "action": "Delete charge imports",
        "description": "Deletes all charge imports with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/chargeimports"
          }
        }
      },
      {
        "name": "Bulk Create Charges",
        "value": "Bulk Create Charges",
        "action": "Bulk Create charges",
        "description": "Create multiple charges.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/chargeimports/bulk"
          }
        }
      },
      {
        "name": "Delete Charge Import",
        "value": "Delete Charge Import",
        "action": "Delete charge import",
        "description": "Deletes a charge import along with all associated records.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/chargeimports/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /chargeimports",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Charge Imports"
        ],
        "operation": [
          "Get All Charge Imports"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /chargeimports",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Charge Imports"
        ],
        "operation": [
          "Delete Multiple Charge Imports"
        ]
      }
    }
  },
  {
    "displayName": "POST /chargeimports/bulk",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Charge Imports"
        ],
        "operation": [
          "Bulk Create Charges"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /chargeimports/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Charge Imports"
        ],
        "operation": [
          "Delete Charge Import"
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
          "Charge Imports"
        ],
        "operation": [
          "Delete Charge Import"
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
          "Charge Imports"
        ],
        "operation": [
          "Delete Multiple Charge Imports"
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
          "Charge Imports"
        ],
        "operation": [
          "Bulk Create Charges"
        ]
      }
    },
    "options": [
      {
        "displayName": "Filename",
        "name": "filename",
        "type": "string",
        "default": "",
        "description": "The name of the file being imported.",
        "routing": {
          "send": {
            "property": "filename",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Charge Import Entries",
        "name": "charge_import_entries",
        "type": "json",
        "default": "[\n  {}\n]",
        "description": "The charges in the file being imported.",
        "routing": {
          "send": {
            "property": "charge_import_entries",
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
          "Charge Imports"
        ],
        "operation": [
          "Get All Charge Imports"
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: filename, -filename, created, -created",
        "default": "filename",
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
