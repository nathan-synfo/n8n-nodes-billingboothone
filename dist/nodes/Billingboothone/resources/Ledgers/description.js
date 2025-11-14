"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgersFields = void 0;
exports.LedgersFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Ledger Entries",
                "value": "Get All Ledger Entries",
                "action": "Get all ledger entries",
                "description": "Retrieves all ledger entries for the associated `customer_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger"
                    }
                }
            },
            {
                "name": "Post Ledger Entry",
                "value": "Post Ledger Entry",
                "action": "Post a ledger entry",
                "description": "Posts a ledger entry against the specified `customer_id`.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger"
                    }
                }
            },
            {
                "name": "Get Ledger Current Balance",
                "value": "Get Ledger Current Balance",
                "action": "Get current balance",
                "description": "Gets the current balance for the specified `customer_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger/balance"
                    }
                }
            },
            {
                "name": "Get Unallocated Credits",
                "value": "Get Unallocated Credits",
                "action": "Get unallocated credits",
                "description": "Gets a list of unallocated credit ledger entries for the specified `customer_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger/unallocated"
                    }
                }
            },
            {
                "name": "Generate Statement",
                "value": "Generate Statement",
                "action": "Generate statement",
                "description": "Generates a customer balance statement",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger/statement"
                    }
                }
            },
            {
                "name": "Reverse Ledger Entry",
                "value": "Reverse Ledger Entry",
                "action": "Reverse ledger entry",
                "description": "Reverses the specified ledger entry.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/ledger/{{$parameter[\"id\"]}}/reverse"
                    }
                }
            },
            {
                "name": "Get All Ledger Entry Types",
                "value": "Get All Ledger Entry Types",
                "action": "Get all ledger entry types",
                "description": "Retrieves all ledger entry types available.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/ledger/types"
                    }
                }
            },
            {
                "name": "Create Ledger Entry Type",
                "value": "Create Ledger Entry Type",
                "action": "Create ledger entry type",
                "description": "Create a ledger entry type.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/ledger/types"
                    }
                }
            },
            {
                "name": "Delete Multiple L Edger Entry Types",
                "value": "Delete Multiple L Edger Entry Types",
                "action": "Delete multiple ledger entry types",
                "description": "Deletes all ledger entry types with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/ledger/types"
                    }
                }
            },
            {
                "name": "Get Ledger Entry Type",
                "value": "Get Ledger Entry Type",
                "action": "Get a single ledger entry type",
                "description": "Retrieves a single ledger entry type.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/ledger/types/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Ledger Entry Type",
                "value": "Update Ledger Entry Type",
                "action": "Update ledger entry type",
                "description": "Updates an existing ledger entry type.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/ledger/types/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Ledger Entry Type",
                "value": "Delete Ledger Entry Type",
                "action": "Delete ledger entry type",
                "description": "Deletes an existing ledger entry type.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/ledger/types/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /customer/{customerId}/ledger",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get All Ledger Entries"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{customerId}/ledger",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/ledger/balance",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get Ledger Current Balance"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/ledger/unallocated",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get Unallocated Credits"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/ledger/statement",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Generate Statement"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/ledger/{id}/reverse",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Reverse Ledger Entry"
                ]
            }
        }
    },
    {
        "displayName": "GET /ledger/types",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get All Ledger Entry Types"
                ]
            }
        }
    },
    {
        "displayName": "POST /ledger/types",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Create Ledger Entry Type"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /ledger/types",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Delete Multiple L Edger Entry Types"
                ]
            }
        }
    },
    {
        "displayName": "GET /ledger/types/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get Ledger Entry Type"
                ]
            }
        }
    },
    {
        "displayName": "PUT /ledger/types/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Update Ledger Entry Type"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /ledger/types/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Delete Ledger Entry Type"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get All Ledger Entries"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get Ledger Current Balance"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Get Unallocated Credits"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Generate Statement"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Reverse Ledger Entry"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Ledger entry unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Reverse Ledger Entry"
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
                    "Ledgers"
                ],
                "operation": [
                    "Get Ledger Entry Type"
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
                    "Ledgers"
                ],
                "operation": [
                    "Update Ledger Entry Type"
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
                    "Ledgers"
                ],
                "operation": [
                    "Delete Ledger Entry Type"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Date",
        "name": "date",
        "type": "string",
        "default": "",
        "description": "Entry date",
        "routing": {
            "send": {
                "property": "date",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Amount",
        "name": "amount",
        "type": "number",
        "default": 0,
        "description": "Entry amount/value",
        "routing": {
            "send": {
                "property": "amount",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Ledger Entry Type Id",
        "name": "ledger_entry_type_id",
        "type": "number",
        "default": 0,
        "description": "Ledger entry type unique identifier",
        "routing": {
            "send": {
                "property": "ledger_entry_type_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
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
                    "Ledgers"
                ],
                "operation": [
                    "Post Ledger Entry"
                ]
            }
        },
        "options": [
            {
                "displayName": "Transaction Type",
                "name": "transaction_type",
                "type": "options",
                "default": "debit",
                "options": [
                    {
                        "name": "Debit",
                        "value": "debit"
                    },
                    {
                        "name": "Credit",
                        "value": "credit"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "transaction_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Details",
                "name": "details",
                "type": "string",
                "default": "",
                "description": "Entry details",
                "routing": {
                    "send": {
                        "property": "details",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Allocations",
                "name": "allocations",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Invoice allocations if applicable",
                "routing": {
                    "send": {
                        "property": "allocations",
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
                    "Ledgers"
                ],
                "operation": [
                    "Create Ledger Entry Type"
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
                "description": "Name of the type",
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
                "displayName": "Is Debit",
                "name": "is_debit",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be a debit",
                "routing": {
                    "send": {
                        "property": "is_debit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Credit",
                "name": "is_credit",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be a credit",
                "routing": {
                    "send": {
                        "property": "is_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Reversible",
                "name": "is_reversible",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be reversed",
                "routing": {
                    "send": {
                        "property": "is_reversible",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is System",
                "name": "is_system",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry is a system type which cannot be modified",
                "routing": {
                    "send": {
                        "property": "is_system",
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
                    "Ledgers"
                ],
                "operation": [
                    "Delete Multiple L Edger Entry Types"
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
                    "Ledgers"
                ],
                "operation": [
                    "Update Ledger Entry Type"
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
                "description": "Name of the type",
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
                "displayName": "Is Debit",
                "name": "is_debit",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be a debit",
                "routing": {
                    "send": {
                        "property": "is_debit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Credit",
                "name": "is_credit",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be a credit",
                "routing": {
                    "send": {
                        "property": "is_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Reversible",
                "name": "is_reversible",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry can be reversed",
                "routing": {
                    "send": {
                        "property": "is_reversible",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is System",
                "name": "is_system",
                "type": "boolean",
                "default": true,
                "description": "True if this type of entry is a system type which cannot be modified",
                "routing": {
                    "send": {
                        "property": "is_system",
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
                    "Ledgers"
                ],
                "operation": [
                    "Get All Ledger Entries"
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
                "displayName": "Invoice Id",
                "name": "invoice_id",
                "description": "Filter by `invoice_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "invoice_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Transaction Type",
                "name": "transaction_type",
                "description": "Filter by `transaction_type`",
                "default": "debit",
                "type": "options",
                "options": [
                    {
                        "name": "Debit",
                        "value": "debit"
                    },
                    {
                        "name": "Credit",
                        "value": "credit"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "transaction_type",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: entry_date, -entry_date",
                "default": "-entry_date",
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
                    "Ledgers"
                ],
                "operation": [
                    "Generate Statement"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "The opening date",
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
                "description": "The closing date",
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
                    "Ledgers"
                ],
                "operation": [
                    "Get All Ledger Entry Types"
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
                "default": "-name",
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