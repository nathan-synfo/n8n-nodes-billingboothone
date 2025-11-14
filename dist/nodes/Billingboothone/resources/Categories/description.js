"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesFields = void 0;
exports.CategoriesFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Categories",
                "value": "Get All Categories",
                "action": "Get all categories",
                "description": "Retrieves all categories.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/category"
                    }
                }
            },
            {
                "name": "Create Category",
                "value": "Create Category",
                "action": "Create category",
                "description": "Create a category.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/category"
                    }
                }
            },
            {
                "name": "Delete Multiple Categories",
                "value": "Delete Multiple Categories",
                "action": "Delete multiple categories",
                "description": "Deletes all categories with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/category"
                    }
                }
            },
            {
                "name": "Get Category",
                "value": "Get Category",
                "action": "Get a single category",
                "description": "Retrieves a single category.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/category/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Category",
                "value": "Update Category",
                "action": "Update category",
                "description": "Updates an existing category.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/category/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Category",
                "value": "Delete Category",
                "action": "Delete category",
                "description": "Deletes an existing category.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/category/{{$parameter[\"id\"]}}"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /category",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Get All Categories"
                ]
            }
        }
    },
    {
        "displayName": "POST /category",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Create Category"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /category",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Delete Multiple Categories"
                ]
            }
        }
    },
    {
        "displayName": "GET /category/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Get Category"
                ]
            }
        }
    },
    {
        "displayName": "PUT /category/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Update Category"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /category/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Categories"
                ],
                "operation": [
                    "Delete Category"
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
                    "Categories"
                ],
                "operation": [
                    "Get Category"
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
                    "Categories"
                ],
                "operation": [
                    "Update Category"
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
                    "Categories"
                ],
                "operation": [
                    "Delete Category"
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
        "description": "Category name",
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
                    "Categories"
                ],
                "operation": [
                    "Create Category"
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
                    "Categories"
                ],
                "operation": [
                    "Create Category"
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
                "displayName": "Sort Priority",
                "name": "sort_priority",
                "type": "number",
                "default": 0,
                "description": "Sort priority, used for selecting display order of categories in invoices. Zero is lowest value",
                "routing": {
                    "send": {
                        "property": "sort_priority",
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
                    "Categories"
                ],
                "operation": [
                    "Delete Multiple Categories"
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
        "description": "Category name",
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
                    "Categories"
                ],
                "operation": [
                    "Update Category"
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
                    "Categories"
                ],
                "operation": [
                    "Update Category"
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
                "displayName": "Sort Priority",
                "name": "sort_priority",
                "type": "number",
                "default": 0,
                "description": "Sort priority, used for selecting display order of categories in invoices. Zero is lowest value",
                "routing": {
                    "send": {
                        "property": "sort_priority",
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
                    "Categories"
                ],
                "operation": [
                    "Get All Categories"
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: name, -name, priority, -priority",
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