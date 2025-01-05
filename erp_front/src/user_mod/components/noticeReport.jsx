
import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

function UserReport({ onButtonClick }) {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'User Id', width: 150 },
    { field: 'userName', headerName: 'User Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => onButtonClick(params.row.id)}
          style={{ padding: '4px 8px', cursor: 'pointer' }}
        >
          Give Access
        </button>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
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

    </div>
  );
}

export default UserReport;
