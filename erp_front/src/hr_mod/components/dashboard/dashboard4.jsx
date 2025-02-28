import React from 'react';
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import {
  PeopleOutline,
  Person,
  LocalHospital,
  DirectionsCar,
  Home,
  Favorite,
  Psychology,
  MedicalServices
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';

const barChartData = [
  { name: 'Oct 2022', inpatients: 1500, outpatients: 3200 },
  { name: 'Nov 2022', inpatients: 2100, outpatients: 3800 },
  { name: 'Dec 2022', inpatients: 800, outpatients: 4200 },
  { name: 'Jan 2023', inpatients: 1200, outpatients: 3000 },
  { name: 'Feb 2023', inpatients: 1800, outpatients: 3600 },
  { name: 'Mar 2023', inpatients: 900, outpatients: 4100 }
];

const timeData = [
  { time: '08 am', patients: 80 },
  { time: '09 am', patients: 120 },
  { time: '10 am', patients: 90 },
  { time: '11 am', patients: 100 },
  { time: '12 pm', patients: 130 },
  { time: '01 pm', patients: 110 },
  { time: '02 pm', patients: 140 },
  { time: '03 pm', patients: 120 },
  { time: '04 pm', patients: 100 }
];

const genderData = [
  { name: 'Female', value: 71 },
  { name: 'Male', value: 29 }
];

const monthlyTrendData = [
  { name: '14', patients: 2900 },
  { name: '15', patients: 3100 },
  { name: '16', patients: 3300 },
  { name: '17', patients: 3000 },
  { name: '18', patients: 3200 },
  { name: '19', patients: 3240 }
];

const divisions = [
  { name: 'General', patients: 293, icon: <Home /> },
  { name: 'Cardiology', patients: 247, icon: <Favorite /> },
  { name: 'Neurology', patients: 164, icon: <Psychology /> },
  { name: 'Surgery', patients: 86, icon: <MedicalServices /> }
];

const Dashboard = () => {
  const theme = useTheme();

  const COLORS = ['#FF8042', '#8884d8'];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
            <Avatar sx={{ bgcolor: '#EDE7F6', color: '#673AB7', mr: 2 }}>
              <PeopleOutline />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="text.primary">3,256</Typography>
              <Typography variant="body2" color="text.secondary">Total Patients</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
            <Avatar sx={{ bgcolor: '#E3F2FD', color: '#2196F3', mr: 2 }}>
              <Person />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="text.primary">394</Typography>
              <Typography variant="body2" color="text.secondary">Available Staff</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
            <Avatar sx={{ bgcolor: '#FFF3E0', color: '#FF9800', mr: 2 }}>
              <LocalHospital />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="text.primary">$2,536</Typography>
              <Typography variant="body2" color="text.secondary">Avg Treat. Costs</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
            <Avatar sx={{ bgcolor: '#F3E5F5', color: '#E91E63', mr: 2 }}>
              <DirectionsCar />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight="bold" color="text.primary">38</Typography>
              <Typography variant="body2" color="text.secondary">Available Cars</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Charts Row */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" color="text.primary">Outpatients vs. Inpatients Trend</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>Show by:</Typography>
                <Paper sx={{ px: 1.5, py: 0.5, bgcolor: '#673AB7', color: 'white', borderRadius: 4 }}>
                  <Typography variant="caption">months</Typography>
                </Paper>
              </Box>
            </Box>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inpatients" fill="#8884d8" name="Inpatients" />
                <Bar dataKey="outpatients" fill="#82ca9d" name="Outpatients" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>Patients by Gender</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: 300, alignItems: 'center' }}>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: COLORS[1], mr: 1 }} />
                <Typography variant="body2">Female</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: COLORS[0], mr: 1 }} />
                <Typography variant="body2">Male</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Time Row */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" color="text.primary">Time Admitted</Typography>
              <Typography variant="body2" color="text.secondary">Today</Typography>
            </Box>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={timeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#FF9800"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8, fill: '#FF9800' }}
                />
              </LineChart>
            </ResponsiveContainer>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: -100,
                  left: '35%',
                  bgcolor: 'black',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: 12
                }}
              >
                121
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>Patients By Division</Typography>
            {divisions.map((division, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: '#EDE7F6', color: '#673AB7', mr: 1, width: 32, height: 32 }}>
                      {division.icon}
                    </Avatar>
                    <Typography variant="body2">{division.name}</Typography>
                  </Box>
                  <Typography variant="body2" fontWeight="medium">{division.patients}</Typography>
                </Box>
                {index < divisions.length - 1 && <Divider />}
              </Box>
            ))}
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%', bgcolor: '#673AB7', color: 'white' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>3,240</Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>Patients this month</Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" align="right" sx={{ mb: 0 }}>232</Typography>
            </Box>

            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={monthlyTrendData}>
                <defs>
                  <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Line type="monotone" dataKey="patients" stroke="#FFFFFF" dot={false} strokeWidth={2} />
                <Area type="monotone" dataKey="patients" stroke="#FFFFFF" fillOpacity={1} fill="url(#colorPatients)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;