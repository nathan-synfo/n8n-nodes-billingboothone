import { INodeProperties } from 'n8n-workflow';

/**
 * Integration Logs resource description
 * Contains operation definitions and field configurations
 */
export const IntegrationLogsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Integration Logs"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Integration Logs",
        "value": "Get All Integration Logs",
        "action": "Get all integration logs",
        "description": "Retrieves a list of all integration logs on the account.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/integration-logs"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /integration-logs",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Integration Logs"
        ],
        "operation": [
          "Get All Integration Logs"
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
          "Integration Logs"
        ],
        "operation": [
          "Get All Integration Logs"
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
        "displayName": "Log Type",
        "name": "log_type",
        "description": "Filter by `log_type`",
        "default": "info",
        "type": "options",
        "options": [
          {
            "name": "Info",
            "value": "info"
          },
          {
            "name": "Warn",
            "value": "warn"
          },
          {
            "name": "Error",
            "value": "error"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "log_type",
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
        "displayName": "Integration Name",
        "name": "integration_name",
        "description": "Filter by `integration_name`",
        "default": "xero",
        "type": "options",
        "options": [
          {
            "name": "Xero",
            "value": "xero"
          },
          {
            "name": "Sage",
            "value": "sage"
          },
          {
            "name": "Kashflow",
            "value": "kashflow"
          },
          {
            "name": "Quickfile",
            "value": "quickfile"
          },
          {
            "name": "Xero Offline",
            "value": "xeroOffline"
          },
          {
            "name": "Quick Books Desktop",
            "value": "quickBooksDesktop"
          },
          {
            "name": "Quick Books Cloud",
            "value": "quickBooksCloud"
          },
          {
            "name": "Q 360",
            "value": "q360"
          },
          {
            "name": "Adept Sage",
            "value": "adeptSage"
          },
          {
            "name": "Clear Books",
            "value": "clearBooks"
          },
          {
            "name": "Access Pay Suite",
            "value": "accessPaySuite"
          },
          {
            "name": "Sage 200",
            "value": "sage200"
          },
          {
            "name": "Sage 50",
            "value": "sage50"
          },
          {
            "name": "Sage Intacct",
            "value": "sageIntacct"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "integration_name",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: date_time, -date_time",
        "default": "-date_time",
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
