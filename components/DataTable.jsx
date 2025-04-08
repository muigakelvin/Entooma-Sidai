// src/components/DataTable.jsx
import React, { useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import {
  ToggleButton,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { green, red } from "@mui/material/colors";

const DataTable = ({ onRowClick, selectedMember }) => {
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

  // Sample data (replace with actual data)
  const rows = [
    {
      id: 1,
      fullName: "JOHNSON NG'ANG'A KAMAU",
      phoneNumber: "+254729916580",
      idNumber: "10881819",
      status: "Pending",
    },
    {
      id: 2,
      fullName: "GRACE WANJIKU MUMITA",
      phoneNumber: "+254725134576",
      idNumber: "5170197",
      status: "Pending",
    },
    // Add more sample data...
  ];

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 250 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "idNumber", headerName: "ID Number", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton onClick={() => onRowClick(params.row)}>
            <VisibilityIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <EditIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      ),
      width: 100,
    },
  ];

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

        {/* Detailed View Panel */}
        {selectedMember && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              bgcolor: "#2B2B2B",
              p: 3,
              zIndex: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Member Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography>Full Name:</Typography>
                <Typography>{selectedMember.fullName}</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography>ID Number:</Typography>
                <Typography>{selectedMember.idNumber}</Typography>
              </Box>
            </Box>
            {/* Add more details... */}

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Cookstove Details</Typography>
              {/* Add cookstove details... */}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Payments</Typography>
              {/* Add payments section... */}
            </Box>

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="error"
                sx={{ bgcolor: red[500], "&:hover": { bgcolor: red[700] } }}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ bgcolor: green[500], "&:hover": { bgcolor: green[700] } }}
              >
                Approve
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default DataTable;
