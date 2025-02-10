//main Dependencies
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";

//for theme
import { ThemeProvider } from "@mui/material";
import getTheme from '../components/theme/theme.jsx';

//common layput
import NavBar from "../../common/appBar";
import SideBar from "../../common/sideBar";

//component Layout
import Dashboard from "../components/dashboard";
import ProfilePanel from "../components/profileComponent/myProfile"
import MemberReport from "../components/member_basic/memberReport.jsx"
import NoticeReport from "../components/notice/notice.jsx"
import AttendanceComponent from '../components/attendance/attendance.jsx';
import DocAtt from '../components/docAttacment/docAtt.jsx';
import DocType from '../components/docAttacment/docType.jsx';
import MeetLocate from '../components/meeting/meetLocation.jsx';
import MeetSchedule from '../components/meeting/meetingSchedule.jsx';
import ItSupport from '../components/itSupport/itSupport.jsx';
import ItRequestStatus from '../components/itSupport/itRequeststatus.jsx';
import HrRequest from '../components/hrRequest/hrRequestList.jsx';

const MainHome = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


    const [mode, setMode] = useState("light");

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };


    return (

        <ThemeProvider theme={getTheme(mode)}>
            <CssBaseline />
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <NavBar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme}/>
                <SideBar open={sidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main content area */}
                <Box
                    component="main"
                    sx={{display: 'flex',
                        justifyContent:'center',
                        width:'100%',
                        p: 3,
                        mt: 8,
                        transition: "margin 0.3s",
                        overflow:'scroll',
                    }}
                >
                    <Routes>
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="ProfilePanel" element={<ProfilePanel />} />
                        <Route path="MemberReport" element={<MemberReport />} />
                        <Route path="NoticeReport" element={<NoticeReport />} />
                        <Route path="Attendance" element={<AttendanceComponent />} />
                        <Route path="DocAtt" element={<DocAtt />} />
                        <Route path="DocType" element={<DocType />} />
                        <Route path="MeetLocate" element={<MeetLocate />} />
                        <Route path="MeetSchedule" element={<MeetSchedule />} />
                        <Route path="ItRequestStatus" element={<ItRequestStatus />} />
                        <Route path="ItSupport" element={<ItSupport />} />
                        <Route path="HrRequest" element={<HrRequest />} />
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>

    );
};

export default MainHome;
