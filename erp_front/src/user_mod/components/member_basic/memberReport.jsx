import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Typography, Box, Button , CssBaseline} from "@mui/material";





function MemberReport({ onButtonClick }) {

  const fakeData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    userName: `User_${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));

  const [rows, setRows] = useState(fakeData); // Set fake data as initial rows
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);

  const columns = [
    { field: 'id', headerName: 'User Id', flex: 1 },
    { field: 'userName', headerName: 'User Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Box sx={{display : 'flex',justifyContent : 'center',alignItems: 'center', height:'100%'}}>
          <Button variant="contained"
          onClick={() => onButtonClick(params.row.id)}
          style={{ padding: '4px 8px', cursor: 'pointer' }}
        >
          Give Access
        </Button>

        </Box>

      ),
    },
  ];

  return (
    <Box style={{ width: "100%"}}>



    <Box style={{  width: "100%", flexDirection:"column" ,display:"flex", justifyContent:"center", alignItems:"center" }}>

        <Typography variant="h6" >Member List Info</Typography>

        <div style={{display:'', justifyItems:''}}>
        <Button variant="contained" >Add Member</Button>
        </div>

        <Box style={{ height: 600, width: "95%"}}>
            {loadingFetch ? (
              <p>Loading...</p>
            ) : errorFetch ? (
              <p>Error: {errorFetch}</p>
            ) : (
              <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                loading={loadingFetch}
                slots={{ toolbar: GridToolbar }}
                initialState={{
                  pagination: { paginationModel: { pageSize: 10, page: 0 } },
                }}
                pageSizeOptions={[10, 20, 50]}
              />
            )}
          </Box>

    </Box>

    </Box>

  );
}

export default MemberReport;
