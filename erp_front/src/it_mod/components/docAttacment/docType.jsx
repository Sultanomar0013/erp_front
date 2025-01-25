import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Typography, Box, Button, CssBaseline, Modal, TextField,
  Grid,
} from "@mui/material";





function DocType({ onButtonClick }) {

  const fakeData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    docType: `docType_${index + 1}`,
    docTypeDetails: `type Details__${index + 1}`,
  }));

  const [rows, setRows] = useState(fakeData); // Set fake data as initial rows
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {setOpenModal(false); setSelectedRow(null)};

  const handleSubmit = () => {
    
  };

  const openupdateModel = (row) =>{
    setSelectedRow(row);
    handleOpen();
  }; 

  const updateModelSubmit = (e) =>{
    e.preventDefault();
    if(setSelectedRow){
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === selectedRow.id ? selectedRow : row))
      );
      handleClose();
    }
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
    { field: 'id', headerName: 'Type Id', flex: 1 },
    { field: 'docType', headerName: 'Type', flex: 1 },
    { field: 'docTypeDetails', headerName: 'Type Details', flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Button variant="contained"
            onClick={() => openupdateModel(params.row)}
            style={{ padding: '4px 8px', cursor: 'pointer' }}
          >
            Update Type
          </Button>

        </Box>

      ),
    },
  ];

  return (
    <Box style={{ width: "100%" }}>



      <Box style={{ width: "100%", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>

        <Typography variant="h6" >Document Type</Typography>

        <Box style={{ display: '', justifyItems: '' }}>
          <Button variant="contained" onClick={handleOpen} >Add Doc Type</Button>

          <Modal 
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            {selectedRow === null && (
                <form onSubmit={handleSubmit}  >
                <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ paddingLeft: '10px' }}>
                  Add Document
                </Typography>
                <Grid container  >
                  <Grid item xs={12} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Doc Type Name"
                      name="docType"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ p: '10px' }}>
                    <TextField
                      fullWidth
                      label="Type Details"
                      name="docTypeDetails"
                      multiline
                      rows={4}
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

            ) }
            {selectedRow != null && (
              <form onSubmit={updateModelSubmit}  >
              <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ paddingLeft: '10px' }}>
                Update Document
              </Typography>
              <Grid container  >
                <Grid item xs={12} sx={{ p: '10px' }}>
                  <TextField
                    fullWidth
                    label="Doc Type Name"
                    name="docType"
                    value={selectedRow?.docType || ''}
                    onChange={(e) => setSelectedRow({...selectedRow, docType:e.target.value})}  
                    required
                  />
                </Grid>

                <Grid item xs={12} sx={{ p: '10px' }}>
                  <TextField
                    fullWidth
                    label="Type Details"
                    name="docTypeDetails"
                    value={selectedRow?.docTypeDetails || ''}
                    onChange={(e) => setSelectedRow({...selectedRow, docTypeDetails:e.target.value})}  
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12} sx={{ p: '10px' }}>
                  <Button type="submit" variant="contained" fullWidth>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>

            )}
              
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

export default DocType;
