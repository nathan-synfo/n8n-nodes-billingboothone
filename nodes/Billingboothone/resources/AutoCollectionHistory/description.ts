import { INodeProperties } from 'n8n-workflow';

/**
 * Auto Collection History resource description
 * Contains operation definitions and field configurations
 */
export const AutoCollectionHistoryFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection History"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Auto Collection History",
        "value": "Get All Auto Collection History",
        "action": "Get auto collection history",
        "description": "Gets all files processed by auto collection",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/autocollection/history"
          }
        }
      },
      {
        "name": "Delete Multiple Auto Collection History",
        "value": "Delete Multiple Auto Collection History",
        "action": "Delete multiple auto collection entries",
        "description": "Deletes all auto collection history with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/autocollection/history"
          }
        }
      },
      {
        "name": "Delete Auto Collection History",
        "value": "Delete Auto Collection History",
        "action": "Delete auto collection entry",
        "description": "Deletes a auto collection entry",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/autocollection/history/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /autocollection/history",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection History"
        ],
        "operation": [
          "Get All Auto Collection History"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /autocollection/history",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection History"
        ],
        "operation": [
          "Delete Multiple Auto Collection History"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /autocollection/history/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection History"
        ],
        "operation": [
          "Delete Auto Collection History"
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
          "Auto Collection History"
        ],
        "operation": [
          "Delete Auto Collection History"
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
          "Auto Collection History"
        ],
        "operation": [
          "Delete Multiple Auto Collection History"
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
    "displayName": "Additional Fields",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection History"
        ],
        "operation": [
          "Get All Auto Collection History"
        ]
      }
    },
    "options": [
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
        "displayName": "Endpoint Id",
        "name": "endpointId",
        "description": "Filter by `endpoint_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "endpointId",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "File Type",
        "name": "fileType",
        "description": "Filter by `file_type`",
        "default": "cdr",
        "type": "options",
        "options": [
          {
            "name": "Cdr",
            "value": "cdr"
          },
          {
            "name": "Service File",
            "value": "serviceFile"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "fileType",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Search",
        "name": "search",
        "description": "Search by `full_path`",
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: full_path, -full_path, collected_at, -collected_at",
        "default": "-collected_at",
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
