"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataFields = void 0;
exports.MetadataFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ]
            }
        },
        "options": [
            {
                "name": "Get Global Metadata",
                "value": "Get Global Metadata",
                "action": "Get a global entry by key",
                "description": "Retrieves a global metadata entry by its key.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/metadata/global/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Delete Global Metadata",
                "value": "Delete Global Metadata",
                "action": "Delete global entry",
                "description": "Deletes an existing metadata entry.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/metadata/global/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Create Global Metadata",
                "value": "Create Global Metadata",
                "action": "Create global entry",
                "description": "Create a global metadata entry.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/metadata/global"
                    }
                }
            },
            {
                "name": "Get Local Metadata",
                "value": "Get Local Metadata",
                "action": "Get a local entry by key",
                "description": "Retrieves a local metadata entry by its key.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/metadata/local/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Delete Local Metadata",
                "value": "Delete Local Metadata",
                "action": "Delete local entry",
                "description": "Deletes an existing metadata entry.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/metadata/local/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Create Local Metadata",
                "value": "Create Local Metadata",
                "action": "Create local entry",
                "description": "Create a local metadata entry.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/metadata/local"
                    }
                }
            },
            {
                "name": "Get Customer Metadata",
                "value": "Get Customer Metadata",
                "action": "Get metadata",
                "description": "Retrieves a customer metadata entry by its key.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/metadata/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Delete Customer Metadata",
                "value": "Delete Customer Metadata",
                "action": "Delete metadata",
                "description": "Deletes an existing customer metadata entry.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/metadata/{{$parameter[\"key\"]}}"
                    }
                }
            },
            {
                "name": "Create Customer Metadata",
                "value": "Create Customer Metadata",
                "action": "Create metadata",
                "description": "Create a customer metadata entry.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/customer/{{$parameter[\"customerId\"]}}/metadata"
                    }
                }
            },
            {
                "name": "List Customer Metadata",
                "value": "List Customer Metadata",
                "action": "List metadata",
                "description": "Retrieves a list of customer metadata entries.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/metadata/customer/{{$parameter[\"customerId\"]}}/metadata"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /metadata/global/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Global Metadata"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /metadata/global/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Global Metadata"
                ]
            }
        }
    },
    {
        "displayName": "POST /metadata/global",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Create Global Metadata"
                ]
            }
        }
    },
    {
        "displayName": "GET /metadata/local/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Local Metadata"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /metadata/local/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Local Metadata"
                ]
            }
        }
    },
    {
        "displayName": "POST /metadata/local",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Create Local Metadata"
                ]
            }
        }
    },
    {
        "displayName": "GET /customer/{customerId}/metadata/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /customer/{customerId}/metadata/{key}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "POST /customer/{customerId}/metadata",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Create Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "GET /metadata/customer/{customerId}/metadata",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "List Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Global Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Global Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Local Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Local Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Unique customer reference",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Get Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Unique customer reference",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Key",
        "name": "key",
        "required": true,
        "description": "Key",
        "default": "",
        "type": "string",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Delete Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Unique customer reference",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "Create Customer Metadata"
                ]
            }
        }
    },
    {
        "displayName": "Customer Id",
        "name": "customerId",
        "required": true,
        "description": "Unique customer reference",
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Metadata"
                ],
                "operation": [
                    "List Customer Metadata"
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
                    "Metadata"
                ],
                "operation": [
                    "Create Global Metadata"
                ]
            }
        },
        "options": [
            {
                "displayName": "Key",
                "name": "key",
                "type": "string",
                "default": "",
                "description": "Key - case insensitive",
                "routing": {
                    "send": {
                        "property": "key",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Value",
                "name": "value",
                "type": "string",
                "default": "",
                "description": "Value",
                "routing": {
                    "send": {
                        "property": "value",
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
                    "Metadata"
                ],
                "operation": [
                    "Create Local Metadata"
                ]
            }
        },
        "options": [
            {
                "displayName": "Key",
                "name": "key",
                "type": "string",
                "default": "",
                "description": "Key - case insensitive",
                "routing": {
                    "send": {
                        "property": "key",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Value",
                "name": "value",
                "type": "string",
                "default": "",
                "description": "Value",
                "routing": {
                    "send": {
                        "property": "value",
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
                    "Metadata"
                ],
                "operation": [
                    "Create Customer Metadata"
                ]
            }
        },
        "options": [
            {
                "displayName": "Key",
                "name": "key",
                "type": "string",
                "default": "",
                "description": "Key - case insensitive",
                "routing": {
                    "send": {
                        "property": "key",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Value",
                "name": "value",
                "type": "string",
                "default": "",
                "description": "Value",
                "routing": {
                    "send": {
                        "property": "value",
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
                    "Metadata"
                ],
                "operation": [
                    "List Customer Metadata"
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
                "description": "Search metadata key",
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: quantity, -quantity",
                "default": "-key",
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