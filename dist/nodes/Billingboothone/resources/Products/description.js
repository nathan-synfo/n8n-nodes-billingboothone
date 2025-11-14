"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsFields = void 0;
exports.ProductsFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ]
            }
        },
        "options": [
            {
                "name": "Get All Products",
                "value": "Get All Products",
                "action": "Get all products",
                "description": "Retrieves all products.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/product"
                    }
                }
            },
            {
                "name": "Create Product",
                "value": "Create Product",
                "action": "Create product",
                "description": "Create a product.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/product"
                    }
                }
            },
            {
                "name": "Delete Multiple Products",
                "value": "Delete Multiple Products",
                "action": "Delete multiple products",
                "description": "Deletes all products with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/product"
                    }
                }
            },
            {
                "name": "Get Product By Id",
                "value": "Get Product By Id",
                "action": "Get a single product",
                "description": "Retrieves a single product.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/product/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Update Product",
                "value": "Update Product",
                "action": "Update product",
                "description": "Updates an existing product.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/product/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Product",
                "value": "Delete Product",
                "action": "Delete product",
                "description": "Deletes an existing product.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/product/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Get Product",
                "value": "Get Product",
                "action": "Resolve customer pricing",
                "description": "Retrieves the specified product with the resolved customer pricing",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/product/{{$parameter[\"id\"]}}/resolve/{{$parameter[\"customerId\"]}}"
                    }
                }
            },
            {
                "name": "Bulk Create Product",
                "value": "Bulk Create Product",
                "action": "Bulk create products",
                "description": "Create multiple products.",
                "routing": {
                    "request": {
                        "method": "POST",
                        "url": "=/product/bulk"
                    }
                }
            },
            {
                "name": "Get All Products With Scheduled Pricing Changes",
                "value": "Get All Products With Scheduled Pricing Changes",
                "action": "Get all products with scheduled changes to pricing",
                "description": "Retrieves all products with scheduled to pricing.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/product/pricing/changes"
                    }
                }
            },
            {
                "name": "Delete Product Pricing",
                "value": "Delete Product Pricing",
                "action": "Delete scheduled price change for a product",
                "description": "Deletes an upcoming change to the price of a product.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/product/pricing/{{$parameter[\"id\"]}}"
                    }
                }
            },
            {
                "name": "Delete Multiple Product Pricing",
                "value": "Delete Multiple Product Pricing",
                "action": "Delete multiple scheduled price changes",
                "description": "Deletes all scheduled price changes with an `id` matching the supplied list.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/product/pricing"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /product",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Get All Products"
                ]
            }
        }
    },
    {
        "displayName": "POST /product",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Create Product"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /product",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Multiple Products"
                ]
            }
        }
    },
    {
        "displayName": "GET /product/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Get Product By Id"
                ]
            }
        }
    },
    {
        "displayName": "PUT /product/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Update Product"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /product/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Product"
                ]
            }
        }
    },
    {
        "displayName": "GET /product/{id}/resolve/{customerId}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Get Product"
                ]
            }
        }
    },
    {
        "displayName": "POST /product/bulk",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Bulk Create Product"
                ]
            }
        }
    },
    {
        "displayName": "GET /product/pricing/changes",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Get All Products With Scheduled Pricing Changes"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /product/pricing/{id}",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Product Pricing"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /product/pricing",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Multiple Product Pricing"
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
                    "Products"
                ],
                "operation": [
                    "Get Product By Id"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Update Product"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Product"
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
                    "Products"
                ],
                "operation": [
                    "Get Product"
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
                    "Products"
                ],
                "operation": [
                    "Get Product"
                ]
            }
        }
    },
    {
        "displayName": "Id",
        "name": "id",
        "required": true,
        "default": 0,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Delete Product Pricing"
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
        "description": "Description of the product/service",
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
                    "Products"
                ],
                "operation": [
                    "Create Product"
                ]
            }
        }
    },
    {
        "required": true,
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
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Create Product"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Sell Price",
        "name": "sell_price",
        "type": "number",
        "default": 0,
        "description": "Sell price per unit",
        "routing": {
            "send": {
                "property": "sell_price",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Create Product"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Category Id",
        "name": "category_id",
        "type": "number",
        "default": 0,
        "description": "Associated category",
        "routing": {
            "send": {
                "property": "category_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Create Product"
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
                    "Products"
                ],
                "operation": [
                    "Create Product"
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
                "displayName": "Details",
                "name": "details",
                "type": "string",
                "default": "",
                "description": "Additional details to appear on invoice",
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
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Internal reference such as SKU",
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
                "displayName": "Metadata",
                "name": "metadata",
                "type": "string",
                "default": "",
                "description": "Optional metadata. This field can store any additional information on the product utilised by third-parties, and is designed for API integration",
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
                "description": "Accounting/Nominal code used when exporting to third party accountancy packages",
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
                "description": "Sort priority",
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
                "displayName": "Price Inclusive Tax",
                "name": "price_inclusive_tax",
                "type": "boolean",
                "default": true,
                "description": "If true, sell/buy prices supplied are treated as being inclusive of tax",
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
                "displayName": "Buy Price",
                "name": "buy_price",
                "type": "number",
                "default": 0,
                "description": "Cost/Buy price per unit",
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
                "description": "Custom tax rate, if applicable",
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
                "displayName": "Service Codes",
                "name": "service_codes",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of possible service codes used for matching this product against service file charges",
                "routing": {
                    "send": {
                        "property": "service_codes",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Is Service Code Regex",
                "name": "is_service_code_regex",
                "type": "boolean",
                "default": true,
                "description": "Should the service codes be treated as a regular expression?",
                "routing": {
                    "send": {
                        "property": "is_service_code_regex",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Aggregate Service Charges",
                "name": "aggregate_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Aggregate multiple service charges into a single line",
                "routing": {
                    "send": {
                        "property": "aggregate_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing Always",
                "name": "skip_processing_always",
                "type": "boolean",
                "default": true,
                "description": "Always skip processing service charges matching this product",
                "routing": {
                    "send": {
                        "property": "skip_processing_always",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Sell Price Is Zero",
                "name": "skip_processing_if_sell_price_is_zero",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if sell price is zero",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_sell_price_is_zero",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Buy Price Is Zero",
                "name": "skip_processing_if_buy_price_is_zero",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if buy price is zero",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_buy_price_is_zero",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Credit",
                "name": "skip_processing_if_credit",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if the buy price or quantity are negative",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Disallow Credit",
                "name": "disallow_credit",
                "type": "boolean",
                "default": true,
                "description": "If a service charge has a negative cost or quantity, this will be ignored and be treated as a regular charge instead of a refund",
                "routing": {
                    "send": {
                        "property": "disallow_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Service File Sell Price",
                "name": "use_service_file_sell_price",
                "type": "boolean",
                "default": true,
                "description": "Utilise the sell price found on the service file rather than product pricing",
                "routing": {
                    "send": {
                        "property": "use_service_file_sell_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Service File Description",
                "name": "use_service_file_description",
                "type": "boolean",
                "default": true,
                "description": "Utilise the description found on the service file rather than product name",
                "routing": {
                    "send": {
                        "property": "use_service_file_description",
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
                "displayName": "Sell Price By Tariff",
                "name": "sell_price_by_tariff",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Custom sell prices by tariff",
                "routing": {
                    "send": {
                        "property": "sell_price_by_tariff",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Sell Price By Customer",
                "name": "sell_price_by_customer",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Custom sell prices by customer",
                "routing": {
                    "send": {
                        "property": "sell_price_by_customer",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "type": "number",
                "default": 0,
                "description": "Associated supplier",
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
                "displayName": "Supplier Name",
                "name": "supplier_name",
                "type": "string",
                "default": "",
                "description": "Associated supplier name",
                "routing": {
                    "send": {
                        "property": "supplier_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Category Name",
                "name": "category_name",
                "type": "string",
                "default": "",
                "description": "Associated category name",
                "routing": {
                    "send": {
                        "property": "category_name",
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
                    "Products"
                ],
                "operation": [
                    "Delete Multiple Products"
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
        "description": "Description of the product/service",
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
                    "Products"
                ],
                "operation": [
                    "Update Product"
                ]
            }
        }
    },
    {
        "required": true,
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
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Update Product"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Sell Price",
        "name": "sell_price",
        "type": "number",
        "default": 0,
        "description": "Sell price per unit",
        "routing": {
            "send": {
                "property": "sell_price",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Update Product"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Category Id",
        "name": "category_id",
        "type": "number",
        "default": 0,
        "description": "Associated category",
        "routing": {
            "send": {
                "property": "category_id",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Products"
                ],
                "operation": [
                    "Update Product"
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
                    "Products"
                ],
                "operation": [
                    "Update Product"
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
                "displayName": "Details",
                "name": "details",
                "type": "string",
                "default": "",
                "description": "Additional details to appear on invoice",
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
                "displayName": "Reference",
                "name": "reference",
                "type": "string",
                "default": "",
                "description": "Internal reference such as SKU",
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
                "displayName": "Metadata",
                "name": "metadata",
                "type": "string",
                "default": "",
                "description": "Optional metadata. This field can store any additional information on the product utilised by third-parties, and is designed for API integration",
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
                "description": "Accounting/Nominal code used when exporting to third party accountancy packages",
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
                "description": "Sort priority",
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
                "displayName": "Price Inclusive Tax",
                "name": "price_inclusive_tax",
                "type": "boolean",
                "default": true,
                "description": "If true, sell/buy prices supplied are treated as being inclusive of tax",
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
                "displayName": "Buy Price",
                "name": "buy_price",
                "type": "number",
                "default": 0,
                "description": "Cost/Buy price per unit",
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
                "description": "Custom tax rate, if applicable",
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
                "displayName": "Service Codes",
                "name": "service_codes",
                "type": "json",
                "default": "[\n  null\n]",
                "description": "List of possible service codes used for matching this product against service file charges",
                "routing": {
                    "send": {
                        "property": "service_codes",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Is Service Code Regex",
                "name": "is_service_code_regex",
                "type": "boolean",
                "default": true,
                "description": "Should the service codes be treated as a regular expression?",
                "routing": {
                    "send": {
                        "property": "is_service_code_regex",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Aggregate Service Charges",
                "name": "aggregate_service_charges",
                "type": "boolean",
                "default": true,
                "description": "Aggregate multiple service charges into a single line",
                "routing": {
                    "send": {
                        "property": "aggregate_service_charges",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing Always",
                "name": "skip_processing_always",
                "type": "boolean",
                "default": true,
                "description": "Always skip processing service charges matching this product",
                "routing": {
                    "send": {
                        "property": "skip_processing_always",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Sell Price Is Zero",
                "name": "skip_processing_if_sell_price_is_zero",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if sell price is zero",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_sell_price_is_zero",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Buy Price Is Zero",
                "name": "skip_processing_if_buy_price_is_zero",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if buy price is zero",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_buy_price_is_zero",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Skip Processing If Credit",
                "name": "skip_processing_if_credit",
                "type": "boolean",
                "default": true,
                "description": "Skip processing service charge if the buy price or quantity are negative",
                "routing": {
                    "send": {
                        "property": "skip_processing_if_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Disallow Credit",
                "name": "disallow_credit",
                "type": "boolean",
                "default": true,
                "description": "If a service charge has a negative cost or quantity, this will be ignored and be treated as a regular charge instead of a refund",
                "routing": {
                    "send": {
                        "property": "disallow_credit",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Service File Sell Price",
                "name": "use_service_file_sell_price",
                "type": "boolean",
                "default": true,
                "description": "Utilise the sell price found on the service file rather than product pricing",
                "routing": {
                    "send": {
                        "property": "use_service_file_sell_price",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Use Service File Description",
                "name": "use_service_file_description",
                "type": "boolean",
                "default": true,
                "description": "Utilise the description found on the service file rather than product name",
                "routing": {
                    "send": {
                        "property": "use_service_file_description",
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
                "displayName": "Sell Price By Tariff",
                "name": "sell_price_by_tariff",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Custom sell prices by tariff",
                "routing": {
                    "send": {
                        "property": "sell_price_by_tariff",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Sell Price By Customer",
                "name": "sell_price_by_customer",
                "type": "json",
                "default": "[\n  {}\n]",
                "description": "Custom sell prices by customer",
                "routing": {
                    "send": {
                        "property": "sell_price_by_customer",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ JSON.parse($value) }}"
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplier_id",
                "type": "number",
                "default": 0,
                "description": "Associated supplier",
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
                "displayName": "Supplier Name",
                "name": "supplier_name",
                "type": "string",
                "default": "",
                "description": "Associated supplier name",
                "routing": {
                    "send": {
                        "property": "supplier_name",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Category Name",
                "name": "category_name",
                "type": "string",
                "default": "",
                "description": "Associated category name",
                "routing": {
                    "send": {
                        "property": "category_name",
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
                    "Products"
                ],
                "operation": [
                    "Bulk Create Product"
                ]
            }
        },
        "options": [
            {
                "displayName": "Products",
                "name": "products",
                "type": "json",
                "default": "[\n  {\n    \"service_codes\": [\n      null\n    ],\n    \"sell_price_by_tariff\": [\n      {}\n    ],\n    \"sell_price_by_customer\": [\n      {}\n    ]\n  }\n]",
                "description": "List of products",
                "routing": {
                    "send": {
                        "property": "products",
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
                    "Products"
                ],
                "operation": [
                    "Delete Multiple Product Pricing"
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
                    "Products"
                ],
                "operation": [
                    "Get All Products"
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
                "name": "categoryId",
                "description": "Filter by `category_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "categoryId",
                        "value": "={{ $value }}",
                        "propertyInDotNotation": false
                    }
                }
            },
            {
                "displayName": "Supplier Id",
                "name": "supplierId",
                "description": "Filter by `supplier_id`",
                "default": 0,
                "type": "number",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "supplierId",
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
                "displayName": "Search",
                "name": "search",
                "description": "Search name or reference",
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
                    "Products"
                ],
                "operation": [
                    "Get Product"
                ]
            }
        },
        "options": [
            {
                "displayName": "Cost Centre Id",
                "name": "cost_centre_id",
                "description": "Cost Centre identifier, if applicable",
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
                    "Products"
                ],
                "operation": [
                    "Get All Products With Scheduled Pricing Changes"
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
                "displayName": "Upcoming",
                "name": "upcoming",
                "description": "Filter by `upcoming`",
                "default": false,
                "type": "boolean",
                "routing": {
                    "send": {
                        "type": "query",
                        "property": "upcoming",
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
                "description": "Sort order of results. Multiple values are possible using comma separation e.g. name,reference. Possible values include: product_name, -product_name",
                "default": "product_name",
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