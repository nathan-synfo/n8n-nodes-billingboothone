import { INodeProperties } from 'n8n-workflow';

/**
 * Support Attachment Files resource description
 * Contains operation definitions and field configurations
 */
export const SupportAttachmentFilesFields: INodeProperties[] = [
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Support Attachment Files"
        ]
      }
    },
    "options": [
      {
        "name": "Get All Support Attachment Files",
        "value": "Get All Support Attachment Files",
        "action": "Get all support attachment files",
        "description": "Retrieves all support attachment files.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/accounts/support-attachments"
          }
        }
      },
      {
        "name": "Delete Multiple Support Atachment Files",
        "value": "Delete Multiple Support Atachment Files",
        "action": "Delete support attachment files",
        "description": "Deletes all support attachment files with an `id` matching the supplied list.",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/accounts/support-attachments"
          }
        }
      },
      {
        "name": "Download Support Attachment File",
        "value": "Download Support Attachment File",
        "action": "Download support attachment file",
        "description": "Downloads a binary support attachment file.",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/accounts/support-attachments/{{$parameter[\"id\"]}}/download"
          }
        }
      },
      {
        "name": "Delete Support Attachment File",
        "value": "Delete Support Attachment File",
        "action": "Delete a support attachment",
        "description": "Deletes a support attachment specified by its id",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/accounts/support-attachments/{{$parameter[\"id\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "GET /accounts/support-attachments",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Support Attachment Files"
        ],
        "operation": [
          "Get All Support Attachment Files"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /accounts/support-attachments",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Support Attachment Files"
        ],
        "operation": [
          "Delete Multiple Support Atachment Files"
        ]
      }
    }
  },
  {
    "displayName": "GET /accounts/support-attachments/{id}/download",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Support Attachment Files"
        ],
        "operation": [
          "Download Support Attachment File"
        ]
      }
    }
  },
  {
    "displayName": "DELETE /accounts/support-attachments/{id}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Support Attachment Files"
        ],
        "operation": [
          "Delete Support Attachment File"
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
          "Support Attachment Files"
        ],
        "operation": [
          "Download Support Attachment File"
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
          "Support Attachment Files"
        ],
        "operation": [
          "Delete Support Attachment File"
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
          "Support Attachment Files"
        ],
        "operation": [
          "Delete Multiple Support Atachment Files"
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
          "Support Attachment Files"
        ],
        "operation": [
          "Get All Support Attachment Files"
        ]
      }
    },
    "options": [
      {
        "displayName": "Limit",
        "name": "limit",
        "description": "Maximum number of entries to return",
        "default": 0,
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
        "description": "Sort order of results. Multiple values are possible using comma separation e.g. description,created. Possible values include: description, -description, created, -created",
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
  }
];
