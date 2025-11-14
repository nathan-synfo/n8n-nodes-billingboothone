import { INodeProperties } from 'n8n-workflow';

/**
 * Auto Collection Endpoints resource description
 * Contains operation definitions and field configurations
 */
export const AutoCollectionEndpointsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ]
      }
    },
    "options": [
      {
        "name": "Get Auto Collection Endpoint",
        "value": "Get Auto Collection Endpoint",
        "action": "Get a single auto collection endpoint",
        "description": "Gets a single auto collection of endpoint",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Auto Collection Endpoint",
        "value": "Update Auto Collection Endpoint",
        "action": "Update auto collection endpoint",
        "description": "Updates a auto collection of endpoint",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Auto Collection Endpoint",
        "value": "Delete Auto Collection Endpoint",
        "action": "Delete auto collection endpoint",
        "description": "Deletes a auto collection of endpoint",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Get All Auto Collection Endpoint",
        "value": "Get All Auto Collection Endpoint",
        "action": "Get all auto collection endpoint",
        "description": "Gets all auto collection of endpoint",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/autocollection/endpoints"
          }
        }
      },
      {
        "name": "Create Auto Collection Endpoint",
        "value": "Create Auto Collection Endpoint",
        "action": "Create auto collection endpoint",
        "description": "Creates a auto collection of endpoint",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/autocollection/endpoints"
          }
        }
      },
      {
        "name": "Delete Multiple Auto Collection Endpoint",
        "value": "Delete Multiple Auto Collection Endpoint",
        "action": "Delete multiple auto collection endpoints",
        "description": "Deletes all auto collection endpoint with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/autocollection/endpoints"
          }
        }
      },
      {
        "name": "Update Single Enabled Flag Auto Collection Endpoint Enable",
        "value": "Update Single Enabled Flag Auto Collection Endpoint Enable",
        "action": "Enable auto collection endpoint",
        "description": "Enables the specified auto collection endpoint",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}/enable"
          }
        }
      },
      {
        "name": "Update Single Enabled Flag Auto Collection Endpoint Disable",
        "value": "Update Single Enabled Flag Auto Collection Endpoint Disable",
        "action": "Disable auto collection endpoint",
        "description": "Disables the specified auto collection endpoint",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}/disable"
          }
        }
      },
      {
        "name": "Update Enabled Flag Auto Collection Endpoint Enable",
        "value": "Update Enabled Flag Auto Collection Endpoint Enable",
        "action": "Enable multiple auto collection endpoints",
        "description": "Enables all auto collection endpoints specific in `id`",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/autocollection/endpoints/enable"
          }
        }
      },
      {
        "name": "Update Enabled Flag Auto Collection Endpoint Disable",
        "value": "Update Enabled Flag Auto Collection Endpoint Disable",
        "action": "Disable multiple auto collection endpoints",
        "description": "Disables all auto collection endpoints specific in `id`",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/autocollection/endpoints/disable"
          }
        }
      },
      {
        "name": "Force Endpoint Check",
        "value": "Force Endpoint Check",
        "action": "Check auto collection endpoint",
        "description": "Manually trigger a check for auto collections on the specified endpoint.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/autocollection/endpoints/{{$parameter[\"id\"]}}/check"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /autocollection/endpoints/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Get Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "PUT /autocollection/endpoints/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /autocollection/endpoints/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Delete Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "GET /autocollection/endpoints",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Get All Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "POST /autocollection/endpoints",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /autocollection/endpoints",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Delete Multiple Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "displayName": "PUT /autocollection/endpoints/{id}/enable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Single Enabled Flag Auto Collection Endpoint Enable"
        ]
      }
    }
  },
  {
    "displayName": "PUT /autocollection/endpoints/{id}/disable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Single Enabled Flag Auto Collection Endpoint Disable"
        ]
      }
    }
  },
  {
    "displayName": "PUT /autocollection/endpoints/enable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Enabled Flag Auto Collection Endpoint Enable"
        ]
      }
    }
  },
  {
    "displayName": "PUT /autocollection/endpoints/disable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Enabled Flag Auto Collection Endpoint Disable"
        ]
      }
    }
  },
  {
    "displayName": "POST /autocollection/endpoints/{id}/check",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Force Endpoint Check"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Get Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Delete Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Single Enabled Flag Auto Collection Endpoint Enable"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Single Enabled Flag Auto Collection Endpoint Disable"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Force Endpoint Check"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "",
    "description": "Endpoint Name",
    "routing": {
      "send": {
        "property": "name",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Address",
    "name": "address",
    "type": "string",
    "default": "",
    "description": "Remote server address or IP",
    "routing": {
      "send": {
        "property": "address",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Authentication Mode",
    "name": "authentication_mode",
    "type": "options",
    "default": "password",
    "options": [
      {
        "name": "Password",
        "value": "password"
      },
      {
        "name": "Private Key",
        "value": "privateKey"
      }
    ],
    "routing": {
      "send": {
        "property": "authentication_mode",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Username",
    "name": "username",
    "type": "string",
    "default": "",
    "description": "Authentication username",
    "routing": {
      "send": {
        "property": "username",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Password",
    "name": "password",
    "type": "string",
    "default": "",
    "description": "Authentication password",
    "routing": {
      "send": {
        "property": "password",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Protocol",
    "name": "protocol",
    "type": "options",
    "default": "ftp",
    "options": [
      {
        "name": "Ftp",
        "value": "ftp"
      },
      {
        "name": "Sftp",
        "value": "sftp"
      },
      {
        "name": "Ftps",
        "value": "ftps"
      }
    ],
    "routing": {
      "send": {
        "property": "protocol",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Frequency",
    "name": "frequency",
    "type": "options",
    "default": "hourly",
    "options": [
      {
        "name": "Hourly",
        "value": "hourly"
      },
      {
        "name": "Four Hours",
        "value": "fourHours"
      },
      {
        "name": "Daily",
        "value": "daily"
      }
    ],
    "routing": {
      "send": {
        "property": "frequency",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Supplier Id",
    "name": "supplier_id",
    "type": "number",
    "default": 0,
    "description": "Unique identifier of the associated Supplier",
    "routing": {
      "send": {
        "property": "supplier_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Auto Collection Endpoint"
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
        "displayName": "Enabled",
        "name": "enabled",
        "type": "boolean",
        "default": true,
        "description": "If disabled, endpoint will not triggered",
        "routing": {
          "send": {
            "property": "enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Private Key",
        "name": "private_key",
        "type": "string",
        "default": "",
        "description": "Private key content for authentication, if applicable",
        "routing": {
          "send": {
            "property": "private_key",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Port",
        "name": "port",
        "type": "number",
        "default": 0,
        "description": "Optional port. If omitted, the default port will be used",
        "routing": {
          "send": {
            "property": "port",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Hour",
        "name": "hour",
        "type": "number",
        "default": 0,
        "description": "If `frequency` is `daily`, set the trigger time of the day",
        "routing": {
          "send": {
            "property": "hour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Supplier Name",
        "name": "supplier_name",
        "type": "string",
        "default": "",
        "description": "Name of the associated Supplier",
        "routing": {
          "send": {
            "property": "supplier_name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Cdr",
        "name": "is_cdr",
        "type": "boolean",
        "default": true,
        "description": "Support cdr",
        "routing": {
          "send": {
            "property": "is_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Root Folder",
        "name": "cdr_root_folder",
        "type": "string",
        "default": "",
        "description": "Cdr root path",
        "routing": {
          "send": {
            "property": "cdr_root_folder",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr File Pattern",
        "name": "cdr_file_pattern",
        "type": "string",
        "default": "",
        "description": "Optional cdr file pattern",
        "routing": {
          "send": {
            "property": "cdr_file_pattern",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Recurse",
        "name": "cdr_recurse",
        "type": "boolean",
        "default": true,
        "description": "If true any subfolders will be included in the cdr file collection",
        "routing": {
          "send": {
            "property": "cdr_recurse",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Service File",
        "name": "is_service_file",
        "type": "boolean",
        "default": true,
        "description": "Support service file",
        "routing": {
          "send": {
            "property": "is_service_file",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Root Folder",
        "name": "service_file_root_folder",
        "type": "string",
        "default": "",
        "description": "Service file root path",
        "routing": {
          "send": {
            "property": "service_file_root_folder",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Pattern",
        "name": "service_file_pattern",
        "type": "string",
        "default": "",
        "description": "Optional service file pattern",
        "routing": {
          "send": {
            "property": "service_file_pattern",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Recurse",
        "name": "service_file_recurse",
        "type": "boolean",
        "default": true,
        "description": "If true any subfolders will be included in the service file collection",
        "routing": {
          "send": {
            "property": "service_file_recurse",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Checked At",
        "name": "last_checked_at",
        "type": "string",
        "default": "",
        "description": "Date/Time when the endpoint was last checked",
        "routing": {
          "send": {
            "property": "last_checked_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Error At",
        "name": "last_error_at",
        "type": "string",
        "default": "",
        "description": "Date/time of the last error. If the endpoint is not in an errored state, this property will be null",
        "routing": {
          "send": {
            "property": "last_error_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Error Message",
        "name": "last_error_message",
        "type": "string",
        "default": "",
        "description": "Details of the last error. If the endpoint is not in an errored state, this property will be null",
        "routing": {
          "send": {
            "property": "last_error_message",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      }
    ]
  },
  {
    "required": true,
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "",
    "description": "Endpoint Name",
    "routing": {
      "send": {
        "property": "name",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Address",
    "name": "address",
    "type": "string",
    "default": "",
    "description": "Remote server address or IP",
    "routing": {
      "send": {
        "property": "address",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Authentication Mode",
    "name": "authentication_mode",
    "type": "options",
    "default": "password",
    "options": [
      {
        "name": "Password",
        "value": "password"
      },
      {
        "name": "Private Key",
        "value": "privateKey"
      }
    ],
    "routing": {
      "send": {
        "property": "authentication_mode",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Username",
    "name": "username",
    "type": "string",
    "default": "",
    "description": "Authentication username",
    "routing": {
      "send": {
        "property": "username",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Password",
    "name": "password",
    "type": "string",
    "default": "",
    "description": "Authentication password",
    "routing": {
      "send": {
        "property": "password",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Protocol",
    "name": "protocol",
    "type": "options",
    "default": "ftp",
    "options": [
      {
        "name": "Ftp",
        "value": "ftp"
      },
      {
        "name": "Sftp",
        "value": "sftp"
      },
      {
        "name": "Ftps",
        "value": "ftps"
      }
    ],
    "routing": {
      "send": {
        "property": "protocol",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Frequency",
    "name": "frequency",
    "type": "options",
    "default": "hourly",
    "options": [
      {
        "name": "Hourly",
        "value": "hourly"
      },
      {
        "name": "Four Hours",
        "value": "fourHours"
      },
      {
        "name": "Daily",
        "value": "daily"
      }
    ],
    "routing": {
      "send": {
        "property": "frequency",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Supplier Id",
    "name": "supplier_id",
    "type": "number",
    "default": 0,
    "description": "Unique identifier of the associated Supplier",
    "routing": {
      "send": {
        "property": "supplier_id",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Create Auto Collection Endpoint"
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
        "displayName": "Enabled",
        "name": "enabled",
        "type": "boolean",
        "default": true,
        "description": "If disabled, endpoint will not triggered",
        "routing": {
          "send": {
            "property": "enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Private Key",
        "name": "private_key",
        "type": "string",
        "default": "",
        "description": "Private key content for authentication, if applicable",
        "routing": {
          "send": {
            "property": "private_key",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Port",
        "name": "port",
        "type": "number",
        "default": 0,
        "description": "Optional port. If omitted, the default port will be used",
        "routing": {
          "send": {
            "property": "port",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Hour",
        "name": "hour",
        "type": "number",
        "default": 0,
        "description": "If `frequency` is `daily`, set the trigger time of the day",
        "routing": {
          "send": {
            "property": "hour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Supplier Name",
        "name": "supplier_name",
        "type": "string",
        "default": "",
        "description": "Name of the associated Supplier",
        "routing": {
          "send": {
            "property": "supplier_name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Cdr",
        "name": "is_cdr",
        "type": "boolean",
        "default": true,
        "description": "Support cdr",
        "routing": {
          "send": {
            "property": "is_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Root Folder",
        "name": "cdr_root_folder",
        "type": "string",
        "default": "",
        "description": "Cdr root path",
        "routing": {
          "send": {
            "property": "cdr_root_folder",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr File Pattern",
        "name": "cdr_file_pattern",
        "type": "string",
        "default": "",
        "description": "Optional cdr file pattern",
        "routing": {
          "send": {
            "property": "cdr_file_pattern",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Recurse",
        "name": "cdr_recurse",
        "type": "boolean",
        "default": true,
        "description": "If true any subfolders will be included in the cdr file collection",
        "routing": {
          "send": {
            "property": "cdr_recurse",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Is Service File",
        "name": "is_service_file",
        "type": "boolean",
        "default": true,
        "description": "Support service file",
        "routing": {
          "send": {
            "property": "is_service_file",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Root Folder",
        "name": "service_file_root_folder",
        "type": "string",
        "default": "",
        "description": "Service file root path",
        "routing": {
          "send": {
            "property": "service_file_root_folder",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Pattern",
        "name": "service_file_pattern",
        "type": "string",
        "default": "",
        "description": "Optional service file pattern",
        "routing": {
          "send": {
            "property": "service_file_pattern",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Service File Recurse",
        "name": "service_file_recurse",
        "type": "boolean",
        "default": true,
        "description": "If true any subfolders will be included in the service file collection",
        "routing": {
          "send": {
            "property": "service_file_recurse",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Checked At",
        "name": "last_checked_at",
        "type": "string",
        "default": "",
        "description": "Date/Time when the endpoint was last checked",
        "routing": {
          "send": {
            "property": "last_checked_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Error At",
        "name": "last_error_at",
        "type": "string",
        "default": "",
        "description": "Date/time of the last error. If the endpoint is not in an errored state, this property will be null",
        "routing": {
          "send": {
            "property": "last_error_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Error Message",
        "name": "last_error_message",
        "type": "string",
        "default": "",
        "description": "Details of the last error. If the endpoint is not in an errored state, this property will be null",
        "routing": {
          "send": {
            "property": "last_error_message",
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Delete Multiple Auto Collection Endpoint"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Enabled Flag Auto Collection Endpoint Enable"
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
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Update Enabled Flag Auto Collection Endpoint Disable"
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
    "displayName": "Additional Fields",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "Auto Collection Endpoints"
        ],
        "operation": [
          "Get All Auto Collection Endpoint"
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
        "displayName": "Supplier Id",
        "name": "supplierId",
        "description": "Filter by `supplier_id`",
        "default": 0,
        "type": "number",
        "routing": {
          "send": {
            "type": "query",
            "property": "supplierId",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      },
      {
        "displayName": "Search",
        "name": "search",
        "description": "Search name",
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name",
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
