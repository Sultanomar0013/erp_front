import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Typography, Box, Button, CssBaseline, Modal, TextField,
  Grid,
} from "@mui/material";





function MemberReport({ onButtonClick }) {

  const fakeData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    userName: `User_${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));

  const [rows, setRows] = useState(fakeData); // Set fake data as initial rows
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    handleClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { field: 'id', headerName: 'User Id', flex: 1 },
    { field: 'userName', headerName: 'User Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
    <Box style={{ width: "100%" }}>



      <Box style={{ width: "100%", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>

        <Typography variant="h6" >Member List Info</Typography>

        <Box style={{ display: '', justifyItems: '' }}>
          <Button variant="contained" onClick={handleOpen} >Add Member</Button>

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>

              <form onSubmit={handleSubmit}  >
                <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ paddingLeft: '10px' }}>
                  Add Notice
                </Typography>
                <Grid container  >
                  <Grid item xs={12} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Notice"
                      name="notice"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Date"
                      name="date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Time"
                      name="time"
                      type="time"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ p: '10px' }}>
                    <Button type="submit" variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>
        </Box>

        <Box style={{ height: 600, width: "95%" }}>
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
