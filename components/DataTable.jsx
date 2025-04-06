// src/components/DataTable.jsx
import React, { useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { ToggleButton, Paper, Box, Typography } from "@mui/material";

const DataTable = ({ columns, rows }) => {
  const [densePadding, setDensePadding] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);

  // Custom Toolbar for additional controls
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#2B2B2B" }}>
      {/* Container for Table and Dense Padding Toggle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Data Grid */}
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            density={densePadding ? "compact" : "standard"}
            components={{
              Toolbar: CustomToolbar,
            }}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            sx={{
              "& .MuiDataGrid-cell": {
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#3A3A3A",
                color: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 1,
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#4A4A4A",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#3A3A3A",
                color: "#fff",
              },
            }}
          />
        </div>

        {/* Dense Padding Toggle Button (Bottom-Left) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "8px",
            backgroundColor: "#2B2B2B",
            borderTop: "1px solid #4A4A4A",
          }}
        >
          <Typography variant="body2" sx={{ color: "#fff", mr: 1 }}>
            Dense Padding:
          </Typography>
          <ToggleButton
            value="densePadding"
            selected={densePadding}
            onChange={() => setDensePadding(!densePadding)}
            size="small"
            color="primary"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&.Mui-selected": {
                backgroundColor: "#4A4A4A",
                color: "#fff",
                borderColor: "#fff",
              },
            }}
          >
            {densePadding ? "On" : "Off"}
          </ToggleButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default DataTable;
