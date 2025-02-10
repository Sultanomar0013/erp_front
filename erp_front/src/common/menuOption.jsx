import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";

// Define all menu items
const allMenuItems = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon />, path: "/userMod/home/Dashboard" },
  { segment: "user_access", title: "User Access", icon: <DashboardIcon />, path: "/userMod/home/UserAccess" },
  {
    segment: "my_account",
    title: "My Account",
    icon: <CodeIcon />,
    children: [
      { segment: "profile", title: "My Profile", path: "/userMod/home/ProfilePanel", icon: <StarIcon /> },
      { segment: "update_profile", title: "Update Profile", path: "/userMod/home/UpdateProfile", icon: <StarIcon /> },
    ],
  },
  { segment: "member_info", title: "Member Basic Info", icon: <SettingsIcon />, path: "/userMod/home/MemberBasicInfo" },
  { segment: "notice", title: "Notice", icon: <SettingsIcon />, path: "/userMod/home/NoticeReport" },
  { segment: "attendance", title: "Attendance", icon: <SettingsIcon />, path: "/userMod/home/Attendance" },
  {
    segment: "document",
    title: "Document",
    icon: <CodeIcon />,
    children: [
      { segment: "doc_type", title: "Document Type", path: "/userMod/home/DocType", icon: <StarIcon /> },
      { segment: "doc_list", title: "Document List", path: "/userMod/home/DocAtt", icon: <StarIcon /> },
    ],
  },
  {
    segment: "meeting",
    title: "Meeting Schedule",
    icon: <CodeIcon />,
    children: [
      { segment: "meet_location", title: "Meeting Location", path: "/userMod/home/MeetLocate", icon: <StarIcon /> },
      { segment: "meet_schedule", title: "Create Schedule", path: "/userMod/home/MeetSchedule", icon: <StarIcon /> },
    ],
  },
  {
    segment: "it_support",
    title: "IT Support",
    icon: <CodeIcon />,
    children: [
      { segment: "it_request", title: "IT Request Status", path: "/userMod/home/ItRequestStatus", icon: <PersonIcon /> },
      { segment: "it_list", title: "IT Support List", path: "/userMod/home/ItSupport", icon: <SettingsIcon /> },
    ],
  },
  { segment: "hr_support", title: "HR & Admin Support", icon: <SettingsIcon />, path: "/userMod/home/HrRequest" },
];

// Function to get filtered menu items based on location
export const getMenuItems = (pathname) => {
  return pathname.startsWith("/userMod") ? allMenuItems : [];
};

const MyComponent = () => {
  const location = useLocation();
  console.log(location.pathname);

  // Get filtered menu items
  const menuItems = getMenuItems(location.pathname);

  return null; // No UI is returned as per your request
};

export default MyComponent;
