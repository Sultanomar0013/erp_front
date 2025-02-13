import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Paper, Skeleton } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts"; // Assuming you're using MUI X Charts

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading delay
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
      {/* 🔹 First Section: Four Paper Cards with Skeleton */}
      <Grid container spacing={2} justifyContent="center" sx={{ width: "100%" }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item xs={12} sm={6} md={6} lg={3}>
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
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Typography variant="h5">"Lorem {item}"</Typography>
              </Paper>
            )}
          </Grid>
        ))}
      </Grid>

      {/* 🔹 Second Section: Four Divs */}
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item xs={12} sm={6} md={6} lg={3}>
            <Box
              sx={{
                height: 150,
                backgroundColor: "#e3f2fd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">Section {item}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 🔹 Third Section: Graphs */}
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" textAlign="center">
          Analytics Overview
        </Typography>

        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" textAlign="center">
                Sales Bar Chart
              </Typography>
              <BarChart
                series={[{ data: [5, 10, 15, 20] }]}
                xAxis={[{ scaleType: "band", data: ["Q1", "Q2", "Q3", "Q4"] }]}
                width={'100%'}
                height={300}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
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
