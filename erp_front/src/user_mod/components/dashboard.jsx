import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Dashboard() {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography>Welcome to the Dashboard!</Typography>
    </Box>
  );
}

export default Dashboard;