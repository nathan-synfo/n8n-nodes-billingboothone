"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRetentionFields = void 0;
exports.DataRetentionFields = [
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": true,
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ]
            }
        },
        "options": [
            {
                "name": "Get Data Retention",
                "value": "Get Data Retention",
                "action": "Get data retention policy",
                "description": "Retrieves the data retention policy for `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "GET",
                        "url": "=/policy/{{$parameter[\"organisationId\"]}}/data-retention"
                    }
                }
            },
            {
                "name": "Update Data Retention",
                "value": "Update Data Retention",
                "action": "Update data retention policy",
                "description": "Updates the data retention policy for the specified `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "PUT",
                        "url": "=/policy/{{$parameter[\"organisationId\"]}}/data-retention"
                    }
                }
            },
            {
                "name": "Delete Data Retention",
                "value": "Delete Data Retention",
                "action": "Clear data retention policy",
                "description": "Clears the data retention policy back to default for `organisation_id`.",
                "routing": {
                    "request": {
                        "method": "DELETE",
                        "url": "=/policy/{{$parameter[\"organisationId\"]}}/data-retention"
                    }
                }
            }
        ],
        "default": ""
    },
    {
        "displayName": "GET /policy/{organisationId}/data-retention",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Get Data Retention"
                ]
            }
        }
    },
    {
        "displayName": "PUT /policy/{organisationId}/data-retention",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Update Data Retention"
                ]
            }
        }
    },
    {
        "displayName": "DELETE /policy/{organisationId}/data-retention",
        "name": "operation",
        "type": "notice",
        "typeOptions": {
            "theme": "info"
        },
        "default": "",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Delete Data Retention"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Get Data Retention"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Update Data Retention"
                ]
            }
        }
    },
    {
        "displayName": "Organisation Id",
        "name": "organisationId",
        "required": true,
        "description": "Unique identifier",
        "default": 1,
        "type": "number",
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Delete Data Retention"
                ]
            }
        }
    },
    {
        "required": true,
        "displayName": "Retention In Days",
        "name": "retention_in_days",
        "type": "number",
        "default": 0,
        "description": "Number of days before policy options kick in",
        "routing": {
            "send": {
                "property": "retention_in_days",
                "propertyInDotNotation": false,
                "type": "body",
                "value": "={{ $value }}"
            }
        },
        "displayOptions": {
            "show": {
                "resource": [
                    "Data Retention"
                ],
                "operation": [
                    "Update Data Retention"
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
                    "Data Retention"
                ],
                "operation": [
                    "Update Data Retention"
                ]
            }
        },
        "options": [
            {
                "displayName": "Customer Anonymise Enabled",
                "name": "customer_anonymise_enabled",
                "type": "boolean",
                "default": true,
                "description": "Anonymise personal customer information and remove associated invoices",
                "routing": {
                    "send": {
                        "property": "customer_anonymise_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            },
            {
                "displayName": "Cdr Removal Enabled",
                "name": "cdr_removal_enabled",
                "type": "boolean",
                "default": true,
                "description": "Remove CDR records",
                "routing": {
                    "send": {
                        "property": "cdr_removal_enabled",
                        "propertyInDotNotation": false,
                        "type": "body",
                        "value": "={{ $value }}"
                    }
                }
            }
        ]
    }
];
//# sourceMappingURL=description.js.map