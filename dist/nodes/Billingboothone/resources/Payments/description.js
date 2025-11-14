"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsFields = void 0;
exports.PaymentsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ]
            }
        },
        "options": [
            {
                "name": "Get Payment Breakdown",
                "value": "Get Payment Breakdown",
                "action": "Get payment breakdown",
                "description": "Gets payment status breakdown during the specified date range",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/payment"
                    }
                }
            },
            {
                "name": "Get Payment Report",
                "value": "Get Payment Report",
                "action": "Payments report",
                "description": "Get a detailed payments report for the criteria specified",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/analytics/payment/report"
                    }
                }
            },
            {
                "name": "Get All Payments",
                "value": "Get All Payments",
                "action": "Get all payments",
                "description": "Retrieves all payments for the associated `customer_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments"
                    }
                }
            },
            {
                "name": "Cancel Multiple Payments",
                "value": "Cancel Multiple Payments",
                "action": "Cancel multiple payments",
                "description": "Cancel multiple pending payments",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/payments"
                    }
                }
            },
            {
                "name": "Get Payment",
                "value": "Get Payment",
                "action": "Get single payment",
                "description": "Retrieves a single payment",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Cancel Payment",
                "value": "Cancel Payment",
                "action": "Cancel payment",
                "description": "Cancels a pending payment",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/payments/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Take Payment",
                "value": "Take Payment",
                "action": "Take payment",
                "description": "Creates a new manual payment",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/take/{{$parameter[\"customerId\"]}}"
                    }
                }
            },
            {
                "name": "Take Payment Plan",
                "value": "Take Payment Plan",
                "action": "Payment plan",
                "description": "Creates a series of payments based on an installments plan",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/take/{{$parameter[\"customerId\"]}}/plan"
                    }
                }
            },
            {
                "name": "Take Payment Plan Preview",
                "value": "Take Payment Plan Preview",
                "action": "Payment plan preview",
                "description": "Gets a preview of what the payment plan looks like",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/take/{{$parameter[\"customerId\"]}}/plan/preview"
                    }
                }
            },
            {
                "name": "Retry Payment",
                "value": "Retry Payment",
                "action": "Retry payment",
                "description": "Retries a failed payment",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/{{$parameter[\"id\"]}}/retry"
                    }
                }
            },
            {
                "name": "Send Instant Pay",
                "value": "Send Instant Pay",
                "action": "Send instant payment",
                "description": "Send the necessary email to initiate an instant pay transaction",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/instant/{{$parameter[\"customerId\"]}}"
                    }
                }
            },
            {
                "name": "Generate Instant Pay",
                "value": "Generate Instant Pay",
                "action": "Generate instant payment URL",
                "description": "Generates the necessary URL to initiate an instant pay transaction",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/instant/{{$parameter[\"customerId\"]}}/url"
                    }
                }
            },
            {
                "name": "Get Mandates",
                "value": "Get Mandates",
                "action": "Get mandates",
                "description": "Gets customer mandates",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}"
                    }
                }
            },
            {
                "name": "Add Mandate",
                "value": "Add Mandate",
                "action": "Add mandate",
                "description": "Adds new mandate to a customer",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}"
                    }
                }
            },
            {
                "name": "Update Mandate",
                "value": "Update Mandate",
                "action": "Update mandate",
                "description": "Updates mandate to a customer",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Remove Mandate",
                "value": "Remove Mandate",
                "action": "Remove mandate",
                "description": "Removes mandate from a customer",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Setup Mandate",
                "value": "Setup Mandate",
                "action": "Setup mandate",
                "description": "Send the necessary mandate set up information to the customer",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/setup"
                    }
                }
            },
            {
                "name": "Enable Mandate",
                "value": "Enable Mandate",
                "action": "Enable mandate",
                "description": "Enables payment mandate",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/{{$parameter[\"id\"]}}/enable"
                    }
                }
            },
            {
                "name": "Disable Mandate",
                "value": "Disable Mandate",
                "action": "Disable mandate",
                "description": "Disables payment mandate",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/{{$parameter[\"id\"]}}/disable"
                    }
                }
            },
            {
                "name": "Default Mandate",
                "value": "Default Mandate",
                "action": "Make mandate default",
                "description": "Makes the specified mandate default",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/mandates/{{$parameter[\"customerId\"]}}/{{$parameter[\"id\"]}}/default"
                    }
                }
            },
            {
                "name": "Get Payment Settings",
                "value": "Get Payment Settings",
                "action": "Get all settings",
                "description": "Retrieves all configured payment provider settings.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/settings"
                    }
                }
            },
            {
                "name": "Get Settings",
                "value": "Get Settings",
                "action": "Get settings",
                "description": "Retrieves payment provider settings",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Settings",
                "value": "Update Settings",
                "action": "Update settings",
                "description": "Update settings for a specific provider",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Payment Customers",
                "value": "Get Payment Customers",
                "action": "Get provider customers",
                "description": "Returns a list of customers available on the payment provider.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}/customers"
                    }
                }
            },
            {
                "name": "Get Payment Mandates",
                "value": "Get Payment Mandates",
                "action": "Get provider mandates",
                "description": "Returns a list of customer mandates available on the payment provider.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}/customers/mandates/{{$parameter[\"customer\"]}}"
                    }
                }
            },
            {
                "name": "Verify Credentials",
                "value": "Verify Credentials",
                "action": "Verify credentials",
                "description": "Verifies the current status of the credentials",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}/credentials"
                    }
                }
            },
            {
                "name": "Remove Credentials",
                "value": "Remove Credentials",
                "action": "Remove credentials",
                "description": "Removes credentials from a payment provider",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/payments/settings/{{$parameter[\"id\"]}}/credentials"
                    }
                }
            },
            {
                "name": "Add Credentials",
                "value": "Add Credentials",
                "action": "Add credentials",
                "description": "Adds new credentials to a payment provider",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/payments/settings/credentials"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /analytics/payment",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Breakdown"
                ]
            }
        }
    },
    {
        "displayName": "GET /analytics/payment/report",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Report"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get All Payments"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /payments",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Cancel Multiple Payments"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /payments/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Cancel Payment"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/take/{customerId}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/take/{customerId}/plan",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/take/{customerId}/plan/preview",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/{id}/retry",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Retry Payment"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/instant/{customerId}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/instant/{customerId}/url",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Generate Instant Pay"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/mandates/{customerId}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Mandates"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/mandates/{customerId}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/mandates/{customerId}/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Mandate"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /payments/mandates/{customerId}/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Remove Mandate"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/mandates/{customerId}/setup",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Setup Mandate"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/mandates/{customerId}/{id}/enable",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Enable Mandate"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/mandates/{customerId}/{id}/disable",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Disable Mandate"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/mandates/{customerId}/{id}/default",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Default Mandate"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/settings",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Settings"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/settings/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Settings"
                ]
            }
        }
    },
    {
        "displayName": "PUT /payments/settings/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Settings"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/settings/{id}/customers",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Customers"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/settings/{id}/customers/mandates/{customer}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Mandates"
                ]
            }
        }
    },
    {
        "displayName": "GET /payments/settings/{id}/credentials",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Verify Credentials"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /payments/settings/{id}/credentials",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Remove Credentials"
                ]
            }
        }
    },
    {
        "displayName": "POST /payments/settings/credentials",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Credentials"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Cancel Payment"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Retry Payment"
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
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
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
                    "Payments"
                ],
                "operation": [
                    "Generate Instant Pay"
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
                    "Payments"
                ],
                "operation": [
                    "Get Mandates"
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
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Update Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment Provider Settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Remove Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Remove Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Setup Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Enable Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Enable Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Disable Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Disable Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Default Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Default Mandate"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Settings"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Settings"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Customers"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Mandates"
                ]
            }
        }
    },
    {
        "displayName": "Customer",
        "name": "customer",
        "required": true,
        "description": "Payment provider customer reference",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Get Payment Mandates"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Verify Credentials"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "description": "Payment provider settings unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Remove Credentials"
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
                    "Payments"
                ],
                "operation": [
                    "Cancel Multiple Payments"
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
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "Description as it appears on the provider",
        "routing": {
            "send": {
                "property": "description",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
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
        "description": "Amount to take",
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment"
                ]
            }
        },
        "options": [
            {
                "displayName": "Invoice Id",
                "name": "invoice_id",
                "type": "number",
                "default": 0,
                "description": "If payment relates to an invoice, associated `invoice_id`",
                "routing": {
                    "send": {
                        "property": "invoice_id",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Payment Date",
                "name": "payment_date",
                "type": "string",
                "default": "",
                "description": "Optional payment date if applicable",
                "routing": {
                    "send": {
                        "property": "payment_date",
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
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "Description as it appears on the provider",
        "routing": {
            "send": {
                "property": "description",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
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
        "description": "Amount to take",
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Frequency",
        "name": "frequency",
        "type": "options",
        "default": "weekly",
        "options": [
            {
                "name": "Weekly",
                "value": "weekly"
            },
            {
                "name": "Monthly",
                "value": "monthly"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Installments",
        "name": "installments",
        "type": "number",
        "default": 0,
        "description": "Number of installments, must be at least 2",
        "routing": {
            "send": {
                "property": "installments",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "First Collection Date",
        "name": "first_collection_date",
        "type": "string",
        "default": "",
        "description": "Collection date of first payment",
        "routing": {
            "send": {
                "property": "first_collection_date",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan"
                ]
            }
        },
        "options": [
            {
                "displayName": "First Installment Amount",
                "name": "first_installment_amount",
                "type": "number",
                "default": 0,
                "description": "Specific first installment amount, optional",
                "routing": {
                    "send": {
                        "property": "first_installment_amount",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Collection Day",
                "name": "collection_day",
                "type": "number",
                "default": 0,
                "description": "Optional day of the month for subsequent collection dates. Only applicable to a `Monthly` installments plan",
                "routing": {
                    "send": {
                        "property": "collection_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Id",
                "name": "invoice_id",
                "type": "number",
                "default": 0,
                "description": "If payment relates to an invoice, associated `invoice_id`",
                "routing": {
                    "send": {
                        "property": "invoice_id",
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
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "Description as it appears on the provider",
        "routing": {
            "send": {
                "property": "description",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
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
        "description": "Amount to take",
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Frequency",
        "name": "frequency",
        "type": "options",
        "default": "weekly",
        "options": [
            {
                "name": "Weekly",
                "value": "weekly"
            },
            {
                "name": "Monthly",
                "value": "monthly"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Installments",
        "name": "installments",
        "type": "number",
        "default": 0,
        "description": "Number of installments, must be at least 2",
        "routing": {
            "send": {
                "property": "installments",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "First Collection Date",
        "name": "first_collection_date",
        "type": "string",
        "default": "",
        "description": "Collection date of first payment",
        "routing": {
            "send": {
                "property": "first_collection_date",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
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
                    "Payments"
                ],
                "operation": [
                    "Take Payment Plan Preview"
                ]
            }
        },
        "options": [
            {
                "displayName": "First Installment Amount",
                "name": "first_installment_amount",
                "type": "number",
                "default": 0,
                "description": "Specific first installment amount, optional",
                "routing": {
                    "send": {
                        "property": "first_installment_amount",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Collection Day",
                "name": "collection_day",
                "type": "number",
                "default": 0,
                "description": "Optional day of the month for subsequent collection dates. Only applicable to a `Monthly` installments plan",
                "routing": {
                    "send": {
                        "property": "collection_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Invoice Id",
                "name": "invoice_id",
                "type": "number",
                "default": 0,
                "description": "If payment relates to an invoice, associated `invoice_id`",
                "routing": {
                    "send": {
                        "property": "invoice_id",
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
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Id",
        "name": "invoice_id",
        "type": "number",
        "default": 0,
        "description": "Invoice identifier to be settled",
        "routing": {
            "send": {
                "property": "invoice_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
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
        "description": "Total amount to take",
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
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
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
                    "Payments"
                ],
                "operation": [
                    "Send Instant Pay"
                ]
            }
        },
        "options": [
            {
                "displayName": "Email",
                "name": "email",
                "type": "string",
                "default": "",
                "description": "Destination email address",
                "routing": {
                    "send": {
                        "property": "email",
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
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Generate Instant Pay"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Invoice Id",
        "name": "invoice_id",
        "type": "number",
        "default": 0,
        "description": "Invoice identifier to be settled",
        "routing": {
            "send": {
                "property": "invoice_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Generate Instant Pay"
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
        "description": "Total amount to take",
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
                    "Payments"
                ],
                "operation": [
                    "Generate Instant Pay"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Customer",
        "name": "customer",
        "type": "string",
        "default": "",
        "description": "Provider customer reference",
        "routing": {
            "send": {
                "property": "customer",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Mandate",
        "name": "mandate",
        "type": "string",
        "default": "",
        "description": "Provider mandate reference",
        "routing": {
            "send": {
                "property": "mandate",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "description": "Friendly description of the mandate",
        "routing": {
            "send": {
                "property": "description",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment Provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
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
                    "Payments"
                ],
                "operation": [
                    "Add Mandate"
                ]
            }
        },
        "options": [
            {
                "displayName": "Collection In Days",
                "name": "collection_in_days",
                "type": "number",
                "default": 0,
                "description": "Optional custom collection in days. Cannot be set in conjunction with `collection_fixed_day`",
                "routing": {
                    "send": {
                        "property": "collection_in_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Collection Fixed Day",
                "name": "collection_fixed_day",
                "type": "number",
                "default": 0,
                "description": "Optional custom collection fixed day. Cannot be set in conjunction with `collection_in_days`",
                "routing": {
                    "send": {
                        "property": "collection_fixed_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Default",
                "name": "is_default",
                "type": "boolean",
                "default": true,
                "description": "True if the payment provider mandate is default",
                "routing": {
                    "send": {
                        "property": "is_default",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Provider",
                "name": "provider",
                "type": "options",
                "default": "goCardless",
                "options": [
                    {
                        "name": "Go Cardless",
                        "value": "goCardless"
                    },
                    {
                        "name": "Smarter Pay",
                        "value": "smarterPay"
                    },
                    {
                        "name": "Stripe",
                        "value": "stripe"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "provider",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Payment Provider Description",
                "name": "payment_provider_description",
                "type": "string",
                "default": "",
                "description": "Payment provider friendly description, if applicable",
                "routing": {
                    "send": {
                        "property": "payment_provider_description",
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
                "description": "Date/Time when the mandate was added",
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
                "displayName": "Status",
                "name": "status",
                "type": "options",
                "default": "enabled",
                "options": [
                    {
                        "name": "Enabled",
                        "value": "enabled"
                    },
                    {
                        "name": "Disabled",
                        "value": "disabled"
                    },
                    {
                        "name": "Invalid",
                        "value": "invalid"
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
                "displayName": "Last Status At",
                "name": "last_status_at",
                "type": "string",
                "default": "",
                "description": "Date/Time when the mandate was enabled or disabled",
                "routing": {
                    "send": {
                        "property": "last_status_at",
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
                    "Payments"
                ],
                "operation": [
                    "Update Mandate"
                ]
            }
        },
        "options": [
            {
                "displayName": "Collection In Days",
                "name": "collection_in_days",
                "type": "number",
                "default": 0,
                "description": "Custom collection in days. Cannot be set in conjunction with `collection_fixed_day`",
                "routing": {
                    "send": {
                        "property": "collection_in_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Collection Fixed Day",
                "name": "collection_fixed_day",
                "type": "number",
                "default": 0,
                "description": "Custom collection in days. Cannot be set in conjunction with `collection_in_days`",
                "routing": {
                    "send": {
                        "property": "collection_fixed_day",
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
        "description": "Destination email address",
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
                    "Payments"
                ],
                "operation": [
                    "Setup Mandate"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Payment Provider Settings Id",
        "name": "payment_provider_settings_id",
        "type": "number",
        "default": 0,
        "description": "Payment provider settings",
        "routing": {
            "send": {
                "property": "payment_provider_settings_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Setup Mandate"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Collection Mode",
        "name": "collection_mode",
        "type": "options",
        "default": "manual",
        "options": [
            {
                "name": "Manual",
                "value": "manual"
            },
            {
                "name": "Invoice",
                "value": "invoice"
            }
        ],
        "routing": {
            "send": {
                "property": "collection_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Settings"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Settlement Mode",
        "name": "settlement_mode",
        "type": "options",
        "default": "paidOut",
        "options": [
            {
                "name": "Paid Out",
                "value": "paidOut"
            },
            {
                "name": "Confirmed",
                "value": "confirmed"
            }
        ],
        "routing": {
            "send": {
                "property": "settlement_mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Payments"
                ],
                "operation": [
                    "Update Settings"
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
                    "Payments"
                ],
                "operation": [
                    "Update Settings"
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
                "displayName": "Provider",
                "name": "provider",
                "type": "options",
                "default": "goCardless",
                "options": [
                    {
                        "name": "Go Cardless",
                        "value": "goCardless"
                    },
                    {
                        "name": "Smarter Pay",
                        "value": "smarterPay"
                    },
                    {
                        "name": "Stripe",
                        "value": "stripe"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "provider",
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
                "description": "Optional friendly description. Useful if multiple instances of the payment provided are added and need to be differentiated",
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
                "displayName": "Collection In Days",
                "name": "collection_in_days",
                "type": "number",
                "default": 0,
                "description": "Number of days to collect the payment. Cannot be used in conjunction with `collection_fixed_day`",
                "routing": {
                    "send": {
                        "property": "collection_in_days",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Collection Fixed Day",
                "name": "collection_fixed_day",
                "type": "number",
                "default": 0,
                "description": "Fixed collection day each month. Cannot be used in conjunction with `collection_in_days`",
                "routing": {
                    "send": {
                        "property": "collection_fixed_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Force Fixed Day",
                "name": "force_fixed_day",
                "type": "boolean",
                "default": true,
                "description": "If `collection_fixed_day` is set, ensure that the fixed day is always respected, even if it means pushing the date to the following month due to minimum charge date from payment providers",
                "routing": {
                    "send": {
                        "property": "force_fixed_day",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Automatic Retry",
                "name": "automatic_retry",
                "type": "boolean",
                "default": true,
                "description": "Automatically retry failed payments",
                "routing": {
                    "send": {
                        "property": "automatic_retry",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Metadata",
                "name": "metadata",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Settings metadata, contains implementation-specific settings",
                "routing": {
                    "send": {
                        "property": "metadata",
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
                    "Payments"
                ],
                "operation": [
                    "Add Credentials"
                ]
            }
        },
        "options": [
            {
                "displayName": "Access Token",
                "name": "access_token",
                "type": "string",
                "default": "",
                "description": "Access token as dictated by the payment provider",
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
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Context organisation or reference",
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
                "displayName": "Provider",
                "name": "provider",
                "type": "options",
                "default": "goCardless",
                "options": [
                    {
                        "name": "Go Cardless",
                        "value": "goCardless"
                    },
                    {
                        "name": "Smarter Pay",
                        "value": "smarterPay"
                    },
                    {
                        "name": "Stripe",
                        "value": "stripe"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "provider",
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
                    "Payments"
                ],
                "operation": [
                    "Get Payment Breakdown"
                ]
            }
        },
        "options": [
            {
                "displayName": "Start",
                "name": "start",
                "description": "From date",
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
                "description": "To date",
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
            },
            {
                "displayName": "Customer Id",
                "name": "customer_id",
                "description": "Customer Id",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customer_id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Charge Date",
                "name": "charge_date",
                "description": "Filter by Charge date rather than created",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "charge_date",
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
                    "Payments"
                ],
                "operation": [
                    "Get Payment Report"
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
                "displayName": "Provider",
                "name": "provider",
                "description": "Filter by `provider`",
                "default": "goCardless",
                "type": "options",
                "options": [
                    {
                        "name": "Go Cardless",
                        "value": "goCardless"
                    },
                    {
                        "name": "Smarter Pay",
                        "value": "smarterPay"
                    },
                    {
                        "name": "Stripe",
                        "value": "stripe"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "provider",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Source",
                "name": "source",
                "description": "Filter by `source`",
                "default": "user",
                "type": "options",
                "options": [
                    {
                        "name": "User",
                        "value": "user"
                    },
                    {
                        "name": "Billingbooth",
                        "value": "billingbooth"
                    },
                    {
                        "name": "Provider",
                        "value": "provider"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "source",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Status",
                "name": "status",
                "description": "Filter by `status`",
                "default": "pendingCustomerApproval",
                "type": "options",
                "options": [
                    {
                        "name": "Pending Customer Approval",
                        "value": "pendingCustomerApproval"
                    },
                    {
                        "name": "Pending Submission",
                        "value": "pendingSubmission"
                    },
                    {
                        "name": "Submitted",
                        "value": "submitted"
                    },
                    {
                        "name": "Confirmed",
                        "value": "confirmed"
                    },
                    {
                        "name": "Paid Out",
                        "value": "paidOut"
                    },
                    {
                        "name": "Cancelled",
                        "value": "cancelled"
                    },
                    {
                        "name": "Customer Approval Denied",
                        "value": "customerApprovalDenied"
                    },
                    {
                        "name": "Failed",
                        "value": "failed"
                    },
                    {
                        "name": "Charged Back",
                        "value": "chargedBack"
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
                "displayName": "Created From",
                "name": "created_from",
                "description": "Filter by created `from` date",
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
                "description": "Filter by created `to` date",
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
                "displayName": "Charge From",
                "name": "charge_from",
                "description": "Filter by charge `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "charge_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Charge To",
                "name": "charge_to",
                "description": "Filter by charge `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "charge_to",
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
                    "Payments"
                ],
                "operation": [
                    "Get All Payments"
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
                "displayName": "Customer Id",
                "name": "customer_id",
                "description": "Filter by `customer_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customer_id",
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
                "displayName": "Provider",
                "name": "provider",
                "description": "Filter by `provider`",
                "default": "goCardless",
                "type": "options",
                "options": [
                    {
                        "name": "Go Cardless",
                        "value": "goCardless"
                    },
                    {
                        "name": "Smarter Pay",
                        "value": "smarterPay"
                    },
                    {
                        "name": "Stripe",
                        "value": "stripe"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "provider",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Source",
                "name": "source",
                "description": "Filter by `source`",
                "default": "user",
                "type": "options",
                "options": [
                    {
                        "name": "User",
                        "value": "user"
                    },
                    {
                        "name": "Billingbooth",
                        "value": "billingbooth"
                    },
                    {
                        "name": "Provider",
                        "value": "provider"
                    }
                ],
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "source",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Status",
                "name": "status",
                "description": "Filter by `status`",
                "default": "pendingCustomerApproval",
                "type": "options",
                "options": [
                    {
                        "name": "Pending Customer Approval",
                        "value": "pendingCustomerApproval"
                    },
                    {
                        "name": "Pending Submission",
                        "value": "pendingSubmission"
                    },
                    {
                        "name": "Submitted",
                        "value": "submitted"
                    },
                    {
                        "name": "Confirmed",
                        "value": "confirmed"
                    },
                    {
                        "name": "Paid Out",
                        "value": "paidOut"
                    },
                    {
                        "name": "Cancelled",
                        "value": "cancelled"
                    },
                    {
                        "name": "Customer Approval Denied",
                        "value": "customerApprovalDenied"
                    },
                    {
                        "name": "Failed",
                        "value": "failed"
                    },
                    {
                        "name": "Charged Back",
                        "value": "chargedBack"
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
                "displayName": "From",
                "name": "from",
                "description": "Filter by created `from` date",
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
                "description": "Filter by created `to` date",
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
                "displayName": "Charge From",
                "name": "charge_from",
                "description": "Filter by charge `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "charge_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Charge To",
                "name": "charge_to",
                "description": "Filter by charge `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "charge_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Last Updated From",
                "name": "last_updated_from",
                "description": "Filter by last updated `from` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "last_updated_from",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Last Updated To",
                "name": "last_updated_to",
                "description": "Filter by lasted updated `to` date",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "last_updated_to",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: created, -created, charge, -charge, updated, -updated",
                "default": "-created",
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
                    "Payments"
                ],
                "operation": [
                    "Get Mandates"
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
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: provider, -provider",
                "default": "provider",
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
                    "Payments"
                ],
                "operation": [
                    "Get Payment Settings"
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
                    "Payments"
                ],
                "operation": [
                    "Get Payment Customers"
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
                "description": "Starting offset",
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
                    "Payments"
                ],
                "operation": [
                    "Get Payment Mandates"
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
            }
        ]
    }
];
//# sourceMappingURL=description.js.map