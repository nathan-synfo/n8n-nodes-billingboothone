import { INodeProperties } from 'n8n-workflow';

/**
 * Account resource description
 * Contains operation definitions and field configurations
 */
export const AccountFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Account"
        ]
      }
    },
    "options": [
      {
        "name": "Get Entities Count",
        "value": "Get Entities Count",
        "action": "Get account analytics",
        "description": "Retrieves",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/account"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /analytics/account",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Account"
        ],
        "operation": [
          "Get Entities Count"
        ]
      }
    }
  }
];
