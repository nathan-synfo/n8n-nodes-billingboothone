import { INodeProperties } from 'n8n-workflow';

/**
 * Home resource description
 * Contains operation definitions and field configurations
 */
export const HomeFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Home"
        ]
      }
    },
    "options": [
      {
        "name": "GET /",
        "value": "GET -",
        "action": "GET /",
        "description": "",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Home"
        ],
        "operation": [
          "GET /"
        ]
      }
    }
  }
];
