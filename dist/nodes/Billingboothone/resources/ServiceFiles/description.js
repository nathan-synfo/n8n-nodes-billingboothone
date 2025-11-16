"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceFilesFields = void 0;
exports.ServiceFilesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Service Charges",
                "value": "Get All Service Charges",
                "action": "Get service charges",
                "description": "Retrieves all service charges related to a service file.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"serviceFileId\"]}}/charges"
                    }
                }
            },
            {
                "name": "Set Dates Service Charges",
                "value": "Set Dates Service Charges",
                "action": "Set service charge dates",
                "description": "Set all service charge dates related to a service file.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/servicefile/{{$parameter[\"serviceFileId\"]}}/charges"
                    }
                }
            },
            {
                "name": "Get All Service Charges By Product",
                "value": "Get All Service Charges By Product",
                "action": "Get product breakdown",
                "description": "Retrieves an aggregate set of charges by product.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"serviceFileId\"]}}/charges/by-product"
                    }
                }
            },
            {
                "name": "Get All Service Charges By Customer",
                "value": "Get All Service Charges By Customer",
                "action": "Get customer breakdown",
                "description": "Retrieves an aggregate set of charges by customer.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"serviceFileId\"]}}/charges/by-customer"
                    }
                }
            },
            {
                "name": "Get All Service Files",
                "value": "Get All Service Files",
                "action": "Get all service files",
                "description": "Retrieves all service files.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile"
                    }
                }
            },
            {
                "name": "Upload Service File",
                "value": "Upload Service File",
                "action": "Upload service file",
                "description": "Upload one or more service files.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/servicefile"
                    }
                }
            },
            {
                "name": "Delete Multiple Service Files",
                "value": "Delete Multiple Service Files",
                "action": "Delete service files",
                "description": "Deletes all service files with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/servicefile"
                    }
                }
            },
            {
                "name": "Download Service File",
                "value": "Download Service File",
                "action": "Download service file",
                "description": "Downloads the binary service file.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}/download"
                    }
                }
            },
            {
                "name": "Analyse Service File",
                "value": "Analyse Service File",
                "action": "Analyse Service File",
                "description": "Analyse the specified service file",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}/analyse"
                    }
                }
            },
            {
                "name": "Process Service File",
                "value": "Process Service File",
                "action": "Process Service File",
                "description": "Process the specified service file",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}/process"
                    }
                }
            },
            {
                "name": "Service File Status",
                "value": "Service File Status",
                "action": "Check service file action status",
                "description": "Gets the current status of the service file",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}/action/status"
                    }
                }
            },
            {
                "name": "Delete Service File",
                "value": "Delete Service File",
                "action": "Delete service file",
                "description": "Deletes a service file along with all associated records.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Redo Service File",
                "value": "Redo Service File",
                "action": "Redo service file",
                "description": "Returns a processed service file back to the 'ready' status",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/servicefile/{{$parameter[\"id\"]}}/redo"
                    }
                }
            },
            {
                "name": "Redo Multiple Service Files",
                "value": "Redo Multiple Service Files",
                "action": "Redo service files",
                "description": "Return all service files with an `id` matching the supplied list to 'ready' status.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/servicefile/redo"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /servicefile/{serviceFileId}/charges",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges"
                ]
            }
        }
    },
    {
        "displayName": "PUT /servicefile/{serviceFileId}/charges",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Set Dates Service Charges"
                ]
            }
        }
    },
    {
        "displayName": "GET /servicefile/{serviceFileId}/charges/by-product",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Product"
                ]
            }
        }
    },
    {
        "displayName": "GET /servicefile/{serviceFileId}/charges/by-customer",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Customer"
                ]
            }
        }
    },
    {
        "displayName": "GET /servicefile",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Files"
                ]
            }
        }
    },
    {
        "displayName": "POST /servicefile",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Upload Service File"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /servicefile",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Delete Multiple Service Files"
                ]
            }
        }
    },
    {
        "displayName": "GET /servicefile/{id}/download",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Download Service File"
                ]
            }
        }
    },
    {
        "displayName": "POST /servicefile/{id}/analyse",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Analyse Service File"
                ]
            }
        }
    },
    {
        "displayName": "POST /servicefile/{id}/process",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Process Service File"
                ]
            }
        }
    },
    {
        "displayName": "GET /servicefile/{id}/action/status",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Service File Status"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /servicefile/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Delete Service File"
                ]
            }
        }
    },
    {
        "displayName": "POST /servicefile/{id}/redo",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Redo Service File"
                ]
            }
        }
    },
    {
        "displayName": "POST /servicefile/redo",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Redo Multiple Service Files"
                ]
            }
        }
    },
    {
        "displayName": "Binary Property",
        "name": "binaryPropertyName",
        "type": "string",
        "default": "data",
        "required": true,
        "description": "Name of the binary property containing the file to upload",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Upload Service File"
                ]
            }
        }
    },
    {
        "displayName": "Supplier Id",
        "name": "supplier_id",
        "description": "Supplier",
        "default": 1,
        "type": "number",
        "routing": {
            "send": {
                "type": "query",
                "property": "supplier_id",
                "value": "={{ $value }}",
                "propertyInDotNotation": false
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Upload Service File"
                ]
            }
        }
    },
    {
        "displayName": "Is Reconciliation",
        "name": "isReconciliation",
        "description": "IsReconciliation",
        "default": true,
        "type": "boolean",
        "routing": {
            "send": {
                "type": "query",
                "property": "isReconciliation",
                "value": "={{ $value }}",
                "propertyInDotNotation": false
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Upload Service File"
                ]
            }
        }
    },
    {
        "displayName": "Service File Id",
        "name": "serviceFileId",
        "required": true,
        "description": "Service file unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges"
                ]
            }
        }
    },
    {
        "displayName": "Service File Id",
        "name": "serviceFileId",
        "required": true,
        "description": "Service file unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Set Dates Service Charges"
                ]
            }
        }
    },
    {
        "displayName": "Service File Id",
        "name": "serviceFileId",
        "required": true,
        "description": "Service file unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Product"
                ]
            }
        }
    },
    {
        "displayName": "Service File Id",
        "name": "serviceFileId",
        "required": true,
        "description": "Service file unique identifier",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Customer"
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
                    "Service Files"
                ],
                "operation": [
                    "Download Service File"
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
                    "Service Files"
                ],
                "operation": [
                    "Analyse Service File"
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
                    "Service Files"
                ],
                "operation": [
                    "Process Service File"
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
                    "Service Files"
                ],
                "operation": [
                    "Service File Status"
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
                    "Service Files"
                ],
                "operation": [
                    "Delete Service File"
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
                    "Service Files"
                ],
                "operation": [
                    "Redo Service File"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Ids",
        "name": "ids",
        "type": "json",
        "default": "[\n  null\n]",
        "description": "Service charge unique identifiers",
        "routing": {
            "send": {
                "property": "ids",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ JSON.parse($value) }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Set Dates Service Charges"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "From",
        "name": "from",
        "type": "string",
        "default": "",
        "description": "From date",
        "routing": {
            "send": {
                "property": "from",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Service Files"
                ],
                "operation": [
                    "Set Dates Service Charges"
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
                    "Service Files"
                ],
                "operation": [
                    "Set Dates Service Charges"
                ]
            }
        },
        "options": [
            {
                "displayName": "To",
                "name": "to",
                "type": "string",
                "default": "",
                "description": "To date",
                "routing": {
                    "send": {
                        "property": "to",
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
                    "Service Files"
                ],
                "operation": [
                    "Delete Multiple Service Files"
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
                    "Service Files"
                ],
                "operation": [
                    "Redo Multiple Service Files"
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
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges"
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
                "displayName": "Only Without Customers",
                "name": "only_without_customers",
                "description": "Get only charges without matching customers",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "only_without_customers",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Only Without Products",
                "name": "only_without_products",
                "description": "Get only charges without matching products",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "only_without_products",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Only Skipped Charges",
                "name": "only_skipped_charges",
                "description": "Get only charges that have been skipped",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "only_skipped_charges",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Cli",
                "name": "cli",
                "description": "Call line identifier",
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
                "displayName": "Description",
                "name": "description",
                "description": "Description",
                "default": "",
                "type": "string",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "description",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Product Id",
                "name": "productId",
                "description": "Product unique identifier",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "productId",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Customer Id",
                "name": "customerId",
                "description": "Customer unique identifier",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "customerId",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: description, -description, identifier, -identifier, customer, -customer, product, -product, from, -from, to, -to, quantity, -quantity, buyprice, -buyprice, sellprice, -sellprice",
                "default": "description",
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
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Product"
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: product, -product, buyprice, -buyprice, sellprice, -sellprice, count, -count",
                "default": "product",
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
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Charges By Customer"
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: customer, -customer, reference, -reference, buyprice, -buyprice, sellprice, -sellprice, count, -count",
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
                    "Service Files"
                ],
                "operation": [
                    "Get All Service Files"
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
                "displayName": "Id",
                "name": "id",
                "description": "Filter by `id`",
                "default": "[\n  null\n]",
                "type": "json",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "id",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Search",
                "name": "search",
                "description": "Search file name",
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
                "displayName": "Sort",
                "name": "sort",
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: filename, -filename",
                "default": "filename",
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