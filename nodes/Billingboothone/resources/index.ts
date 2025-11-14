import { INodeProperties } from 'n8n-workflow';

// Import all resource descriptions
import { AccountFields, executeAccountOperation } from './Account';
import { AuditEntryFields, executeAuditEntryOperation } from './AuditEntry';
import { AutoCollectionEndpointsFields, executeAutoCollectionEndpointsOperation } from './AutoCollectionEndpoints';
import { AutoCollectionHistoryFields, executeAutoCollectionHistoryOperation } from './AutoCollectionHistory';
import { BillingRunFields, executeBillingRunOperation } from './BillingRun';
import { BundlesFields, executeBundlesOperation } from './Bundles';
import { CategoriesFields, executeCategoriesOperation } from './Categories';
import { CDRFields, executeCDROperation } from './CDR';
import { CDRAnalyticsFields, executeCDRAnalyticsOperation } from './CDRAnalytics';
import { CDRSettingsFields, executeCDRSettingsOperation } from './CDRSettings';
import { ChargeImportsFields, executeChargeImportsOperation } from './ChargeImports';
import { ChargesFields, executeChargesOperation } from './Charges';
import { CLIFields, executeCLIOperation } from './CLI';
import { CLITypesFields, executeCLITypesOperation } from './CLITypes';
import { CommissionPlansFields, executeCommissionPlansOperation } from './CommissionPlans';
import { ContactsFields, executeContactsOperation } from './Contacts';
import { CostCentresFields, executeCostCentresOperation } from './CostCentres';
import { CreditNotesFields, executeCreditNotesOperation } from './CreditNotes';
import { CustomerAccessFields, executeCustomerAccessOperation } from './CustomerAccess';
import { CustomerAccessBannerFields, executeCustomerAccessBannerOperation } from './CustomerAccessBanner';
import { CustomerAccessPaymentsFields, executeCustomerAccessPaymentsOperation } from './CustomerAccessPayments';
import { CustomerAccessSettingFields, executeCustomerAccessSettingOperation } from './CustomerAccessSetting';
import { CustomerCommissionsFields, executeCustomerCommissionsOperation } from './CustomerCommissions';
import { CustomerGroupsFields, executeCustomerGroupsOperation } from './CustomerGroups';
import { CustomersFields, executeCustomersOperation } from './Customers';
import { DataRetentionFields, executeDataRetentionOperation } from './DataRetention';
import { DestinationGroupsFields, executeDestinationGroupsOperation } from './DestinationGroups';
import { DestinationsFields, executeDestinationsOperation } from './Destinations';
import { EmailSettingsFields, executeEmailSettingsOperation } from './EmailSettings';
import { EndpointsFields, executeEndpointsOperation } from './Endpoints';
import { EventsFields, executeEventsOperation } from './Events';
import { GeneralFields, executeGeneralOperation } from './General';
import { HomeFields, executeHomeOperation } from './Home';
import { IntegrationLogsFields, executeIntegrationLogsOperation } from './IntegrationLogs';
import { IntegrationsFields, executeIntegrationsOperation } from './Integrations';
import { InvoiceTemplateFields, executeInvoiceTemplateOperation } from './InvoiceTemplate';
import { InvoicesFields, executeInvoicesOperation } from './Invoices';
import { LedgersFields, executeLedgersOperation } from './Ledgers';
import { MetadataFields, executeMetadataOperation } from './Metadata';
import { NotesFields, executeNotesOperation } from './Notes';
import { OrganisationsFields, executeOrganisationsOperation } from './Organisations';
import { PaymentsFields, executePaymentsOperation } from './Payments';
import { PriceAdjustmentsFields, executePriceAdjustmentsOperation } from './PriceAdjustments';
import { ProductFields, executeProductOperation } from './Product';
import { ProductPricesFields, executeProductPricesOperation } from './ProductPrices';
import { ProductsFields, executeProductsOperation } from './Products';
import { RegionsFields, executeRegionsOperation } from './Regions';
import { RevenueFields, executeRevenueOperation } from './Revenue';
import { RolesFields, executeRolesOperation } from './Roles';
import { ServiceChargesFields, executeServiceChargesOperation } from './ServiceCharges';
import { ServiceFilesFields, executeServiceFilesOperation } from './ServiceFiles';
import { SuppliersFields, executeSuppliersOperation } from './Suppliers';
import { SupportAttachmentFilesFields, executeSupportAttachmentFilesOperation } from './SupportAttachmentFiles';
import { TagsFields, executeTagsOperation } from './Tags';
import { TariffsFields, executeTariffsOperation } from './Tariffs';
import { TimeSchedulesFields, executeTimeSchedulesOperation } from './TimeSchedules';
import { UsersFields, executeUsersOperation } from './Users';

// Export all field definitions
export const allResourceFields: INodeProperties[] = [
  ...AccountFields,
  ...AuditEntryFields,
  ...AutoCollectionEndpointsFields,
  ...AutoCollectionHistoryFields,
  ...BillingRunFields,
  ...BundlesFields,
  ...CategoriesFields,
  ...CDRFields,
  ...CDRAnalyticsFields,
  ...CDRSettingsFields,
  ...ChargeImportsFields,
  ...ChargesFields,
  ...CLIFields,
  ...CLITypesFields,
  ...CommissionPlansFields,
  ...ContactsFields,
  ...CostCentresFields,
  ...CreditNotesFields,
  ...CustomerAccessFields,
  ...CustomerAccessBannerFields,
  ...CustomerAccessPaymentsFields,
  ...CustomerAccessSettingFields,
  ...CustomerCommissionsFields,
  ...CustomerGroupsFields,
  ...CustomersFields,
  ...DataRetentionFields,
  ...DestinationGroupsFields,
  ...DestinationsFields,
  ...EmailSettingsFields,
  ...EndpointsFields,
  ...EventsFields,
  ...GeneralFields,
  ...HomeFields,
  ...IntegrationLogsFields,
  ...IntegrationsFields,
  ...InvoiceTemplateFields,
  ...InvoicesFields,
  ...LedgersFields,
  ...MetadataFields,
  ...NotesFields,
  ...OrganisationsFields,
  ...PaymentsFields,
  ...PriceAdjustmentsFields,
  ...ProductFields,
  ...ProductPricesFields,
  ...ProductsFields,
  ...RegionsFields,
  ...RevenueFields,
  ...RolesFields,
  ...ServiceChargesFields,
  ...ServiceFilesFields,
  ...SuppliersFields,
  ...SupportAttachmentFilesFields,
  ...TagsFields,
  ...TariffsFields,
  ...TimeSchedulesFields,
  ...UsersFields,
];

// Export individual resources for selective imports
export { AccountFields, executeAccountOperation } from './Account';
export { AuditEntryFields, executeAuditEntryOperation } from './AuditEntry';
export { AutoCollectionEndpointsFields, executeAutoCollectionEndpointsOperation } from './AutoCollectionEndpoints';
export { AutoCollectionHistoryFields, executeAutoCollectionHistoryOperation } from './AutoCollectionHistory';
export { BillingRunFields, executeBillingRunOperation } from './BillingRun';
export { BundlesFields, executeBundlesOperation } from './Bundles';
export { CategoriesFields, executeCategoriesOperation } from './Categories';
export { CDRFields, executeCDROperation } from './CDR';
export { CDRAnalyticsFields, executeCDRAnalyticsOperation } from './CDRAnalytics';
export { CDRSettingsFields, executeCDRSettingsOperation } from './CDRSettings';
export { ChargeImportsFields, executeChargeImportsOperation } from './ChargeImports';
export { ChargesFields, executeChargesOperation } from './Charges';
export { CLIFields, executeCLIOperation } from './CLI';
export { CLITypesFields, executeCLITypesOperation } from './CLITypes';
export { CommissionPlansFields, executeCommissionPlansOperation } from './CommissionPlans';
export { ContactsFields, executeContactsOperation } from './Contacts';
export { CostCentresFields, executeCostCentresOperation } from './CostCentres';
export { CreditNotesFields, executeCreditNotesOperation } from './CreditNotes';
export { CustomerAccessFields, executeCustomerAccessOperation } from './CustomerAccess';
export { CustomerAccessBannerFields, executeCustomerAccessBannerOperation } from './CustomerAccessBanner';
export { CustomerAccessPaymentsFields, executeCustomerAccessPaymentsOperation } from './CustomerAccessPayments';
export { CustomerAccessSettingFields, executeCustomerAccessSettingOperation } from './CustomerAccessSetting';
export { CustomerCommissionsFields, executeCustomerCommissionsOperation } from './CustomerCommissions';
export { CustomerGroupsFields, executeCustomerGroupsOperation } from './CustomerGroups';
export { CustomersFields, executeCustomersOperation } from './Customers';
export { DataRetentionFields, executeDataRetentionOperation } from './DataRetention';
export { DestinationGroupsFields, executeDestinationGroupsOperation } from './DestinationGroups';
export { DestinationsFields, executeDestinationsOperation } from './Destinations';
export { EmailSettingsFields, executeEmailSettingsOperation } from './EmailSettings';
export { EndpointsFields, executeEndpointsOperation } from './Endpoints';
export { EventsFields, executeEventsOperation } from './Events';
export { GeneralFields, executeGeneralOperation } from './General';
export { HomeFields, executeHomeOperation } from './Home';
export { IntegrationLogsFields, executeIntegrationLogsOperation } from './IntegrationLogs';
export { IntegrationsFields, executeIntegrationsOperation } from './Integrations';
export { InvoiceTemplateFields, executeInvoiceTemplateOperation } from './InvoiceTemplate';
export { InvoicesFields, executeInvoicesOperation } from './Invoices';
export { LedgersFields, executeLedgersOperation } from './Ledgers';
export { MetadataFields, executeMetadataOperation } from './Metadata';
export { NotesFields, executeNotesOperation } from './Notes';
export { OrganisationsFields, executeOrganisationsOperation } from './Organisations';
export { PaymentsFields, executePaymentsOperation } from './Payments';
export { PriceAdjustmentsFields, executePriceAdjustmentsOperation } from './PriceAdjustments';
export { ProductFields, executeProductOperation } from './Product';
export { ProductPricesFields, executeProductPricesOperation } from './ProductPrices';
export { ProductsFields, executeProductsOperation } from './Products';
export { RegionsFields, executeRegionsOperation } from './Regions';
export { RevenueFields, executeRevenueOperation } from './Revenue';
export { RolesFields, executeRolesOperation } from './Roles';
export { ServiceChargesFields, executeServiceChargesOperation } from './ServiceCharges';
export { ServiceFilesFields, executeServiceFilesOperation } from './ServiceFiles';
export { SuppliersFields, executeSuppliersOperation } from './Suppliers';
export { SupportAttachmentFilesFields, executeSupportAttachmentFilesOperation } from './SupportAttachmentFiles';
export { TagsFields, executeTagsOperation } from './Tags';
export { TariffsFields, executeTariffsOperation } from './Tariffs';
export { TimeSchedulesFields, executeTimeSchedulesOperation } from './TimeSchedules';
export { UsersFields, executeUsersOperation } from './Users';

// Export resource map for dynamic routing
export const resourceOperations = {
  Account: executeAccountOperation,
  AuditEntry: executeAuditEntryOperation,
  AutoCollectionEndpoints: executeAutoCollectionEndpointsOperation,
  AutoCollectionHistory: executeAutoCollectionHistoryOperation,
  BillingRun: executeBillingRunOperation,
  Bundles: executeBundlesOperation,
  Categories: executeCategoriesOperation,
  CDR: executeCDROperation,
  CDRAnalytics: executeCDRAnalyticsOperation,
  CDRSettings: executeCDRSettingsOperation,
  ChargeImports: executeChargeImportsOperation,
  Charges: executeChargesOperation,
  CLI: executeCLIOperation,
  CLITypes: executeCLITypesOperation,
  CommissionPlans: executeCommissionPlansOperation,
  Contacts: executeContactsOperation,
  CostCentres: executeCostCentresOperation,
  CreditNotes: executeCreditNotesOperation,
  CustomerAccess: executeCustomerAccessOperation,
  CustomerAccessBanner: executeCustomerAccessBannerOperation,
  CustomerAccessPayments: executeCustomerAccessPaymentsOperation,
  CustomerAccessSetting: executeCustomerAccessSettingOperation,
  CustomerCommissions: executeCustomerCommissionsOperation,
  CustomerGroups: executeCustomerGroupsOperation,
  Customers: executeCustomersOperation,
  DataRetention: executeDataRetentionOperation,
  DestinationGroups: executeDestinationGroupsOperation,
  Destinations: executeDestinationsOperation,
  EmailSettings: executeEmailSettingsOperation,
  Endpoints: executeEndpointsOperation,
  Events: executeEventsOperation,
  General: executeGeneralOperation,
  Home: executeHomeOperation,
  IntegrationLogs: executeIntegrationLogsOperation,
  Integrations: executeIntegrationsOperation,
  InvoiceTemplate: executeInvoiceTemplateOperation,
  Invoices: executeInvoicesOperation,
  Ledgers: executeLedgersOperation,
  Metadata: executeMetadataOperation,
  Notes: executeNotesOperation,
  Organisations: executeOrganisationsOperation,
  Payments: executePaymentsOperation,
  PriceAdjustments: executePriceAdjustmentsOperation,
  Product: executeProductOperation,
  ProductPrices: executeProductPricesOperation,
  Products: executeProductsOperation,
  Regions: executeRegionsOperation,
  Revenue: executeRevenueOperation,
  Roles: executeRolesOperation,
  ServiceCharges: executeServiceChargesOperation,
  ServiceFiles: executeServiceFilesOperation,
  Suppliers: executeSuppliersOperation,
  SupportAttachmentFiles: executeSupportAttachmentFilesOperation,
  Tags: executeTagsOperation,
  Tariffs: executeTariffsOperation,
  TimeSchedules: executeTimeSchedulesOperation,
  Users: executeUsersOperation,
};
