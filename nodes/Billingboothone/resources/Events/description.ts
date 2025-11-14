import { INodeProperties } from 'n8n-workflow';

/**
 * Events resource description
 * Contains operation definitions and field configurations
 */
export const EventsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Events",
        "value": "Get All Events",
        "action": "Get all events",
        "description": "Retrieves all webhook events.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/webhooks/event"
          }
        }
      },
      {
        "name": "Get Event",
        "value": "Get Event",
        "action": "Get a single event",
        "description": "Retrieves a single webhook event.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/webhooks/event/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Retry Event",
        "value": "Retry Event",
        "action": "Retry event",
        "description": "Retries a specific webhook event.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/webhooks/event/{{$parameter[\"id\"]}}/retry"
          }
        }
      },
      {
        "name": "Bulk Retry Event",
        "value": "Bulk Retry Event",
        "action": "Bulk retry events",
        "description": "Retries one or more webhook events.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/webhooks/event/retry"
          }
        }
      },
      {
        "name": "Create Test",
        "value": "Create Test",
        "action": "Send test event",
        "description": "Sends a test event to all enabled endpoints.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/webhooks/event/test"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /webhooks/event",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Get All Events"
        ]
      }
    }
  },
  {
    "displayName": "GET /webhooks/event/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Get Event"
        ]
      }
    }
  },
  {
    "displayName": "PUT /webhooks/event/{id}/retry",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Retry Event"
        ]
      }
    }
  },
  {
    "displayName": "PUT /webhooks/event/retry",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Bulk Retry Event"
        ]
      }
    }
  },
  {
    "displayName": "POST /webhooks/event/test",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Create Test"
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
          "Events"
        ],
        "operation": [
          "Get Event"
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
          "Events"
        ],
        "operation": [
          "Retry Event"
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
          "Events"
        ],
        "operation": [
          "Bulk Retry Event"
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
    "required": true,
    "displayName": "Test Id",
    "name": "test_id",
    "type": "string",
    "default": "",
    "description": "A test id field - can be any user-specified value",
    "routing": {
      "send": {
        "property": "test_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Events"
        ],
        "operation": [
          "Create Test"
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
          "Events"
        ],
        "operation": [
          "Get All Events"
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
        "description": "Filter by `created_at`",
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
        "description": "Filter by `created_at`",
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
        "displayName": "Status",
        "name": "status",
        "description": "Filter by `status`",
        "default": "pending",
        "type": "options",
        "options": [
          {
            "name": "Pending",
            "value": "pending"
          },
          {
            "name": "Success",
            "value": "success"
          },
          {
            "name": "Failed",
            "value": "failed"
          },
          {
            "name": "Skipped",
            "value": "skipped"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "status",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Search",
        "name": "search",
        "description": "Search `url`",
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: created_at, -created_at",
        "default": "name",
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
