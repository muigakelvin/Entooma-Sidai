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
      <GridToolbarContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
          backgroundColor: "#3A3A3A",
        }}
      >
        {/* Left-aligned toolbar buttons */}
        <Box sx={{ display: "flex", gap: "8px" }}>
          <GridToolbarColumnsButton
            sx={{
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          />
          <GridToolbarFilterButton
            sx={{
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          />
          <GridToolbarDensitySelector
            sx={{
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          />
        </Box>
      </GridToolbarContainer>
    );
  }

  // Custom Footer with Pagination and Dense Padding Toggle
  function CustomFooter() {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
          backgroundColor: "#3A3A3A",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Pagination Controls */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Rows per page: {rows.length}
          </Typography>
        </Box>

        {/* Dense Padding Toggle Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                borderColor: "#fff",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {densePadding ? "On" : "Off"}
          </ToggleButton>
        </Box>
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        bgcolor: "#2B2B2B",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Container for Table and Footer */}
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
            density={densePadding ? "compact" : "standard"} // Apply dense padding
            components={{
              Toolbar: CustomToolbar,
              Footer: CustomFooter, // Replace the default footer
            }}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            sx={{
              "& .MuiDataGrid-cell": {
                color: "#fff",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#3A3A3A",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#3A3A3A",
                color: "#fff",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </div>
      </Box>
    </Paper>
  );
};

export default DataTable;
