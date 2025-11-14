"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCommissionsFields = void 0;
exports.CustomerCommissionsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Referral Customers",
                "value": "Get All Referral Customers",
                "action": "Get all referral customers",
                "description": "Retrieves all referral customers.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/customers"
                    }
                }
            },
            {
                "name": "Create Referral Customer",
                "value": "Create Referral Customer",
                "action": " Create referral customer",
                "description": "Creates the referral customer related to the reseller customer",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/customers"
                    }
                }
            },
            {
                "name": "Bulk Delete Referral Customers",
                "value": "Bulk Delete Referral Customers",
                "action": " Bulk delete referral customers",
                "description": "Delete multiple referral customers",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/customers"
                    }
                }
            },
            {
                "name": "Get Customer Commission Settings",
                "value": "Get Customer Commission Settings",
                "action": "Get customer commission settings",
                "description": "Gets customer commission settings.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission"
                    }
                }
            },
            {
                "name": "Update Customer Commission Settings",
                "value": "Update Customer Commission Settings",
                "action": "Update customer commission settings",
                "description": "Updates customer commission settings.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission"
                    }
                }
            },
            {
                "name": "Download Commission Report",
                "value": "Download Commission Report",
                "action": "Download commission report",
                "description": "Downloads the binary commission report.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/download"
                    }
                }
            },
            {
                "name": "Get Commission Report",
                "value": "Get Commission Report",
                "action": "Get commission report",
                "description": "Retrieves the commission report.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/report"
                    }
                }
            },
            {
                "name": "Send Commission Report",
                "value": "Send Commission Report",
                "action": "Send commission report",
                "description": "Sends the commission report.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"parentCustomerId\"]}}/commission/send"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /customer/{parentCustomerId}/commission/customers",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get All Referral Customers"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{parentCustomerId}/commission/customers",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Create Referral Customer"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{parentCustomerId}/commission/customers",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Bulk Delete Referral Customers"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{parentCustomerId}/commission",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get Customer Commission Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{parentCustomerId}/commission",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Update Customer Commission Settings"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{parentCustomerId}/commission/download",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Download Commission Report"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{parentCustomerId}/commission/report",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get Commission Report"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{parentCustomerId}/commission/send",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Send Commission Report"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get All Referral Customers"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Create Referral Customer"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Bulk Delete Referral Customers"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get Customer Commission Settings"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Update Customer Commission Settings"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Download Commission Report"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Get Commission Report"
                ]
            }
        }
    },
    {
        "displayName": "Parent Customer Id",
        "name": "parentCustomerId",
        "required": true,
        "description": "Unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Send Commission Report"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer Id",
        "name": "customer_id",
        "type": "number",
        "default": 0,
        "description": "Customer unique identifier",
        "routing": {
            "send": {
                "property": "customer_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Create Referral Customer"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Commission Plan Id",
        "name": "commission_plan_id",
        "type": "number",
        "default": 0,
        "description": "Commission plan unique identifier",
        "routing": {
            "send": {
                "property": "commission_plan_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Create Referral Customer"
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Create Referral Customer"
                ]
            }
        },
        "options": [
            {
                "displayName": "Customer Name",
                "name": "customer_name",
                "type": "string",
                "default": "",
                "description": "Customer name",
                "routing": {
                    "send": {
                        "property": "customer_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Customer Reference",
                "name": "customer_reference",
                "type": "string",
                "default": "",
                "description": "Customer reference",
                "routing": {
                    "send": {
                        "property": "customer_reference",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Commission Plan Name",
                "name": "commission_plan_name",
                "type": "string",
                "default": "",
                "description": "Commission plan name",
                "routing": {
                    "send": {
                        "property": "commission_plan_name",
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Bulk Delete Referral Customers"
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Update Customer Commission Settings"
                ]
            }
        },
        "options": [
            {
                "displayName": "Report Mode",
                "name": "report_mode",
                "type": "options",
                "default": "manual",
                "options": [
                    {
                        "name": "Manual",
                        "value": "manual"
                    },
                    {
                        "name": "Automatic",
                        "value": "automatic"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "report_mode",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Settled Only",
                "name": "settled_only",
                "type": "boolean",
                "default": true,
                "description": "Include only settled invices in the commission report",
                "routing": {
                    "send": {
                        "property": "settled_only",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Display Products",
                "name": "display_products",
                "type": "boolean",
                "default": true,
                "description": "Display the product breakdown within the commission report",
                "routing": {
                    "send": {
                        "property": "display_products",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Report Offset",
                "name": "report_offset",
                "type": "number",
                "default": 0,
                "description": "Number of months in arrears to look at for commission data",
                "routing": {
                    "send": {
                        "property": "report_offset",
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
                "description": "If `reporting_mode` is `Automatic` then deliver reports to this email address",
                "routing": {
                    "send": {
                        "property": "delivery_email",
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
        "displayName": "Billing Period",
        "name": "billing_period",
        "type": "string",
        "default": "",
        "description": "Billing period",
        "routing": {
            "send": {
                "property": "billing_period",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Customer Commissions"
                ],
                "operation": [
                    "Send Commission Report"
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Send Commission Report"
                ]
            }
        },
        "options": [
            {
                "displayName": "Delivery Email",
                "name": "delivery_email",
                "type": "string",
                "default": "",
                "description": "Delivery email address",
                "routing": {
                    "send": {
                        "property": "delivery_email",
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Download Commission Report"
                ]
            }
        },
        "options": [
            {
                "displayName": "Start",
                "name": "start",
                "description": "Billing period `start` date",
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
                "description": "Billing period `end` date",
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
                    "Customer Commissions"
                ],
                "operation": [
                    "Get Commission Report"
                ]
            }
        },
        "options": [
            {
                "displayName": "Start",
                "name": "start",
                "description": "Billing period `start` date",
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
                "description": "Billing period `end` date",
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
    }
];
//# sourceMappingURL=description.js.map