"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundlesFields = void 0;
exports.BundlesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Bundles",
                "value": "Get All Bundles",
                "action": "Get all bundles",
                "description": "Retrieves all bundles.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle"
                    }
                }
            },
            {
                "name": "Create Bundle",
                "value": "Create Bundle",
                "action": "Create bundle",
                "description": "Create a bundle.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/bundle"
                    }
                }
            },
            {
                "name": "Delete Multiple Bundles",
                "value": "Delete Multiple Bundles",
                "action": "Delete multiple bundles",
                "description": "Deletes all bundles with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/bundle"
                    }
                }
            },
            {
                "name": "Get Bundle",
                "value": "Get Bundle",
                "action": "Get a single bundle",
                "description": "Retrieves a single bundle.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Bundle",
                "value": "Update Bundle",
                "action": "Update bundle",
                "description": "Updates an existing bundle.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Bundle",
                "value": "Delete Bundle",
                "action": "Delete bundle",
                "description": "Deletes an existing bundle.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get All Bundle Allowances",
                "value": "Get All Bundle Allowances",
                "action": "Get all bundle allowances",
                "description": "Retrieves all bundle allowances for the specified bundle.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance"
                    }
                }
            },
            {
                "name": "Create Bundle Allowance",
                "value": "Create Bundle Allowance",
                "action": "Create bundle allowance",
                "description": "Create a bundle allowance.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance"
                    }
                }
            },
            {
                "name": "Delete Multiple Bundle Allowances",
                "value": "Delete Multiple Bundle Allowances",
                "action": "Delete multiple bundle allowances",
                "description": "Deletes all bundle allowances with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance"
                    }
                }
            },
            {
                "name": "Get Bundle Allowance",
                "value": "Get Bundle Allowance",
                "action": "Get a single bundle allowance",
                "description": "Retrieves a single bundle allowance.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Bundle Allowance",
                "value": "Update Bundle Allowance",
                "action": "Update bundle allowance",
                "description": "Updates an existing bundle allowance.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Bundle Allowance",
                "value": "Delete Bundle Allowance",
                "action": "Delete bundle allowance",
                "description": "Deletes an existing bundle allowance.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/bundle/{{$parameter[\"bundleId\"]}}/allowance/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Bundle Usage",
                "value": "Get Bundle Usage",
                "action": "Get global bundle usage",
                "description": "Gets a description of all the bundle usage destinations across an account",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle/analytics/usage"
                    }
                }
            },
            {
                "name": "Get Bundle Usage By Customer",
                "value": "Get Bundle Usage By Customer",
                "action": "Get customer bundle usage",
                "description": "Gets a description of all the bundle usage destinations for the specified customer",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/bundle/analytics/{{$parameter[\"customerId\"]}}/usage"
                    }
                }
            },
            {
                "name": "Get All Customer Bundles",
                "value": "Get All Customer Bundles",
                "action": "Get all customer bundles",
                "description": "Retrieves all customer bundles for the specified customer.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle"
                    }
                }
            },
            {
                "name": "Create Customer Bundle",
                "value": "Create Customer Bundle",
                "action": "Create customer bundle",
                "description": "Create a customer bundle.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle"
                    }
                }
            },
            {
                "name": "Delete Multiple Customer Bundles",
                "value": "Delete Multiple Customer Bundles",
                "action": "Delete multiple customer bundles",
                "description": "Deletes all customer bundles with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle"
                    }
                }
            },
            {
                "name": "Get Customer Bundle",
                "value": "Get Customer Bundle",
                "action": "Get a single customer bundle",
                "description": "Retrieves a single customer bundle.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Customer Bundle",
                "value": "Update Customer Bundle",
                "action": "Update customer bundle",
                "description": "Updates an existing customer bundle.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Customer Bundle",
                "value": "Delete Customer Bundle",
                "action": "Delete customer bundle",
                "description": "Deletes an existing customer bundle.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/bundle/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get All Bundles"
                ]
            }
        }
    },
    {
        "displayName": "POST /bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Bundles"
                ]
            }
        }
    },
    {
        "displayName": "GET /bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle"
                ]
            }
        }
    },
    {
        "displayName": "PUT /bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Bundle"
                ]
            }
        }
    },
    {
        "displayName": "GET /bundle/{bundleId}/allowance",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get All Bundle Allowances"
                ]
            }
        }
    },
    {
        "displayName": "POST /bundle/{bundleId}/allowance",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /bundle/{bundleId}/allowance",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Bundle Allowances"
                ]
            }
        }
    },
    {
        "displayName": "GET /bundle/{bundleId}/allowance/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "PUT /bundle/{bundleId}/allowance/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /bundle/{bundleId}/allowance/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "GET /bundle/analytics/usage",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Usage"
                ]
            }
        }
    },
    {
        "displayName": "GET /bundle/analytics/{customerId}/usage",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Usage By Customer"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get All Customer Bundles"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{customerId}/bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/bundle",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Customer Bundles"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Customer Bundle"
                ]
            }
        }
    },
    {
        "displayName": "PUT /customer/{customerId}/bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/bundle/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Bundle"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "description": "Bundle unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get All Bundle Allowances"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "description": "Bundle unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Bundle Allowances"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "description": "Bundle unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Allowance"
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
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "description": "Bundle unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "Bundle Id",
        "name": "bundleId",
        "required": true,
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Delete Bundle Allowance"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Customer identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Usage By Customer"
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
                    "Bundles"
                ],
                "operation": [
                    "Get All Customer Bundles"
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
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Customer Bundles"
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
                    "Bundles"
                ],
                "operation": [
                    "Get Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Get Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Customer Bundle"
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
        "description": "Bundle name",
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
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Mode",
        "name": "mode",
        "type": "options",
        "default": "allowance",
        "options": [
            {
                "name": "Allowance",
                "value": "allowance"
            },
            {
                "name": "Spend",
                "value": "spend"
            }
        ],
        "routing": {
            "send": {
                "property": "mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle"
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
                "displayName": "Inclusive Spend",
                "name": "inclusive_spend",
                "type": "number",
                "default": 0,
                "description": "When `mode` is `Spend`, the inclusive spend amount",
                "routing": {
                    "send": {
                        "property": "inclusive_spend",
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Bundles"
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
        "description": "Bundle name",
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Mode",
        "name": "mode",
        "type": "options",
        "default": "allowance",
        "options": [
            {
                "name": "Allowance",
                "value": "allowance"
            },
            {
                "name": "Spend",
                "value": "spend"
            }
        ],
        "routing": {
            "send": {
                "property": "mode",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle"
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
                "displayName": "Inclusive Spend",
                "name": "inclusive_spend",
                "type": "number",
                "default": 0,
                "description": "When `mode` is `Spend`, the inclusive spend amount",
                "routing": {
                    "send": {
                        "property": "inclusive_spend",
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
        "displayName": "Quantity",
        "name": "quantity",
        "type": "number",
        "default": 0,
        "description": "The quantity of units the allowance should include, e.g. 2000 minutes.",
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
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle Allowance"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Unit Type",
        "name": "unit_type",
        "type": "options",
        "default": "voice",
        "options": [
            {
                "name": "Voice",
                "value": "voice"
            },
            {
                "name": "Data",
                "value": "data"
            },
            {
                "name": "Sms",
                "value": "sms"
            }
        ],
        "routing": {
            "send": {
                "property": "unit_type",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle Allowance"
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
                    "Bundles"
                ],
                "operation": [
                    "Create Bundle Allowance"
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
                "displayName": "Max Single Quantity",
                "name": "max_single_quantity",
                "type": "number",
                "default": 0,
                "description": "If the `unit_type` is `voice`, then you can restrict the maximum quantity of as single call, e.g. maximum of 60 minutes",
                "routing": {
                    "send": {
                        "property": "max_single_quantity",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Limit Type",
                "name": "limit_type",
                "type": "options",
                "default": "upToLimit",
                "options": [
                    {
                        "name": "Up To Limit",
                        "value": "upToLimit"
                    },
                    {
                        "name": "Exceed Limit Ignored",
                        "value": "exceedLimitIgnored"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "limit_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Peak",
                "name": "apply_peak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to peak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_peak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Offpeak",
                "name": "apply_offpeak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to offpeak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_offpeak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Weekend Peak",
                "name": "apply_weekend_peak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to weekend peak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_weekend_peak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Weekend Offpeak",
                "name": "apply_weekend_offpeak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to weekend offpeak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_weekend_offpeak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Ids",
                "name": "destination_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Destinations included as part of this allowance. Only destinations or groups are allowed, there cannot be a mixture of the two",
                "routing": {
                    "send": {
                        "property": "destination_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Names",
                "name": "destination_names",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "A list of associated destinations",
                "routing": {
                    "send": {
                        "property": "destination_names",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Ids",
                "name": "destination_group_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Destination groups included as part of this allowance. Only destinations or groups are allowed, there cannot be a mixture of the two",
                "routing": {
                    "send": {
                        "property": "destination_group_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Names",
                "name": "destination_group_names",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "A list of associated destination groups",
                "routing": {
                    "send": {
                        "property": "destination_group_names",
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Bundle Allowances"
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
        "displayName": "Quantity",
        "name": "quantity",
        "type": "number",
        "default": 0,
        "description": "The quantity of units the allowance should include, e.g. 2000 minutes.",
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Unit Type",
        "name": "unit_type",
        "type": "options",
        "default": "voice",
        "options": [
            {
                "name": "Voice",
                "value": "voice"
            },
            {
                "name": "Data",
                "value": "data"
            },
            {
                "name": "Sms",
                "value": "sms"
            }
        ],
        "routing": {
            "send": {
                "property": "unit_type",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Bundle Allowance"
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
                "displayName": "Max Single Quantity",
                "name": "max_single_quantity",
                "type": "number",
                "default": 0,
                "description": "If the `unit_type` is `voice`, then you can restrict the maximum quantity of as single call, e.g. maximum of 60 minutes",
                "routing": {
                    "send": {
                        "property": "max_single_quantity",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Limit Type",
                "name": "limit_type",
                "type": "options",
                "default": "upToLimit",
                "options": [
                    {
                        "name": "Up To Limit",
                        "value": "upToLimit"
                    },
                    {
                        "name": "Exceed Limit Ignored",
                        "value": "exceedLimitIgnored"
                    }
                ],
                "routing": {
                    "send": {
                        "property": "limit_type",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Peak",
                "name": "apply_peak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to peak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_peak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Offpeak",
                "name": "apply_offpeak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to offpeak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_offpeak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Weekend Peak",
                "name": "apply_weekend_peak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to weekend peak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_weekend_peak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Apply Weekend Offpeak",
                "name": "apply_weekend_offpeak",
                "type": "boolean",
                "default": true,
                "description": "Apply the bundle allowance to weekend offpeak time periods only",
                "routing": {
                    "send": {
                        "property": "apply_weekend_offpeak",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Destination Ids",
                "name": "destination_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Destinations included as part of this allowance. Only destinations or groups are allowed, there cannot be a mixture of the two",
                "routing": {
                    "send": {
                        "property": "destination_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Names",
                "name": "destination_names",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "A list of associated destinations",
                "routing": {
                    "send": {
                        "property": "destination_names",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Ids",
                "name": "destination_group_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Destination groups included as part of this allowance. Only destinations or groups are allowed, there cannot be a mixture of the two",
                "routing": {
                    "send": {
                        "property": "destination_group_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Destination Group Names",
                "name": "destination_group_names",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "A list of associated destination groups",
                "routing": {
                    "send": {
                        "property": "destination_group_names",
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
        "description": "Start date of the bundle",
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
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
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
        "description": "The quantity of bundles",
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
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Bundle Id",
        "name": "bundle_id",
        "type": "number",
        "default": 0,
        "description": "The bundle being applied to the customer",
        "routing": {
            "send": {
                "property": "bundle_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Create Customer Bundle"
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
                "displayName": "End At",
                "name": "end_at",
                "type": "string",
                "default": "",
                "description": "Optional termination date of the bundle",
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
                "displayName": "Bundle Name",
                "name": "bundle_name",
                "type": "string",
                "default": "",
                "description": "The bundle name",
                "routing": {
                    "send": {
                        "property": "bundle_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Ids",
                "name": "cli_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Optional set of CLIs that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cli_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Cli Identifiers",
                "name": "cli_identifiers",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Optional set of CLIs that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cli_identifiers",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Optional cost centre that the bundle covers",
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
                "displayName": "Cost Centre Name",
                "name": "cost_centre_name",
                "type": "string",
                "default": "",
                "description": "Optional cost centre that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cost_centre_name",
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
                    "Bundles"
                ],
                "operation": [
                    "Delete Multiple Customer Bundles"
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
        "description": "Start date of the bundle",
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
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
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
        "description": "The quantity of bundles",
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
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Bundle Id",
        "name": "bundle_id",
        "type": "number",
        "default": 0,
        "description": "The bundle being applied to the customer",
        "routing": {
            "send": {
                "property": "bundle_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
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
                    "Bundles"
                ],
                "operation": [
                    "Update Customer Bundle"
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
                "displayName": "End At",
                "name": "end_at",
                "type": "string",
                "default": "",
                "description": "Optional termination date of the bundle",
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
                "displayName": "Bundle Name",
                "name": "bundle_name",
                "type": "string",
                "default": "",
                "description": "The bundle name",
                "routing": {
                    "send": {
                        "property": "bundle_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cli Ids",
                "name": "cli_ids",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Optional set of CLIs that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cli_ids",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Cli Identifiers",
                "name": "cli_identifiers",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "Optional set of CLIs that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cli_identifiers",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "type": "number",
                "default": 0,
                "description": "Optional cost centre that the bundle covers",
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
                "displayName": "Cost Centre Name",
                "name": "cost_centre_name",
                "type": "string",
                "default": "",
                "description": "Optional cost centre that the bundle covers",
                "routing": {
                    "send": {
                        "property": "cost_centre_name",
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
                    "Bundles"
                ],
                "operation": [
                    "Get All Bundles"
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
                    "Bundles"
                ],
                "operation": [
                    "Get All Bundle Allowances"
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: quantity, -quantity",
                "default": "-quantity",
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
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Usage"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "From `date_time`",
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
                "description": "To `date_time`",
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
                    "Bundles"
                ],
                "operation": [
                    "Get Bundle Usage By Customer"
                ]
            }
        },
        "options": [
            {
                "displayName": "From",
                "name": "from",
                "description": "From `date_time`",
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
                "description": "To `date_time`",
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
                    "Bundles"
                ],
                "operation": [
                    "Get All Customer Bundles"
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
                "displayName": "Bundle Ids",
                "name": "bundleIds",
                "description": "Filter by bundles",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "bundleIds",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: quantity, -quantity",
                "default": "-quantity",
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