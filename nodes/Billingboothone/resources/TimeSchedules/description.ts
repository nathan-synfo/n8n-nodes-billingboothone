import { INodeProperties } from 'n8n-workflow';

/**
 * Time Schedules resource description
 * Contains operation definitions and field configurations
 */
export const TimeSchedulesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Time Schedules",
        "value": "Get All Time Schedules",
        "action": "Get all time schedules",
        "description": "Retrieves all time schedules by supplier.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/timeschedule"
          }
        }
      },
      {
        "name": "Create Time Schedule",
        "value": "Create Time Schedule",
        "action": "Create time schedule",
        "description": "Create a time schedule.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/timeschedule"
          }
        }
      },
      {
        "name": "Delete Multiple Time Schedules",
        "value": "Delete Multiple Time Schedules",
        "action": "Delete multiple time schedules",
        "description": "Deletes all time schedules with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/timeschedule"
          }
        }
      },
      {
        "name": "Get Time Schedule",
        "value": "Get Time Schedule",
        "action": "Get a single time schedule",
        "description": "Retrieves a single time schedule.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/timeschedule/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Time Schedule",
        "value": "Update Time Schedule",
        "action": "Update time schedule",
        "description": "Updates an existing time schedule.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/timeschedule/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Time Schedule",
        "value": "Delete Time Schedule",
        "action": "Delete time schedule",
        "description": "Deletes an existing time schedule.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/timeschedule/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /timeschedule",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Get All Time Schedules"
        ]
      }
    }
  },
  {
    "displayName": "POST /timeschedule",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Create Time Schedule"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /timeschedule",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Delete Multiple Time Schedules"
        ]
      }
    }
  },
  {
    "displayName": "GET /timeschedule/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Get Time Schedule"
        ]
      }
    }
  },
  {
    "displayName": "PUT /timeschedule/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Update Time Schedule"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /timeschedule/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Delete Time Schedule"
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
          "Time Schedules"
        ],
        "operation": [
          "Get Time Schedule"
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
          "Time Schedules"
        ],
        "operation": [
          "Update Time Schedule"
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
          "Time Schedules"
        ],
        "operation": [
          "Delete Time Schedule"
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
          "Time Schedules"
        ],
        "operation": [
          "Create Time Schedule"
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
        "displayName": "Time Period",
        "name": "time_period",
        "type": "options",
        "default": "peak",
        "options": [
          {
            "name": "Peak",
            "value": "peak"
          },
          {
            "name": "Offpeak",
            "value": "offpeak"
          },
          {
            "name": "Weekend Peak",
            "value": "weekendPeak"
          },
          {
            "name": "Weekend Offpeak",
            "value": "weekendOffpeak"
          }
        ],
        "routing": {
          "send": {
            "property": "time_period",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Monday",
        "name": "monday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Monday",
        "routing": {
          "send": {
            "property": "monday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Tuesday",
        "name": "tuesday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Tuesday",
        "routing": {
          "send": {
            "property": "tuesday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Wednesday",
        "name": "wednesday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Wednesday",
        "routing": {
          "send": {
            "property": "wednesday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Thursday",
        "name": "thursday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Thursday",
        "routing": {
          "send": {
            "property": "thursday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Friday",
        "name": "friday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Friday",
        "routing": {
          "send": {
            "property": "friday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Saturday",
        "name": "saturday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Saturday",
        "routing": {
          "send": {
            "property": "saturday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Sunday",
        "name": "sunday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Sunday",
        "routing": {
          "send": {
            "property": "sunday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Start",
        "name": "start",
        "type": "string",
        "default": "",
        "description": "Start time of the period",
        "routing": {
          "send": {
            "property": "start",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "type": "string",
        "default": "",
        "description": "End time of the period",
        "routing": {
          "send": {
            "property": "end",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Supplier Id",
        "name": "supplier_id",
        "type": "number",
        "default": 0,
        "description": "Supplier that the schedule belongs to",
        "routing": {
          "send": {
            "property": "supplier_id",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      }
    ]
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
          "Time Schedules"
        ],
        "operation": [
          "Delete Multiple Time Schedules"
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
    "displayName": "Additional Body Fields",
    "name": "bodyOptions",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "Time Schedules"
        ],
        "operation": [
          "Update Time Schedule"
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
        "displayName": "Time Period",
        "name": "time_period",
        "type": "options",
        "default": "peak",
        "options": [
          {
            "name": "Peak",
            "value": "peak"
          },
          {
            "name": "Offpeak",
            "value": "offpeak"
          },
          {
            "name": "Weekend Peak",
            "value": "weekendPeak"
          },
          {
            "name": "Weekend Offpeak",
            "value": "weekendOffpeak"
          }
        ],
        "routing": {
          "send": {
            "property": "time_period",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Monday",
        "name": "monday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Monday",
        "routing": {
          "send": {
            "property": "monday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Tuesday",
        "name": "tuesday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Tuesday",
        "routing": {
          "send": {
            "property": "tuesday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Wednesday",
        "name": "wednesday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Wednesday",
        "routing": {
          "send": {
            "property": "wednesday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Thursday",
        "name": "thursday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Thursday",
        "routing": {
          "send": {
            "property": "thursday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Friday",
        "name": "friday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Friday",
        "routing": {
          "send": {
            "property": "friday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Saturday",
        "name": "saturday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Saturday",
        "routing": {
          "send": {
            "property": "saturday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Sunday",
        "name": "sunday",
        "type": "boolean",
        "default": true,
        "description": "True if it applies to Sunday",
        "routing": {
          "send": {
            "property": "sunday",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Start",
        "name": "start",
        "type": "string",
        "default": "",
        "description": "Start time of the period",
        "routing": {
          "send": {
            "property": "start",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "End",
        "name": "end",
        "type": "string",
        "default": "",
        "description": "End time of the period",
        "routing": {
          "send": {
            "property": "end",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Supplier Id",
        "name": "supplier_id",
        "type": "number",
        "default": 0,
        "description": "Supplier that the schedule belongs to",
        "routing": {
          "send": {
            "property": "supplier_id",
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
          "Time Schedules"
        ],
        "operation": [
          "Get All Time Schedules"
        ]
      }
    },
    "options": [
      {
        "displayName": "Supplier Id",
        "name": "supplier_id",
        "description": "Filter by `supplier_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "supplier_id",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      }
    ]
  }
];
