# n8n-nodes-billingboothone

This is an n8n community node for [Billing Booth One](https://www.billingbooth.com/).

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Nodes (Recommended)

1. Go to **Settings > Community Nodes** in your n8n instance
2. Select **Install**
3. Enter `n8n-nodes-billingboothone` in the **Enter npm package name** field
4. Click **Install**

### Manual Installation

To manually install the node in an n8n instance:

```bash
npm install n8n-nodes-billingboothone
```

## Operations

This node provides access to all Billing Booth One API resources.

### Customer

- **Customers** - Manage customer records and relationships
- **Notes** - Manage Notes against customer
- **Customer Groups** - Create, retrieve, and manage Customer Croups
- **Cost Centres** - Allocate costs across departments
- **Charges** - Handle billing charges and subscriptions
- **Products** - Manage product catalog and pricing
- **Credit Notes** - Issue and manage credit notes

### Financial Management

- **Billing Run** - Execute and manage billing runs
- **Ledgers** - Track financial transactions
- **Revenue** - Analyze revenue and financial metrics
- **Tariffs** - Configure pricing structures
- **Price Adjustments** - Manage pricing changes
- **Product Prices** - Set and update product pricing

### Customer Management

- **Customer Access** - Manage customer portal access
- **Customer Commissions** - Track commission structures
- **Contacts** - Manage customer contacts
- **Notes** - Add notes to customer records
- **Tags** - Organize with tags

### Billing & Usage

- **CDR** (Call Detail Records) - Manage telecommunications usage
- **CDR Analytics** - Analyze call data
- **Service Files** - Process service usage files
- **Service Charges** - Handle service-based billing
- **Bundles** - Manage usage bundles and allowances

### Organization & Setup

- **Organisations** - Multi-tenant organization management
- **Suppliers** - Manage supplier relationships
- **Categories** - Categorize products and services
- **Regions** - Geographic configuration
- **Metadata** - Custom field management

### Automation & Integration

- **Auto Collection Endpoints** - Configure automatic data collection
- **Auto Collection History** - Track collection history
- **Integration Logs** - Monitor integration activity
- **Integrations** - Manage external integrations
- **Events** - Track system events

### System & Configuration

- **Users** - User management
- **Roles** - Role-based access control
- **Email Settings** - Configure email notifications
- **Invoice Template** - Customize invoice templates
- **Data Retention** - Configure data retention policies
- **Account** - Account-level settings

### Additional Resources

And many more including: CLI management, Charge Imports, Commission Plans, Destinations, Destination Groups, Endpoints, Time Schedules, Audit Entries, Support Attachments, and more.

Each resource supports standard operations like:
- **Get All** - Retrieve lists with filtering and pagination
- **Get** - Retrieve single records by ID
- **Create** - Create new records
- **Update** - Modify existing records
- **Delete** - Remove records
- **Upload** - Binary file uploads (for CDR and Service Files)

Optional query parameters are organized under **Additional Fields**

## Credentials

To use this node, you need Billing Booth One API credentials:

### Prerequisites

1. A Billing Booth One account
2. API access credentials (email and password) without 2FA
3. Your API base URL (defaults to `https://api.billingbooth.app`)

### Setting up credentials

1. In n8n, go to **Credentials > New**
2. Search for "Billing Booth One API"
3. Enter your credentials:
   - **Email**: Your Billing Booth One account email
   - **Password**: Your account password
   - **Base URL**: API endpoint
4. Click **Test** to verify your credentials
5. Click **Save**

The node automatically handles authentication and token caching (55-minute expiry).

This node does **not** support the 2FA authentication method.

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with**: n8n v1.119.1

## Usage

### Basic Example: Get All Customers

1. Add the **Billing Booth One** node to your workflow
2. Select **Customers** as the resource
3. Select **Get All Customers** as the operation
4. Optionally add filters in **Additional Fields**:
   - Set `limit` to control pagination
   - Add search terms or filters
5. Execute the node

### Advanced Example: Create a Bundle, and a Bundle Allowance

1. Add **Billing Booth One** node
2. Select **Bundles** resource
3. Select **Create Bundle** operation
4. Fill in a name
5. Select the mode (Allowance or Spend)
6. Add optional parameters in **Additional Fields** e.g. Inclusive Spend amount (if mode is Spend)
7. Add **Billing Booth One** node
8. Select **Bundles** resource
9. Select **Create Bundle Allowance** operation
10. Add the bundle Id (from output of Create Bundle)
11. Add the quantity (number in minutes)
12. Select the Unit Type
13. Add additional fields to filter the allowance e.g. Desintation Ids, Desintation Group Ids

### File Upload Example: Upload CDR

1. Use **Extract From File** node to load your CSV file
2. Connect to **Billing Booth One** node
3. Select **CDR** resource
4. Select **Upload Cdr** operation
5. Set **Binary Property** to the name of your binary property (usually "data")
6. Add query parameters like `supplier_id` in **Additional Fields**

### Building

```bash
npm run build        # Build the node
```

### Key Features

- **Auto-generated Properties** - Generated from OpenAPI spec
- **Token Caching** - Automatic authentication token management
- **Binary File Support** - Multipart form-data uploads for CDR and service files

## Resources

- [Billing Booth One API Documentation](https://api.billingbooth.app/docs)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [GitHub Repository](https://github.com/nathan-synfo/n8n-nodes-billingboothone)
- [Report Issues](https://github.com/nathan-synfo/n8n-nodes-billingboothone/issues)

## License

[MIT](LICENSE.md)

## Version History

### 0.1.3

- Remove duplicate metadata resource
- Remove unnecessary Home resource
- Internal fixes for properties generation to better support future API updates

### 0.1.2

- Fix for additional fields collections

### 0.1.1

- Fix issue with binary file upload

### 0.1.0
- Initial release
- Support for all API resources
- Modular resource-based architecture
- Query parameters organized in Additional Fields collections
- Binary file upload support for CDR and Service Files
- Automatic token caching and refresh
