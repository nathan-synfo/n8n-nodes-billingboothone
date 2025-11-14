import { INodeProperties } from 'n8n-workflow';

/**
 * Billing Run resource description
 * Contains operation definitions and field configurations
 */
export const BillingRunFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Billing Runs",
        "value": "Get All Billing Runs",
        "action": "Get all billing runs",
        "description": "Retrieves all historical billing runs.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/billing"
          }
        }
      },
      {
        "name": "Get Billing Run",
        "value": "Get Billing Run",
        "action": "Get billing run",
        "description": "Gets the full details of a single billing run",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/billing/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Get Billing Run By Invoice",
        "value": "Get Billing Run By Invoice",
        "action": "Get billing run by invoice",
        "description": "Gets the full details of a single billing run by a resulting invoice",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/billing/resolve/invoice/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Start Billing Run",
        "value": "Start Billing Run",
        "action": "Initiate a billing run",
        "description": "A billing run will be started for the `billing_period`, creating all outstanding invoices.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/billing/run"
          }
        }
      },
      {
        "name": "Get Billing Run Preview",
        "value": "Get Billing Run Preview",
        "action": "Preview billing run",
        "description": "Returns a list of all customers about to be billed",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/billing/preview"
          }
        }
      },
      {
        "name": "Get Billing Run Preview Detailed",
        "value": "Get Billing Run Preview Detailed",
        "action": "Preview billing run detailed",
        "description": "Returns a detailed list of charges for each customer",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/billing/preview/detailed"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /billing",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Get All Billing Runs"
        ]
      }
    }
  },
  {
    "displayName": "GET /billing/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run"
        ]
      }
    }
  },
  {
    "displayName": "GET /billing/resolve/invoice/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run By Invoice"
        ]
      }
    }
  },
  {
    "displayName": "POST /billing/run",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Start Billing Run"
        ]
      }
    }
  },
  {
    "displayName": "GET /billing/preview",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run Preview"
        ]
      }
    }
  },
  {
    "displayName": "GET /billing/preview/detailed",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run Preview Detailed"
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
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run"
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
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run By Invoice"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Billing Period",
    "name": "billing_period",
    "type": "string",
    "default": "",
    "description": "Date Period to bill. This is typically the first day of the month you want to bill.",
    "routing": {
      "send": {
        "property": "billing_period",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Start Billing Run"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Issue Date",
    "name": "issue_date",
    "type": "string",
    "default": "",
    "description": "The invoice issue date",
    "routing": {
      "send": {
        "property": "issue_date",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Billing Run"
        ],
        "operation": [
          "Start Billing Run"
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
          "Billing Run"
        ],
        "operation": [
          "Start Billing Run"
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
        "displayName": "Cdr Start Period",
        "name": "cdr_start_period",
        "type": "string",
        "default": "",
        "description": "Specific date range start for CDR records if required. If left null, Billingbooth will calculate its own start period based on the customer's own group",
        "routing": {
          "send": {
            "property": "cdr_start_period",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr End Period",
        "name": "cdr_end_period",
        "type": "string",
        "default": "",
        "description": "Specific date range end for CDR records if required. If left null, Billingbooth will calculate its own start period based on the customer's own group",
        "routing": {
          "send": {
            "property": "cdr_end_period",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Start Number",
        "name": "invoice_start_number",
        "type": "number",
        "default": 0,
        "description": "The starting invoice number for the run. If omitted, Billingbooth will work out the starting invoice number based on the last issued invoice.",
        "routing": {
          "send": {
            "property": "invoice_start_number",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Anniversary Billing Days",
        "name": "anniversary_billing_days",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "If the chosen `customer_group_id` has an anniversary billing method, the anniversary billing days must be between 1 and 31",
        "routing": {
          "send": {
            "property": "anniversary_billing_days",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "type": "number",
        "default": 0,
        "description": "Customer group to bill. A billing run can either bill a customer group, or a list of specific customers.",
        "routing": {
          "send": {
            "property": "customer_group_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Ids",
        "name": "customer_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "A list of specific customers to bill. A billing run can either bill a customer group, or a list of specific customers.",
        "routing": {
          "send": {
            "property": "customer_ids",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Exclude Customer Ids",
        "name": "exclude_customer_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "An explicit list of customers to exclude from the billing run",
        "routing": {
          "send": {
            "property": "exclude_customer_ids",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Exclude Service Charges",
        "name": "exclude_service_charges",
        "type": "boolean",
        "default": true,
        "description": "Exclude service charges in billing run",
        "routing": {
          "send": {
            "property": "exclude_service_charges",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Exclude Billed Service Charges",
        "name": "exclude_billed_service_charges",
        "type": "boolean",
        "default": true,
        "description": "Exclude service charges that have already been billed in the 'billing_period` specified",
        "routing": {
          "send": {
            "property": "exclude_billed_service_charges",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Exclude Cdr",
        "name": "exclude_cdr",
        "type": "boolean",
        "default": true,
        "description": "Exclude voice, data and SMS charges in billing run",
        "routing": {
          "send": {
            "property": "exclude_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Filtered Categories",
        "name": "filtered_categories",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "If service charges are being billed, issue invoices from the selected charge categories only",
        "routing": {
          "send": {
            "property": "filtered_categories",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Issue Date Charges Only",
        "name": "issue_date_charges_only",
        "type": "boolean",
        "default": true,
        "description": "If true, only customers with charges that have a start date equal to the billing run `issue_date` will be invoiced. This should generally always be set to false.",
        "routing": {
          "send": {
            "property": "issue_date_charges_only",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Include Old Unbilled Charges",
        "name": "include_old_unbilled_charges",
        "type": "boolean",
        "default": true,
        "description": "If true, charges from a previous billing period that have not yet been billed will be included in the billing run. Defaults to true if omitted unless general settings have been configured.",
        "routing": {
          "send": {
            "property": "include_old_unbilled_charges",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Suppress Delivery",
        "name": "suppress_delivery",
        "type": "boolean",
        "default": true,
        "description": "If true, all invoice emails will be suppressed during the billing run",
        "routing": {
          "send": {
            "property": "suppress_delivery",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Suppress Integrations",
        "name": "suppress_integrations",
        "type": "boolean",
        "default": true,
        "description": "If true, any associated integration actions will not be executed",
        "routing": {
          "send": {
            "property": "suppress_integrations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Suppress Payments",
        "name": "suppress_payments",
        "type": "boolean",
        "default": true,
        "description": "If true, no payments will be issued during the billing run",
        "routing": {
          "send": {
            "property": "suppress_payments",
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
          "Billing Run"
        ],
        "operation": [
          "Get All Billing Runs"
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
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Filter by `billing_period` date",
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
        "displayName": "Anniversary Billing Day",
        "name": "anniversary_billing_day",
        "description": "Filter by `anniversary_billing_day`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "anniversary_billing_day",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Sort",
        "name": "sort",
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: started, -started",
        "default": "-started",
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
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run Preview"
        ]
      }
    },
    "options": [
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Date Period to bill. This is typically the first day of the month you want to bill.",
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
        "displayName": "Include Old Unbilled Charges",
        "name": "include_old_unbilled_charges",
        "description": "If true, old charges that have yet to be billed will be included.",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "include_old_unbilled_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Cdr Start Period",
        "name": "cdr_start_period",
        "description": "Voice, Data & SMS billing period start date. If left blank, default billing period will be used.",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_start_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Cdr End Period",
        "name": "cdr_end_period",
        "description": "Voice, Data & SMS billing period end date. If left blank, default billing period will be used.",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_end_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "description": "Customer group to bill. A billing run can either bill a customer group, or a list of specific customers.",
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
        "displayName": "Anniversary Billing Days",
        "name": "anniversary_billing_days",
        "description": "If the chosen `customer_group_id` has an anniversary billing method, the anniversary billing days must be between 1 and 31",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "anniversary_billing_days",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Ids",
        "name": "customer_ids",
        "description": "A list of specific customers to bill. A billing run can either bill a customer group, or a list of specific customers.",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "customer_ids",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Service Charges",
        "name": "exclude_service_charges",
        "description": "Exclude service charges",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_service_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Billed Service Charges",
        "name": "exclude_billed_service_charges",
        "description": "Exclude previously billed service charges for `billing_period`",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_billed_service_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Cdr",
        "name": "exclude_cdr",
        "description": "Exclude voice, data & SMS",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_cdr",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Filtered Categories",
        "name": "filtered_categories",
        "description": "A list of category ids to filter charges by.",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "filtered_categories",
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
          "Billing Run"
        ],
        "operation": [
          "Get Billing Run Preview Detailed"
        ]
      }
    },
    "options": [
      {
        "displayName": "Billing Period",
        "name": "billing_period",
        "description": "Date Period to bill. This is typically the first day of the month you want to bill.",
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
        "displayName": "Include Old Unbilled Charges",
        "name": "include_old_unbilled_charges",
        "description": "If true, old charges that have yet to be billed will be included.",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "include_old_unbilled_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Cdr Start Period",
        "name": "cdr_start_period",
        "description": "Voice, Data & SMS billing period start date. If left blank, default billing period will be used.",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_start_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Cdr End Period",
        "name": "cdr_end_period",
        "description": "Voice, Data & SMS billing period end date. If left blank, default billing period will be used.",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_end_period",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "description": "Customer group to bill. A billing run can either bill a customer group, or a list of specific customers.",
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
        "displayName": "Anniversary Billing Days",
        "name": "anniversary_billing_days",
        "description": "If the chosen `customer_group_id` has an anniversary billing method, the anniversary billing days must be between 1 and 31",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "anniversary_billing_days",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Customer Ids",
        "name": "customer_ids",
        "description": "A list of specific customers to bill. A billing run can either bill a customer group, or a list of specific customers.",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "customer_ids",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Service Charges",
        "name": "exclude_service_charges",
        "description": "Exclude service charges",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_service_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Billed Service Charges",
        "name": "exclude_billed_service_charges",
        "description": "Exclude previously billed service charges for `billing_period`",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_billed_service_charges",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Exclude Cdr",
        "name": "exclude_cdr",
        "description": "Exclude voice, data & SMS",
        "default": false,
        "type": "boolean",
        "routing": {
          "send": {
            "type": "query",
            "property": "exclude_cdr",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Filtered Categories",
        "name": "filtered_categories",
        "description": "A list of category ids to filter charges by.",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "filtered_categories",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      }
    ]
  }
];
