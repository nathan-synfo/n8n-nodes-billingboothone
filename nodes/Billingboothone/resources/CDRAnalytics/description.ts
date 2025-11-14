import { INodeProperties } from 'n8n-workflow';

/**
 * CDR Analytics resource description
 * Contains operation definitions and field configurations
 */
export const CDRAnalyticsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ]
      }
    },
    "options": [
      {
        "name": "Get Cdr Summary",
        "value": "Get Cdr Summary",
        "action": "Get records summary",
        "description": "Gets a summary overview on CDRs based on the specified criteria",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/summary"
          }
        }
      },
      {
        "name": "Get Cdr Summary By Customer",
        "value": "Get Cdr Summary By Customer",
        "action": "Get records summary by customer",
        "description": "Gets a summary overview on CDRs by customer based on the specified criteria",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/summary/customer"
          }
        }
      },
      {
        "name": "Get Cdr Summary By Destination",
        "value": "Get Cdr Summary By Destination",
        "action": "Get records summary by destination",
        "description": "Gets a summary overview on CDRs by destination based on the specified criteria",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/summary/destination"
          }
        }
      },
      {
        "name": "Get Cdr Summary By Supplier",
        "value": "Get Cdr Summary By Supplier",
        "action": "Get records summary by supplier",
        "description": "Gets a summary overview on CDRs by supplier based on the specified criteria",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/summary/supplier"
          }
        }
      },
      {
        "name": "Get Cli Orphans",
        "value": "Get Cli Orphans",
        "action": "Get orphan CLIs",
        "description": "Gets a list of orphan CLIs",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/orphan/cli"
          }
        }
      },
      {
        "name": "Get Destination Orphans",
        "value": "Get Destination Orphans",
        "action": "Get orphan destinations",
        "description": "Gets a list of orphan destinations",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/orphan/destination"
          }
        }
      },
      {
        "name": "Get Destination Orphan Count",
        "value": "Get Destination Orphan Count",
        "action": "Get orphan count",
        "description": "Gets a count of orphaned records without customers and/or destinations",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/cdr/analytics/orphan/count"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /cdr/analytics/summary",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/summary/customer",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Customer"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/summary/destination",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Destination"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/summary/supplier",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Supplier"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/orphan/cli",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Cli Orphans"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/orphan/destination",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Destination Orphans"
        ]
      }
    }
  },
  {
    "displayName": "GET /cdr/analytics/orphan/count",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "CDR Analytics"
        ],
        "operation": [
          "Get Destination Orphan Count"
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Customer"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Destination"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Cdr Summary By Supplier"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Cli Orphans"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Destination Orphans"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
        "displayName": "Cdr File Id",
        "name": "cdr_file_id",
        "description": "One or more `cdr_file_id`",
        "default": "[\n  null\n]",
        "type": "json",
        "routing": {
          "send": {
            "type": "query",
            "property": "cdr_file_id",
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
        "displayName": "Destination Id",
        "name": "destination_id",
        "description": "Filter by `destination_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination_id",
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
          "CDR Analytics"
        ],
        "operation": [
          "Get Destination Orphan Count"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "description": "From `date_time`",
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
        "description": "To `date_time`",
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
      }
    ]
  }
];
