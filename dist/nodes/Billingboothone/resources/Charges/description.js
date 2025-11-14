"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargesFields = void 0;
exports.ChargesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ]
            }
        },
        "options": [
            {
                "name": "Get Terminating Charges",
                "value": "Get Terminating Charges",
                "action": "Get all terminating charges",
                "description": "Retrieves a list of all charges terminating in the specified `from` and `to` period",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/charge/terminating"
                    }
                }
            },
            {
                "name": "Get Active Charges",
                "value": "Get Active Charges",
                "action": "Get all active charges",
                "description": "Retrieves a list of all active charges",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/charge/active"
                    }
                }
            },
            {
                "name": "Get For Reconciliation",
                "value": "Get For Reconciliation",
                "action": "Get reconciled data",
                "description": "Reconciles Data",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/charge/reconciliation"
                    }
                }
            },
            {
                "name": "Get Single Charges",
                "value": "Get Single Charges",
                "action": "Get all single charges",
                "description": "Retrieves a list of all single charges in the specified `from` and `to` period",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/charge/single"
                    }
                }
            },
            {
                "name": "Get All Charges",
                "value": "Get All Charges",
                "action": "Get all charges",
                "description": "Retrieves all charges for the associated `customer_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge"
                    }
                }
            },
            {
                "name": "Create Charge",
                "value": "Create Charge",
                "action": "Create charge",
                "description": "Create a single or recurring charge.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge"
                    }
                }
            },
            {
                "name": "Delete Multiple Charges",
                "value": "Delete Multiple Charges",
                "action": "Delete multiple charges",
                "description": "Deletes all charges with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge"
                    }
                }
            },
            {
                "name": "Get Charge",
                "value": "Get Charge",
                "action": "Get a single charge",
                "description": "Retrieves a single charge.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Charge",
                "value": "Update Charge",
                "action": "Update charge",
                "description": "Updates an existing charge.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Charge",
                "value": "Delete Charge",
                "action": "Delete charge",
                "description": "Deletes an existing charge.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Termination Charge",
                "value": "Termination Charge",
                "action": "Set termination date",
                "description": "Sets the termination date on one or more charges.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/terminate"
                    }
                }
            },
            {
                "name": "Early Termination Charge",
                "value": "Early Termination Charge",
                "action": "Early termination",
                "description": "Apply an early termination charge or credit on existing charges.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/terminate/early"
                    }
                }
            },
            {
                "name": "Early Termination Charge Preview",
                "value": "Early Termination Charge Preview",
                "action": "Early termination preview",
                "description": "Previews the charge/credit when an applying early termination charge or credit on existing charges.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/terminate/early/preview"
                    }
                }
            },
            {
                "name": "Cancel Multiple Charges",
                "value": "Cancel Multiple Charges",
                "action": "Cancel multiple charges",
                "description": "Set the status of multiple charges to cancel.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/cancel"
                    }
                }
            },
            {
                "name": "Reactivate Multiple Charges",
                "value": "Reactivate Multiple Charges",
                "action": "Reactivate multiple charges",
                "description": "Set the status of multiple charges to active.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/charge/reactivate"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /analytics/charge/terminating",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get Terminating Charges"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/charge/active",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get Active Charges"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/charge/reconciliation",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get For Reconciliation"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/charge/single",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get Single Charges"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/charge",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get All Charges"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{customerId}/charge",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Create Charge"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/charge",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Delete Multiple Charges"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/charge/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Get Charge"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/charge/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Delete Charge"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/terminate",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Termination Charge"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/terminate/early",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/terminate/early/preview",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge Preview"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/cancel",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Cancel Multiple Charges"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/charge/reactivate",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Reactivate Multiple Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Get All Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Create Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Delete Multiple Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Get Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Get Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Delete Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Delete Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Termination Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge Preview"
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
                    "Charges"
                ],
                "operation": [
                    "Cancel Multiple Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Reactivate Multiple Charges"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Start At",
        "name": "start_at",
        "type": "string",
        "default": "",
        "description": "Date when the charge first starts",
        "routing": {
            "send": {
                "property": "start_at",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Create Charge"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Quantity",
        "name": "quantity",
        "type": "number",
        "default": 0,
        "description": "Quantity",
        "routing": {
            "send": {
                "property": "quantity",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Create Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Create Charge"
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
                        "name": "Cancelled",
                        "value": "cancelled"
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
                "displayName": "Type",
                "name": "type",
                "type": "options",
                "default": "single",
                "options": [
                    {
                        "name": "Single",
                        "value": "single"
                    },
                    {
                        "name": "Recurring",
                        "value": "recurring"
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
                "displayName": "Frequency",
                "name": "frequency",
                "type": "options",
                "default": "daily",
                "options": [
                    {
                        "name": "Daily",
                        "value": "daily"
                    },
                    {
                        "name": "Weekly",
                        "value": "weekly"
                    },
                    {
                        "name": "Fortnightly",
                        "value": "fortnightly"
                    },
                    {
                        "name": "Monthly",
                        "value": "monthly"
                    },
                    {
                        "name": "Quarterly",
                        "value": "quarterly"
                    },
                    {
                        "name": "Yearly",
                        "value": "yearly"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "frequency",
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
                "description": "Date of creation",
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
                "displayName": "Pro Rata Start At",
                "name": "pro_rata_start_at",
                "type": "string",
                "default": "",
                "description": "Pro-Rata start date for the charge, only available if `type` is `Recurring`",
                "routing": {
                    "send": {
                        "property": "pro_rata_start_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "End At",
                "name": "end_at",
                "type": "string",
                "default": "",
                "description": "Date when the charge terminates, only available if `type` is `Recurring`",
                "routing": {
                    "send": {
                        "property": "end_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Last Charge At",
                "name": "last_charge_at",
                "type": "string",
                "default": "",
                "description": "Last charge date",
                "routing": {
                    "send": {
                        "property": "last_charge_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Next Charge At",
                "name": "next_charge_at",
                "type": "string",
                "default": "",
                "description": "Next charge date",
                "routing": {
                    "send": {
                        "property": "next_charge_at",
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
                "description": "Description of the charge as it appears in the invoice",
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
                "displayName": "Details",
                "name": "details",
                "type": "string",
                "default": "",
                "description": "Optional additional details",
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
                "displayName": "Display Cli",
                "name": "display_cli",
                "type": "boolean",
                "default": true,
                "description": "If true, display CLI in invoices",
                "routing": {
                    "send": {
                        "property": "display_cli",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Metadata",
                "name": "metadata",
                "type": "string",
                "default": "",
                "description": "Optional metadata. This field can store any additional information on the charge utilised by third-parties, and is designed for API integration",
                "routing": {
                    "send": {
                        "property": "metadata",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Accounting Code",
                "name": "accounting_code",
                "type": "string",
                "default": "",
                "description": "Nominal accounting code for third-party software",
                "routing": {
                    "send": {
                        "property": "accounting_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Sort Priority",
                "name": "sort_priority",
                "type": "number",
                "default": 0,
                "description": "Sort order priority which determines the position of the charge within the invoice. Lowest priority (0) appears first.",
                "routing": {
                    "send": {
                        "property": "sort_priority",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Hide Charge Period",
                "name": "hide_charge_period",
                "type": "boolean",
                "default": true,
                "description": "Hide charge period in invoice details",
                "routing": {
                    "send": {
                        "property": "hide_charge_period",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Price Inclusive Tax",
                "name": "price_inclusive_tax",
                "type": "boolean",
                "default": true,
                "description": "If true, sell price is inclusive of tax",
                "routing": {
                    "send": {
                        "property": "price_inclusive_tax",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Sell Price",
                "name": "sell_price",
                "type": "number",
                "default": 0,
                "description": "Sell price",
                "routing": {
                    "send": {
                        "property": "sell_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Buy Price",
                "name": "buy_price",
                "type": "number",
                "default": 0,
                "description": "Buy price",
                "routing": {
                    "send": {
                        "property": "buy_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Rate",
                "name": "tax_rate",
                "type": "number",
                "default": 0,
                "description": "Custom tax rate, overrides organisation tax rate if set",
                "routing": {
                    "send": {
                        "property": "tax_rate",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Id",
                "name": "cli_id",
                "type": "number",
                "default": 0,
                "description": "Caller line unique identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cli_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli",
                "name": "cli",
                "type": "string",
                "default": "",
                "description": "Caller line identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cli",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Product Id",
                "name": "product_id",
                "type": "number",
                "default": 0,
                "description": "Product identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "product_id",
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
                "description": "Supplier identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "supplier_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Category Id",
                "name": "category_id",
                "type": "number",
                "default": 0,
                "description": "Category identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "category_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Cost Centre identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Service File Id",
                "name": "service_file_id",
                "type": "number",
                "default": 0,
                "description": "Service file identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "service_file_id",
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
                    "Charges"
                ],
                "operation": [
                    "Delete Multiple Charges"
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
        "displayName": "Start At",
        "name": "start_at",
        "type": "string",
        "default": "",
        "description": "Date when the charge first starts",
        "routing": {
            "send": {
                "property": "start_at",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Quantity",
        "name": "quantity",
        "type": "number",
        "default": 0,
        "description": "Quantity",
        "routing": {
            "send": {
                "property": "quantity",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Update Charge"
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
                        "name": "Cancelled",
                        "value": "cancelled"
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
                "displayName": "Type",
                "name": "type",
                "type": "options",
                "default": "single",
                "options": [
                    {
                        "name": "Single",
                        "value": "single"
                    },
                    {
                        "name": "Recurring",
                        "value": "recurring"
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
                "displayName": "Frequency",
                "name": "frequency",
                "type": "options",
                "default": "daily",
                "options": [
                    {
                        "name": "Daily",
                        "value": "daily"
                    },
                    {
                        "name": "Weekly",
                        "value": "weekly"
                    },
                    {
                        "name": "Fortnightly",
                        "value": "fortnightly"
                    },
                    {
                        "name": "Monthly",
                        "value": "monthly"
                    },
                    {
                        "name": "Quarterly",
                        "value": "quarterly"
                    },
                    {
                        "name": "Yearly",
                        "value": "yearly"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "frequency",
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
                "description": "Date of creation",
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
                "displayName": "Pro Rata Start At",
                "name": "pro_rata_start_at",
                "type": "string",
                "default": "",
                "description": "Pro-Rata start date for the charge, only available if `type` is `Recurring`",
                "routing": {
                    "send": {
                        "property": "pro_rata_start_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "End At",
                "name": "end_at",
                "type": "string",
                "default": "",
                "description": "Date when the charge terminates, only available if `type` is `Recurring`",
                "routing": {
                    "send": {
                        "property": "end_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Last Charge At",
                "name": "last_charge_at",
                "type": "string",
                "default": "",
                "description": "Last charge date",
                "routing": {
                    "send": {
                        "property": "last_charge_at",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Next Charge At",
                "name": "next_charge_at",
                "type": "string",
                "default": "",
                "description": "Next charge date",
                "routing": {
                    "send": {
                        "property": "next_charge_at",
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
                "description": "Description of the charge as it appears in the invoice",
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
                "displayName": "Details",
                "name": "details",
                "type": "string",
                "default": "",
                "description": "Optional additional details",
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
                "displayName": "Display Cli",
                "name": "display_cli",
                "type": "boolean",
                "default": true,
                "description": "If true, display CLI in invoices",
                "routing": {
                    "send": {
                        "property": "display_cli",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Metadata",
                "name": "metadata",
                "type": "string",
                "default": "",
                "description": "Optional metadata. This field can store any additional information on the charge utilised by third-parties, and is designed for API integration",
                "routing": {
                    "send": {
                        "property": "metadata",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Accounting Code",
                "name": "accounting_code",
                "type": "string",
                "default": "",
                "description": "Nominal accounting code for third-party software",
                "routing": {
                    "send": {
                        "property": "accounting_code",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Sort Priority",
                "name": "sort_priority",
                "type": "number",
                "default": 0,
                "description": "Sort order priority which determines the position of the charge within the invoice. Lowest priority (0) appears first.",
                "routing": {
                    "send": {
                        "property": "sort_priority",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Hide Charge Period",
                "name": "hide_charge_period",
                "type": "boolean",
                "default": true,
                "description": "Hide charge period in invoice details",
                "routing": {
                    "send": {
                        "property": "hide_charge_period",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Price Inclusive Tax",
                "name": "price_inclusive_tax",
                "type": "boolean",
                "default": true,
                "description": "If true, sell price is inclusive of tax",
                "routing": {
                    "send": {
                        "property": "price_inclusive_tax",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Sell Price",
                "name": "sell_price",
                "type": "number",
                "default": 0,
                "description": "Sell price",
                "routing": {
                    "send": {
                        "property": "sell_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Buy Price",
                "name": "buy_price",
                "type": "number",
                "default": 0,
                "description": "Buy price",
                "routing": {
                    "send": {
                        "property": "buy_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Tax Rate",
                "name": "tax_rate",
                "type": "number",
                "default": 0,
                "description": "Custom tax rate, overrides organisation tax rate if set",
                "routing": {
                    "send": {
                        "property": "tax_rate",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Id",
                "name": "cli_id",
                "type": "number",
                "default": 0,
                "description": "Caller line unique identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cli_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli",
                "name": "cli",
                "type": "string",
                "default": "",
                "description": "Caller line identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cli",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Product Id",
                "name": "product_id",
                "type": "number",
                "default": 0,
                "description": "Product identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "product_id",
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
                "description": "Supplier identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "supplier_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Category Id",
                "name": "category_id",
                "type": "number",
                "default": 0,
                "description": "Category identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "category_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Cost Centre identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "cost_centre_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Service File Id",
                "name": "service_file_id",
                "type": "number",
                "default": 0,
                "description": "Service file identifier, if relevant",
                "routing": {
                    "send": {
                        "property": "service_file_id",
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
        "displayName": "Id",
        "name": "id",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of charge unique identifiers",
        "routing": {
            "send": {
                "property": "id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Termination Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Termination Charge"
                ]
            }
        },
        "options": [
            {
                "displayName": "Termination Date",
                "name": "termination_date",
                "type": "string",
                "default": "",
                "description": "Termination date",
                "routing": {
                    "send": {
                        "property": "termination_date",
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
        "displayName": "Id",
        "name": "id",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of charge unique identifiers",
        "routing": {
            "send": {
                "property": "id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge"
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
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge"
                ]
            }
        },
        "options": [
            {
                "displayName": "Mode",
                "name": "mode",
                "type": "options",
                "default": "charge",
                "options": [
                    {
                        "name": "Charge",
                        "value": "charge"
                    },
                    {
                        "name": "Credit",
                        "value": "credit"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "mode",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Start Date",
                "name": "start_date",
                "type": "string",
                "default": "",
                "description": "If issuing a credit, specify the start date if the credit",
                "routing": {
                    "send": {
                        "property": "start_date",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Notice Period In Days",
                "name": "notice_period_in_days",
                "type": "number",
                "default": 0,
                "description": "Notice period for early termination charge",
                "routing": {
                    "send": {
                        "property": "notice_period_in_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Termination Date",
                "name": "termination_date",
                "type": "string",
                "default": "",
                "description": "Termination date for charges",
                "routing": {
                    "send": {
                        "property": "termination_date",
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
        "displayName": "Id",
        "name": "id",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "List of charge unique identifiers",
        "routing": {
            "send": {
                "property": "id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge Preview"
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
                    "Charges"
                ],
                "operation": [
                    "Early Termination Charge Preview"
                ]
            }
        },
        "options": [
            {
                "displayName": "Mode",
                "name": "mode",
                "type": "options",
                "default": "charge",
                "options": [
                    {
                        "name": "Charge",
                        "value": "charge"
                    },
                    {
                        "name": "Credit",
                        "value": "credit"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "mode",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Start Date",
                "name": "start_date",
                "type": "string",
                "default": "",
                "description": "If issuing a credit, specify the start date if the credit",
                "routing": {
                    "send": {
                        "property": "start_date",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Notice Period In Days",
                "name": "notice_period_in_days",
                "type": "number",
                "default": 0,
                "description": "Notice period for early termination charge",
                "routing": {
                    "send": {
                        "property": "notice_period_in_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Termination Date",
                "name": "termination_date",
                "type": "string",
                "default": "",
                "description": "Termination date for charges",
                "routing": {
                    "send": {
                        "property": "termination_date",
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
                    "Charges"
                ],
                "operation": [
                    "Cancel Multiple Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Reactivate Multiple Charges"
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
                    "Charges"
                ],
                "operation": [
                    "Get Terminating Charges"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "From date",
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
                "description": "To date",
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
                    "Charges"
                ],
                "operation": [
                    "Get Active Charges"
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
                "displayName": "Product Ids",
                "name": "product_ids",
                "description": "Filter by product ids",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "product_ids",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, quantity, -quantity, sell_price, -sell_price, start_at, -start_at, end_at, -end_at, customer_name, -customer_name, customer_reference, -customer_reference",
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
                    "Charges"
                ],
                "operation": [
                    "Get For Reconciliation"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "From date",
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
                "description": "To date",
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
                "displayName": "Grouped",
                "name": "grouped",
                "description": "Grouped",
                "default": true,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "grouped",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Limit",
                "name": "limit",
                "description": "Maximum number of entries to return",
                "default": 500,
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
                "displayName": "Supplier Ids",
                "name": "supplierIds",
                "description": "SupplierIds",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "supplierIds",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Customer Ids",
                "name": "customerIds",
                "description": "CustomerIds",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customerIds",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Product Ids",
                "name": "productIds",
                "description": "ProductIds",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "productIds",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: customer, -customer, product, -product, sellquantity, -sellquantity, sellprice, -sellprice, buyquantity, -buyquantity, buyprice, -buyprice, margin, -margin",
                "default": "customer",
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
                    "Charges"
                ],
                "operation": [
                    "Get Single Charges"
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
                "description": "From date",
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
                "description": "To date",
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
                "displayName": "Product Ids",
                "name": "product_ids",
                "description": "Filter by product ids",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "product_ids",
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
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, quantity, -quantity, sell_price, -sell_price, start_at, -start_at, customer_name, -customer_name, customer_reference, -customer_reference",
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
                    "Charges"
                ],
                "operation": [
                    "Get All Charges"
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
                "displayName": "Category Id",
                "name": "category_id",
                "description": "Filter by `category_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "category_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
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
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "description": "Filter by `cost_centre_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cost_centre_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "From",
                "name": "from",
                "description": "Filter by `from` date",
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
                "description": "Filter by `to` date",
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
                "displayName": "Archived",
                "name": "archived",
                "description": "Return archived charges",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "archived",
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
                "displayName": "Cli",
                "name": "cli",
                "description": "Filter by CLI",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "cli",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Type",
                "name": "type",
                "description": "Filter by `type`",
                "default": "single",
                "type": "options",
                "options": [
                    {
                        "name": "Single",
                        "value": "single"
                    },
                    {
                        "name": "Recurring",
                        "value": "recurring"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "type",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Origin",
                "name": "origin",
                "description": "Filter by `origin`",
                "default": "serviceFile",
                "type": "options",
                "options": [
                    {
                        "name": "Service File",
                        "value": "serviceFile"
                    },
                    {
                        "name": "Manual",
                        "value": "manual"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "origin",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: start, -start, id, -id",
                "default": "start",
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