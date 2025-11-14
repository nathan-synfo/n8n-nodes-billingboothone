import { INodeProperties } from 'n8n-workflow';

/**
 * Roles resource description
 * Contains operation definitions and field configurations
 */
export const RolesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Roles",
        "value": "Get All Roles",
        "action": "Get all roles",
        "description": "Retrieves all roles.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/role"
          }
        }
      },
      {
        "name": "Create Role",
        "value": "Create Role",
        "action": "Create role",
        "description": "Create a role.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/role"
          }
        }
      },
      {
        "name": "Delete Multiple Roles",
        "value": "Delete Multiple Roles",
        "action": "Delete multiple roles",
        "description": "Deletes all roles.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/role"
          }
        }
      },
      {
        "name": "Get Role",
        "value": "Get Role",
        "action": "Get a single role",
        "description": "Retrieves a single role.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/role/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Update Role",
        "value": "Update Role",
        "action": "Update role",
        "description": "Updates an existing role.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/role/{{$parameter[\"id\"]}}"
          }
        }
      },
      {
        "name": "Delete Role",
        "value": "Delete Role",
        "action": "Delete role",
        "description": "Deletes an existing role.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/role/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /role",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Get All Roles"
        ]
      }
    }
  },
  {
    "displayName": "POST /role",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Create Role"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /role",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Delete Multiple Roles"
        ]
      }
    }
  },
  {
    "displayName": "GET /role/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Get Role"
        ]
      }
    }
  },
  {
    "displayName": "PUT /role/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Update Role"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /role/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Roles"
        ],
        "operation": [
          "Delete Role"
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
          "Roles"
        ],
        "operation": [
          "Get Role"
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
          "Roles"
        ],
        "operation": [
          "Update Role"
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
          "Roles"
        ],
        "operation": [
          "Delete Role"
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
          "Roles"
        ],
        "operation": [
          "Create Role"
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
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Role name",
        "routing": {
          "send": {
            "property": "name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Write",
        "name": "customer_write",
        "type": "boolean",
        "default": true,
        "description": "Gives customer create/edit/delete permissions",
        "routing": {
          "send": {
            "property": "customer_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Post Adjustments",
        "name": "customer_post_adjustments",
        "type": "boolean",
        "default": true,
        "description": "Gives ledger post adjustments permissions",
        "routing": {
          "send": {
            "property": "customer_post_adjustments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Notes Write",
        "name": "customer_notes_write",
        "type": "boolean",
        "default": true,
        "routing": {
          "send": {
            "property": "customer_notes_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Manage Customer Access",
        "name": "customer_manage_customer_access",
        "type": "boolean",
        "default": true,
        "description": "Allows management to customer access portal for customers",
        "routing": {
          "send": {
            "property": "customer_manage_customer_access",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Metadata",
        "name": "customer_metadata",
        "type": "boolean",
        "default": true,
        "routing": {
          "send": {
            "property": "customer_metadata",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Read",
        "name": "payments_read",
        "type": "boolean",
        "default": true,
        "description": "Gives payment read permissions",
        "routing": {
          "send": {
            "property": "payments_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Process",
        "name": "payments_process",
        "type": "boolean",
        "default": true,
        "description": "Gives payment processing permissions, e.g. taking payments",
        "routing": {
          "send": {
            "property": "payments_process",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Mandates",
        "name": "payments_mandates",
        "type": "boolean",
        "default": true,
        "description": "Gives payment mandate management permissions",
        "routing": {
          "send": {
            "property": "payments_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Disable Mandates",
        "name": "payments_disable_mandates",
        "type": "boolean",
        "default": true,
        "description": "Gives payment enable/disable mandate permissions",
        "routing": {
          "send": {
            "property": "payments_disable_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin General",
        "name": "admin_general",
        "type": "boolean",
        "default": true,
        "description": "Gives administrative general management permissions",
        "routing": {
          "send": {
            "property": "admin_general",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Organisations",
        "name": "admin_organisations",
        "type": "boolean",
        "default": true,
        "description": "Gives the ability to create/modify organisations within the account",
        "routing": {
          "send": {
            "property": "admin_organisations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Payments",
        "name": "admin_payments",
        "type": "boolean",
        "default": true,
        "description": "Gives the ability to modify payment provider options",
        "routing": {
          "send": {
            "property": "admin_payments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Cdr",
        "name": "admin_cdr",
        "type": "boolean",
        "default": true,
        "description": "Gives administrative permissions for modifying Voice, Data & SMS settings",
        "routing": {
          "send": {
            "property": "admin_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Data Policy",
        "name": "admin_data_policy",
        "type": "boolean",
        "default": true,
        "description": "Gives data policy settings permissions for all organisations",
        "routing": {
          "send": {
            "property": "admin_data_policy",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Integrations",
        "name": "admin_integrations",
        "type": "boolean",
        "default": true,
        "description": "Allows app integrations to be added and modified on the account",
        "routing": {
          "send": {
            "property": "admin_integrations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Email Delivery",
        "name": "admin_email_delivery",
        "type": "boolean",
        "default": true,
        "description": "Modify email delivery settings",
        "routing": {
          "send": {
            "property": "admin_email_delivery",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Webhooks",
        "name": "admin_webhooks",
        "type": "boolean",
        "default": true,
        "description": "Gives settings for webhook event pushing",
        "routing": {
          "send": {
            "property": "admin_webhooks",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Users",
        "name": "admin_users",
        "type": "boolean",
        "default": true,
        "description": "Manage and create users along with their permissions",
        "routing": {
          "send": {
            "property": "admin_users",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Invoice",
        "name": "admin_invoice",
        "type": "boolean",
        "default": true,
        "description": "Manage invoice templates",
        "routing": {
          "send": {
            "property": "admin_invoice",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Audit",
        "name": "admin_audit",
        "type": "boolean",
        "default": true,
        "description": "Manage audit entry",
        "routing": {
          "send": {
            "property": "admin_audit",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Notifications",
        "name": "admin_notifications",
        "type": "boolean",
        "default": true,
        "description": "Manage account notifications",
        "routing": {
          "send": {
            "property": "admin_notifications",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Charge Write",
        "name": "charge_write",
        "type": "boolean",
        "default": true,
        "description": "Gives charge create/update/terminate permissions",
        "routing": {
          "send": {
            "property": "charge_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Charge Delete",
        "name": "charge_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives charge delete/bulk delete/cancel/reactivate permissions",
        "routing": {
          "send": {
            "property": "charge_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Read",
        "name": "invoice_read",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice get/get line items/get single/pdf/download/service file/attachments/send/bulk send/send reminder/bulk send reminder/export permissions",
        "routing": {
          "send": {
            "property": "invoice_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Settle",
        "name": "invoice_settle",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice settle/bulk settle/batch settle/outstanding/bulk outstanding permissions",
        "routing": {
          "send": {
            "property": "invoice_settle",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Delete",
        "name": "invoice_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice void/bulk void/delete/bulk delete permissions",
        "routing": {
          "send": {
            "property": "invoice_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Credit Note Read",
        "name": "credit_note_read",
        "type": "boolean",
        "default": true,
        "description": "Gives credit note get/pdf permissions",
        "routing": {
          "send": {
            "property": "credit_note_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Credit Note Write",
        "name": "credit_note_write",
        "type": "boolean",
        "default": true,
        "description": "Gives credit note create/edit/delete permissions",
        "routing": {
          "send": {
            "property": "credit_note_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Product Write",
        "name": "product_write",
        "type": "boolean",
        "default": true,
        "description": "Gives product create/bulk create/update permissions",
        "routing": {
          "send": {
            "property": "product_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Product Delete",
        "name": "product_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives product delete/bulk delete permissions",
        "routing": {
          "send": {
            "property": "product_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Read",
        "name": "cdr_read",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr read permissions",
        "routing": {
          "send": {
            "property": "cdr_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Write",
        "name": "cdr_write",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr write permissions",
        "routing": {
          "send": {
            "property": "cdr_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Bundles",
        "name": "cdr_bundles",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr bundles permissions",
        "routing": {
          "send": {
            "property": "cdr_bundles",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Super User",
        "name": "super_user",
        "type": "boolean",
        "default": true,
        "description": "If true, a superuser can access and modify all data and settings across the account",
        "routing": {
          "send": {
            "property": "super_user",
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
          "Roles"
        ],
        "operation": [
          "Delete Multiple Roles"
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
          "Roles"
        ],
        "operation": [
          "Update Role"
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
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Role name",
        "routing": {
          "send": {
            "property": "name",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Write",
        "name": "customer_write",
        "type": "boolean",
        "default": true,
        "description": "Gives customer create/edit/delete permissions",
        "routing": {
          "send": {
            "property": "customer_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Post Adjustments",
        "name": "customer_post_adjustments",
        "type": "boolean",
        "default": true,
        "description": "Gives ledger post adjustments permissions",
        "routing": {
          "send": {
            "property": "customer_post_adjustments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Notes Write",
        "name": "customer_notes_write",
        "type": "boolean",
        "default": true,
        "routing": {
          "send": {
            "property": "customer_notes_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Manage Customer Access",
        "name": "customer_manage_customer_access",
        "type": "boolean",
        "default": true,
        "description": "Allows management to customer access portal for customers",
        "routing": {
          "send": {
            "property": "customer_manage_customer_access",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Customer Metadata",
        "name": "customer_metadata",
        "type": "boolean",
        "default": true,
        "routing": {
          "send": {
            "property": "customer_metadata",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Read",
        "name": "payments_read",
        "type": "boolean",
        "default": true,
        "description": "Gives payment read permissions",
        "routing": {
          "send": {
            "property": "payments_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Process",
        "name": "payments_process",
        "type": "boolean",
        "default": true,
        "description": "Gives payment processing permissions, e.g. taking payments",
        "routing": {
          "send": {
            "property": "payments_process",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Mandates",
        "name": "payments_mandates",
        "type": "boolean",
        "default": true,
        "description": "Gives payment mandate management permissions",
        "routing": {
          "send": {
            "property": "payments_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Payments Disable Mandates",
        "name": "payments_disable_mandates",
        "type": "boolean",
        "default": true,
        "description": "Gives payment enable/disable mandate permissions",
        "routing": {
          "send": {
            "property": "payments_disable_mandates",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin General",
        "name": "admin_general",
        "type": "boolean",
        "default": true,
        "description": "Gives administrative general management permissions",
        "routing": {
          "send": {
            "property": "admin_general",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Organisations",
        "name": "admin_organisations",
        "type": "boolean",
        "default": true,
        "description": "Gives the ability to create/modify organisations within the account",
        "routing": {
          "send": {
            "property": "admin_organisations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Payments",
        "name": "admin_payments",
        "type": "boolean",
        "default": true,
        "description": "Gives the ability to modify payment provider options",
        "routing": {
          "send": {
            "property": "admin_payments",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Cdr",
        "name": "admin_cdr",
        "type": "boolean",
        "default": true,
        "description": "Gives administrative permissions for modifying Voice, Data & SMS settings",
        "routing": {
          "send": {
            "property": "admin_cdr",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Data Policy",
        "name": "admin_data_policy",
        "type": "boolean",
        "default": true,
        "description": "Gives data policy settings permissions for all organisations",
        "routing": {
          "send": {
            "property": "admin_data_policy",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Integrations",
        "name": "admin_integrations",
        "type": "boolean",
        "default": true,
        "description": "Allows app integrations to be added and modified on the account",
        "routing": {
          "send": {
            "property": "admin_integrations",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Email Delivery",
        "name": "admin_email_delivery",
        "type": "boolean",
        "default": true,
        "description": "Modify email delivery settings",
        "routing": {
          "send": {
            "property": "admin_email_delivery",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Webhooks",
        "name": "admin_webhooks",
        "type": "boolean",
        "default": true,
        "description": "Gives settings for webhook event pushing",
        "routing": {
          "send": {
            "property": "admin_webhooks",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Users",
        "name": "admin_users",
        "type": "boolean",
        "default": true,
        "description": "Manage and create users along with their permissions",
        "routing": {
          "send": {
            "property": "admin_users",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Invoice",
        "name": "admin_invoice",
        "type": "boolean",
        "default": true,
        "description": "Manage invoice templates",
        "routing": {
          "send": {
            "property": "admin_invoice",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Audit",
        "name": "admin_audit",
        "type": "boolean",
        "default": true,
        "description": "Manage audit entry",
        "routing": {
          "send": {
            "property": "admin_audit",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Admin Notifications",
        "name": "admin_notifications",
        "type": "boolean",
        "default": true,
        "description": "Manage account notifications",
        "routing": {
          "send": {
            "property": "admin_notifications",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Charge Write",
        "name": "charge_write",
        "type": "boolean",
        "default": true,
        "description": "Gives charge create/update/terminate permissions",
        "routing": {
          "send": {
            "property": "charge_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Charge Delete",
        "name": "charge_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives charge delete/bulk delete/cancel/reactivate permissions",
        "routing": {
          "send": {
            "property": "charge_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Read",
        "name": "invoice_read",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice get/get line items/get single/pdf/download/service file/attachments/send/bulk send/send reminder/bulk send reminder/export permissions",
        "routing": {
          "send": {
            "property": "invoice_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Settle",
        "name": "invoice_settle",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice settle/bulk settle/batch settle/outstanding/bulk outstanding permissions",
        "routing": {
          "send": {
            "property": "invoice_settle",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Invoice Delete",
        "name": "invoice_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives invoice void/bulk void/delete/bulk delete permissions",
        "routing": {
          "send": {
            "property": "invoice_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Credit Note Read",
        "name": "credit_note_read",
        "type": "boolean",
        "default": true,
        "description": "Gives credit note get/pdf permissions",
        "routing": {
          "send": {
            "property": "credit_note_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Credit Note Write",
        "name": "credit_note_write",
        "type": "boolean",
        "default": true,
        "description": "Gives credit note create/edit/delete permissions",
        "routing": {
          "send": {
            "property": "credit_note_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Product Write",
        "name": "product_write",
        "type": "boolean",
        "default": true,
        "description": "Gives product create/bulk create/update permissions",
        "routing": {
          "send": {
            "property": "product_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Product Delete",
        "name": "product_delete",
        "type": "boolean",
        "default": true,
        "description": "Gives product delete/bulk delete permissions",
        "routing": {
          "send": {
            "property": "product_delete",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Read",
        "name": "cdr_read",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr read permissions",
        "routing": {
          "send": {
            "property": "cdr_read",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Write",
        "name": "cdr_write",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr write permissions",
        "routing": {
          "send": {
            "property": "cdr_write",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Cdr Bundles",
        "name": "cdr_bundles",
        "type": "boolean",
        "default": true,
        "description": "Gives cdr bundles permissions",
        "routing": {
          "send": {
            "property": "cdr_bundles",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Super User",
        "name": "super_user",
        "type": "boolean",
        "default": true,
        "description": "If true, a superuser can access and modify all data and settings across the account",
        "routing": {
          "send": {
            "property": "super_user",
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
          "Roles"
        ],
        "operation": [
          "Get All Roles"
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
