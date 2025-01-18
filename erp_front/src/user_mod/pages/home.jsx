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
import MemberReport from "../components/member_basic/memberReport.jsx"
import NoticeReport from "../components/notice/notice.jsx"
import defaultTheme from '../components/theme/theme.jsx';
import AttendanceComponent from '../components/attendance/attendance.jsx';
import DocAtt from '../components/docAttacment/docAtt.jsx';
import DocType from '../components/docAttacment/docType.jsx';
import MeetLocate from '../components/meeting/meetLocation.jsx';
import MeetSchedule from '../components/meeting/meetingSchedule.jsx';
import ItSupport from '../components/itSupport/itSupport.jsx';
import ItRequestStatus from '../components/itSupport/itRequeststatus.jsx';
import HrRequest from '../components/hrRequest/hrRequestList.jsx';

const NAVIGATION = [
  {
    kind: "header",
    title: "User Moudle",
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
    segment: "memberBasicInfo",
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
      // {
      //   segment: "scheduleLog",
      //   title: "Schedule Log",
      //   icon: <ManageAccountsTwoToneIcon />,
      //   path: "/scheduleLog",
      // },
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
      // {
      //   segment: "myDevices",
      //   title: "My Devices",
      //   icon: <ManageAccountsTwoToneIcon />,
      //   path: "/myDevices",
      // },
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

// const demoTheme = defaultTheme;

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: {
//     light: {
//       palette: {
//         mode: 'light',
//         primary: {
//           main: '#1976d2',
//         },
//         background: {
//           default: '#ffffff',
//           paper: '#f9f9f9',
//         },
//       },
//     },
//     dark: {
//       palette: {
//         mode: 'dark',
//         primary: {
//           main: '#bb86fc',
//         },
//         background: {
//           default: '#121212',
//           paper: '#1d1d1d',
//         },
//       },
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });


function DemoPageContent({ pathname }) {

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

  const [activePath, setActivePath] = useState(pathname);
  // console.log(activePath+" & "+pathname);
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

  // console.log(activePath);

  if (activePath === "/dashboard") {
    return <Dashboard />;
  } else if (activePath === "/myAccount/myProfile") {
    return <ProfilePanel />;
  } else if (activePath === "/memberBasicInfo/allMemberContacts") {
    return <MemberReport onButtonClick={(id) => console.log("Clicked on:", id)} />
  } else if (activePath === "/notice/notice") {
    return <NoticeReport />
  } else if (activePath === "/attendance/putAttendance") {
    return <AttendanceComponent />
  } else if (activePath === "/documentSection/documentList") {
    return <DocAtt />
  } else if (activePath === "/documentSection/documentType") {
    return <DocType />
  } else if (activePath === "/meetingSchedule/meetingLocation") {
    return <MeetLocate />
  } else if (activePath === "/meetingSchedule/createSchedule") {
    return <MeetSchedule />
  } else if (activePath === "/itSupport/supportRequest") {
    return <ItSupport />
  } else if (activePath === "/itSupport/requestStatus") {
    return <ItRequestStatus />
  }else if (activePath === "/hrAdminSupport/newRequest") {
    return <HrRequest />
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

  const lastPath = localStorage.getItem("lastPath");
  const router = useDemoRouter(lastPath);

  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath && lastPath !== router.pathname) {
      router.navigate(lastPath);
    }
  }, [router]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={defaultTheme}
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
