import { INodeProperties } from 'n8n-workflow';

/**
 * Main resource selector
 * This is the top-level dropdown that appears first in the node UI
 */
export const resourceSelector: INodeProperties = {
  "displayName": "Resource",
  "name": "resource",
  "type": "options",
  "noDataExpression": true,
  "options": [
    {
      "name": "Account",
      "value": "Account"
    },
    {
      "name": "Audit Entry",
      "value": "Audit Entry"
    },
    {
      "name": "Auto Collection Endpoints",
      "value": "Auto Collection Endpoints"
    },
    {
      "name": "Auto Collection History",
      "value": "Auto Collection History"
    },
    {
      "name": "Billing Run",
      "value": "Billing Run"
    },
    {
      "name": "Bundles",
      "value": "Bundles"
    },
    {
      "name": "Categories",
      "value": "Categories"
    },
    {
      "name": "CDR",
      "value": "CDR"
    },
    {
      "name": "CDR Analytics",
      "value": "CDR Analytics"
    },
    {
      "name": "CDR Settings",
      "value": "CDR Settings"
    },
    {
      "name": "Charge Imports",
      "value": "Charge Imports"
    },
    {
      "name": "Charges",
      "value": "Charges"
    },
    {
      "name": "CLI",
      "value": "CLI"
    },
    {
      "name": "CLI Types",
      "value": "CLI Types"
    },
    {
      "name": "Commission Plans",
      "value": "Commission Plans"
    },
    {
      "name": "Contacts",
      "value": "Contacts"
    },
    {
      "name": "Cost Centres",
      "value": "Cost Centres"
    },
    {
      "name": "Credit Notes",
      "value": "Credit Notes"
    },
    {
      "name": "Customer Access",
      "value": "Customer Access"
    },
    {
      "name": "Customer Access Banner",
      "value": "Customer Access Banner"
    },
    {
      "name": "Customer Access Payments",
      "value": "Customer Access Payments"
    },
    {
      "name": "Customer Access Setting",
      "value": "Customer Access Setting"
    },
    {
      "name": "Customer Commissions",
      "value": "Customer Commissions"
    },
    {
      "name": "Customer Groups",
      "value": "Customer Groups"
    },
    {
      "name": "Customers",
      "value": "Customers"
    },
    {
      "name": "Data Retention",
      "value": "Data Retention"
    },
    {
      "name": "Destination Groups",
      "value": "Destination Groups"
    },
    {
      "name": "Destinations",
      "value": "Destinations"
    },
    {
      "name": "Email Settings",
      "value": "Email Settings"
    },
    {
      "name": "Endpoints",
      "value": "Endpoints"
    },
    {
      "name": "Events",
      "value": "Events"
    },
    {
      "name": "General",
      "value": "General"
    },
    {
      "name": "Integration Logs",
      "value": "Integration Logs"
    },
    {
      "name": "Integrations",
      "value": "Integrations"
    },
    {
      "name": "Invoice Template",
      "value": "Invoice Template"
    },
    {
      "name": "Invoices",
      "value": "Invoices"
    },
    {
      "name": "Ledgers",
      "value": "Ledgers"
    },
    {
      "name": "Metadata",
      "value": "Metadata"
    },
    {
      "name": "Notes",
      "value": "Notes"
    },
    {
      "name": "Organisations",
      "value": "Organisations"
    },
    {
      "name": "Payments",
      "value": "Payments"
    },
    {
      "name": "Price Adjustments",
      "value": "Price Adjustments"
    },
    {
      "name": "Product",
      "value": "Product"
    },
    {
      "name": "Product Prices",
      "value": "Product Prices"
    },
    {
      "name": "Products",
      "value": "Products"
    },
    {
      "name": "Regions",
      "value": "Regions"
    },
    {
      "name": "Revenue",
      "value": "Revenue"
    },
    {
      "name": "Roles",
      "value": "Roles"
    },
    {
      "name": "Service Charges",
      "value": "Service Charges"
    },
    {
      "name": "Service Files",
      "value": "Service Files"
    },
    {
      "name": "Suppliers",
      "value": "Suppliers"
    },
    {
      "name": "Support Attachment Files",
      "value": "Support Attachment Files"
    },
    {
      "name": "Tags",
      "value": "Tags"
    },
    {
      "name": "Tariffs",
      "value": "Tariffs"
    },
    {
      "name": "Time Schedules",
      "value": "Time Schedules"
    },
    {
      "name": "Users",
      "value": "Users"
    }
  ],
  "default": ""
};
