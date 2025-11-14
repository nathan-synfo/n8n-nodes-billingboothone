import { INodeProperties } from 'n8n-workflow';

/**
 * Email Settings resource description
 * Contains operation definitions and field configurations
 */
export const EmailSettingsFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ]
      }
    },
    "options": [
      {
        "name": "Get Email Settings",
        "value": "Get Email Settings",
        "action": "Get email settings",
        "description": "Retrieves a email settings for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings"
          }
        }
      },
      {
        "name": "Update Email Settings",
        "value": "Update Email Settings",
        "action": "Update email settings",
        "description": "Updates email settings for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings"
          }
        }
      },
      {
        "name": "Delete Email Settings",
        "value": "Delete Email Settings",
        "action": "Clear email settings",
        "description": "Clears email settings back to default for `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings"
          }
        }
      },
      {
        "name": "Test Email Configuration",
        "value": "Test Email Configuration",
        "action": "Test email configurations",
        "description": "Test email configurations for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings"
          }
        }
      },
      {
        "name": "Email O Auth",
        "value": "Email O Auth",
        "action": "Build OAuth URL",
        "description": "Returns the Oauth url to redirect to",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings/oauth"
          }
        }
      },
      {
        "name": "Email Integration",
        "value": "Email Integration",
        "action": "Get access token",
        "description": "Gets an access token with the specified scopes",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings/oauth"
          }
        }
      },
      {
        "name": "Email Status",
        "value": "Email Status",
        "action": "Return status of Email integration",
        "description": "Returns the status of 3rd party email integration for organisation's email delivery settings",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/settings/status"
          }
        }
      },
      {
        "name": "Get All Email Template Types",
        "value": "Get All Email Template Types",
        "action": "Get email template types",
        "description": "Retrieves all the email template types for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/types"
          }
        }
      },
      {
        "name": "Get Email Template",
        "value": "Get Email Template",
        "action": "Get email template",
        "description": "Retrieves the email template for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/{{$parameter[\"emailTemplateType\"]}}"
          }
        }
      },
      {
        "name": "Update Email Template",
        "value": "Update Email Template",
        "action": "Update email template",
        "description": "Updates email template for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/{{$parameter[\"emailTemplateType\"]}}"
          }
        }
      },
      {
        "name": "Test Email Template",
        "value": "Test Email Template",
        "action": "Test email template",
        "description": "Test email template for the specified `organisation_id`.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/{{$parameter[\"emailTemplateType\"]}}"
          }
        }
      },
      {
        "name": "Delete Email Template",
        "value": "Delete Email Template",
        "action": "Delete email template",
        "description": "Deletes email template back to default for `organisation_id`.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/{{$parameter[\"emailTemplateType\"]}}"
          }
        }
      },
      {
        "name": "Validate Email Template",
        "value": "Validate Email Template",
        "action": "Validate email template",
        "description": "Validates email template subject and body for syntax errors.",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/email/{{$parameter[\"organisationId\"]}}/templates/validate"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /email/{organisationId}/settings",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "PUT /email/{organisationId}/settings",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /email/{organisationId}/settings",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Delete Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "POST /email/{organisationId}/settings",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Configuration"
        ]
      }
    }
  },
  {
    "displayName": "GET /email/{organisationId}/settings/oauth",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email O Auth"
        ]
      }
    }
  },
  {
    "displayName": "POST /email/{organisationId}/settings/oauth",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email Integration"
        ]
      }
    }
  },
  {
    "displayName": "POST /email/{organisationId}/settings/status",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email Status"
        ]
      }
    }
  },
  {
    "displayName": "GET /email/{organisationId}/templates/types",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get All Email Template Types"
        ]
      }
    }
  },
  {
    "displayName": "GET /email/{organisationId}/templates/{emailTemplateType}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get Email Template"
        ]
      }
    }
  },
  {
    "displayName": "PUT /email/{organisationId}/templates/{emailTemplateType}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Template"
        ]
      }
    }
  },
  {
    "displayName": "POST /email/{organisationId}/templates/{emailTemplateType}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Template"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /email/{organisationId}/templates/{emailTemplateType}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Delete Email Template"
        ]
      }
    }
  },
  {
    "displayName": "POST /email/{organisationId}/templates/validate",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Validate Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Delete Email Settings"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Configuration"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email O Auth"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email Integration"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Email Status"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "default": "",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get All Email Template Types"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Organisation unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Email Template Type",
    "name": "emailTemplateType",
    "required": true,
    "default": "invoice",
    "type": "options",
    "options": [
      {
        "name": "Invoice",
        "value": "invoice"
      },
      {
        "name": "Invoicereminder",
        "value": "invoicereminder"
      },
      {
        "name": "Gocardlessmandatesetup",
        "value": "gocardlessmandatesetup"
      },
      {
        "name": "Commissionreport",
        "value": "commissionreport"
      },
      {
        "name": "Stripeinstantpay",
        "value": "stripeinstantpay"
      },
      {
        "name": "Creditnote",
        "value": "creditnote"
      },
      {
        "name": "Customeraccessactivation",
        "value": "customeraccessactivation"
      },
      {
        "name": "Customeraccessforgotpassword",
        "value": "customeraccessforgotpassword"
      },
      {
        "name": "Stripemandatesetup",
        "value": "stripemandatesetup"
      },
      {
        "name": "Invoiceoverduereminder 1",
        "value": "invoiceoverduereminder1"
      },
      {
        "name": "Invoiceoverduereminder 2",
        "value": "invoiceoverduereminder2"
      },
      {
        "name": "Invoiceoverduereminder 3",
        "value": "invoiceoverduereminder3"
      },
      {
        "name": "Gocardlessinstantbankpayment",
        "value": "gocardlessinstantbankpayment"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Get Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Organisation unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Email Template Type",
    "name": "emailTemplateType",
    "required": true,
    "default": "invoice",
    "type": "options",
    "options": [
      {
        "name": "Invoice",
        "value": "invoice"
      },
      {
        "name": "Invoicereminder",
        "value": "invoicereminder"
      },
      {
        "name": "Gocardlessmandatesetup",
        "value": "gocardlessmandatesetup"
      },
      {
        "name": "Commissionreport",
        "value": "commissionreport"
      },
      {
        "name": "Stripeinstantpay",
        "value": "stripeinstantpay"
      },
      {
        "name": "Creditnote",
        "value": "creditnote"
      },
      {
        "name": "Customeraccessactivation",
        "value": "customeraccessactivation"
      },
      {
        "name": "Customeraccessforgotpassword",
        "value": "customeraccessforgotpassword"
      },
      {
        "name": "Stripemandatesetup",
        "value": "stripemandatesetup"
      },
      {
        "name": "Invoiceoverduereminder 1",
        "value": "invoiceoverduereminder1"
      },
      {
        "name": "Invoiceoverduereminder 2",
        "value": "invoiceoverduereminder2"
      },
      {
        "name": "Invoiceoverduereminder 3",
        "value": "invoiceoverduereminder3"
      },
      {
        "name": "Gocardlessinstantbankpayment",
        "value": "gocardlessinstantbankpayment"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Email Template Type",
    "name": "emailTemplateType",
    "required": true,
    "default": "invoice",
    "type": "options",
    "options": [
      {
        "name": "Invoice",
        "value": "invoice"
      },
      {
        "name": "Invoicereminder",
        "value": "invoicereminder"
      },
      {
        "name": "Gocardlessmandatesetup",
        "value": "gocardlessmandatesetup"
      },
      {
        "name": "Commissionreport",
        "value": "commissionreport"
      },
      {
        "name": "Stripeinstantpay",
        "value": "stripeinstantpay"
      },
      {
        "name": "Creditnote",
        "value": "creditnote"
      },
      {
        "name": "Customeraccessactivation",
        "value": "customeraccessactivation"
      },
      {
        "name": "Customeraccessforgotpassword",
        "value": "customeraccessforgotpassword"
      },
      {
        "name": "Stripemandatesetup",
        "value": "stripemandatesetup"
      },
      {
        "name": "Invoiceoverduereminder 1",
        "value": "invoiceoverduereminder1"
      },
      {
        "name": "Invoiceoverduereminder 2",
        "value": "invoiceoverduereminder2"
      },
      {
        "name": "Invoiceoverduereminder 3",
        "value": "invoiceoverduereminder3"
      },
      {
        "name": "Gocardlessinstantbankpayment",
        "value": "gocardlessinstantbankpayment"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Organisation unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Delete Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Email Template Type",
    "name": "emailTemplateType",
    "required": true,
    "default": "invoice",
    "type": "options",
    "options": [
      {
        "name": "Invoice",
        "value": "invoice"
      },
      {
        "name": "Invoicereminder",
        "value": "invoicereminder"
      },
      {
        "name": "Gocardlessmandatesetup",
        "value": "gocardlessmandatesetup"
      },
      {
        "name": "Commissionreport",
        "value": "commissionreport"
      },
      {
        "name": "Stripeinstantpay",
        "value": "stripeinstantpay"
      },
      {
        "name": "Creditnote",
        "value": "creditnote"
      },
      {
        "name": "Customeraccessactivation",
        "value": "customeraccessactivation"
      },
      {
        "name": "Customeraccessforgotpassword",
        "value": "customeraccessforgotpassword"
      },
      {
        "name": "Stripemandatesetup",
        "value": "stripemandatesetup"
      },
      {
        "name": "Invoiceoverduereminder 1",
        "value": "invoiceoverduereminder1"
      },
      {
        "name": "Invoiceoverduereminder 2",
        "value": "invoiceoverduereminder2"
      },
      {
        "name": "Invoiceoverduereminder 3",
        "value": "invoiceoverduereminder3"
      },
      {
        "name": "Gocardlessinstantbankpayment",
        "value": "gocardlessinstantbankpayment"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Delete Email Template"
        ]
      }
    }
  },
  {
    "displayName": "Organisation Id",
    "name": "organisationId",
    "required": true,
    "description": "Unique identifier",
    "default": 0,
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Validate Email Template"
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Method",
    "name": "method",
    "type": "options",
    "default": "smtp",
    "options": [
      {
        "name": "Smtp",
        "value": "smtp"
      },
      {
        "name": "Mailgun",
        "value": "mailgun"
      },
      {
        "name": "Microsoft 365",
        "value": "microsoft365"
      }
    ],
    "routing": {
      "send": {
        "property": "method",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Update Email Settings"
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
          "Email Settings"
        ],
        "operation": [
          "Update Email Settings"
        ]
      }
    },
    "options": [
      {
        "displayName": "Address",
        "name": "address",
        "type": "string",
        "default": "",
        "description": "Server or endpoint address",
        "routing": {
          "send": {
            "property": "address",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Username",
        "name": "username",
        "type": "string",
        "default": "",
        "description": "Username",
        "routing": {
          "send": {
            "property": "username",
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
        "description": "Password",
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
        "displayName": "Port",
        "name": "port",
        "type": "number",
        "default": 0,
        "description": "Port (if applicable)",
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
        "displayName": "Is Secure",
        "name": "is_secure",
        "type": "boolean",
        "default": true,
        "description": "Is a secure connection? (if applicable)",
        "routing": {
          "send": {
            "property": "is_secure",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Access Token",
        "name": "access_token",
        "type": "string",
        "default": "",
        "description": "Access Token used by email provider (if applicable)",
        "routing": {
          "send": {
            "property": "access_token",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Refresh Token",
        "name": "refresh_token",
        "type": "string",
        "default": "",
        "description": "Refresh Token used by email provider (if applicable)",
        "routing": {
          "send": {
            "property": "refresh_token",
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
    "displayName": "Method",
    "name": "method",
    "type": "options",
    "default": "smtp",
    "options": [
      {
        "name": "Smtp",
        "value": "smtp"
      },
      {
        "name": "Mailgun",
        "value": "mailgun"
      },
      {
        "name": "Microsoft 365",
        "value": "microsoft365"
      }
    ],
    "routing": {
      "send": {
        "property": "method",
        "propertyInDotNotation": false,
        "type": "body",
        "value": "={{ $value }}"
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Email Settings"
        ],
        "operation": [
          "Test Email Configuration"
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
          "Email Settings"
        ],
        "operation": [
          "Test Email Configuration"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email",
        "name": "email",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "property": "email",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Address",
        "name": "address",
        "type": "string",
        "default": "",
        "description": "Server or endpoint address",
        "routing": {
          "send": {
            "property": "address",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Username",
        "name": "username",
        "type": "string",
        "default": "",
        "description": "Username",
        "routing": {
          "send": {
            "property": "username",
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
        "description": "Password",
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
        "displayName": "Port",
        "name": "port",
        "type": "number",
        "default": 0,
        "description": "Port (if applicable)",
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
        "displayName": "Is Secure",
        "name": "is_secure",
        "type": "boolean",
        "default": true,
        "description": "Is a secure connection? (if applicable)",
        "routing": {
          "send": {
            "property": "is_secure",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Access Token",
        "name": "access_token",
        "type": "string",
        "default": "",
        "description": "Access Token used by email provider (if applicable)",
        "routing": {
          "send": {
            "property": "access_token",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Refresh Token",
        "name": "refresh_token",
        "type": "string",
        "default": "",
        "description": "Refresh Token used by email provider (if applicable)",
        "routing": {
          "send": {
            "property": "refresh_token",
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
          "Email Settings"
        ],
        "operation": [
          "Email Integration"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email Delivery Method",
        "name": "email_delivery_method",
        "type": "options",
        "default": "smtp",
        "options": [
          {
            "name": "Smtp",
            "value": "smtp"
          },
          {
            "name": "Mailgun",
            "value": "mailgun"
          },
          {
            "name": "Microsoft 365",
            "value": "microsoft365"
          }
        ],
        "routing": {
          "send": {
            "property": "email_delivery_method",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Code",
        "name": "code",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "property": "code",
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
          "Email Settings"
        ],
        "operation": [
          "Update Email Template"
        ]
      }
    },
    "options": [
      {
        "displayName": "Type",
        "name": "type",
        "type": "options",
        "default": "invoice",
        "description": "Email template type",
        "options": [
          {
            "name": "Invoice",
            "value": "invoice"
          },
          {
            "name": "Invoicereminder",
            "value": "invoicereminder"
          },
          {
            "name": "Gocardlessmandatesetup",
            "value": "gocardlessmandatesetup"
          },
          {
            "name": "Commissionreport",
            "value": "commissionreport"
          },
          {
            "name": "Stripeinstantpay",
            "value": "stripeinstantpay"
          },
          {
            "name": "Creditnote",
            "value": "creditnote"
          },
          {
            "name": "Customeraccessactivation",
            "value": "customeraccessactivation"
          },
          {
            "name": "Customeraccessforgotpassword",
            "value": "customeraccessforgotpassword"
          },
          {
            "name": "Stripemandatesetup",
            "value": "stripemandatesetup"
          },
          {
            "name": "Invoiceoverduereminder 1",
            "value": "invoiceoverduereminder1"
          },
          {
            "name": "Invoiceoverduereminder 2",
            "value": "invoiceoverduereminder2"
          },
          {
            "name": "Invoiceoverduereminder 3",
            "value": "invoiceoverduereminder3"
          },
          {
            "name": "Gocardlessinstantbankpayment",
            "value": "gocardlessinstantbankpayment"
          }
        ],
        "routing": {
          "send": {
            "property": "type",
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
        "description": "Email template name",
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
        "displayName": "Subject",
        "name": "subject",
        "type": "string",
        "default": "",
        "description": "Email subject line",
        "routing": {
          "send": {
            "property": "subject",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Body",
        "name": "body",
        "type": "string",
        "default": "",
        "description": "HTML Body",
        "routing": {
          "send": {
            "property": "body",
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
          "Email Settings"
        ],
        "operation": [
          "Test Email Template"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email",
        "name": "email",
        "type": "string",
        "default": "",
        "description": "Email address",
        "routing": {
          "send": {
            "property": "email",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Model",
        "name": "model",
        "type": "string",
        "default": "",
        "description": "JSON example model",
        "routing": {
          "send": {
            "property": "model",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Type",
        "name": "type",
        "type": "options",
        "default": "invoice",
        "description": "Email template type",
        "options": [
          {
            "name": "Invoice",
            "value": "invoice"
          },
          {
            "name": "Invoicereminder",
            "value": "invoicereminder"
          },
          {
            "name": "Gocardlessmandatesetup",
            "value": "gocardlessmandatesetup"
          },
          {
            "name": "Commissionreport",
            "value": "commissionreport"
          },
          {
            "name": "Stripeinstantpay",
            "value": "stripeinstantpay"
          },
          {
            "name": "Creditnote",
            "value": "creditnote"
          },
          {
            "name": "Customeraccessactivation",
            "value": "customeraccessactivation"
          },
          {
            "name": "Customeraccessforgotpassword",
            "value": "customeraccessforgotpassword"
          },
          {
            "name": "Stripemandatesetup",
            "value": "stripemandatesetup"
          },
          {
            "name": "Invoiceoverduereminder 1",
            "value": "invoiceoverduereminder1"
          },
          {
            "name": "Invoiceoverduereminder 2",
            "value": "invoiceoverduereminder2"
          },
          {
            "name": "Invoiceoverduereminder 3",
            "value": "invoiceoverduereminder3"
          },
          {
            "name": "Gocardlessinstantbankpayment",
            "value": "gocardlessinstantbankpayment"
          }
        ],
        "routing": {
          "send": {
            "property": "type",
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
        "description": "Email template name",
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
        "displayName": "Subject",
        "name": "subject",
        "type": "string",
        "default": "",
        "description": "Email subject line",
        "routing": {
          "send": {
            "property": "subject",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Body",
        "name": "body",
        "type": "string",
        "default": "",
        "description": "HTML Body",
        "routing": {
          "send": {
            "property": "body",
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
          "Email Settings"
        ],
        "operation": [
          "Validate Email Template"
        ]
      }
    },
    "options": [
      {
        "displayName": "Type",
        "name": "type",
        "type": "options",
        "default": "invoice",
        "description": "Email template type",
        "options": [
          {
            "name": "Invoice",
            "value": "invoice"
          },
          {
            "name": "Invoicereminder",
            "value": "invoicereminder"
          },
          {
            "name": "Gocardlessmandatesetup",
            "value": "gocardlessmandatesetup"
          },
          {
            "name": "Commissionreport",
            "value": "commissionreport"
          },
          {
            "name": "Stripeinstantpay",
            "value": "stripeinstantpay"
          },
          {
            "name": "Creditnote",
            "value": "creditnote"
          },
          {
            "name": "Customeraccessactivation",
            "value": "customeraccessactivation"
          },
          {
            "name": "Customeraccessforgotpassword",
            "value": "customeraccessforgotpassword"
          },
          {
            "name": "Stripemandatesetup",
            "value": "stripemandatesetup"
          },
          {
            "name": "Invoiceoverduereminder 1",
            "value": "invoiceoverduereminder1"
          },
          {
            "name": "Invoiceoverduereminder 2",
            "value": "invoiceoverduereminder2"
          },
          {
            "name": "Invoiceoverduereminder 3",
            "value": "invoiceoverduereminder3"
          },
          {
            "name": "Gocardlessinstantbankpayment",
            "value": "gocardlessinstantbankpayment"
          }
        ],
        "routing": {
          "send": {
            "property": "type",
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
        "description": "Email template name",
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
        "displayName": "Subject",
        "name": "subject",
        "type": "string",
        "default": "",
        "description": "Email subject line",
        "routing": {
          "send": {
            "property": "subject",
            "propertyInDotNotation": false,
            "type": "body",
            "value": "={{ $value }}"
          }
        }
      },
      {
        "displayName": "Body",
        "name": "body",
        "type": "string",
        "default": "",
        "description": "HTML Body",
        "routing": {
          "send": {
            "property": "body",
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
          "Email Settings"
        ],
        "operation": [
          "Email O Auth"
        ]
      }
    },
    "options": [
      {
        "displayName": "Email Delivery Method",
        "name": "emailDeliveryMethod",
        "description": "Email delivery method",
        "default": "smtp",
        "type": "options",
        "options": [
          {
            "name": "Smtp",
            "value": "smtp"
          },
          {
            "name": "Mailgun",
            "value": "mailgun"
          },
          {
            "name": "Microsoft 365",
            "value": "microsoft365"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "emailDeliveryMethod",
            "value": "={{ $value }}",
            "propertyInDotNotation": false
          }
        }
      }
    ]
  }
];
