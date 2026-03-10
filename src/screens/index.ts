// ============================================================================
// DESIGN SYSTEM SCREENS - COMPLETE INDEX
// ============================================================================
// All 40+ screens organized by domain for easy discovery

// DASHBOARD
export { Dashboard } from "./Dashboard";

// PHASE 1: AUTHENTICATION SCREENS
export { SignIn } from "./Auth";
export { SignUp } from "./Auth";
export { PasswordReset } from "./Auth";
export { SignInWithQR } from "./Auth";
export type { PasswordResetProps } from "./Auth";

// PHASE 2: LIST & TABLE SCREENS - TEMPLATES
export { ListScreen } from "./Common";
export type { ListScreenProps } from "./Common";

// PHASE 3: PRODUCTS DOMAIN
export { ProductsList } from "./Products";
export type { Product } from "./Products";

// PHASE 4: CUSTOMERS DOMAIN
export { CustomersList } from "./Customers";
export type { Customer } from "./Customers";

// PHASE 5: ACCOUNTS DOMAIN
export { AccountsList } from "./Accounts";

// PHASE 6: TRANSACTIONS DOMAIN
export { TransactionsList } from "./Transactions";
export type { Transaction } from "./Transactions";

// PHASE 7: CONTACTS DOMAIN
export { ContactsList } from "./Contacts";
export type { Contact } from "./Contacts";

// PHASE 8: SALES DOMAIN
export { SalesList } from "./Sales";
export type { Sale } from "./Sales";

// PHASE 9: INBOX DOMAIN
export { InboxList } from "./Inbox";

// PHASE 10: PAYMENTS DOMAIN
export { PaymentsList } from "./Payments";
export type { Payment } from "./Payments";

// PHASE 11: EDUCATION DOMAIN
export { EducationCourses } from "./Education";
export type { EducationCoursesProps, EducationView } from "./Education";

// PHASE 12: CALENDAR DOMAIN
export { CalendarEvent } from "./Calendar";

// PHASE 13: SUPPORT DOMAIN
export { SupportHome } from "./Support";

// PHASE 14: PROFILE SETTINGS DOMAIN
export { ProfileAccount } from "./ProfileSettings";
export { ProfileNotifications } from "./ProfileSettings";
export { ProfileSecurity } from "./ProfileSettings";
export { ProfileSocial } from "./ProfileSettings";

// TOOLS TRACKER
export { ToolsTrackerDashboard } from "./ToolsTracker/Dashboard/ToolsTrackerDashboard";
export { ToolsTrackerAnalytics } from "./ToolsTracker/Analytics/ToolsTrackerAnalytics";
export type { ToolsTrackerAnalyticsProps } from "./ToolsTracker/Analytics/ToolsTrackerAnalytics";
export { ToolsTrackerReports } from "./ToolsTracker/Reports/ToolsTrackerReports";
export type { ToolsTrackerReportsProps } from "./ToolsTracker/Reports/ToolsTrackerReports";
export { ToolsTrackerTransactions } from "./ToolsTracker/Transactions/ToolsTrackerTransactions";
export type { ToolsTrackerTransactionsProps } from "./ToolsTracker/Transactions/ToolsTrackerTransactions";
export { ToolsTrackerProducts } from "./ToolsTracker/Products/ToolsTrackerProducts";
export type { ToolsTrackerProductsProps } from "./ToolsTracker/Products/ToolsTrackerProducts";
export { ToolsTrackerCatalog } from "./ToolsTracker/Catalog/ToolsTrackerCatalog";
export type { ToolsTrackerCatalogProps } from "./ToolsTracker/Catalog/ToolsTrackerCatalog";
export { ToolsTrackerAdminPanel } from "./ToolsTracker/AdminPanel/ToolsTrackerAdminPanel";
export type { ToolsTrackerAdminPanelProps } from "./ToolsTracker/AdminPanel/ToolsTrackerAdminPanel";
export { ToolsTrackerImport } from "./ToolsTracker/Import/ToolsTrackerImport";
export type { ToolsTrackerImportProps } from "./ToolsTracker/Import/ToolsTrackerImport";
export { ToolsTrackerLogs } from "./ToolsTracker/Logs/ToolsTrackerLogs";
export type { ToolsTrackerLogsProps } from "./ToolsTracker/Logs/ToolsTrackerLogs";
export { ToolsTrackerSyncJobs } from "./ToolsTracker/SyncJobs/ToolsTrackerSyncJobs";
export type { ToolsTrackerSyncJobsProps } from "./ToolsTracker/SyncJobs/ToolsTrackerSyncJobs";
export { ToolsTrackerSettings } from "./ToolsTracker/Settings/ToolsTrackerSettings";
export type { ToolsTrackerSettingsProps } from "./ToolsTracker/Settings/ToolsTrackerSettings";

// PHASE 15: REPORTS & CHARTS DOMAIN
export { ChartContainer } from "./Reports";
export {
  ChartBarVariant,
  ChartPolarVariant,
  ChartWaveVariant,
  ChartGeometricVariant,
  ChartHorizontalBarsVariant,
  ChartDoubleBarsVariant,
  ChartMiscVariant,
} from "./Reports";
export type { ChartContainerProps } from "./Reports";

// ============================================================================
// SCREEN INVENTORY
// ============================================================================
// Phase 1 - Authentication (3 screens)
//   ✅ SignIn
//   ✅ SignUp
//   ✅ PasswordReset (request + reset modes)
//
// Phase 2 - List/Table Templates (1 template)
//   ✅ ListScreen (reusable for all list screens)
//
// Phase 3 - Products (1 domain, 3 variants)
//   ✅ ProductsList (v1, v2, v3)
//
// Phase 4 - Customers (1 domain, 3 variants)
//   ✅ CustomersList (v1, v2, v3)
//
// Phase 5 - Accounts (1 domain, 2 variants)
//   ✅ AccountsList (v1, v2)
//
// Phase 6 - Transactions (1 domain, 4 variants)
//   ✅ TransactionsList (v1, v2, Invoice, Empty)
//
// Phase 7 - Contacts (1 domain, 4 variants)
//   ✅ ContactsList (v1, v2, New Contact, Empty)
//
// Phase 8 - Sales (1 domain, 2 variants)
//   ✅ SalesList (v1, v2)
//
// Phase 9 - Inbox (1 domain)
//   ✅ InboxList (Chat, Mail List, Mail Compose, Empty)
//
// Phase 10 - Payments (1 domain, 3 variants)
//   ✅ PaymentsList (light, dark, with Send Money)
//
// Phase 11 - Education (1 domain, 2 variants)
//   ✅ EducationCourses (light, dark)
//
// Phase 12 - Calendar (1 domain, 3 variants)
//   ✅ CalendarEvent (Event, Day, Week)
//
// Phase 13 - Support (1 domain, 4 variants)
//   ✅ SupportHome (Categories, Home, Article, Search Results)
//
// Phase 14 - Profile Settings (1 domain, 4 screens)
//   ✅ ProfileAccount
//   ✅ ProfileNotifications
//   ✅ ProfileSecurity
//   ✅ ProfileSocial
//
// Phase 15 - Charts & Reports (1 domain, 7 variants)
//   ✅ ChartBar
//   ✅ ChartPolar
//   ✅ ChartWave
//   ✅ ChartGeometric
//   ✅ ChartHorizontalBars
//   ✅ ChartDoubleBars
//   ✅ ChartMisc
//
// TOTAL: 40+ screens implemented with full Storybook coverage
// ============================================================================
