"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersFields = void 0;
exports.CustomersFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ]
            }
        },
        "options": [
            {
                "name": "Get Customer Growth Count",
                "value": "Get Customer Growth Count",
                "action": "Get customer growth",
                "description": "Gets the customer acquisition and turnover count breakdown during the specified periods",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/growth"
                    }
                }
            },
            {
                "name": "Get Customers Without Invoices",
                "value": "Get Customers Without Invoices",
                "action": "Get customers without invoices",
                "description": "Gets a list of customers that have no invoices for the billing period specified",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/without-invoices"
                    }
                }
            },
            {
                "name": "Get Customers Without Mandates",
                "value": "Get Customers Without Mandates",
                "action": "Get customers without mandates",
                "description": "Gets a list of customers that have no configured payment provider mandates",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/without-mandates"
                    }
                }
            },
            {
                "name": "Get Customer Mandates",
                "value": "Get Customer Mandates",
                "action": "Get customer mandates",
                "description": "Gets a list all mandates on the account",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/with-mandates"
                    }
                }
            },
            {
                "name": "Get Customer Tariffs",
                "value": "Get Customer Tariffs",
                "action": "Get customer tariffs",
                "description": "Gets a list customers with their associated tariffs",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/tariffs"
                    }
                }
            },
            {
                "name": "Get Customer Balances",
                "value": "Get Customer Balances",
                "action": "Get customer balances",
                "description": "Gets a list of customers that has no invoiced for the billing peripd specified",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/ledger"
                    }
                }
            },
            {
                "name": "Get Customer Transactions",
                "value": "Get Customer Transactions",
                "action": "Get customer ledger transactions (By page)",
                "description": "Retrieves a full list of all customer ledger entry transactions",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/ledger/transactions"
                    }
                }
            },
            {
                "name": "Get Customer Transactions By Cursor",
                "value": "Get Customer Transactions By Cursor",
                "action": "Get customer ledger transactions (By cursor)",
                "description": "Retrieves a full list of all customer ledger entry transactions via cursor pagination",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/ledger/transactions/cursor"
                    }
                }
            },
            {
                "name": "Get Customer Metadata",
                "value": "Get Customer Metadata",
                "action": "Get customer metadata",
                "description": "Retrieves a full list of all metadata entries associated with customers",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/metadata"
                    }
                }
            },
            {
                "name": "Get Customer Cancelled Mandates",
                "value": "Get Customer Cancelled Mandates",
                "action": "Get customers with cancelled mandates",
                "description": "Retrieves a full list of all customers with cancelled mandates",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/customer/with-cancelled-mandates"
                    }
                }
            },
            {
                "name": "Get All Customers",
                "value": "Get All Customers",
                "action": "Get all customers",
                "description": "Retrieves all customers.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer"
                    }
                }
            },
            {
                "name": "Create Customer",
                "value": "Create Customer",
                "action": "Create customer",
                "description": "Create a customer.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer"
                    }
                }
            },
            {
                "name": "Delete Multiple Customers",
                "value": "Delete Multiple Customers",
                "action": "Delete multiple customers",
                "description": "Deletes all customers with an `id` matching the supplied list",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer"
                    }
                }
            },
            {
                "name": "Get Customer",
                "value": "Get Customer",
                "action": "Get a single customer",
                "description": "Retrieves a single customer.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Customer",
                "value": "Update Customer",
                "action": "Update customer",
                "description": "Updates an existing customer.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Customer",
                "value": "Delete Customer",
                "action": "Delete customer",
                "description": "Deletes an existing customer.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Customer By Reference",
                "value": "Get Customer By Reference",
                "action": "Get customer by reference",
                "description": "Gets a customer by its reference",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/reference/{{$parameter[\"reference\"]}}"
                    }
                }
            },
            {
                "name": "Bulk Create Customers",
                "value": "Bulk Create Customers",
                "action": "Bulk Create customers",
                "description": "Create multiple customers.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/bulk"
                    }
                }
            },
            {
                "name": "Activate Customer",
                "value": "Activate Customer",
                "action": "Activate customer",
                "description": "Activates a previously suspended customer.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"id\"]}}/activate"
                    }
                }
            },
            {
                "name": "Activate Multiple Customers",
                "value": "Activate Multiple Customers",
                "action": "Activate multiple customers",
                "description": "Activates previously suspended customers.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/activate"
                    }
                }
            },
            {
                "name": "Suspend Customer",
                "value": "Suspend Customer",
                "action": "Suspend customer",
                "description": "Suspends the specified customer. Suspended customers cannot be billed.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"id\"]}}/suspend"
                    }
                }
            },
            {
                "name": "Suspend Multiple Customers",
                "value": "Suspend Multiple Customers",
                "action": "Suspend multiple customers",
                "description": "Suspends the specified customers. Suspended customers cannot be billed.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/suspend"
                    }
                }
            },
            {
                "name": "Cancel Customer",
                "value": "Cancel Customer",
                "action": "Cancel customer",
                "description": "Cancels the specified customer. Cancelled customers cannot be billed.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"id\"]}}/cancel"
                    }
                }
            },
            {
                "name": "Cancel Multiple Customers",
                "value": "Cancel Multiple Customers",
                "action": "Cancel multiple customers",
                "description": "Cancels the specified customers. Cancelled customers cannot be billed.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/cancel"
                    }
                }
            },
            {
                "name": "Apply Multiple Tags To Customers",
                "value": "Apply Multiple Tags To Customers",
                "action": "Apply multiple tags to customers",
                "description": "Applies multiple tags to the specified customers.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/tags"
                    }
                }
            },
            {
                "name": "Remove Multiple Tags To Customers",
                "value": "Remove Multiple Tags To Customers",
                "action": "Remove multiple tags to customers",
                "description": "Removes multiple tags to the specified customers.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/tags"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /analytics/customer/growth",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Growth Count"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/without-invoices",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customers Without Invoices"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/without-mandates",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customers Without Mandates"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/with-mandates",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Mandates"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/tariffs",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Tariffs"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/ledger",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Balances"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/ledger/transactions",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Transactions"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/ledger/transactions/cursor",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Transactions By Cursor"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/metadata",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/customer/with-cancelled-mandates",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer Cancelled Mandates"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get All Customers"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Create Customer"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Delete Multiple Customers"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Delete Customer"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/reference/{reference}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer By Reference"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/bulk",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Bulk Create Customers"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{id}/activate",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Activate Customer"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/activate",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Activate Multiple Customers"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{id}/suspend",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Suspend Customer"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/suspend",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Suspend Multiple Customers"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{id}/cancel",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Cancel Customer"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/cancel",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Cancel Multiple Customers"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/tags",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Apply Multiple Tags To Customers"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/tags",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Remove Multiple Tags To Customers"
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Delete Customer"
                ]
            }
        }
    },
    {
        "displayName": "Reference",
        "name": "reference",
        "required": true,
        "description": "Customer reference",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Get Customer By Reference"
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
                    "Customers"
                ],
                "operation": [
                    "Activate Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Suspend Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Cancel Customer"
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
        "description": "Customer Name",
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
                    "Customers"
                ],
                "operation": [
                    "Create Customer"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "type": "number",
        "default": 0,
        "description": "Customer group the customer belongs to",
        "routing": {
            "send": {
                "property": "customer_group_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Create Customer"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "type": "number",
        "default": 0,
        "description": "Organisation the customer belongs to",
        "routing": {
            "send": {
                "property": "organisation_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Create Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Create Customer"
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
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Internal reference, used in conjunction with third party applications",
                "routing": {
                    "send": {
                        "property": "reference",
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
                "default": "unspecified",
                "options": [
                    {
                        "name": "Unspecified",
                        "value": "unspecified"
                    },
                    {
                        "name": "Business",
                        "value": "business"
                    },
                    {
                        "name": "Consumer",
                        "value": "consumer"
                    },
                    {
                        "name": "Reseller",
                        "value": "reseller"
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
                "displayName": "Is Vulnerable",
                "name": "is_vulnerable",
                "type": "boolean",
                "default": true,
                "description": "Classified as vulnerable",
                "routing": {
                    "send": {
                        "property": "is_vulnerable",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Address",
                "name": "address",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Telephone",
                "name": "telephone",
                "type": "string",
                "default": "",
                "description": "Telephone contact number",
                "routing": {
                    "send": {
                        "property": "telephone",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Email",
                "name": "email",
                "type": "string",
                "default": "",
                "description": "Contact email address",
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
                "displayName": "Web",
                "name": "web",
                "type": "string",
                "default": "",
                "description": "Customer's web site",
                "routing": {
                    "send": {
                        "property": "web",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Delivery Method",
                "name": "invoice_delivery_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Email",
                        "value": "email"
                    },
                    {
                        "name": "Post",
                        "value": "post"
                    },
                    {
                        "name": "Fax",
                        "value": "fax"
                    },
                    {
                        "name": "Special",
                        "value": "special"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "invoice_delivery_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Delivery Email",
                "name": "delivery_email",
                "type": "string",
                "default": "",
                "description": "Email used to deliver customer invoices",
                "routing": {
                    "send": {
                        "property": "delivery_email",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Delivery Password Method",
                "name": "invoice_delivery_password_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Custom",
                        "value": "custom"
                    },
                    {
                        "name": "Last Four Digits Reference",
                        "value": "lastFourDigitsReference"
                    },
                    {
                        "name": "Last Four Digits Telephone",
                        "value": "lastFourDigitsTelephone"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "invoice_delivery_password_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Delivery Password",
                "name": "custom_delivery_password",
                "type": "string",
                "default": "",
                "description": "Custom invoice delivery password, if `invoice_delivery_password_method` is `custom`",
                "routing": {
                    "send": {
                        "property": "custom_delivery_password",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Suppress Overdue Invoice Reminders",
                "name": "suppress_overdue_invoice_reminders",
                "type": "boolean",
                "default": true,
                "description": "Suppress overdue invoice reminders for this customer",
                "routing": {
                    "send": {
                        "property": "suppress_overdue_invoice_reminders",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cdr Output Format",
                "name": "cdr_output_format",
                "type": "options",
                "default": "inline",
                "options": [
                    {
                        "name": "Inline",
                        "value": "inline"
                    },
                    {
                        "name": "Pdf",
                        "value": "pdf"
                    },
                    {
                        "name": "Csv",
                        "value": "csv"
                    },
                    {
                        "name": "Cdr",
                        "value": "cdr"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "cdr_output_format",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Call Amount Threshold",
                "name": "call_amount_threshold",
                "type": "number",
                "default": 0,
                "description": "Call amount threshold",
                "routing": {
                    "send": {
                        "property": "call_amount_threshold",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Threshold Include Bundled Calls",
                "name": "threshold_include_bundled_calls",
                "type": "boolean",
                "default": true,
                "description": "Threshold include bundled calls",
                "routing": {
                    "send": {
                        "property": "threshold_include_bundled_calls",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Cdr Reverse Tax",
                "name": "is_cdr_reverse_tax",
                "type": "boolean",
                "default": true,
                "description": "If voice, data & SMS charges are subject to reverse VAT - see HMRC documentation on VAT reverse domestic charge for telecommunication services",
                "routing": {
                    "send": {
                        "property": "is_cdr_reverse_tax",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Issue Service File",
                "name": "issue_service_file",
                "type": "boolean",
                "default": true,
                "description": "If true, any invoices raised will also include a separate service file attachment",
                "routing": {
                    "send": {
                        "property": "issue_service_file",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Summarise By Category",
                "name": "summarise_by_category",
                "type": "boolean",
                "default": true,
                "description": "If true, any invoices raised will summarise its line items by category",
                "routing": {
                    "send": {
                        "property": "summarise_by_category",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Payment Terms",
                "name": "custom_payment_terms",
                "type": "number",
                "default": 0,
                "description": "Custom payment terms that override the organisation's own terms",
                "routing": {
                    "send": {
                        "property": "custom_payment_terms",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Payment Details",
                "name": "custom_payment_details",
                "type": "string",
                "default": "",
                "description": "Custom payment details/instructions that override the organisation's own terms",
                "routing": {
                    "send": {
                        "property": "custom_payment_details",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Po Number",
                "name": "po_number",
                "type": "string",
                "default": "",
                "description": "A custom PO Number to be included in the invoice",
                "routing": {
                    "send": {
                        "property": "po_number",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Settlement Method",
                "name": "settlement_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Direct Debit",
                        "value": "directDebit"
                    },
                    {
                        "name": "Card",
                        "value": "card"
                    },
                    {
                        "name": "Bank Transfer",
                        "value": "bankTransfer"
                    },
                    {
                        "name": "Cheque",
                        "value": "cheque"
                    },
                    {
                        "name": "Cash",
                        "value": "cash"
                    },
                    {
                        "name": "Other",
                        "value": "other"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "settlement_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Exempt",
                "name": "tax_exempt",
                "type": "boolean",
                "default": true,
                "description": "If true, all charges will be exempt of tax",
                "routing": {
                    "send": {
                        "property": "tax_exempt",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Opening Balance",
                "name": "opening_balance",
                "type": "number",
                "default": 0,
                "description": "Optional opening balance, if the customer has an outstanding balance before being created in Billingbooth",
                "routing": {
                    "send": {
                        "property": "opening_balance",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tariffs",
                "name": "tariffs",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Collection of tariffs the customer belongs to",
                "routing": {
                    "send": {
                        "property": "tariffs",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Tags",
                "name": "tags",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Collection of tags the customer belongs to",
                "routing": {
                    "send": {
                        "property": "tags",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Invoice Per Cost Centre",
                "name": "invoice_per_cost_centre",
                "type": "boolean",
                "default": true,
                "description": "Issue one invoice per cost centre",
                "routing": {
                    "send": {
                        "property": "invoice_per_cost_centre",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Anniversary Billing Day",
                "name": "anniversary_billing_day",
                "type": "number",
                "default": 0,
                "description": "If the associated `customer_group_id` has an anniversary billing method, then the customer needs to have an `anniversary_billing_day` between 1 and 31",
                "routing": {
                    "send": {
                        "property": "anniversary_billing_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Status",
                "name": "status",
                "type": "options",
                "default": "active",
                "options": [
                    {
                        "name": "Active",
                        "value": "active"
                    },
                    {
                        "name": "Suspended",
                        "value": "suspended"
                    },
                    {
                        "name": "Cancelled",
                        "value": "cancelled"
                    },
                    {
                        "name": "Deleted",
                        "value": "deleted"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "status",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Created At",
                "name": "created_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was created",
                "routing": {
                    "send": {
                        "property": "created_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Suspended At",
                "name": "suspended_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was suspended",
                "routing": {
                    "send": {
                        "property": "suspended_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cancelled At",
                "name": "cancelled_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was cancelled",
                "routing": {
                    "send": {
                        "property": "cancelled_at",
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
                    "Customers"
                ],
                "operation": [
                    "Delete Multiple Customers"
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
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Customer Name",
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
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer Group Id",
        "name": "customer_group_id",
        "type": "number",
        "default": 0,
        "description": "Customer group the customer belongs to",
        "routing": {
            "send": {
                "property": "customer_group_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Organisation Id",
        "name": "organisation_id",
        "type": "number",
        "default": 0,
        "description": "Organisation the customer belongs to",
        "routing": {
            "send": {
                "property": "organisation_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
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
                    "Customers"
                ],
                "operation": [
                    "Update Customer"
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
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Internal reference, used in conjunction with third party applications",
                "routing": {
                    "send": {
                        "property": "reference",
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
                "default": "unspecified",
                "options": [
                    {
                        "name": "Unspecified",
                        "value": "unspecified"
                    },
                    {
                        "name": "Business",
                        "value": "business"
                    },
                    {
                        "name": "Consumer",
                        "value": "consumer"
                    },
                    {
                        "name": "Reseller",
                        "value": "reseller"
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
                "displayName": "Is Vulnerable",
                "name": "is_vulnerable",
                "type": "boolean",
                "default": true,
                "description": "Classified as vulnerable",
                "routing": {
                    "send": {
                        "property": "is_vulnerable",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Address",
                "name": "address",
                "type": "json",
                "default": "{}",
                "routing": {
                    "send": {
                        "property": "address",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Telephone",
                "name": "telephone",
                "type": "string",
                "default": "",
                "description": "Telephone contact number",
                "routing": {
                    "send": {
                        "property": "telephone",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Email",
                "name": "email",
                "type": "string",
                "default": "",
                "description": "Contact email address",
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
                "displayName": "Web",
                "name": "web",
                "type": "string",
                "default": "",
                "description": "Customer's web site",
                "routing": {
                    "send": {
                        "property": "web",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Delivery Method",
                "name": "invoice_delivery_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Email",
                        "value": "email"
                    },
                    {
                        "name": "Post",
                        "value": "post"
                    },
                    {
                        "name": "Fax",
                        "value": "fax"
                    },
                    {
                        "name": "Special",
                        "value": "special"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "invoice_delivery_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Delivery Email",
                "name": "delivery_email",
                "type": "string",
                "default": "",
                "description": "Email used to deliver customer invoices",
                "routing": {
                    "send": {
                        "property": "delivery_email",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Delivery Password Method",
                "name": "invoice_delivery_password_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Custom",
                        "value": "custom"
                    },
                    {
                        "name": "Last Four Digits Reference",
                        "value": "lastFourDigitsReference"
                    },
                    {
                        "name": "Last Four Digits Telephone",
                        "value": "lastFourDigitsTelephone"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "invoice_delivery_password_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Delivery Password",
                "name": "custom_delivery_password",
                "type": "string",
                "default": "",
                "description": "Custom invoice delivery password, if `invoice_delivery_password_method` is `custom`",
                "routing": {
                    "send": {
                        "property": "custom_delivery_password",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Suppress Overdue Invoice Reminders",
                "name": "suppress_overdue_invoice_reminders",
                "type": "boolean",
                "default": true,
                "description": "Suppress overdue invoice reminders for this customer",
                "routing": {
                    "send": {
                        "property": "suppress_overdue_invoice_reminders",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cdr Output Format",
                "name": "cdr_output_format",
                "type": "options",
                "default": "inline",
                "options": [
                    {
                        "name": "Inline",
                        "value": "inline"
                    },
                    {
                        "name": "Pdf",
                        "value": "pdf"
                    },
                    {
                        "name": "Csv",
                        "value": "csv"
                    },
                    {
                        "name": "Cdr",
                        "value": "cdr"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "cdr_output_format",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Call Amount Threshold",
                "name": "call_amount_threshold",
                "type": "number",
                "default": 0,
                "description": "Call amount threshold",
                "routing": {
                    "send": {
                        "property": "call_amount_threshold",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Threshold Include Bundled Calls",
                "name": "threshold_include_bundled_calls",
                "type": "boolean",
                "default": true,
                "description": "Threshold include bundled calls",
                "routing": {
                    "send": {
                        "property": "threshold_include_bundled_calls",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Cdr Reverse Tax",
                "name": "is_cdr_reverse_tax",
                "type": "boolean",
                "default": true,
                "description": "If voice, data & SMS charges are subject to reverse VAT - see HMRC documentation on VAT reverse domestic charge for telecommunication services",
                "routing": {
                    "send": {
                        "property": "is_cdr_reverse_tax",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Issue Service File",
                "name": "issue_service_file",
                "type": "boolean",
                "default": true,
                "description": "If true, any invoices raised will also include a separate service file attachment",
                "routing": {
                    "send": {
                        "property": "issue_service_file",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Summarise By Category",
                "name": "summarise_by_category",
                "type": "boolean",
                "default": true,
                "description": "If true, any invoices raised will summarise its line items by category",
                "routing": {
                    "send": {
                        "property": "summarise_by_category",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Payment Terms",
                "name": "custom_payment_terms",
                "type": "number",
                "default": 0,
                "description": "Custom payment terms that override the organisation's own terms",
                "routing": {
                    "send": {
                        "property": "custom_payment_terms",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Custom Payment Details",
                "name": "custom_payment_details",
                "type": "string",
                "default": "",
                "description": "Custom payment details/instructions that override the organisation's own terms",
                "routing": {
                    "send": {
                        "property": "custom_payment_details",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Po Number",
                "name": "po_number",
                "type": "string",
                "default": "",
                "description": "A custom PO Number to be included in the invoice",
                "routing": {
                    "send": {
                        "property": "po_number",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Settlement Method",
                "name": "settlement_method",
                "type": "options",
                "default": "none",
                "options": [
                    {
                        "name": "None",
                        "value": "none"
                    },
                    {
                        "name": "Direct Debit",
                        "value": "directDebit"
                    },
                    {
                        "name": "Card",
                        "value": "card"
                    },
                    {
                        "name": "Bank Transfer",
                        "value": "bankTransfer"
                    },
                    {
                        "name": "Cheque",
                        "value": "cheque"
                    },
                    {
                        "name": "Cash",
                        "value": "cash"
                    },
                    {
                        "name": "Other",
                        "value": "other"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "settlement_method",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Exempt",
                "name": "tax_exempt",
                "type": "boolean",
                "default": true,
                "description": "If true, all charges will be exempt of tax",
                "routing": {
                    "send": {
                        "property": "tax_exempt",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Opening Balance",
                "name": "opening_balance",
                "type": "number",
                "default": 0,
                "description": "Optional opening balance, if the customer has an outstanding balance before being created in Billingbooth",
                "routing": {
                    "send": {
                        "property": "opening_balance",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tariffs",
                "name": "tariffs",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Collection of tariffs the customer belongs to",
                "routing": {
                    "send": {
                        "property": "tariffs",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Tags",
                "name": "tags",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Collection of tags the customer belongs to",
                "routing": {
                    "send": {
                        "property": "tags",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Invoice Per Cost Centre",
                "name": "invoice_per_cost_centre",
                "type": "boolean",
                "default": true,
                "description": "Issue one invoice per cost centre",
                "routing": {
                    "send": {
                        "property": "invoice_per_cost_centre",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Anniversary Billing Day",
                "name": "anniversary_billing_day",
                "type": "number",
                "default": 0,
                "description": "If the associated `customer_group_id` has an anniversary billing method, then the customer needs to have an `anniversary_billing_day` between 1 and 31",
                "routing": {
                    "send": {
                        "property": "anniversary_billing_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Status",
                "name": "status",
                "type": "options",
                "default": "active",
                "options": [
                    {
                        "name": "Active",
                        "value": "active"
                    },
                    {
                        "name": "Suspended",
                        "value": "suspended"
                    },
                    {
                        "name": "Cancelled",
                        "value": "cancelled"
                    },
                    {
                        "name": "Deleted",
                        "value": "deleted"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "status",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Created At",
                "name": "created_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was created",
                "routing": {
                    "send": {
                        "property": "created_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Suspended At",
                "name": "suspended_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was suspended",
                "routing": {
                    "send": {
                        "property": "suspended_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cancelled At",
                "name": "cancelled_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the customer was cancelled",
                "routing": {
                    "send": {
                        "property": "cancelled_at",
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
                    "Customers"
                ],
                "operation": [
                    "Bulk Create Customers"
                ]
            }
        },
        "options": [
            {
                "displayName": "Bulk Customers",
                "name": "bulk_customers",
                "type": "json",
                "default": "[\n  {\n    \"address\": {},\n    \"tariffs\": [\n      null\n    ],\n    \"tags\": [\n      null\n    ]\n  }\n]",
                "routing": {
                    "send": {
                        "property": "bulk_customers",
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
                    "Customers"
                ],
                "operation": [
                    "Activate Multiple Customers"
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
                    "Customers"
                ],
                "operation": [
                    "Suspend Multiple Customers"
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
                    "Customers"
                ],
                "operation": [
                    "Cancel Multiple Customers"
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
        "displayName": "Customer Ids",
        "name": "customer_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of customer ids",
        "routing": {
            "send": {
                "property": "customer_ids",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Apply Multiple Tags To Customers"
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
                    "Customers"
                ],
                "operation": [
                    "Apply Multiple Tags To Customers"
                ]
            }
        },
        "options": [
            {
                "displayName": "Tags",
                "name": "tags",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of tags to be applied to the customers",
                "routing": {
                    "send": {
                        "property": "tags",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Replace Tags",
                "name": "replace_tags",
                "type": "boolean",
                "default": true,
                "description": "If true, will replace all existing tags on customer, otherwise the tags will be added to it.",
                "routing": {
                    "send": {
                        "property": "replace_tags",
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
        "displayName": "Customer Ids",
        "name": "customer_ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of customer ids",
        "routing": {
            "send": {
                "property": "customer_ids",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customers"
                ],
                "operation": [
                    "Remove Multiple Tags To Customers"
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
                    "Customers"
                ],
                "operation": [
                    "Remove Multiple Tags To Customers"
                ]
            }
        },
        "options": [
            {
                "displayName": "Tags",
                "name": "tags",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of tags to be applied to the customers",
                "routing": {
                    "send": {
                        "property": "tags",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Replace Tags",
                "name": "replace_tags",
                "type": "boolean",
                "default": true,
                "description": "If true, will replace all existing tags on customer, otherwise the tags will be added to it.",
                "routing": {
                    "send": {
                        "property": "replace_tags",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Growth Count"
                ]
            }
        },
        "options": [
            {
                "displayName": "Start",
                "name": "start",
                "description": "Billing period start date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "start",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "End",
                "name": "end",
                "description": "Billing period end date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "end",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customers Without Invoices"
                ]
            }
        },
        "options": [
            {
                "displayName": "Start",
                "name": "start",
                "description": "Billing period start date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "start",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "End",
                "name": "end",
                "description": "Billing period end date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "end",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customers Without Mandates"
                ]
            }
        },
        "options": [
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Mandates"
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search customer name and reference",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Tariffs"
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search customer name and reference",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Balances"
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
                "description": "Search name and reference and post code",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Transactions"
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created From",
                "name": "created_from",
                "description": "Filter by creation `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created To",
                "name": "created_to",
                "description": "Filter by creation `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Entry From",
                "name": "entry_from",
                "description": "Filter by entry `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "entry_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Entry To",
                "name": "entry_to",
                "description": "Filter by entry `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "entry_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Ledger Entry Type Ids",
                "name": "ledger_entry_type_ids",
                "description": "Filter by one or more 'entry type id(s)'",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "ledger_entry_type_ids",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Transactions By Cursor"
                ]
            }
        },
        "options": [
            {
                "displayName": "Next Cursor",
                "name": "next_cursor",
                "description": "Cursor to start at",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "next_cursor",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Previous Cursor",
                "name": "previous_cursor",
                "description": "Cursor to start at",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "previous_cursor",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Page Size",
                "name": "page_size",
                "description": "Maximum number of entries to return",
                "default": 20,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "page_size",
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created From",
                "name": "created_from",
                "description": "Filter by creation `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created To",
                "name": "created_to",
                "description": "Filter by creation `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Entry From",
                "name": "entry_from",
                "description": "Filter by entry `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "entry_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Entry To",
                "name": "entry_to",
                "description": "Filter by entry `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "entry_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Ledger Entry Type Ids",
                "name": "ledger_entry_type_ids",
                "description": "Filter by one or more 'entry type id(s)'",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "ledger_entry_type_ids",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Metadata"
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Tags",
                "name": "tags",
                "description": "Tags",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "tags",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: customer_name, -customer_name, customer_reference, -customer_reference",
                "default": "customer_name",
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
                    "Customers"
                ],
                "operation": [
                    "Get Customer Cancelled Mandates"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "Filter by last updated status `from` date",
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
                "description": "Filter by last updated status `to` date",
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by `organisation_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search customer name and reference",
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
                    "Customers"
                ],
                "operation": [
                    "Get All Customers"
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
                "displayName": "Status",
                "name": "status",
                "description": "Filter by customer status",
                "default": "active",
                "type": "options",
                "options": [
                    {
                        "name": "Active",
                        "value": "active"
                    },
                    {
                        "name": "Suspended",
                        "value": "suspended"
                    },
                    {
                        "name": "Cancelled",
                        "value": "cancelled"
                    },
                    {
                        "name": "Deleted",
                        "value": "deleted"
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
                "displayName": "Customer Group Id",
                "name": "customer_group_id",
                "description": "Filter by customer group id",
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
                "displayName": "Organisation Id",
                "name": "organisation_id",
                "description": "Filter by organisation id",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "organisation_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Customer Type",
                "name": "customer_type",
                "description": "Filter by customer type",
                "default": "unspecified",
                "type": "options",
                "options": [
                    {
                        "name": "Unspecified",
                        "value": "unspecified"
                    },
                    {
                        "name": "Business",
                        "value": "business"
                    },
                    {
                        "name": "Consumer",
                        "value": "consumer"
                    },
                    {
                        "name": "Reseller",
                        "value": "reseller"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customer_type",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Letter",
                "name": "letter",
                "description": "Return customers that start with a specific letter, e.g. A, B, C, etc",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "letter",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created From",
                "name": "created_from",
                "description": "Filter by `created_at` from",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Created To",
                "name": "created_to",
                "description": "Filter by `created_at` to",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "created_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Cancelled From",
                "name": "cancelled_from",
                "description": "Filter by `cancelled_at` from",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cancelled_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Cancelled To",
                "name": "cancelled_to",
                "description": "Filter by `cancelled_at` to",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cancelled_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Ids",
                "name": "ids",
                "description": "Filter by Ids",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "ids",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Tags",
                "name": "tags",
                "description": "Filter by tags",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "tags",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search name, reference and post code",
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, reference, -reference, status, -status, id, -id",
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
//# sourceMappingURL=description.js.map