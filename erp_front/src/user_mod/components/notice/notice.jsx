import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Typography, Box, Button, Modal, TextField, Grid,
} from "@mui/material";

function NoticeReport() {
  const fakeData = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    notice: `Notice${index + 1}`,
    noticeDetails: `Notice details_${index + 1}`,
  }));

  const [rows, setRows] = useState(fakeData);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  const handleSubmit = () => {
    // Add submit logic here
  };

  const openUpdateModel = (row) => {
    setSelectedRow(row);
    handleOpen();
  };

  const updateModelSubmit = (e) => {
    e.preventDefault();
    if (selectedRow) {
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === selectedRow.id ? selectedRow : row))
      );
      handleClose();
    }
  };

  const modalStyle = {
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
    { field: 'id', headerName: 'Id', width: 350 },
    { field: 'notice', headerName: 'Notice', width: 350 },
    { field: 'noticeDetails', headerName: 'Notice Details', width: 350 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => openUpdateModel(params.row)}
          sx={{ padding: '4px 8px' }}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      {/* Title and Button Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h6" gutterBottom>Notice List</Typography>
        <Button variant="contained" onClick={handleOpen}>Add Notice Type</Button>
      </Box>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <form onSubmit={selectedRow === null ? handleSubmit : updateModelSubmit}>
            <Typography id="modal-title" variant="h6" gutterBottom>
              {selectedRow === null ? 'Add Request' : 'View Request'}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Request Type"
                  value={selectedRow?.notice || ''}
                  onChange={(e) =>
                    selectedRow && setSelectedRow({ ...selectedRow, notice: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Request Details"
                  value={selectedRow?.noticeDetails || ''}
                  onChange={(e) =>
                    selectedRow && setSelectedRow({ ...selectedRow, noticeDetails: e.target.value })
                  }
                  multiline
                  rows={4}
                />
              </Grid>
              {selectedRow === null && (
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </Grid>
              )}
            </Grid>
          </form>
        </Box>
      </Modal>

      {/* DataGrid Section (outside layout container) */}
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Box sx={{ minWidth: '1100px', height: 600 }}>
          {loadingFetch ? (
            <Typography>Loading...</Typography>
          ) : errorFetch ? (
            <Typography color="error">Error: {errorFetch}</Typography>
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

export default NoticeReport;
