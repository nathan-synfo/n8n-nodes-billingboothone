import { INodeProperties } from 'n8n-workflow';

/**
 * Product Prices resource description
 * Contains operation definitions and field configurations
 */
export const ProductPricesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Product Prices"
        ]
      }
    },
    "options": [
      {
        "name": "Bulk Update Product Pricing",
        "value": "Bulk Update Product Pricing",
        "action": "Bulk update product pricing",
        "description": "Update product pricing across multiple products.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/product/bulk/pricing"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "PUT /product/bulk/pricing",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Product Prices"
        ],
        "operation": [
          "Bulk Update Product Pricing"
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
          "Product Prices"
        ],
        "operation": [
          "Bulk Update Product Pricing"
        ]
      }
    },
    "options": [
      {
        "displayName": "Product Prices",
        "name": "product_prices",
        "type": "json",
        "default": "[\n  {}\n]",
        "description": "List of product pricing to update",
        "routing": {
          "send": {
            "property": "product_prices",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      }
    ]
  }
];
