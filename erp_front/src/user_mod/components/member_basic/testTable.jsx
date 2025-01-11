import * as React from 'react';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function ResponsiveDataGrid() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const fakeData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    userName: `User_${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));

  const startIndex = paginationModel.page * paginationModel.pageSize;
  const endIndex = startIndex + paginationModel.pageSize;
  const rows = fakeData.slice(startIndex, endIndex);

  const rowCount = fakeData.length;

  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', flex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 'auto', width: '100%', flex: 1 }}>
        <Box sx={{ height: 400, width: '90%' }}>
          <DataGrid
            rows={rows}
            columns={[
              { field: 'id', headerName: 'ID', flex: 1 },
              { field: 'userName', headerName: 'User Name', flex: 1 },
              { field: 'email', headerName: 'Email', flex: 2 },
            ]}
            rowCount={rowCount}
            paginationModel={paginationModel}
            paginationMode="client"
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
            components={{
              Toolbar: QuickSearchToolbar,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 1,
        pb: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}
