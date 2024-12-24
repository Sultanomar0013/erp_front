import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
  Layers as LayersIcon,
  AddTwoTone as AddTwoToneIcon,
  ManTwoTone as ManTwoToneIcon,
  ManageAccountsTwoTone as ManageAccountsTwoToneIcon,
  WarehouseTwoTone as WarehouseTwoToneIcon,
  CategoryTwoTone as CategoryTwoToneIcon,
  Inventory2TwoTone as Inventory2TwoToneIcon
} from '@mui/icons-material';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import UserReport from '../components/userReport';
import UserAccessPage from '../report/user_access_report';
import Dashboard from "../components/dashboard";
import ProfilePanel from "../components/profileComponent/myProfile"



const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },

  {
    segment: "userAccess",
    title: "User Access Management",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "accessibility",
        title: "Accessibility",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/userAccess/accessibility",
      },
    ],
  },
  {
    segment: "myAccount",
    title: "My Account",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "myProfile",
        title: "My Profile",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/myProfile",
      },
      {
        segment: "updateProfile",
        title: "Update Profile",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/updateProfile",
      },
    ],
  },
  {
    segment: "myTeam",
    title: "My Team",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "myTeam",
        title: "Team Profile",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/myTeam",
      },
      {
        segment: "teamAttendance",
        title: "Team Attendance",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/teamAttendance",
      },
      {
        segment: "summaryReport",
        title: "Summary Report",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/summaryReport",
      },
    ],
  },
  {
    segment: "myTeam",
    title: "Member Basic Info",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "allMemberContacts",
        title: "All Member Contacts",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/allMemberContacts",
      },
    ],
  },
  {
    segment: "notice",
    title: "Notice",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "notice",
        title: "Notice",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/notice",
      },
    ],
  },
  {
    segment: "attendance",
    title: "Attendance",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "putAttendance",
        title: "Put Attendance",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/putAttendance",
      },
    ],
  },
  {
    segment: "contractualWorker",
    title: "Contractual Worker",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "defineHolidays",
        title: "Define Holidays",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/defineHolidays",
      },
      {
        segment: "workerList",
        title: "Worker List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/workerList",
      },
      {
        segment: "projectList",
        title: "Project List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/projectList",
      },
      {
        segment: "workerAttd",
        title: "Worker Attd.",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/workerAttd",
      },
      {
        segment: "report",
        title: "Report",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/report",
      },
      {
        segment: "projectManagement",
        title: "Project Management",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/projectManagement",
      },
      {
        segment: "leaveApproval",
        title: "Leave Approval",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/leaveApproval",
      },
      {
        segment: "memberApproval",
        title: "Member Approval",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/memberApproval",
      },
      {
        segment: "salaryReport",
        title: "Salary Report",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/salaryReport",
      },
      {
        segment: "manualAtt",
        title: "Manual Att(tmp)",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/manualAtt",
      },
      {
        segment: "workerAttReport",
        title: "Worker Att Reprort",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/workerAttReport",
      },
    ],
  },
  {
    segment: "documentSection",
    title: "Document Section",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "documentType",
        title: "Document Type",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/documentType",
      },
      {
        segment: "documentList",
        title: "Document List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/documentList",
      },
    ],
  },
  {
    segment: "meetingSchedule",
    title: "Meeting Schedule",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "meetingLocation",
        title: "Meeting Location",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/meetingLocation",
      },
      {
        segment: "createSchedule",
        title: "Create Schedule",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/createSchedule",
      },
      {
        segment: "scheduleLog",
        title: "Schedule Log",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/scheduleLog",
      },
    ],
  },
  {
    segment: "itSupport",
    title: "It Support",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "supportRequest",
        title: "Support Request",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/supportRequest",
      },
      {
        segment: "myDevices",
        title: "My Devices",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/myDevices",
      },
      {
        segment: "requestStatus",
        title: "Request Status",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/requestStatus",
      },
    ],
  },
  {
    segment: "hrAdminSupport",
    title: "HR & Admin Support",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "newRequest",
        title: "New Request",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/newRequest",
      },
      {
        segment: "requestStatus",
        title: "Request Status",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/requestStatus",
      },
    ],
  },
  {
    segment: "foodManagement",
    title: "Food Management",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "applyForToken",
        title: "Apply For Token",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/applyForToken",
      },
      {
        segment: "myFoodReport",
        title: "Food Report",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/myFoodReport",
      },
    ],
  },
  {
    segment: "projectReport",
    title: "Project Report",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "projectReport",
        title: "Project Report",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/projectReport",
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "My User Board",
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function DemoPageContent({ pathname }) {
  const [activePath, setActivePath] = useState(pathname);
console.log(activePath+" & "+pathname);
  // const [currentPath, setCurrentPath] = useState(pathname);

  // const handleButtonClick = (userId) => {
  //   setCurrentPath('/user-AccessReport/:userId');
  // };


  // useEffect(() => {
  //   setCurrentPath(pathname);
  // }, [pathname]);


  // if (currentPath === '/userAccess/accessibility') {
  //   return <UserReport onButtonClick={handleButtonClick} />;
  // } else if (currentPath.startsWith('/user-AccessReport/')) {
  //   return <UserAccessPage />;
  // }

  useEffect(() => {
    localStorage.setItem("lastPath", pathname);
    setActivePath(pathname);
  }, [pathname]);
  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath && lastPath !== activePath) {
      setActivePath(lastPath);
    }
  }, []);

  console.log(activePath);

  if (activePath === "/dashboard") {
    return <Dashboard />;
  } else if (activePath === "/myAccount/myProfile") {
    return <ProfilePanel />;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        // logo: <img src={Logo} alt="Custom Logo" style={{ height: '40px' }} />,
        title: 'Inventory'
      }}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {

};

export default DashboardLayoutBasic;
