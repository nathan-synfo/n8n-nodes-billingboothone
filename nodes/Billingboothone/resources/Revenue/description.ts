import { INodeProperties } from 'n8n-workflow';

/**
 * Revenue resource description
 * Contains operation definitions and field configurations
 */
export const RevenueFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ]
      }
    },
    "options": [
      {
        "name": "Get Invoice Count",
        "value": "Get Invoice Count",
        "action": "Get invoice breakdown",
        "description": "Gets invoice status breakdown during the specified periods",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/invoice"
          }
        }
      },
      {
        "name": "Get Invoice Amount Status",
        "value": "Get Invoice Amount Status",
        "action": "Get invoice amount status analysis",
        "description": "Gets invoice outstanding and settled amounts during the specified periods",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/invoice/amount"
          }
        }
      },
      {
        "name": "Get Invoice Settlement Lag",
        "value": "Get Invoice Settlement Lag",
        "action": "Get invoice settlement lag analysis",
        "description": "Gets a full list of invoices for a date period ",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/invoice/settlement-lag"
          }
        }
      },
      {
        "name": "Get Revenue",
        "value": "Get Revenue",
        "action": "Get global revenue",
        "description": "Gets all revenue during the specified periods",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue"
          }
        }
      },
      {
        "name": "Get Category Revenue",
        "value": "Get Category Revenue",
        "action": "Get category revenue",
        "description": "Gets all revenue during the specified periods broken down by category",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/category"
          }
        }
      },
      {
        "name": "Get Product Revenue",
        "value": "Get Product Revenue",
        "action": "Get product revenue",
        "description": "Gets all revenue during the specified months broken down by product",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/product"
          }
        }
      },
      {
        "name": "Get Product Customer Revenue",
        "value": "Get Product Customer Revenue",
        "action": "Get product and customer revenue",
        "description": "Gets all revenue during the specified months broken down by product and customer",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/product/customer"
          }
        }
      },
      {
        "name": "Get Supplier Revenue",
        "value": "Get Supplier Revenue",
        "action": "Get supplier revenue",
        "description": "Gets all revenue during the specified months broken down by supplier",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/supplier"
          }
        }
      },
      {
        "name": "Get Aged Debtors",
        "value": "Get Aged Debtors",
        "action": "Get aged debtors",
        "description": "Gets aged debtors by `outstanding` invoice status",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/debtors"
          }
        }
      },
      {
        "name": "Get Settlement Type",
        "value": "Get Settlement Type",
        "action": "Get settlements by type",
        "description": "Gets a list of settlement amounts by type",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/settlements-type"
          }
        }
      },
      {
        "name": "Get Top Customers By Revenue",
        "value": "Get Top Customers By Revenue",
        "action": "Get top customers by revenue",
        "description": "Gets a list of of the top customers by revenue",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/top/revenue"
          }
        }
      },
      {
        "name": "Get Bottom Customers By Revenue",
        "value": "Get Bottom Customers By Revenue",
        "action": "Get bottom customers by revenue",
        "description": "Gets a list of of the worse performing customers by revenue",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/bottom/revenue"
          }
        }
      },
      {
        "name": "Get Top Customers By Profit",
        "value": "Get Top Customers By Profit",
        "action": "Get top customers by profit",
        "description": "Gets a list of of the top customers by profit",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/top/profit"
          }
        }
      },
      {
        "name": "Get Bottom Customers By Profit",
        "value": "Get Bottom Customers By Profit",
        "action": "Get bottom customers by profit",
        "description": "Gets a list of of the worse performing customers by profit",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/bottom/profit"
          }
        }
      },
      {
        "name": "Get Revenue Estimate",
        "value": "Get Revenue Estimate",
        "action": "Get revenue estimate",
        "description": "Gets estimated revenue based on current active service charges",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/estimate"
          }
        }
      },
      {
        "name": "Get Revenue Margin",
        "value": "Get Revenue Margin",
        "action": "Get customer margin",
        "description": "Gets customer revenue margin over the specified period",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/margin"
          }
        }
      },
      {
        "name": "Get Lifetime Revenue",
        "value": "Get Lifetime Revenue",
        "action": "Get lifetime revenue",
        "description": "Gets a lifetime revenue, cost and tax for the specified customer",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/analytics/revenue/lifetime/{{$parameter[\"customerId\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /analytics/invoice",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Invoice Count"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/invoice/amount",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Invoice Amount Status"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/invoice/settlement-lag",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Invoice Settlement Lag"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/category",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Category Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/product",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Product Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/product/customer",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Product Customer Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/supplier",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Supplier Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/debtors",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Aged Debtors"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/settlements-type",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Settlement Type"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/top/revenue",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Top Customers By Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/bottom/revenue",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Bottom Customers By Revenue"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/top/profit",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Top Customers By Profit"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/bottom/profit",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Bottom Customers By Profit"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/estimate",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Revenue Estimate"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/margin",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Revenue Margin"
        ]
      }
    }
  },
  {
    "displayName": "GET /analytics/revenue/lifetime/{customerId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Lifetime Revenue"
        ]
      }
    }
  },
  {
    "displayName": "Customer Id",
    "name": "customerId",
    "required": true,
    "description": "Analysis start date",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Revenue"
        ],
        "operation": [
          "Get Lifetime Revenue"
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
          "Revenue"
        ],
        "operation": [
          "Get Invoice Count"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Organisation Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Invoice Amount Status"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Organisation Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Invoice Settlement Lag"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Invoice issue start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Invoice issue end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Organisation Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Category Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "description": "Filter by tags",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Product Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Product Ids",
        "name": "product_ids",
        "description": "Filter by product ids",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "product_ids",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "description": "Filter by tags",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Product Customer Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Product Ids",
        "name": "product_ids",
        "description": "Filter by product ids",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "product_ids",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "description": "Filter by tags",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Filter organisation Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Supplier Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "description": "Filter by tags",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Aged Debtors"
        ]
      }
    },
    "options": [
      {
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "description": "Filter by `organisation id`",
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
          "Revenue"
        ],
        "operation": [
          "Get Settlement Type"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Id",
        "name": "customer_id",
        "description": "Customer Id",
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
          "Revenue"
        ],
        "operation": [
          "Get Top Customers By Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Analysis start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Analysis end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
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
          "Revenue"
        ],
        "operation": [
          "Get Bottom Customers By Revenue"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Analysis start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Analysis end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
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
          "Revenue"
        ],
        "operation": [
          "Get Top Customers By Profit"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Analysis start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Analysis end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
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
          "Revenue"
        ],
        "operation": [
          "Get Bottom Customers By Profit"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Analysis start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Analysis end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
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
          "Revenue"
        ],
        "operation": [
          "Get Revenue Estimate"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
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
          "Revenue"
        ],
        "operation": [
          "Get Revenue Margin"
        ]
      }
    },
    "options": [
      {
        "displayName": "Start",
        "name": "start",
        "description": "Billing period start date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "start",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "description": "Billing period end date",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "end",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      }
    ]
  }
];
