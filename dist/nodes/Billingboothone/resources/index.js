"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersFields = exports.executeCustomerGroupsOperation = exports.CustomerGroupsFields = exports.executeCustomerCommissionsOperation = exports.CustomerCommissionsFields = exports.executeCustomerAccessSettingOperation = exports.CustomerAccessSettingFields = exports.executeCustomerAccessPaymentsOperation = exports.CustomerAccessPaymentsFields = exports.executeCustomerAccessBannerOperation = exports.CustomerAccessBannerFields = exports.executeCustomerAccessOperation = exports.CustomerAccessFields = exports.executeCreditNotesOperation = exports.CreditNotesFields = exports.executeCostCentresOperation = exports.CostCentresFields = exports.executeContactsOperation = exports.ContactsFields = exports.executeCommissionPlansOperation = exports.CommissionPlansFields = exports.executeCLITypesOperation = exports.CLITypesFields = exports.executeCLIOperation = exports.CLIFields = exports.executeChargesOperation = exports.ChargesFields = exports.executeChargeImportsOperation = exports.ChargeImportsFields = exports.executeCDRSettingsOperation = exports.CDRSettingsFields = exports.executeCDRAnalyticsOperation = exports.CDRAnalyticsFields = exports.executeCDROperation = exports.CDRFields = exports.executeCategoriesOperation = exports.CategoriesFields = exports.executeBundlesOperation = exports.BundlesFields = exports.executeBillingRunOperation = exports.BillingRunFields = exports.executeAutoCollectionHistoryOperation = exports.AutoCollectionHistoryFields = exports.executeAutoCollectionEndpointsOperation = exports.AutoCollectionEndpointsFields = exports.executeAuditEntryOperation = exports.AuditEntryFields = exports.executeAccountOperation = exports.AccountFields = exports.allResourceFields = void 0;
exports.ServiceFilesFields = exports.executeServiceChargesOperation = exports.ServiceChargesFields = exports.executeRolesOperation = exports.RolesFields = exports.executeRevenueOperation = exports.RevenueFields = exports.executeRegionsOperation = exports.RegionsFields = exports.executeProductsOperation = exports.ProductsFields = exports.executeProductPricesOperation = exports.ProductPricesFields = exports.executeProductOperation = exports.ProductFields = exports.executePriceAdjustmentsOperation = exports.PriceAdjustmentsFields = exports.executePaymentsOperation = exports.PaymentsFields = exports.executeOrganisationsOperation = exports.OrganisationsFields = exports.executeNotesOperation = exports.NotesFields = exports.executeMetadataOperation = exports.MetadataFields = exports.executeLedgersOperation = exports.LedgersFields = exports.executeInvoicesOperation = exports.InvoicesFields = exports.executeInvoiceTemplateOperation = exports.InvoiceTemplateFields = exports.executeIntegrationsOperation = exports.IntegrationsFields = exports.executeIntegrationLogsOperation = exports.IntegrationLogsFields = exports.executeGeneralOperation = exports.GeneralFields = exports.executeEventsOperation = exports.EventsFields = exports.executeEndpointsOperation = exports.EndpointsFields = exports.executeEmailSettingsOperation = exports.EmailSettingsFields = exports.executeDestinationsOperation = exports.DestinationsFields = exports.executeDestinationGroupsOperation = exports.DestinationGroupsFields = exports.executeDataRetentionOperation = exports.DataRetentionFields = exports.executeCustomersOperation = void 0;
exports.resourceOperations = exports.executeUsersOperation = exports.UsersFields = exports.executeTimeSchedulesOperation = exports.TimeSchedulesFields = exports.executeTariffsOperation = exports.TariffsFields = exports.executeTagsOperation = exports.TagsFields = exports.executeSupportAttachmentFilesOperation = exports.SupportAttachmentFilesFields = exports.executeSuppliersOperation = exports.SuppliersFields = exports.executeServiceFilesOperation = void 0;
const Account_1 = require("./Account");
const AuditEntry_1 = require("./AuditEntry");
const AutoCollectionEndpoints_1 = require("./AutoCollectionEndpoints");
const AutoCollectionHistory_1 = require("./AutoCollectionHistory");
const BillingRun_1 = require("./BillingRun");
const Bundles_1 = require("./Bundles");
const Categories_1 = require("./Categories");
const CDR_1 = require("./CDR");
const CDRAnalytics_1 = require("./CDRAnalytics");
const CDRSettings_1 = require("./CDRSettings");
const ChargeImports_1 = require("./ChargeImports");
const Charges_1 = require("./Charges");
const CLI_1 = require("./CLI");
const CLITypes_1 = require("./CLITypes");
const CommissionPlans_1 = require("./CommissionPlans");
const Contacts_1 = require("./Contacts");
const CostCentres_1 = require("./CostCentres");
const CreditNotes_1 = require("./CreditNotes");
const CustomerAccess_1 = require("./CustomerAccess");
const CustomerAccessBanner_1 = require("./CustomerAccessBanner");
const CustomerAccessPayments_1 = require("./CustomerAccessPayments");
const CustomerAccessSetting_1 = require("./CustomerAccessSetting");
const CustomerCommissions_1 = require("./CustomerCommissions");
const CustomerGroups_1 = require("./CustomerGroups");
const Customers_1 = require("./Customers");
const DataRetention_1 = require("./DataRetention");
const DestinationGroups_1 = require("./DestinationGroups");
const Destinations_1 = require("./Destinations");
const EmailSettings_1 = require("./EmailSettings");
const Endpoints_1 = require("./Endpoints");
const Events_1 = require("./Events");
const General_1 = require("./General");
const IntegrationLogs_1 = require("./IntegrationLogs");
const Integrations_1 = require("./Integrations");
const InvoiceTemplate_1 = require("./InvoiceTemplate");
const Invoices_1 = require("./Invoices");
const Ledgers_1 = require("./Ledgers");
const Metadata_1 = require("./Metadata");
const Notes_1 = require("./Notes");
const Organisations_1 = require("./Organisations");
const Payments_1 = require("./Payments");
const PriceAdjustments_1 = require("./PriceAdjustments");
const Product_1 = require("./Product");
const ProductPrices_1 = require("./ProductPrices");
const Products_1 = require("./Products");
const Regions_1 = require("./Regions");
const Revenue_1 = require("./Revenue");
const Roles_1 = require("./Roles");
const ServiceCharges_1 = require("./ServiceCharges");
const ServiceFiles_1 = require("./ServiceFiles");
const Suppliers_1 = require("./Suppliers");
const SupportAttachmentFiles_1 = require("./SupportAttachmentFiles");
const Tags_1 = require("./Tags");
const Tariffs_1 = require("./Tariffs");
const TimeSchedules_1 = require("./TimeSchedules");
const Users_1 = require("./Users");
exports.allResourceFields = [
    ...Account_1.AccountFields,
    ...AuditEntry_1.AuditEntryFields,
    ...AutoCollectionEndpoints_1.AutoCollectionEndpointsFields,
    ...AutoCollectionHistory_1.AutoCollectionHistoryFields,
    ...BillingRun_1.BillingRunFields,
    ...Bundles_1.BundlesFields,
    ...Categories_1.CategoriesFields,
    ...CDR_1.CDRFields,
    ...CDRAnalytics_1.CDRAnalyticsFields,
    ...CDRSettings_1.CDRSettingsFields,
    ...ChargeImports_1.ChargeImportsFields,
    ...Charges_1.ChargesFields,
    ...CLI_1.CLIFields,
    ...CLITypes_1.CLITypesFields,
    ...CommissionPlans_1.CommissionPlansFields,
    ...Contacts_1.ContactsFields,
    ...CostCentres_1.CostCentresFields,
    ...CreditNotes_1.CreditNotesFields,
    ...CustomerAccess_1.CustomerAccessFields,
    ...CustomerAccessBanner_1.CustomerAccessBannerFields,
    ...CustomerAccessPayments_1.CustomerAccessPaymentsFields,
    ...CustomerAccessSetting_1.CustomerAccessSettingFields,
    ...CustomerCommissions_1.CustomerCommissionsFields,
    ...CustomerGroups_1.CustomerGroupsFields,
    ...Customers_1.CustomersFields,
    ...DataRetention_1.DataRetentionFields,
    ...DestinationGroups_1.DestinationGroupsFields,
    ...Destinations_1.DestinationsFields,
    ...EmailSettings_1.EmailSettingsFields,
    ...Endpoints_1.EndpointsFields,
    ...Events_1.EventsFields,
    ...General_1.GeneralFields,
    ...IntegrationLogs_1.IntegrationLogsFields,
    ...Integrations_1.IntegrationsFields,
    ...InvoiceTemplate_1.InvoiceTemplateFields,
    ...Invoices_1.InvoicesFields,
    ...Ledgers_1.LedgersFields,
    ...Metadata_1.MetadataFields,
    ...Notes_1.NotesFields,
    ...Organisations_1.OrganisationsFields,
    ...Payments_1.PaymentsFields,
    ...PriceAdjustments_1.PriceAdjustmentsFields,
    ...Product_1.ProductFields,
    ...ProductPrices_1.ProductPricesFields,
    ...Products_1.ProductsFields,
    ...Regions_1.RegionsFields,
    ...Revenue_1.RevenueFields,
    ...Roles_1.RolesFields,
    ...ServiceCharges_1.ServiceChargesFields,
    ...ServiceFiles_1.ServiceFilesFields,
    ...Suppliers_1.SuppliersFields,
    ...SupportAttachmentFiles_1.SupportAttachmentFilesFields,
    ...Tags_1.TagsFields,
    ...Tariffs_1.TariffsFields,
    ...TimeSchedules_1.TimeSchedulesFields,
    ...Users_1.UsersFields,
];
var Account_2 = require("./Account");
Object.defineProperty(exports, "AccountFields", { enumerable: true, get: function () { return Account_2.AccountFields; } });
Object.defineProperty(exports, "executeAccountOperation", { enumerable: true, get: function () { return Account_2.executeAccountOperation; } });
var AuditEntry_2 = require("./AuditEntry");
Object.defineProperty(exports, "AuditEntryFields", { enumerable: true, get: function () { return AuditEntry_2.AuditEntryFields; } });
Object.defineProperty(exports, "executeAuditEntryOperation", { enumerable: true, get: function () { return AuditEntry_2.executeAuditEntryOperation; } });
var AutoCollectionEndpoints_2 = require("./AutoCollectionEndpoints");
Object.defineProperty(exports, "AutoCollectionEndpointsFields", { enumerable: true, get: function () { return AutoCollectionEndpoints_2.AutoCollectionEndpointsFields; } });
Object.defineProperty(exports, "executeAutoCollectionEndpointsOperation", { enumerable: true, get: function () { return AutoCollectionEndpoints_2.executeAutoCollectionEndpointsOperation; } });
var AutoCollectionHistory_2 = require("./AutoCollectionHistory");
Object.defineProperty(exports, "AutoCollectionHistoryFields", { enumerable: true, get: function () { return AutoCollectionHistory_2.AutoCollectionHistoryFields; } });
Object.defineProperty(exports, "executeAutoCollectionHistoryOperation", { enumerable: true, get: function () { return AutoCollectionHistory_2.executeAutoCollectionHistoryOperation; } });
var BillingRun_2 = require("./BillingRun");
Object.defineProperty(exports, "BillingRunFields", { enumerable: true, get: function () { return BillingRun_2.BillingRunFields; } });
Object.defineProperty(exports, "executeBillingRunOperation", { enumerable: true, get: function () { return BillingRun_2.executeBillingRunOperation; } });
var Bundles_2 = require("./Bundles");
Object.defineProperty(exports, "BundlesFields", { enumerable: true, get: function () { return Bundles_2.BundlesFields; } });
Object.defineProperty(exports, "executeBundlesOperation", { enumerable: true, get: function () { return Bundles_2.executeBundlesOperation; } });
var Categories_2 = require("./Categories");
Object.defineProperty(exports, "CategoriesFields", { enumerable: true, get: function () { return Categories_2.CategoriesFields; } });
Object.defineProperty(exports, "executeCategoriesOperation", { enumerable: true, get: function () { return Categories_2.executeCategoriesOperation; } });
var CDR_2 = require("./CDR");
Object.defineProperty(exports, "CDRFields", { enumerable: true, get: function () { return CDR_2.CDRFields; } });
Object.defineProperty(exports, "executeCDROperation", { enumerable: true, get: function () { return CDR_2.executeCDROperation; } });
var CDRAnalytics_2 = require("./CDRAnalytics");
Object.defineProperty(exports, "CDRAnalyticsFields", { enumerable: true, get: function () { return CDRAnalytics_2.CDRAnalyticsFields; } });
Object.defineProperty(exports, "executeCDRAnalyticsOperation", { enumerable: true, get: function () { return CDRAnalytics_2.executeCDRAnalyticsOperation; } });
var CDRSettings_2 = require("./CDRSettings");
Object.defineProperty(exports, "CDRSettingsFields", { enumerable: true, get: function () { return CDRSettings_2.CDRSettingsFields; } });
Object.defineProperty(exports, "executeCDRSettingsOperation", { enumerable: true, get: function () { return CDRSettings_2.executeCDRSettingsOperation; } });
var ChargeImports_2 = require("./ChargeImports");
Object.defineProperty(exports, "ChargeImportsFields", { enumerable: true, get: function () { return ChargeImports_2.ChargeImportsFields; } });
Object.defineProperty(exports, "executeChargeImportsOperation", { enumerable: true, get: function () { return ChargeImports_2.executeChargeImportsOperation; } });
var Charges_2 = require("./Charges");
Object.defineProperty(exports, "ChargesFields", { enumerable: true, get: function () { return Charges_2.ChargesFields; } });
Object.defineProperty(exports, "executeChargesOperation", { enumerable: true, get: function () { return Charges_2.executeChargesOperation; } });
var CLI_2 = require("./CLI");
Object.defineProperty(exports, "CLIFields", { enumerable: true, get: function () { return CLI_2.CLIFields; } });
Object.defineProperty(exports, "executeCLIOperation", { enumerable: true, get: function () { return CLI_2.executeCLIOperation; } });
var CLITypes_2 = require("./CLITypes");
Object.defineProperty(exports, "CLITypesFields", { enumerable: true, get: function () { return CLITypes_2.CLITypesFields; } });
Object.defineProperty(exports, "executeCLITypesOperation", { enumerable: true, get: function () { return CLITypes_2.executeCLITypesOperation; } });
var CommissionPlans_2 = require("./CommissionPlans");
Object.defineProperty(exports, "CommissionPlansFields", { enumerable: true, get: function () { return CommissionPlans_2.CommissionPlansFields; } });
Object.defineProperty(exports, "executeCommissionPlansOperation", { enumerable: true, get: function () { return CommissionPlans_2.executeCommissionPlansOperation; } });
var Contacts_2 = require("./Contacts");
Object.defineProperty(exports, "ContactsFields", { enumerable: true, get: function () { return Contacts_2.ContactsFields; } });
Object.defineProperty(exports, "executeContactsOperation", { enumerable: true, get: function () { return Contacts_2.executeContactsOperation; } });
var CostCentres_2 = require("./CostCentres");
Object.defineProperty(exports, "CostCentresFields", { enumerable: true, get: function () { return CostCentres_2.CostCentresFields; } });
Object.defineProperty(exports, "executeCostCentresOperation", { enumerable: true, get: function () { return CostCentres_2.executeCostCentresOperation; } });
var CreditNotes_2 = require("./CreditNotes");
Object.defineProperty(exports, "CreditNotesFields", { enumerable: true, get: function () { return CreditNotes_2.CreditNotesFields; } });
Object.defineProperty(exports, "executeCreditNotesOperation", { enumerable: true, get: function () { return CreditNotes_2.executeCreditNotesOperation; } });
var CustomerAccess_2 = require("./CustomerAccess");
Object.defineProperty(exports, "CustomerAccessFields", { enumerable: true, get: function () { return CustomerAccess_2.CustomerAccessFields; } });
Object.defineProperty(exports, "executeCustomerAccessOperation", { enumerable: true, get: function () { return CustomerAccess_2.executeCustomerAccessOperation; } });
var CustomerAccessBanner_2 = require("./CustomerAccessBanner");
Object.defineProperty(exports, "CustomerAccessBannerFields", { enumerable: true, get: function () { return CustomerAccessBanner_2.CustomerAccessBannerFields; } });
Object.defineProperty(exports, "executeCustomerAccessBannerOperation", { enumerable: true, get: function () { return CustomerAccessBanner_2.executeCustomerAccessBannerOperation; } });
var CustomerAccessPayments_2 = require("./CustomerAccessPayments");
Object.defineProperty(exports, "CustomerAccessPaymentsFields", { enumerable: true, get: function () { return CustomerAccessPayments_2.CustomerAccessPaymentsFields; } });
Object.defineProperty(exports, "executeCustomerAccessPaymentsOperation", { enumerable: true, get: function () { return CustomerAccessPayments_2.executeCustomerAccessPaymentsOperation; } });
var CustomerAccessSetting_2 = require("./CustomerAccessSetting");
Object.defineProperty(exports, "CustomerAccessSettingFields", { enumerable: true, get: function () { return CustomerAccessSetting_2.CustomerAccessSettingFields; } });
Object.defineProperty(exports, "executeCustomerAccessSettingOperation", { enumerable: true, get: function () { return CustomerAccessSetting_2.executeCustomerAccessSettingOperation; } });
var CustomerCommissions_2 = require("./CustomerCommissions");
Object.defineProperty(exports, "CustomerCommissionsFields", { enumerable: true, get: function () { return CustomerCommissions_2.CustomerCommissionsFields; } });
Object.defineProperty(exports, "executeCustomerCommissionsOperation", { enumerable: true, get: function () { return CustomerCommissions_2.executeCustomerCommissionsOperation; } });
var CustomerGroups_2 = require("./CustomerGroups");
Object.defineProperty(exports, "CustomerGroupsFields", { enumerable: true, get: function () { return CustomerGroups_2.CustomerGroupsFields; } });
Object.defineProperty(exports, "executeCustomerGroupsOperation", { enumerable: true, get: function () { return CustomerGroups_2.executeCustomerGroupsOperation; } });
var Customers_2 = require("./Customers");
Object.defineProperty(exports, "CustomersFields", { enumerable: true, get: function () { return Customers_2.CustomersFields; } });
Object.defineProperty(exports, "executeCustomersOperation", { enumerable: true, get: function () { return Customers_2.executeCustomersOperation; } });
var DataRetention_2 = require("./DataRetention");
Object.defineProperty(exports, "DataRetentionFields", { enumerable: true, get: function () { return DataRetention_2.DataRetentionFields; } });
Object.defineProperty(exports, "executeDataRetentionOperation", { enumerable: true, get: function () { return DataRetention_2.executeDataRetentionOperation; } });
var DestinationGroups_2 = require("./DestinationGroups");
Object.defineProperty(exports, "DestinationGroupsFields", { enumerable: true, get: function () { return DestinationGroups_2.DestinationGroupsFields; } });
Object.defineProperty(exports, "executeDestinationGroupsOperation", { enumerable: true, get: function () { return DestinationGroups_2.executeDestinationGroupsOperation; } });
var Destinations_2 = require("./Destinations");
Object.defineProperty(exports, "DestinationsFields", { enumerable: true, get: function () { return Destinations_2.DestinationsFields; } });
Object.defineProperty(exports, "executeDestinationsOperation", { enumerable: true, get: function () { return Destinations_2.executeDestinationsOperation; } });
var EmailSettings_2 = require("./EmailSettings");
Object.defineProperty(exports, "EmailSettingsFields", { enumerable: true, get: function () { return EmailSettings_2.EmailSettingsFields; } });
Object.defineProperty(exports, "executeEmailSettingsOperation", { enumerable: true, get: function () { return EmailSettings_2.executeEmailSettingsOperation; } });
var Endpoints_2 = require("./Endpoints");
Object.defineProperty(exports, "EndpointsFields", { enumerable: true, get: function () { return Endpoints_2.EndpointsFields; } });
Object.defineProperty(exports, "executeEndpointsOperation", { enumerable: true, get: function () { return Endpoints_2.executeEndpointsOperation; } });
var Events_2 = require("./Events");
Object.defineProperty(exports, "EventsFields", { enumerable: true, get: function () { return Events_2.EventsFields; } });
Object.defineProperty(exports, "executeEventsOperation", { enumerable: true, get: function () { return Events_2.executeEventsOperation; } });
var General_2 = require("./General");
Object.defineProperty(exports, "GeneralFields", { enumerable: true, get: function () { return General_2.GeneralFields; } });
Object.defineProperty(exports, "executeGeneralOperation", { enumerable: true, get: function () { return General_2.executeGeneralOperation; } });
var IntegrationLogs_2 = require("./IntegrationLogs");
Object.defineProperty(exports, "IntegrationLogsFields", { enumerable: true, get: function () { return IntegrationLogs_2.IntegrationLogsFields; } });
Object.defineProperty(exports, "executeIntegrationLogsOperation", { enumerable: true, get: function () { return IntegrationLogs_2.executeIntegrationLogsOperation; } });
var Integrations_2 = require("./Integrations");
Object.defineProperty(exports, "IntegrationsFields", { enumerable: true, get: function () { return Integrations_2.IntegrationsFields; } });
Object.defineProperty(exports, "executeIntegrationsOperation", { enumerable: true, get: function () { return Integrations_2.executeIntegrationsOperation; } });
var InvoiceTemplate_2 = require("./InvoiceTemplate");
Object.defineProperty(exports, "InvoiceTemplateFields", { enumerable: true, get: function () { return InvoiceTemplate_2.InvoiceTemplateFields; } });
Object.defineProperty(exports, "executeInvoiceTemplateOperation", { enumerable: true, get: function () { return InvoiceTemplate_2.executeInvoiceTemplateOperation; } });
var Invoices_2 = require("./Invoices");
Object.defineProperty(exports, "InvoicesFields", { enumerable: true, get: function () { return Invoices_2.InvoicesFields; } });
Object.defineProperty(exports, "executeInvoicesOperation", { enumerable: true, get: function () { return Invoices_2.executeInvoicesOperation; } });
var Ledgers_2 = require("./Ledgers");
Object.defineProperty(exports, "LedgersFields", { enumerable: true, get: function () { return Ledgers_2.LedgersFields; } });
Object.defineProperty(exports, "executeLedgersOperation", { enumerable: true, get: function () { return Ledgers_2.executeLedgersOperation; } });
var Metadata_2 = require("./Metadata");
Object.defineProperty(exports, "MetadataFields", { enumerable: true, get: function () { return Metadata_2.MetadataFields; } });
Object.defineProperty(exports, "executeMetadataOperation", { enumerable: true, get: function () { return Metadata_2.executeMetadataOperation; } });
var Notes_2 = require("./Notes");
Object.defineProperty(exports, "NotesFields", { enumerable: true, get: function () { return Notes_2.NotesFields; } });
Object.defineProperty(exports, "executeNotesOperation", { enumerable: true, get: function () { return Notes_2.executeNotesOperation; } });
var Organisations_2 = require("./Organisations");
Object.defineProperty(exports, "OrganisationsFields", { enumerable: true, get: function () { return Organisations_2.OrganisationsFields; } });
Object.defineProperty(exports, "executeOrganisationsOperation", { enumerable: true, get: function () { return Organisations_2.executeOrganisationsOperation; } });
var Payments_2 = require("./Payments");
Object.defineProperty(exports, "PaymentsFields", { enumerable: true, get: function () { return Payments_2.PaymentsFields; } });
Object.defineProperty(exports, "executePaymentsOperation", { enumerable: true, get: function () { return Payments_2.executePaymentsOperation; } });
var PriceAdjustments_2 = require("./PriceAdjustments");
Object.defineProperty(exports, "PriceAdjustmentsFields", { enumerable: true, get: function () { return PriceAdjustments_2.PriceAdjustmentsFields; } });
Object.defineProperty(exports, "executePriceAdjustmentsOperation", { enumerable: true, get: function () { return PriceAdjustments_2.executePriceAdjustmentsOperation; } });
var Product_2 = require("./Product");
Object.defineProperty(exports, "ProductFields", { enumerable: true, get: function () { return Product_2.ProductFields; } });
Object.defineProperty(exports, "executeProductOperation", { enumerable: true, get: function () { return Product_2.executeProductOperation; } });
var ProductPrices_2 = require("./ProductPrices");
Object.defineProperty(exports, "ProductPricesFields", { enumerable: true, get: function () { return ProductPrices_2.ProductPricesFields; } });
Object.defineProperty(exports, "executeProductPricesOperation", { enumerable: true, get: function () { return ProductPrices_2.executeProductPricesOperation; } });
var Products_2 = require("./Products");
Object.defineProperty(exports, "ProductsFields", { enumerable: true, get: function () { return Products_2.ProductsFields; } });
Object.defineProperty(exports, "executeProductsOperation", { enumerable: true, get: function () { return Products_2.executeProductsOperation; } });
var Regions_2 = require("./Regions");
Object.defineProperty(exports, "RegionsFields", { enumerable: true, get: function () { return Regions_2.RegionsFields; } });
Object.defineProperty(exports, "executeRegionsOperation", { enumerable: true, get: function () { return Regions_2.executeRegionsOperation; } });
var Revenue_2 = require("./Revenue");
Object.defineProperty(exports, "RevenueFields", { enumerable: true, get: function () { return Revenue_2.RevenueFields; } });
Object.defineProperty(exports, "executeRevenueOperation", { enumerable: true, get: function () { return Revenue_2.executeRevenueOperation; } });
var Roles_2 = require("./Roles");
Object.defineProperty(exports, "RolesFields", { enumerable: true, get: function () { return Roles_2.RolesFields; } });
Object.defineProperty(exports, "executeRolesOperation", { enumerable: true, get: function () { return Roles_2.executeRolesOperation; } });
var ServiceCharges_2 = require("./ServiceCharges");
Object.defineProperty(exports, "ServiceChargesFields", { enumerable: true, get: function () { return ServiceCharges_2.ServiceChargesFields; } });
Object.defineProperty(exports, "executeServiceChargesOperation", { enumerable: true, get: function () { return ServiceCharges_2.executeServiceChargesOperation; } });
var ServiceFiles_2 = require("./ServiceFiles");
Object.defineProperty(exports, "ServiceFilesFields", { enumerable: true, get: function () { return ServiceFiles_2.ServiceFilesFields; } });
Object.defineProperty(exports, "executeServiceFilesOperation", { enumerable: true, get: function () { return ServiceFiles_2.executeServiceFilesOperation; } });
var Suppliers_2 = require("./Suppliers");
Object.defineProperty(exports, "SuppliersFields", { enumerable: true, get: function () { return Suppliers_2.SuppliersFields; } });
Object.defineProperty(exports, "executeSuppliersOperation", { enumerable: true, get: function () { return Suppliers_2.executeSuppliersOperation; } });
var SupportAttachmentFiles_2 = require("./SupportAttachmentFiles");
Object.defineProperty(exports, "SupportAttachmentFilesFields", { enumerable: true, get: function () { return SupportAttachmentFiles_2.SupportAttachmentFilesFields; } });
Object.defineProperty(exports, "executeSupportAttachmentFilesOperation", { enumerable: true, get: function () { return SupportAttachmentFiles_2.executeSupportAttachmentFilesOperation; } });
var Tags_2 = require("./Tags");
Object.defineProperty(exports, "TagsFields", { enumerable: true, get: function () { return Tags_2.TagsFields; } });
Object.defineProperty(exports, "executeTagsOperation", { enumerable: true, get: function () { return Tags_2.executeTagsOperation; } });
var Tariffs_2 = require("./Tariffs");
Object.defineProperty(exports, "TariffsFields", { enumerable: true, get: function () { return Tariffs_2.TariffsFields; } });
Object.defineProperty(exports, "executeTariffsOperation", { enumerable: true, get: function () { return Tariffs_2.executeTariffsOperation; } });
var TimeSchedules_2 = require("./TimeSchedules");
Object.defineProperty(exports, "TimeSchedulesFields", { enumerable: true, get: function () { return TimeSchedules_2.TimeSchedulesFields; } });
Object.defineProperty(exports, "executeTimeSchedulesOperation", { enumerable: true, get: function () { return TimeSchedules_2.executeTimeSchedulesOperation; } });
var Users_2 = require("./Users");
Object.defineProperty(exports, "UsersFields", { enumerable: true, get: function () { return Users_2.UsersFields; } });
Object.defineProperty(exports, "executeUsersOperation", { enumerable: true, get: function () { return Users_2.executeUsersOperation; } });
exports.resourceOperations = {
    Account: Account_1.executeAccountOperation,
    AuditEntry: AuditEntry_1.executeAuditEntryOperation,
    AutoCollectionEndpoints: AutoCollectionEndpoints_1.executeAutoCollectionEndpointsOperation,
    AutoCollectionHistory: AutoCollectionHistory_1.executeAutoCollectionHistoryOperation,
    BillingRun: BillingRun_1.executeBillingRunOperation,
    Bundles: Bundles_1.executeBundlesOperation,
    Categories: Categories_1.executeCategoriesOperation,
    CDR: CDR_1.executeCDROperation,
    CDRAnalytics: CDRAnalytics_1.executeCDRAnalyticsOperation,
    CDRSettings: CDRSettings_1.executeCDRSettingsOperation,
    ChargeImports: ChargeImports_1.executeChargeImportsOperation,
    Charges: Charges_1.executeChargesOperation,
    CLI: CLI_1.executeCLIOperation,
    CLITypes: CLITypes_1.executeCLITypesOperation,
    CommissionPlans: CommissionPlans_1.executeCommissionPlansOperation,
    Contacts: Contacts_1.executeContactsOperation,
    CostCentres: CostCentres_1.executeCostCentresOperation,
    CreditNotes: CreditNotes_1.executeCreditNotesOperation,
    CustomerAccess: CustomerAccess_1.executeCustomerAccessOperation,
    CustomerAccessBanner: CustomerAccessBanner_1.executeCustomerAccessBannerOperation,
    CustomerAccessPayments: CustomerAccessPayments_1.executeCustomerAccessPaymentsOperation,
    CustomerAccessSetting: CustomerAccessSetting_1.executeCustomerAccessSettingOperation,
    CustomerCommissions: CustomerCommissions_1.executeCustomerCommissionsOperation,
    CustomerGroups: CustomerGroups_1.executeCustomerGroupsOperation,
    Customers: Customers_1.executeCustomersOperation,
    DataRetention: DataRetention_1.executeDataRetentionOperation,
    DestinationGroups: DestinationGroups_1.executeDestinationGroupsOperation,
    Destinations: Destinations_1.executeDestinationsOperation,
    EmailSettings: EmailSettings_1.executeEmailSettingsOperation,
    Endpoints: Endpoints_1.executeEndpointsOperation,
    Events: Events_1.executeEventsOperation,
    General: General_1.executeGeneralOperation,
    IntegrationLogs: IntegrationLogs_1.executeIntegrationLogsOperation,
    Integrations: Integrations_1.executeIntegrationsOperation,
    InvoiceTemplate: InvoiceTemplate_1.executeInvoiceTemplateOperation,
    Invoices: Invoices_1.executeInvoicesOperation,
    Ledgers: Ledgers_1.executeLedgersOperation,
    Metadata: Metadata_1.executeMetadataOperation,
    Notes: Notes_1.executeNotesOperation,
    Organisations: Organisations_1.executeOrganisationsOperation,
    Payments: Payments_1.executePaymentsOperation,
    PriceAdjustments: PriceAdjustments_1.executePriceAdjustmentsOperation,
    Product: Product_1.executeProductOperation,
    ProductPrices: ProductPrices_1.executeProductPricesOperation,
    Products: Products_1.executeProductsOperation,
    Regions: Regions_1.executeRegionsOperation,
    Revenue: Revenue_1.executeRevenueOperation,
    Roles: Roles_1.executeRolesOperation,
    ServiceCharges: ServiceCharges_1.executeServiceChargesOperation,
    ServiceFiles: ServiceFiles_1.executeServiceFilesOperation,
    Suppliers: Suppliers_1.executeSuppliersOperation,
    SupportAttachmentFiles: SupportAttachmentFiles_1.executeSupportAttachmentFilesOperation,
    Tags: Tags_1.executeTagsOperation,
    Tariffs: Tariffs_1.executeTariffsOperation,
    TimeSchedules: TimeSchedules_1.executeTimeSchedulesOperation,
    Users: Users_1.executeUsersOperation,
};
//# sourceMappingURL=index.js.map