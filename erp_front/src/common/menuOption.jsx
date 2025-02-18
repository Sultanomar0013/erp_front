import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionIcon from "@mui/icons-material/Description";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TodayIcon from "@mui/icons-material/Today";
import WorkIcon from "@mui/icons-material/Work";

import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DevicesIcon from "@mui/icons-material/Devices";
import ComputerIcon from "@mui/icons-material/Computer";
import AppIcon from "@mui/icons-material/Apps";
import SyncIcon from "@mui/icons-material/Sync";
import CloudIcon from "@mui/icons-material/Cloud";
import WifiIcon from "@mui/icons-material/Wifi";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import StorageIcon from "@mui/icons-material/Storage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BugReportIcon from "@mui/icons-material/BugReport";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ShieldIcon from "@mui/icons-material/Shield";
import HistoryIcon from "@mui/icons-material/History";
import BuildIcon from "@mui/icons-material/Build";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BrushIcon from "@mui/icons-material/Brush";
import ApiIcon from "@mui/icons-material/Api";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";

// Define all menu items
const userMenuItems = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon />, path: "/userMod/home/Dashboard" },
  { segment: "user_access", title: "User Access", icon: <PeopleIcon />, path: "/userMod/home/UserAccess" },
  {
    segment: "my_account",
    title: "My Account",
    icon: <AccountCircleIcon />,
    children: [
      { segment: "profile", title: "My Profile", path: "/userMod/home/ProfilePanel", icon: <AccountCircleIcon /> },
      { segment: "update_profile", title: "Update Profile", path: "/userMod/home/UpdateProfile", icon: <EditIcon /> },
    ],
  },
  { segment: "member_info", title: "Member Basic Info", icon: <GroupIcon />, path: "/userMod/home/MemberBasicInfo" },
  { segment: "notice", title: "Notice", icon: <NotificationsIcon />, path: "/userMod/home/NoticeReport" },
  { segment: "attendance", title: "Attendance", icon: <TodayIcon />, path: "/userMod/home/Attendance" },
  {
    segment: "document",
    title: "Document",
    icon: <DescriptionIcon />,
    children: [
      { segment: "doc_type", title: "Document Type", path: "/userMod/home/DocType", icon: <ListAltIcon /> },
      { segment: "doc_list", title: "Document List", path: "/userMod/home/DocAtt", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "meeting",
    title: "Meeting Schedule",
    icon: <EventIcon />,
    children: [
      { segment: "meet_location", title: "Meeting Location", path: "/userMod/home/MeetLocate", icon: <LocationOnIcon /> },
      { segment: "meet_schedule", title: "Create Schedule", path: "/userMod/home/MeetSchedule", icon: <EventIcon /> },
    ],
  },
  {
    segment: "it_support",
    title: "IT Support",
    icon: <SupportAgentIcon />,
    children: [
      { segment: "it_request", title: "IT Request Status", path: "/userMod/home/ItRequestStatus", icon: <AssignmentTurnedInIcon /> },
      { segment: "it_list", title: "IT Support List", path: "/userMod/home/ItSupport", icon: <SupportAgentIcon /> },
    ],
  },
  { segment: "hr_support", title: "HR & Admin Support", icon: <WorkIcon />, path: "/userMod/home/HrRequest" },
];



const itMenuItems = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon />, path: "/itMod/home/Dashboard" },
  {
    segment: "user_access",
    title: "User & Access Management",
    icon: <SecurityIcon />,
    children: [
      { segment: "user_roles", title: "User Roles & Permissions", path: "/itMod/home/UserRoles", icon: <PersonIcon /> },
      { segment: "access_control", title: "Access Control List (ACL)", path: "/itMod/home/AccessControl", icon: <LockIcon /> },
      { segment: "sso", title: "Single Sign-On (SSO)", path: "/itMod/home/SSOConfig", icon: <VpnKeyIcon /> },
    ],
  },
  {
    segment: "it_assets",
    title: "IT Asset Management",
    icon: <DevicesIcon />,
    children: [
      { segment: "hardware", title: "Hardware Inventory", path: "/itMod/home/HardwareInventory", icon: <ComputerIcon /> },
      { segment: "software", title: "Software Licenses", path: "/itMod/home/SoftwareLicenses", icon: <AppIcon /> },
      { segment: "lifecycle", title: "IT Asset Lifecycle", path: "/itMod/home/AssetLifecycle", icon: <SyncIcon /> },
    ],
  },
  {
    segment: "infrastructure",
    title: "Infrastructure Management",
    icon: <CloudIcon />,
    children: [
      { segment: "network_monitor", title: "Server & Network Monitoring", path: "/itMod/home/NetworkMonitor", icon: <WifiIcon /> },
      { segment: "cloud_services", title: "Cloud Service Management", path: "/itMod/home/CloudServices", icon: <CloudQueueIcon /> },
      { segment: "backup", title: "Backup & Disaster Recovery", path: "/itMod/home/BackupRecovery", icon: <StorageIcon /> },
    ],
  },
  {
    segment: "help_desk",
    title: "Help Desk & Support",
    icon: <SupportAgentIcon />,
    children: [
      { segment: "tickets", title: "Ticket Management", path: "/itMod/home/Tickets", icon: <AssignmentIcon /> },
      { segment: "incidents", title: "Incident Tracking", path: "/itMod/home/Incidents", icon: <BugReportIcon /> },
      { segment: "knowledge_base", title: "Knowledge Base", path: "/itMod/home/KnowledgeBase", icon: <LibraryBooksIcon /> },
    ],
  },
  {
    segment: "security",
    title: "Security & Compliance",
    icon: <ShieldIcon />,
    children: [
      { segment: "firewall", title: "Firewall & Security Policies", path: "/itMod/home/SecurityPolicies", icon: <SecurityIcon /> },
      { segment: "audit_logs", title: "Audit Logs & Compliance", path: "/itMod/home/AuditLogs", icon: <HistoryIcon /> },
      { segment: "data_protection", title: "Data Encryption & Access Logs", path: "/itMod/home/DataProtection", icon: <LockIcon /> },
    ],
  },
  {
    segment: "software_management",
    title: "Software Management",
    icon: <BuildIcon />,
    children: [
      { segment: "app_deployment", title: "Application Deployment", path: "/itMod/home/AppDeployment", icon: <SettingsApplicationsIcon /> },
      { segment: "patch_management", title: "Patch Management", path: "/itMod/home/PatchManagement", icon: <SystemUpdateIcon /> },
      { segment: "api_integration", title: "API & Integration Hub", path: "/itMod/home/APIIntegration", icon: <CodeIcon /> },
    ],
  },
  {
    segment: "it_procurement",
    title: "IT Procurement & Vendor Management",
    icon: <ShoppingCartIcon />,
    children: [
      { segment: "purchase_requests", title: "IT Purchase Requests", path: "/itMod/home/PurchaseRequests", icon: <ShoppingBasketIcon /> },
      { segment: "vendor_contracts", title: "Vendor Contracts & Agreements", path: "/itMod/home/VendorContracts", icon: <ReceiptIcon /> },
      { segment: "budget_analysis", title: "Budget & Cost Analysis", path: "/itMod/home/BudgetAnalysis", icon: <MonetizationOnIcon /> },
    ],
  },
  {
    segment: "development",
    title: "Development & Customization",
    icon: <CodeIcon />,
    children: [
      { segment: "erp_customization", title: "ERP Customization Tools", path: "/itMod/home/ERPCustomization", icon: <BrushIcon /> },
      { segment: "api_development", title: "API Development & Webhooks", path: "/itMod/home/APIDevelopment", icon: <ApiIcon /> },
      { segment: "devops", title: "DevOps & CI/CD Pipeline", path: "/itMod/home/DevOps", icon: <BuildIcon /> },
    ],
  },
  {
    segment: "reports",
    title: "Reports & Analytics",
    icon: <BarChartIcon />,
    children: [
      { segment: "performance", title: "IT Performance Reports", path: "/itMod/home/PerformanceReports", icon: <AssessmentIcon /> },
      { segment: "audit_reports", title: "Security Audit Reports", path: "/itMod/home/AuditReports", icon: <FindInPageIcon /> },
      { segment: "utilization", title: "Software & Hardware Utilization", path: "/itMod/home/Utilization", icon: <StorageIcon /> },
    ],
  },
];



// Function to get filtered menu items based on location
export const getMenuItems = (pathname) => {

  if( pathname.startsWith("/userMod") ){
    return userMenuItems;
  }else if( pathname.startsWith("/itMod") ){
    return itMenuItems;
  }
};

const MyComponent = () => {
  const location = useLocation();
  console.log(location.pathname);

  // Get filtered menu items
  const menuItems = getMenuItems(location.pathname);

  return null; // No UI is returned as per your request
};

export default MyComponent;


// const getTheme = (mode) =>
//   createTheme({
//     palette: {
//       mode, // "light" or "dark" mode
//       primary: {
//         main: mode === "dark" ? "#bb86fc" : "#008b8b",
//       },
//       secondary: {
//         main:
//             mode === "dark" ? "#bb86fc"
//           : mode === "light" ? alpha("#96f2d7", 0.8)
//           : "#000000",
//       },
//       background: {
//         default: mode === "dark" ? "#121212" : "#ffffff",
//         paper: mode === "dark" ? "#1d1d1d" : "#f9f9f9",
//       },
//     },
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 900, // fixed md breakpoint (was the same as sm)
//         lg: 1200,
//         xl: 1536,
//       },
//     },
//   });