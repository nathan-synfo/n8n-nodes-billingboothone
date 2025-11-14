"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsFields = void 0;
exports.ContactsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Contacts",
                "value": "Get All Contacts",
                "action": "Get all contacts",
                "description": "Retrieves all contacts.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/contact"
                    }
                }
            },
            {
                "name": "Create Contact",
                "value": "Create Contact",
                "action": "Create contact",
                "description": "Create a contact.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/contact"
                    }
                }
            },
            {
                "name": "Delete Multiple Contacts",
                "value": "Delete Multiple Contacts",
                "action": "Delete multiple contacts",
                "description": "Deletes all contacts with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/contact"
                    }
                }
            },
            {
                "name": "Get Contact",
                "value": "Get Contact",
                "action": "Get a single contact",
                "description": "Retrieves a single contact.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/contact/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Contact",
                "value": "Update Contact",
                "action": "Update contact",
                "description": "Updates an existing contact.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/contact/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Contact",
                "value": "Delete Contact",
                "action": "Delete contact",
                "description": "Deletes an existing contact.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/contact/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /contact",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Get All Contacts"
                ]
            }
        }
    },
    {
        "displayName": "POST /contact",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Create Contact"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /contact",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Delete Multiple Contacts"
                ]
            }
        }
    },
    {
        "displayName": "GET /contact/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Get Contact"
                ]
            }
        }
    },
    {
        "displayName": "PUT /contact/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Update Contact"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /contact/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Delete Contact"
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
                    "Contacts"
                ],
                "operation": [
                    "Get Contact"
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
                    "Contacts"
                ],
                "operation": [
                    "Update Contact"
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
                    "Contacts"
                ],
                "operation": [
                    "Delete Contact"
                ]
            }
        }
    },
    {
        "required": true,
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
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Create Contact"
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
                    "Contacts"
                ],
                "operation": [
                    "Create Contact"
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
                "displayName": "Is Payments",
                "name": "is_payments",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive payment notifications",
                "routing": {
                    "send": {
                        "property": "is_payments",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Digest",
                "name": "is_digest",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive daily/weekly/monthly digest emails",
                "routing": {
                    "send": {
                        "property": "is_digest",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Auto Collection",
                "name": "is_auto_collection",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive emails when auto collected CDR files or service files fail to process",
                "routing": {
                    "send": {
                        "property": "is_auto_collection",
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
                    "Contacts"
                ],
                "operation": [
                    "Delete Multiple Contacts"
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
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Contacts"
                ],
                "operation": [
                    "Update Contact"
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
                    "Contacts"
                ],
                "operation": [
                    "Update Contact"
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
                "displayName": "Is Payments",
                "name": "is_payments",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive payment notifications",
                "routing": {
                    "send": {
                        "property": "is_payments",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Digest",
                "name": "is_digest",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive daily/weekly/monthly digest emails",
                "routing": {
                    "send": {
                        "property": "is_digest",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Is Auto Collection",
                "name": "is_auto_collection",
                "type": "boolean",
                "default": true,
                "description": "Does the contact want to receive emails when auto collected CDR files or service files fail to process",
                "routing": {
                    "send": {
                        "property": "is_auto_collection",
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
                    "Contacts"
                ],
                "operation": [
                    "Get All Contacts"
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
                "description": "Search email",
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: email, -email",
                "default": "email",
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