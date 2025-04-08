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
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { green, red } from "@mui/material/colors";

const DataTable = ({ columns, rows, selectedMember }) => {
  const [densePadding, setDensePadding] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);

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
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Rows per page: {rows.length}
          </Typography>
        </Box>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            density={densePadding ? "compact" : "standard"}
            components={{
              Toolbar: CustomToolbar,
              Footer: CustomFooter,
            }}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            sx={{
              "& .MuiDataGrid-cell": {
                color: "#E0E0E0",
                fontSize: "14px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#3A3A3A",
                color: "#E0E0E0",
                fontSize: "14px",
                fontWeight: 600,
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#3A3A3A",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </div>
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
              borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#E0E0E0" }}>
              Member Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: "#A0A0A0" }}>
                  Full Name:
                </Typography>
                <Typography sx={{ color: "#E0E0E0" }}>
                  {selectedMember.fullName}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: "#A0A0A0" }}>
                  ID Number:
                </Typography>
                <Typography sx={{ color: "#E0E0E0" }}>
                  {selectedMember.idNumber}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "#A0A0A0" }}>
                Status:
              </Typography>
              <Typography sx={{ color: "#E0E0E0" }}>
                {selectedMember.status}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "#A0A0A0" }}>
                Cookstove Serial:
              </Typography>
              <Typography sx={{ color: "#E0E0E0" }}>
                {selectedMember.cookstoveSerialNumber}
              </Typography>
            </Box>
            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  bgcolor: "#FF4444",
                  "&:hover": { bgcolor: "#CC3333" },
                }}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{
                  bgcolor: "#4CAF50",
                  "&:hover": { bgcolor: "#45A049" },
                }}
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
