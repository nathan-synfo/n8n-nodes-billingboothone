import { INodeProperties } from 'n8n-workflow';

/**
 * Product resource description
 * Contains operation definitions and field configurations
 */
export const ProductFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Product"
        ]
      }
    },
    "options": [
      {
        "name": "Get Product Pricing Report",
        "value": "Get Product Pricing Report",
        "action": "Get product pricing report",
        "description": "Gets all active product pricing report",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/product/pricing"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /analytics/product/pricing",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Product"
        ],
        "operation": [
          "Get Product Pricing Report"
        ]
      }
    }
  }
];
