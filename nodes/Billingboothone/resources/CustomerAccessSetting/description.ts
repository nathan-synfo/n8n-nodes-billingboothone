import { INodeProperties } from 'n8n-workflow';

/**
 * Customer Access Setting resource description
 * Contains operation definitions and field configurations
 */
export const CustomerAccessSettingFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ]
      }
    },
    "options": [
      {
        "name": "Get Customer Access Settings",
        "value": "Get Customer Access Settings",
        "action": "Get customer access settings",
        "description": "Retrieves the customer access settings for `organisation_id`.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}"
          }
        }
      },
      {
        "name": "Create Customer Access Setting",
        "value": "Create Customer Access Setting",
        "action": "Initialise customer access portal",
        "description": "Creates the necessary customer access portal settings for `organisation_id`.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}"
          }
        }
      },
      {
        "name": "Update Customer Access Setting",
        "value": "Update Customer Access Setting",
        "action": "Update customer access settings",
        "description": "Updates the customer access settings for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}"
          }
        }
      },
      {
        "name": "Delete Customer Access Setting",
        "value": "Delete Customer Access Setting",
        "action": "Clear customer access settings",
        "description": "Clears the customer access settings back to default for `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}"
          }
        }
      },
      {
        "name": "Update Customer Access Image",
        "value": "Update Customer Access Image",
        "action": "Update sign in image",
        "description": "Updates the customer access portal's sign in front page image",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/image"
          }
        }
      },
      {
        "name": "Get Customer Access Image",
        "value": "Get Customer Access Image",
        "action": "Get sign in image",
        "description": "Retrieves the customer access portal's sign in front page image.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/image"
          }
        }
      },
      {
        "name": "Delete Customer Access Image",
        "value": "Delete Customer Access Image",
        "action": "Delete sign in image",
        "description": "Removes th sign in image for the customer access portal of `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/image"
          }
        }
      },
      {
        "name": "Update Customer Access Favicon",
        "value": "Update Customer Access Favicon",
        "action": "Update favicon image",
        "description": "Updates the customer access portal's favicon image",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/favicon"
          }
        }
      },
      {
        "name": "Get Customer Access Favicon",
        "value": "Get Customer Access Favicon",
        "action": "Get favicon image",
        "description": "Retrieves the customer access portal's favicon image.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/favicon"
          }
        }
      },
      {
        "name": "Delete Customer Access Favicon",
        "value": "Delete Customer Access Favicon",
        "action": "Delete favicon image",
        "description": "Removes the favicon for the customer access portal of `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/favicon"
          }
        }
      },
      {
        "name": "Update Customer Access Logo Light",
        "value": "Update Customer Access Logo Light",
        "action": "Update Light Theme Logo",
        "description": "Updates the customer access portal's light theme logo image",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/light"
          }
        }
      },
      {
        "name": "Get Customer Access Logo Light",
        "value": "Get Customer Access Logo Light",
        "action": "Get Light Theme Logo",
        "description": "Retrieves the customer access portal's light theme logo image.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/light"
          }
        }
      },
      {
        "name": "Delete Customer Access Light Logo",
        "value": "Delete Customer Access Light Logo",
        "action": "Delete Light Theme Logo",
        "description": "Removes the light theme logo for the customer access portal of `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/light"
          }
        }
      },
      {
        "name": "Update Customer Access Logo Dark",
        "value": "Update Customer Access Logo Dark",
        "action": "Update Dark Theme Logo",
        "description": "Updates the customer access portal's dark theme logo image",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/dark"
          }
        }
      },
      {
        "name": "Get Customer Access Logo Dark",
        "value": "Get Customer Access Logo Dark",
        "action": "Get Dark Theme Logo",
        "description": "Retrieves the customer access portal's dark theme logo image.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/dark"
          }
        }
      },
      {
        "name": "Delete Customer Access Dark Logo",
        "value": "Delete Customer Access Dark Logo",
        "action": "Delete Dark Theme Logo",
        "description": "Removes the dark theme logo for the customer access portal of `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/settings/access/{{$parameter[\"organisationId\"]}}/logo/dark"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /settings/access/{organisationId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Settings"
        ]
      }
    }
  },
  {
    "displayName": "POST /settings/access/{organisationId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Create Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/image",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/image",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/image",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/favicon",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/favicon",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/favicon",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/logo/light",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Logo Light"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/logo/light",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Logo Light"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/logo/light",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Light Logo"
        ]
      }
    }
  },
  {
    "displayName": "PUT /settings/access/{organisationId}/logo/dark",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Logo Dark"
        ]
      }
    }
  },
  {
    "displayName": "GET /settings/access/{organisationId}/logo/dark",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Logo Dark"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /settings/access/{organisationId}/logo/dark",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Dark Logo"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Settings"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Create Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Setting"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Image"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Favicon"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Logo Light"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Logo Light"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Light Logo"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Logo Dark"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Get Customer Access Logo Dark"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 1,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Delete Customer Access Dark Logo"
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
          "Customer Access Setting"
        ],
        "operation": [
          "Create Customer Access Setting"
        ]
      }
    },
    "options": [
      {
        "displayName": "Domain",
        "name": "domain",
        "type": "string",
        "default": "",
        "description": "Fully-qualified domain name for the customer access portal",
        "routing": {
          "send": {
            "property": "domain",
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
    "displayName": "Theme",
    "name": "theme",
    "type": "options",
    "default": "light",
    "options": [
      {
        "name": "Light",
        "value": "light"
      },
      {
        "name": "Dark",
        "value": "dark"
      },
      {
        "name": "System",
        "value": "system"
      }
    ],
    "routing": {
      "send": {
        "property": "theme",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Light Theme Colour",
    "name": "light_theme_colour",
    "type": "string",
    "default": "",
    "description": "Theme colour used in the light theme",
    "routing": {
      "send": {
        "property": "light_theme_colour",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Dark Theme Colour",
    "name": "dark_theme_colour",
    "type": "string",
    "default": "",
    "description": "Theme colour used in the dark theme",
    "routing": {
      "send": {
        "property": "dark_theme_colour",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Allow Invoices",
    "name": "allow_invoices",
    "type": "boolean",
    "default": true,
    "description": "Allow invoices page to be displayed",
    "routing": {
      "send": {
        "property": "allow_invoices",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Allow Payments",
    "name": "allow_payments",
    "type": "boolean",
    "default": true,
    "description": "Allow payments page to be displayed",
    "routing": {
      "send": {
        "property": "allow_payments",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Allow Cdr",
    "name": "allow_cdr",
    "type": "boolean",
    "default": true,
    "description": "Allow calls page to be displayed",
    "routing": {
      "send": {
        "property": "allow_cdr",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Allow Account",
    "name": "allow_account",
    "type": "boolean",
    "default": true,
    "description": "Allow account page to be displayed",
    "routing": {
      "send": {
        "property": "allow_account",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
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
          "Customer Access Setting"
        ],
        "operation": [
          "Update Customer Access Setting"
        ]
      }
    },
    "options": [
      {
        "displayName": "Domain",
        "name": "domain",
        "type": "string",
        "default": "",
        "description": "FQDN for accessing the customer access portal",
        "routing": {
          "send": {
            "property": "domain",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Portal Name",
        "name": "portal_name",
        "type": "string",
        "default": "",
        "description": "Customer potal name",
        "routing": {
          "send": {
            "property": "portal_name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Light Navigation Item Colour",
        "name": "light_navigation_item_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item colour for light theme",
        "routing": {
          "send": {
            "property": "light_navigation_item_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Light Navigation Item Selected Colour",
        "name": "light_navigation_item_selected_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item selected colour for light theme",
        "routing": {
          "send": {
            "property": "light_navigation_item_selected_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Light Navigation Item Hover Colour",
        "name": "light_navigation_item_hover_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item hover colour for light theme",
        "routing": {
          "send": {
            "property": "light_navigation_item_hover_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Light Navigation Background Colour",
        "name": "light_navigation_background_colour",
        "type": "string",
        "default": "",
        "description": "Navigation background colour for light theme",
        "routing": {
          "send": {
            "property": "light_navigation_background_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Dark Navigation Item Colour",
        "name": "dark_navigation_item_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item colour for dark theme",
        "routing": {
          "send": {
            "property": "dark_navigation_item_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Dark Navigation Item Selected Colour",
        "name": "dark_navigation_item_selected_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item selected colour for dark theme",
        "routing": {
          "send": {
            "property": "dark_navigation_item_selected_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Dark Navigation Item Hover Colour",
        "name": "dark_navigation_item_hover_colour",
        "type": "string",
        "default": "",
        "description": "Navigation item hover colour for dark theme",
        "routing": {
          "send": {
            "property": "dark_navigation_item_hover_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Dark Navigation Background Colour",
        "name": "dark_navigation_background_colour",
        "type": "string",
        "default": "",
        "description": "Navigation background colour for dark theme",
        "routing": {
          "send": {
            "property": "dark_navigation_background_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Custom Css",
        "name": "custom_css",
        "type": "string",
        "default": "",
        "description": "Optional custom CSS to overrides elements on the portal",
        "routing": {
          "send": {
            "property": "custom_css",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Signin Headline",
        "name": "signin_headline",
        "type": "string",
        "default": "",
        "description": "Optional headline text for the sign in page",
        "routing": {
          "send": {
            "property": "signin_headline",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Signin Subtext",
        "name": "signin_subtext",
        "type": "string",
        "default": "",
        "description": "Optional subheading text for the sign in page",
        "routing": {
          "send": {
            "property": "signin_subtext",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Signin Text Colour",
        "name": "signin_text_colour",
        "type": "string",
        "default": "",
        "description": "Optional sign in text colour for the sign in page",
        "routing": {
          "send": {
            "property": "signin_text_colour",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Invoices",
        "name": "label_invoices",
        "type": "string",
        "default": "",
        "description": "Custom invoices menu label, if applicable",
        "routing": {
          "send": {
            "property": "label_invoices",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Payments",
        "name": "label_payments",
        "type": "string",
        "default": "",
        "description": "Custom payments menu label, if applicable",
        "routing": {
          "send": {
            "property": "label_payments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Cdr",
        "name": "label_cdr",
        "type": "string",
        "default": "",
        "description": "Custom calls menu label, if applicable",
        "routing": {
          "send": {
            "property": "label_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Allow Edit Details",
        "name": "allow_edit_details",
        "type": "boolean",
        "default": true,
        "description": "Allow customers to alter their details",
        "routing": {
          "send": {
            "property": "allow_edit_details",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Account",
        "name": "label_account",
        "type": "string",
        "default": "",
        "description": "Custom account menu label, if applicable",
        "routing": {
          "send": {
            "property": "label_account",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Terms",
        "name": "label_terms",
        "type": "string",
        "default": "",
        "description": "Custom terms of service link label, if applicable",
        "routing": {
          "send": {
            "property": "label_terms",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Url Terms",
        "name": "url_terms",
        "type": "string",
        "default": "",
        "description": "Url for terms of service link, if applicable",
        "routing": {
          "send": {
            "property": "url_terms",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Privacy",
        "name": "label_privacy",
        "type": "string",
        "default": "",
        "description": "Custom privacy policy link, if applicable",
        "routing": {
          "send": {
            "property": "label_privacy",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Url Privacy",
        "name": "url_privacy",
        "type": "string",
        "default": "",
        "description": "Url for privacy policy link, if applicable",
        "routing": {
          "send": {
            "property": "url_privacy",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Label Contact",
        "name": "label_contact",
        "type": "string",
        "default": "",
        "description": "Custom contact link, if applicable",
        "routing": {
          "send": {
            "property": "label_contact",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Url Contact",
        "name": "url_contact",
        "type": "string",
        "default": "",
        "description": "Url for contact link, if applicable",
        "routing": {
          "send": {
            "property": "url_contact",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Allow Registration",
        "name": "allow_registration",
        "type": "boolean",
        "default": true,
        "description": "Allow customers to register",
        "routing": {
          "send": {
            "property": "allow_registration",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Banners",
        "name": "display_banners",
        "type": "boolean",
        "default": true,
        "description": "Display banners",
        "routing": {
          "send": {
            "property": "display_banners",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Allow Payment Self Service",
        "name": "allow_payment_self_service",
        "type": "boolean",
        "default": true,
        "description": "Allow customers to manage their payment method and settle invoices via the portal",
        "routing": {
          "send": {
            "property": "allow_payment_self_service",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Display Active Charges",
        "name": "display_active_charges",
        "type": "boolean",
        "default": true,
        "description": "Allow customers to show or hide active charges",
        "routing": {
          "send": {
            "property": "display_active_charges",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      }
    ]
  }
];
