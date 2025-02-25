import React from 'react';
import { 
  Box, 
  Card, 
  Grid, 
  Typography, 
  useTheme, 
  Paper,
  Container
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const theme = useTheme();

  // Data for the cards
  const cardData = [
    { 
      title: 'Weekly sales',
      value: '714k',
      change: '+2.6%',
      positive: true,
      color: '#e3f2fd',
      textColor: '#1e88e5',
      icon: <ShoppingBagIcon />,
      chartData: [40, 70, 60, 90, 80, 90, 85]
    },
    { 
      title: 'New users',
      value: '1.35m',
      change: '-0.1%',
      positive: false,
      color: '#f3e5f5',
      textColor: '#9c27b0',
      icon: <PersonIcon />,
      chartData: [40, 60, 75, 50, 80, 60, 50]
    },
    { 
      title: 'Purchase orders',
      value: '1.72m',
      change: '+2.8%',
      positive: true,
      color: '#fff8e1',
      textColor: '#ffa000',
      icon: <ShoppingCartIcon />,
      chartData: [60, 70, 80, 60, 75, 65, 75]
    },
    { 
      title: 'Messages',
      value: '234',
      change: '+3.6%',
      positive: true,
      color: '#ffebee',
      textColor: '#e53935',
      icon: <EmailIcon />,
      chartData: [40, 50, 35, 70, 45, 60, 80]
    }
  ];

  // Data for the pie chart
  const regionData = [
    { name: 'America', value: 43.8, color: '#1e88e5' },
    { name: 'Asia', value: 31.3, color: '#ffa000' },
    { name: 'Europe', value: 18.8, color: '#6a1b9a' },
    { name: 'Africa', value: 6.3, color: '#e53935' }
  ];

  // Data for the bar chart
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const visitData = monthNames.map(month => {
    // Generate some random data that somewhat matches the example
    const teamAValue = Math.floor(Math.random() * 40) + 20;
    const teamBValue = Math.floor(Math.random() * 40) + 30;
    return {
      month,
      'Team A': teamAValue,
      'Team B': teamBValue
    };
  });

  // Custom mini line chart for cards
  const MiniLineChart = ({ data, color }) => {
    return (
      <svg width="60" height="30" viewBox="0 0 60 30">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={data.map((value, index) => `${index * (60 / (data.length - 1))},${30 - (value / 100) * 30}`).join(' ')}
        />
      </svg>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Hi, Welcome back 👋
      </Typography>
      
      {/* Stat Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                p: 2, 
                bgcolor: card.color,
                borderRadius: 2,
                boxShadow: 'none',
                position: 'relative',
                overflow: 'visible' 
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ color: card.textColor, p: 1, borderRadius: '50%', bgcolor: 'white' }}>
                  {card.icon}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {card.positive ? (
                    <ArrowUpwardIcon fontSize="small" sx={{ color: 'success.main' }} />
                  ) : (
                    <ArrowDownwardIcon fontSize="small" sx={{ color: 'error.main' }} />
                  )}
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: card.positive ? 'success.main' : 'error.main',
                      fontWeight: 'medium'
                    }}
                  >
                    {card.change}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="subtitle2" color="text.secondary">
                {card.title}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  {card.value}
                </Typography>
                <MiniLineChart data={card.chartData} color={card.textColor} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3}>
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Current visits</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexWrap: 'wrap' }}>
              {regionData.map((region, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: 1, my: 0.5 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: region.color,
                      mr: 0.5
                    }}
                  />
                  <Typography variant="caption">{region.name}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Website visits</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              (+43%) than last year
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Team A" fill="#1e88e5" />
                  <Bar dataKey="Team B" fill="#90caf9" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: '#1e88e5',
                    mr: 0.5
                  }}
                />
                <Typography variant="caption">Team A</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: '#90caf9',
                    mr: 0.5
                  }}
                />
                <Typography variant="caption">Team B</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
