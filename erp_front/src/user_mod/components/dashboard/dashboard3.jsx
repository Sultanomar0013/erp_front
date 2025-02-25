import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { ShoppingBag, Person, ShoppingCart, Mail } from "@mui/icons-material";

const dashboardData = {
  weeklySales: 714000,
  newUsers: 1.35,
  purchaseOrders: 1.72,
  messages: 234,
  visits: [
    { name: "America", value: 43.8, color: "#007bff" },
    { name: "Asia", value: 31.3, color: "#ffb822" },
    { name: "Europe", value: 18.8, color: "#6f42c1" },
    { name: "Africa", value: 6.3, color: "#dc3545" },
  ],
  websiteVisits: [
    { month: "Jan", teamA: 40, teamB: 60 },
    { month: "Feb", teamA: 30, teamB: 50 },
    { month: "Mar", teamA: 20, teamB: 40 },
    { month: "Apr", teamA: 60, teamB: 70 },
    { month: "May", teamA: 70, teamB: 50 },
    { month: "Jun", teamA: 80, teamB: 40 },
    { month: "Jul", teamA: 30, teamB: 20 },
    { month: "Aug", teamA: 90, teamB: 60 },
    { month: "Sep", teamA: 60, teamB: 30 },
  ],
};

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Hi, Welcome back 👋
      </Typography>
      
      <Grid container spacing={3}>
        {[
          { title: "Weekly sales", value: `714k`, icon: <ShoppingBag />, color: "#dbeafe" },
          { title: "New users", value: `1.35m`, icon: <Person />, color: "#e9d5ff" },
          { title: "Purchase orders", value: `1.72m`, icon: <ShoppingCart />, color: "#fef3c7" },
          { title: "Messages", value: `234`, icon: <Mail />, color: "#fecaca" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: item.color, textAlign: "center" }}>
              <CardContent>
                {item.icon}
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Current Visits</Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={dashboardData.visits}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {dashboardData.visits.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Website Visits (+43% than last year)</Typography>
              <BarChart width={400} height={250} data={dashboardData.websiteVisits}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="teamA" fill="#003f7f" name="Team A" />
                <Bar dataKey="teamB" fill="#7fbfff" name="Team B" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
