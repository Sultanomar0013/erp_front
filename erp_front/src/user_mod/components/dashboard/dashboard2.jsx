import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Paper, Skeleton, Badge,Divider } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
// import './dashboard.css';
import { styled } from '@mui/system'; // Import styled from MUI
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import WorkIcon from '@mui/icons-material/Work';

import { useTheme } from "@mui/material/styles";



const notices = [
  { title: "System Maintenance", date: "Feb 25, 2025", message: "The system will be under maintenance from 12 AM to 2 AM." },
  { title: "New Feature Release", date: "Feb 20, 2025", message: "We have launched a new inventory tracking module." },
  { title: "Holiday Notice", date: "Feb 15, 2025", message: "The office will remain closed on February 21st for International Mother Language Day." },
];

const Module = [
  { title: "User Mod", icon: <PeopleIcon style={{ fontSize: 50, color: 'blue' }} /> },
  { title: "It Mod", icon: <ComputerIcon style={{ fontSize: 50, color: 'green' }} /> },
  { title: "HR Mod", icon: <WorkIcon style={{ fontSize: 50, color: 'purple' }} /> },
];



const StyledCalendar = styled(Calendar)(({ theme }) => ({
  //background: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, ${theme.palette.primary.main} 100%)`, // Glacier effect with gradient
  background: theme.palette.primary.main,
  borderRadius: '15px',
  padding: '1rem',
  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
  width:'85%',


  '.react-calendar__tile': {
    color: 'white',
    transition: 'background-color 0.3s ease',
  },

  '.react-calendar__tile:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
  '.react-calendar__tile.off-day': {
    color: 'red',
  },
  '.react-calendar__tile--active': {
    background: 'black',
  }

}));




const statusData = {
  "2025-02-10": "present",
  "2025-02-11": "leave",
  "2025-02-12": "late",
  "2025-02-13": "off",
};



const statusStyles = {
  present: { backgroundColor: "green", color: "white" },
  leave: { backgroundColor: "red", color: "white" },
  late: { backgroundColor: "orange", color: "white" },
  off: { backgroundColor: "gray", color: "white" },
};


function Dashboard() {
  const [date, setDate] = useState(new Date());

  const markOffDays = ({ date, view }) => {
    // For example, highlighting weekends
    if (view === 'month') {
      const day = date.getDay();
      // Mark Saturday (6) and Sunday (0) as off days
      if (day === 0 || day === 6) {
        return 'off-day'; // You can style it with this class
      }
    }
  };

  const theme  = useTheme();


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading delay
  }, []);



  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >





    {/* zero section BreackPoints One : Title page */}
      <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "auto", lg: "20rem" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: theme.palette.secondary.main,
        borderRadius: 2,
        p: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >

          <Grid
            item
            xs={12} sm={6} md={4} // Responsive breakpoints
            display="flex"
            justifyContent="center"
          >
            <StyledCalendar
              onChange={setDate}
              value={date}
              tileClassName={markOffDays}
            />
          </Grid>

          <Grid
            item
            xs={12} sm={6} md={4} // Responsive breakpoints
            display="flex"
            justifyContent="center"
          >
            <Paper  elevation={6} sx={{ width:'85%',height:{ xs: "20rem", md: "20rem", lg: "20rem" },overflow: "hidden", padding: '10rem', backgroundColor: theme.palette.primary.main, color: 'white', borderRadius: '15px', p: 2 }}>
               {/* Notice Board Title */}
                <Typography sx={{ fontSize: "22px", fontWeight: "bold", mb: 2 }}>
                  📢 Notice Board
                </Typography>

                {/* Scrollable Notices */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                    pr: 1, // Prevents scrollbar overlap
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "6px" },
                  }}
                >
                  {notices.map((notice, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        {notice.title}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", fontStyle: "italic", opacity: 0.8 }}>
                        📅 {notice.date}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", mt: 1 }}>
                        {notice.message}
                      </Typography>
                      {index !== notices.length - 1 && <Divider sx={{ backgroundColor: "white", my: 1 }} />}
                    </Box>
                  ))}
                </Box>

            </Paper>

          </Grid>

          <Grid
            item
            xs={12} sm={6} md={4} // Responsive breakpoints
            display="flex"
            justifyContent="center"
          >
            <Paper   elevation={6} sx={{ width:'85%',height:{ xs: "20rem", md: "20rem", lg: "20rem" }, padding: '10rem', backgroundColor: theme.palette.primary.main, color: 'white', borderRadius: '15px', p: 2 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold",}}>
                {time.toLocaleTimeString()}
              </Typography>
              <Typography sx={{ fontSize: "16px", mt: 1 }}>
                🌍 Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </Typography>
            </Paper>
          </Grid>

      </Grid>
    </Box>




      {/* 🔹 First Section: Four Paper Cards with Skeleton */}
      <Grid container spacing={2} justifyContent="center" sx={{ width: "100%" }}>
      {Module.map((mod, index) => (
        <Grid key={index} item xs={5} sm={5} md={2} lg={2}>
          {loading ? (
            <Skeleton variant="rectangular" height={200} />
          ) : (
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                flexDirection: 'column',
                borderRadius: '20px',
              }}
            >
              {mod.icon}
              <Typography variant="h5">{mod.title}</Typography>
            </Paper>
          )}
        </Grid>
      ))}
    </Grid>




      {/* 🔹 Second Section: Four Divs */}
      <Grid container spacing={2} justifyContent="center" sx={{ width: "100%" }}>
  <Grid item key="salary-details" xs={12} sm={6} md={6} lg={3}>
    <Box
      sx={{
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        bgcolor: "primary.light",
        color: "primary.contrastText",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6">Salary Details</Typography>
    </Box>
  </Grid>

  <Grid item key="expense-claims" xs={12} sm={6} md={6} lg={3}>
    <Box
      sx={{
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        bgcolor: "success.light",
        color: "success.contrastText",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6">Expense Claims</Typography>
    </Box>
  </Grid>

  <Grid item key="invoice-processing" xs={12} sm={6} md={6} lg={3}>
    <Box
      sx={{
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        bgcolor: "warning.light",
        color: "warning.contrastText",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6">Invoice Processing Status</Typography>
    </Box>
  </Grid>
</Grid>



      {/* 🔹 Third Section: Graphs */}
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" textAlign="center">
          Analytics Overview
        </Typography>

        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" textAlign="center">
                Sales Bar Chart
              </Typography>
              <BarChart
                series={[{ data: [5, 10, 15, 20] }]}
                xAxis={[{ scaleType: "band", data: ["Q1", "Q2", "Q3", "Q4"] }]}
                width={400}
                height={300}
              />
            </Paper>
          </Grid>

          <Grid  xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" textAlign="center">
                Users Pie Chart
              </Typography>
              <PieChart
                series={[{ data: [{ value: 40 }, { value: 30 }, { value: 20 }, { value: 10 }] }]}
                width={400}
                height={300}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
