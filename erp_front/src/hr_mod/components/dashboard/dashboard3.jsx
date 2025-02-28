import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Select,
  MenuItem,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip,
  Divider,
  Avatar
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  MenuBook as MenuBookIcon,
  School as SchoolIcon,
  Group as GroupIcon
} from '@mui/icons-material';

const Dashboard = () => {
  // Sample data
  const stats = [
    { icon: <MenuBookIcon />, label: "Completed courses", value: 40 },
    { icon: <SchoolIcon />, label: "Student score", value: 60 },
    { icon: <GroupIcon />, label: "Community score", value: 84 }
  ];

  const progressData = [
    { day: 'Sun', current: 20, total: 30 },
    { day: 'Mon', current: 25, total: 35 },
    { day: 'Tue', current: 30, total: 40 },
    { day: 'Wed', current: 20, total: 30 },
    { day: 'Thu', current: 25, total: 35 },
    { day: 'Fri', current: 30, total: 40 },
  ];

  const courses = [
    { id: "01", title: "User Experience design", lessons: 12, progress: 60 },
    { id: "01", title: "Game UI design", lessons: 10, progress: 20 }
  ];

  const assignments = [
    { title: "Requirements documentation", status: "complete", dueDate: "3 hours left" },
    { title: "User Research plan", status: "complete", dueDate: "25 minutes left" },
    { title: "User persona", status: "pending", dueDate: "1 week 2 hours left" },
    { title: "Low-Fidelity Wireframe", status: "pending", dueDate: "2 weeks 5 hours left" }
  ];

  // Calendar data
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const calendarStart = 30; // Starting from previous month
  const currentMonth = "January";

  return (
    <Box sx={{ bgcolor: '#f5f7fa', p: 3, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">Welcome back, Emma!</Typography>
          <Typography variant="body2" color="text.secondary">Here's your study</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: 'white', color: '#666' }}>
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="h5" fontWeight="bold">{stat.value}</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>{stat.label}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Progress Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Progress</Typography>
              <Select
                size="small"
                defaultValue="this-week"
                sx={{ fontSize: '0.8rem', height: '30px' }}
              >
                <MenuItem value="this-week">This week</MenuItem>
                <MenuItem value="last-week">Last week</MenuItem>
                <MenuItem value="this-month">This month</MenuItem>
              </Select>
            </Box>

            <Box sx={{ display: 'flex', height: 150, alignItems: 'flex-end', gap: 1 }}>
              {progressData.map((item, index) => (
                <Box key={index} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ width: '16px', height: `${item.total}px`, bgcolor: '#ffd580', borderRadius: '4px 4px 0 0' }}></Box>
                  <Box
                    sx={{
                      width: '16px',
                      height: `${item.current}px`,
                      bgcolor: '#4285f4',
                      mt: `-${item.current}px`,
                      borderRadius: '4px 4px 0 0'
                    }}
                  ></Box>
                  <Typography variant="caption" sx={{ mt: 1, fontSize: '0.7rem' }}>{item.day}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Courses */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">My courses</Typography>
                <Chip label="1" size="small" sx={{ ml: 1, height: '20px', bgcolor: '#f0f0f0' }} />
              </Box>
              <Typography variant="body2" color="primary">View all</Typography>
            </Box>

            <Box sx={{ position: 'relative' }}>
              <IconButton
                sx={{ position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)', bgcolor: 'white', boxShadow: 1 }}
                size="small"
              >
                <NavigateBeforeIcon />
              </IconButton>

              <Grid container spacing={2}>
                {courses.map((course, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                      <CardContent>
                        <Typography variant="caption" color="text.secondary">{course.id}</Typography>
                        <Typography variant="subtitle1" fontWeight="bold">{course.title}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                          <Typography variant="caption">{course.lessons} lessons</Typography>
                          <Typography variant="caption">{course.progress}%</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={course.progress}
                          sx={{
                            mt: 1,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: '#f0f0f0',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#4285f4'
                            }
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <IconButton
                sx={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', bgcolor: 'white', boxShadow: 1 }}
                size="small"
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Calendar */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Upcoming Agenda</Typography>
              <Select
                size="small"
                defaultValue="january"
                sx={{ fontSize: '0.8rem', height: '30px' }}
              >
                <MenuItem value="january">January</MenuItem>
                <MenuItem value="february">February</MenuItem>
                <MenuItem value="march">March</MenuItem>
              </Select>
            </Box>

            <Table size="small">
              <TableBody>
                <TableRow>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <TableCell key={day} align="center" sx={{ color: '#999', fontSize: '0.7rem', border: 'none', p: 1 }}>
                      {day}
                    </TableCell>
                  ))}
                </TableRow>

                {[0, 1, 2, 3, 4].map((week) => (
                  <TableRow key={week}>
                    {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                      const dayNumber = calendarStart + week * 7 + day;
                      const isCurrentMonth = dayNumber > 31 ? dayNumber - 31 : dayNumber < 1 ? 31 + dayNumber : dayNumber;
                      const isToday = isCurrentMonth === 3;

                      return (
                        <TableCell
                          key={day}
                          align="center"
                          sx={{
                            p: 1,
                            border: 'none',
                            color: dayNumber > 31 || dayNumber < 1 ? '#ccc' : 'inherit',
                            bgcolor: isToday ? '#e3efff' : 'transparent',
                            borderRadius: isToday ? '50%' : 0,
                            width: '36px',
                            height: '36px'
                          }}
                        >
                          {isCurrentMonth}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Assignments */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">Assignments</Typography>
                <Chip label="20" size="small" sx={{ ml: 1, height: '20px', bgcolor: '#f0f0f0' }} />
              </Box>
              <Typography variant="body2" color="primary">3/6 Complete</Typography>
            </Box>

            {assignments.map((assignment, index) => (
              <React.Fragment key={index}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
                  <Box>
                    <Typography variant="body2">{assignment.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{assignment.dueDate}</Typography>
                  </Box>
                  {assignment.status === 'complete' ? (
                    <CheckCircleIcon color="primary" sx={{ fontSize: 24 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ color: '#ddd', fontSize: 24 }} />
                  )}
                </Box>
                {index < assignments.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;