import { INodeProperties } from 'n8n-workflow';

/**
 * Customer Access resource description
 * Contains operation definitions and field configurations
 */
export const CustomerAccessFields: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ]
      }
    },
    options: [
      {
        name: "Get All Customer Access Users",
        value: "Get All Customer Access Users",
        action: "Get all users",
        description: "Returns paginated list of all customer access users associated to `customer_id`",
        routing: {
          request: {
            method: "GET",
            url: '=/customer/{{$parameter["customerId"]}}/access'
          }
        }
      },
      {
        name: "Invite Customer Access User",
        value: "Invite Customer Access User",
        action: "Invite user",
        description: "Invites a new customer access user",
        routing: {
          request: {
            method: "POST",
            url: '=/customer/{{$parameter["customerId"]}}/access'
          }
        }
      },
      {
        name: "Delete Multiple Customer Access",
        value: "Delete Multiple Customer Access",
        action: "Delete multiple customer access users",
        description: "Deletes all customer access users.",
        routing: {
          request: {
            method: "DELETE",
            url: '=/customer/{{$parameter["customerId"]}}/access'
          }
        }
      },
      {
        name: "Get Customer Access User",
        value: "Get Customer Access User",
        action: "Get user",
        description: "Retrieves a single customer access user.",
        routing: {
          request: {
            method: "GET",
            url: '=/customer/{{$parameter["customerId"]}}/access/{{$parameter[\"id\"]}}'
          }
        }
      },
      {
        name: "Delete Customer Access",
        value: "Delete Customer Access",
        action: "Delete customer access user",
        description: "Deletes an existing customer access user.",
        routing: {
          request: {
            method: "DELETE",
            url: '=/customer/{{$parameter["customerId"]}}/access/{{$parameter[\"id\"]}}'
          }
        }
      },
      {
        name: "Suspend Customer Access",
        value: "Suspend Customer Access",
        action: "Suspend user",
        description: "Suspends the specified customer access user.",
        routing: {
          request: {
            method: "PUT",
            url: '=/customer/{{$parameter["customerId"]}}/access/{{$parameter[\"id\"]}}/suspend'
          }
        }
      },
      {
        name: "Suspend Multiple Customer Access",
        value: "Suspend Multiple Customer Access",
        action: "Bulk suspend users",
        description: "Update status to suspend all existing customer access users",
        routing: {
          request: {
            method: "PUT",
            url: '=/customer/{{$parameter["customerId"]}}/access/suspend'
          }
        }
      },
      {
        name: "Reactivate Customer Access",
        value: "Reactivate Customer Access",
        action: "Reactivate user",
        description: "Update status to active of an existing customer access user",
        routing: {
          request: {
            method: "PUT",
            url: '=/customer/{{$parameter["customerId"]}}/access/{{$parameter[\"id\"]}}/reactivate'
          }
        }
      },
      {
        name: "Reactivate Multiple Customer Access",
        value: "Reactivate Multiple Customer Access",
        action: "Bulk reactivate users",
        description: "Update status to reactivate all existing customer access users",
        routing: {
          request: {
            method: "PUT",
            url: '=/customer/{{$parameter["customerId"]}}/access/reactivate'
          }
        }
      },
      {
        name: "Resend Customer Access",
        value: "Resend Customer Access",
        action: "Resend invitation",
        description: "Update status to awaiting activation of an existing customer access user",
        routing: {
          request: {
            method: "POST",
            url: '=/customer/{{$parameter["customerId"]}}/access/{{$parameter[\"id\"]}}/resend'
          }
        }
      }
    ],
    default: ""
  },
  {
    displayName: "Email",
    name: "email",
    type: "string",
    default: "",
    description: "Unique email address",
    routing: {
      send: {
        property: "email",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ $value }}"
      }
    },
    required: true,
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Invite Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "Name",
    name: "name",
    type: "string",
    default: "",
    description: "User name",
    routing: {
      send: {
        property: "name",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ $value }}"
      }
    },
    required: true,
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Invite Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "GET /customer/{customerId}/access",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get All Customer Access Users"
        ]
      }
    }
  },
  {
    displayName: "POST /customer/{customerId}/access",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Invite Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "DELETE /customer/{customerId}/access",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "GET /customer/{customerId}/access/{id}",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "DELETE /customer/{customerId}/access/{id}",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Customer Access"
        ]
      }
    }
  },
  {
    displayName: "PUT /customer/{customerId}/access/{id}/suspend",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "PUT /customer/{customerId}/access/suspend",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "PUT /customer/{customerId}/access/{id}/reactivate",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Customer Access"
        ]
      }
    }
  },
  {
    displayName: "PUT /customer/{customerId}/access/reactivate",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "POST /customer/{customerId}/access/{id}/resend",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Resend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get All Customer Access Users"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Invite Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "Id",
    name: "id",
    required: true,
    description: "Unique identifier",
    default: 0,
    type: "number",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get Customer Access User"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Id",
    name: "id",
    required: true,
    description: "Unique identifier",
    default: 0,
    type: "number",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Id",
    name: "id",
    required: true,
    description: "Unique identifier",
    default: 0,
    type: "number",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer Id",
    name: "customerId",
    required: true,
    default: "",
    type: "string",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer Id",
    name: "customerId",
    required: true,
    default: "",
    type: "string",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Id",
    name: "id",
    required: true,
    description: "Unique identifier",
    default: 0,
    type: "number",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer Id",
    name: "customerId",
    required: true,
    default: "",
    type: "string",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer Id",
    name: "customerId",
    required: true,
    default: "",
    type: "string",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Multiple Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Customer",
    name: "customerId",
    required: true,
    description: "Select the customer",
    default: "",
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getCustomers",
    },
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Resend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Id",
    name: "id",
    required: true,
    description: "Unique identifier",
    default: 0,
    type: "number",
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Resend Customer Access"
        ]
      }
    }
  },
  {
    displayName: "Additional Body Fields",
    name: "bodyOptions",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Invite Customer Access User"
        ]
      }
    },
    options: [
      {
        displayName: "Id",
        name: "id",
        type: "number",
        default: 0,
        description: "Unique identifier",
        routing: {
          send: {
            property: "id",
            propertyInDotNotation: false,
            type: "body",
            value: "={{ $value }}"
          }
        }
      },
      {
        displayName: "Status",
        name: "status",
        type: "options",
        default: "active",
        options: [
          {
            name: "Active",
            value: "active"
          },
          {
            name: "Suspended",
            value: "suspended"
          },
          {
            name: "Awaiting Activation",
            value: "awaitingActivation"
          }
        ],
        routing: {
          send: {
            property: "status",
            propertyInDotNotation: false,
            type: "body",
            value: "={{ $value }}"
          }
        }
      }
    ]
  },
  {
    displayName: "Additional Body Fields",
    name: "bodyOptions",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Delete Multiple Customer Access"
        ]
      }
    },
    options: [
      {
        displayName: "Id",
        name: "id",
        type: "json",
        default: "[\n  null\n]",
        description: "List of unique identifiers",
        routing: {
          send: {
            property: "id",
            propertyInDotNotation: false,
            type: "body",
            value: "={{ JSON.parse($value) }}"
          }
        }
      }
    ]
  },
  {
    displayName: "Additional Body Fields",
    name: "bodyOptions",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Suspend Multiple Customer Access"
        ]
      }
    },
    options: [
      {
        displayName: "Id",
        name: "id",
        type: "json",
        default: "[\n  null\n]",
        description: "List of unique identifiers",
        routing: {
          send: {
            property: "id",
            propertyInDotNotation: false,
            type: "body",
            value: "={{ JSON.parse($value) }}"
          }
        }
      }
    ]
  },
  {
    displayName: "Additional Body Fields",
    name: "bodyOptions",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Reactivate Multiple Customer Access"
        ]
      }
    },
    options: [
      {
        displayName: "Id",
        name: "id",
        type: "json",
        default: "[\n  null\n]",
        description: "List of unique identifiers",
        routing: {
          send: {
            property: "id",
            propertyInDotNotation: false,
            type: "body",
            value: "={{ JSON.parse($value) }}"
          }
        }
      }
    ]
  },
  {
    displayName: "Additional Fields",
    name: "options",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: [
          "Customer Access"
        ],
        operation: [
          "Get All Customer Access Users"
        ]
      }
    },
    options: [
      {
        displayName: "Limit",
        name: "limit",
        description: "Maximum number of entries to return",
        default: 10,
        type: "number",
        routing: {
          send: {
            type: "query",
            property: "limit",
            value: "={{ $value }}",
            propertyInDotNotation: false
          }
        }
      },
      {
        displayName: "Offset",
        name: "offset",
        description: "Starting offset",
        default: 0,
        type: "number",
        routing: {
          send: {
            type: "query",
            property: "offset",
            value: "={{ $value }}",
            propertyInDotNotation: false
          }
        }
      },
      {
        displayName: "Search",
        name: "search",
        description: "Search name",
        default: "",
        type: "string",
        routing: {
          send: {
            type: "query",
            property: "search",
            value: "={{ $value }}",
            propertyInDotNotation: false
          }
        }
      },
      {
        displayName: "Sort",
        name: "sort",
        description: "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: email, -email",
        default: "email",
        type: "string",
        routing: {
          send: {
            type: "query",
            property: "sort",
            value: "={{ $value }}",
            propertyInDotNotation: false
          }
        }
      }
    ]
  }
];
