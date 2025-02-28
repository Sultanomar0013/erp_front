import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
    Typography, Box, Button, CssBaseline, Modal, TextField,
    Grid,
} from "@mui/material";





function ItSupport() {

    const fakeData = Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        supportType: `Support Type 1${index + 1}`,
        supportDetails: `Support Type details_${index + 1}`,
    }));

    const [rows, setRows] = useState(fakeData);
    const [loadingFetch, setLoadingFetch] = useState(false);
    const [errorFetch, setErrorFetch] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => { setOpenModal(false); setSelectedRow(null) };

    const handleSubmit = () => {

    };

    const openupdateModel = (row) => {
        setSelectedRow(row);
        handleOpen();
    };

    const updateModelSubmit = (e) => {
        e.preventDefault();
        if (setSelectedRow) {
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
        { field: 'id', headerName: 'Id', width : 350 },
        { field: 'supportType', headerName: 'Support name',width : 350 },
        { field: 'supportDetails', headerName: 'Support Details',width : 350 },
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
                        Update
                    </Button>

                </Box>

            ),
        },
    ];

    return (
        <Box style={{ width: "100%" }}>



            <Box style={{ width: "100%", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Typography variant="h6" >Support Type List</Typography>

                <Box style={{ display: '', justifyItems: '' }}>
                    <Button variant="contained" onClick={handleOpen} >Add Support Type</Button>

                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={selectedRow === null ? handleSubmit : updateModelSubmit}>
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                    gutterBottom
                                    sx={{ paddingLeft: '10px' }}
                                >
                                    {selectedRow === null ? 'Add Support' : 'Update Support'}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sx={{ p: '10px' }}>
                                        <TextField
                                            fullWidth
                                            label="Support Type"
                                            name="supportType"
                                            value={selectedRow?.supportType || ''}
                                            onChange={(e) =>
                                                setSelectedRow
                                                    ? setSelectedRow({ ...selectedRow, supportType: e.target.value })
                                                    : null
                                            }
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ p: '10px' }}>
                                        <TextField
                                            fullWidth
                                            label="Support Type Details"
                                            name="supportDetails"
                                            value={selectedRow?.supportDetails || ''}
                                            onChange={(e) =>
                                                setSelectedRow
                                                    ? setSelectedRow({ ...selectedRow, supportDetails: e.target.value })
                                                    : null
                                            }
                                            multiline
                                            rows={4}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ p: '10px' }}>
                                        <Button type="submit" variant="contained" fullWidth>
                                            {selectedRow === null ? 'Submit' : 'Update'}
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

export default ItSupport;
