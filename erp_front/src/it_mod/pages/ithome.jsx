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
import UserReport from '../components/userReport.jsx';
import UserAccessPage from '../report/user_access_report.jsx';
import Dashboard from "../components/dashboard.jsx";
import ProfilePanel from "../components/profileComponent/myProfile.jsx"
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
    title: "IT Moudle",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },

  {
    segment: "roleAssign",
    title: "Role Assign",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "projectModuleROle",
        title: "Project Module Role",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/roleAssign/projectModuleROle",
      },
      {
        segment: "accountModuleROle",
        title: "Account Module Role",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/roleAssign/accountModuleROle",
      },
      {
        segment: "inventoryModuleROle",
        title: "Inventory Module Role",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/roleAssign/inventoryModuleROle",
      },
      {
        segment: "hrModuleROle",
        title: "HR Module Role",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/roleAssign/hrModuleROle",
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
        path: "/itSupport/supportRequest",
      },
      {
        segment: "deviceHardware",
        title: "Device & Hardware",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/itSupport/deviceHardware",
      },
      {
        segment: "erpDevLog",
        title: "ERP Dev Log",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/itSupport/erpDevLog",
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
    segment: "itNotice",
    title: "IT Notice",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "itNoticeList",
        title: "IT Notice List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/itNotice/itNoticeList",
      },
    ],
  },
  {
    segment: "attendanceManagement",
    title: "Attendance Management",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "manualAttendance",
        title: "Manual Attendance",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/attendanceManagement/manualAttendance",
      },
      {
        segment: "attendanceNotification",
        title: "Attendance Notification",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/attendanceManagement/attendanceNotification",
      },
    ],
  },
  {
    segment: "smsPanel",
    title: "SMS Panel",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "smsList",
        title: "SMS List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/smsPanel/smsList",
      },
    ],
  },
  {
    segment: "emailPanel",
    title: "Email Panel",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "emaiList",
        title: "Email List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/emailPanel/emaiList",
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "My IT Board",
  },
];

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
