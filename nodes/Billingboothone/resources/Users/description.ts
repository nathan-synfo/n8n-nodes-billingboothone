import { INodeProperties } from 'n8n-workflow';

/**
 * Users resource description
 * Contains operation definitions and field configurations
 */
export const UsersFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ]
      }
    },
    "options": [
      {
        "name": "Forgot Password",
        "value": "Forgot Password",
        "action": "Forgotten token generated for user password",
        "description": "Forgotten password token is generated and email is sent to the user",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/forgotten-password"
          }
        }
      },
      {
        "name": "Reset Password",
        "value": "Reset Password",
        "action": "Reset password for user",
        "description": "Reset password and send confirmation email to user",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/forgotten-password/reset"
          }
        }
      },
      {
        "name": "Get All Users",
        "value": "Get All Users",
        "action": "Get all users",
        "description": "Retrieves all users.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/user"
          }
        }
      },
      {
        "name": "Create User",
        "value": "Create User",
        "action": "Create user",
        "description": "Create a user.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/user"
          }
        }
      },
      {
        "name": "Delete Multiple Users",
        "value": "Delete Multiple Users",
        "action": "Delete multiple users",
        "description": "Deletes all users with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/user"
          }
        }
      },
      {
        "name": "Get Current User",
        "value": "Get Current User",
        "action": "Get current user",
        "description": "Retrieves user information for the currently authorised user.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/user/whoami"
          }
        }
      },
      {
        "name": "Get User",
        "value": "Get User",
        "action": "Get a single user",
        "description": "Retrieves a single user.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/user/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update User",
        "value": "Update User",
        "action": "Update user",
        "description": "Updates a user.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete User",
        "value": "Delete User",
        "action": "Delete user",
        "description": "Deletes an existing user.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/user/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Enable Current User 2 Fa",
        "value": "Enable Current User 2 Fa",
        "action": "Enable 2FA on current user",
        "description": "Enable Two-factor authentication on the current user",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/2fa/enable"
          }
        }
      },
      {
        "name": "Verify Current User 2 Fa",
        "value": "Verify Current User 2 Fa",
        "action": "Verify 2FA on current user",
        "description": "Verify two-factor authentication on the current user",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/2fa/verify"
          }
        }
      },
      {
        "name": "Disable Current User 2 Fa",
        "value": "Disable Current User 2 Fa",
        "action": "Disable 2FA on current user",
        "description": "Disable two-factor authentication on the current user",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/2fa/disable"
          }
        }
      },
      {
        "name": "Suspend User",
        "value": "Suspend User",
        "action": "Suspend user",
        "description": "Suspends an existing user.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/user/{{$parameter[\"id\"]}}/suspend"
          }
        }
      },
      {
        "name": "Suspend Multiple Users",
        "value": "Suspend Multiple Users",
        "action": "Suspend multiple users",
        "description": "Suspends all users with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/suspend"
          }
        }
      },
      {
        "name": "Activate User",
        "value": "Activate User",
        "action": "Activate user",
        "description": "Activates a previously suspended user.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/user/{{$parameter[\"id\"]}}/activate"
          }
        }
      },
      {
        "name": "Activate Multiple Users",
        "value": "Activate Multiple Users",
        "action": "Activate multiple users",
        "description": "Activates all users with an `id` matching the supplied list if they have been previously suspended.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/activate"
          }
        }
      },
      {
        "name": "Change User Password",
        "value": "Change User Password",
        "action": "Change password",
        "description": "Updates the specified user's password.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/{{$parameter[\"id\"]}}/password"
          }
        }
      },
      {
        "name": "Change Current User Password",
        "value": "Change Current User Password",
        "action": "Change current password",
        "description": "Updates the current authorised user's password.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/password"
          }
        }
      },
      {
        "name": "Update Current User Details",
        "value": "Update Current User Details",
        "action": "Update current details",
        "description": "Updates the current authorised user's details.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/user/details"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "PUT /forgotten-password",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Forgot Password"
        ]
      }
    }
  },
  {
    "displayName": "PUT /forgotten-password/reset",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Reset Password"
        ]
      }
    }
  },
  {
    "displayName": "GET /user",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Get All Users"
        ]
      }
    }
  },
  {
    "displayName": "POST /user",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Create User"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /user",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Delete Multiple Users"
        ]
      }
    }
  },
  {
    "displayName": "GET /user/whoami",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Get Current User"
        ]
      }
    }
  },
  {
    "displayName": "GET /user/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Get User"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Update User"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /user/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Delete User"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/2fa/enable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Enable Current User 2 Fa"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/2fa/verify",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Verify Current User 2 Fa"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/2fa/disable",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Disable Current User 2 Fa"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /user/{id}/suspend",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Suspend User"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/suspend",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Suspend Multiple Users"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /user/{id}/activate",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Activate User"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/activate",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Activate Multiple Users"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/{id}/password",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Change User Password"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/password",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Change Current User Password"
        ]
      }
    }
  },
  {
    "displayName": "PUT /user/details",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Update Current User Details"
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
          "Users"
        ],
        "operation": [
          "Get User"
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
          "Users"
        ],
        "operation": [
          "Update User"
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
          "Users"
        ],
        "operation": [
          "Delete User"
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
          "Users"
        ],
        "operation": [
          "Suspend User"
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
          "Users"
        ],
        "operation": [
          "Activate User"
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
          "Users"
        ],
        "operation": [
          "Change User Password"
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
          "Users"
        ],
        "operation": [
          "Reset Password"
        ]
      }
    },
    "options": [
      {
        "displayName": "Password",
        "name": "password",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "property": "password",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Forgotten Token",
        "name": "forgotten_token",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "property": "forgotten_token",
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
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "default": "",
    "description": "Unique email address",
    "routing": {
      "send": {
        "property": "email",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Create User"
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
          "Users"
        ],
        "operation": [
          "Create User"
        ]
      }
    },
    "options": [
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "User description (e.g. full name)",
        "routing": {
          "send": {
            "property": "description",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Password",
        "name": "password",
        "type": "string",
        "default": "",
        "description": "Password used for signing in",
        "routing": {
          "send": {
            "property": "password",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Role Ids",
        "name": "role_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of role ids",
        "routing": {
          "send": {
            "property": "role_ids",
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
          "Users"
        ],
        "operation": [
          "Delete Multiple Users"
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
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "default": "",
    "description": "Unique email address",
    "routing": {
      "send": {
        "property": "email",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Update User"
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
          "Users"
        ],
        "operation": [
          "Update User"
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
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "User description (e.g. full name)",
        "routing": {
          "send": {
            "property": "description",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Ip Restrictions",
        "name": "ip_restrictions",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of allowed IP addresses the user can access from. If blank, no IP Restrictions exist",
        "routing": {
          "send": {
            "property": "ip_restrictions",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Two Factor Enabled",
        "name": "two_factor_enabled",
        "type": "boolean",
        "default": true,
        "description": "True if the current user has two-factor authentication enabled",
        "routing": {
          "send": {
            "property": "two_factor_enabled",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Suspended",
        "name": "suspended",
        "type": "boolean",
        "default": true,
        "description": "True if access by the user is currently suspended",
        "routing": {
          "send": {
            "property": "suspended",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Last Accessed At",
        "name": "last_accessed_at",
        "type": "string",
        "default": "",
        "description": "Display date/time of last user access",
        "routing": {
          "send": {
            "property": "last_accessed_at",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Role Ids",
        "name": "role_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of role ids",
        "routing": {
          "send": {
            "property": "role_ids",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ JSON.parse($value) }}"
          }
        }
      },
      {
        "displayName": "Verification Code",
        "name": "verification_code",
        "type": "number",
        "default": 0,
        "description": "Optional verification support for support purposes",
        "routing": {
          "send": {
            "property": "verification_code",
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
          "Users"
        ],
        "operation": [
          "Enable Current User 2 Fa"
        ]
      }
    },
    "options": [
      {
        "displayName": "Method",
        "name": "method",
        "type": "options",
        "default": "email",
        "options": [
          {
            "name": "Email",
            "value": "email"
          },
          {
            "name": "Sms",
            "value": "sms"
          },
          {
            "name": "Totp",
            "value": "totp"
          }
        ],
        "routing": {
          "send": {
            "property": "method",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Sms Number",
        "name": "sms_number",
        "type": "string",
        "default": "",
        "description": "If `method` is `Sms`, this is the number SMS codes will be sent to",
        "routing": {
          "send": {
            "property": "sms_number",
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
          "Users"
        ],
        "operation": [
          "Verify Current User 2 Fa"
        ]
      }
    },
    "options": [
      {
        "displayName": "Challenge Token",
        "name": "challenge_token",
        "type": "string",
        "default": "",
        "description": "Challenge token",
        "routing": {
          "send": {
            "property": "challenge_token",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Authentication Code",
        "name": "authentication_code",
        "type": "string",
        "default": "",
        "description": "Authentication code",
        "routing": {
          "send": {
            "property": "authentication_code",
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
          "Users"
        ],
        "operation": [
          "Suspend Multiple Users"
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
          "Users"
        ],
        "operation": [
          "Activate Multiple Users"
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
    "displayName": "Password",
    "name": "password",
    "type": "string",
    "default": "",
    "description": "New password",
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
          "Users"
        ],
        "operation": [
          "Change User Password"
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
          "Users"
        ],
        "operation": [
          "Change User Password"
        ]
      }
    },
    "options": [
      {
        "displayName": "Notify User",
        "name": "notify_user",
        "type": "boolean",
        "default": true,
        "description": "If true, an email will be sent to the user with the new password",
        "routing": {
          "send": {
            "property": "notify_user",
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
    "displayName": "Old Password",
    "name": "old_password",
    "type": "string",
    "default": "",
    "description": "The old/existing password for the user",
    "routing": {
      "send": {
        "property": "old_password",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Change Current User Password"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "New Password",
    "name": "new_password",
    "type": "string",
    "default": "",
    "description": "New password",
    "routing": {
      "send": {
        "property": "new_password",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Change Current User Password"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "default": "",
    "description": "Unique email address",
    "routing": {
      "send": {
        "property": "email",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Users"
        ],
        "operation": [
          "Update Current User Details"
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
          "Users"
        ],
        "operation": [
          "Update Current User Details"
        ]
      }
    },
    "options": [
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "User description (e.g. full name)",
        "routing": {
          "send": {
            "property": "description",
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
          "Users"
        ],
        "operation": [
          "Forgot Password"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email",
        "name": "email",
        "description": "User email",
        "default": "",
        "type": "string",
        "routing": {
          "send": {
            "type": "query",
            "property": "email",
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
          "Users"
        ],
        "operation": [
          "Get All Users"
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
        "displayName": "Search",
        "name": "search",
        "description": "Search by `email`",
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: email, -email",
        "default": "email",
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
