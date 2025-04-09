import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  Grid,
  Tooltip,
  TextField,
  Button,
  InputAdornment,
  Icon,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FilterListIcon from "@mui/icons-material/FilterList";
import "../index.css";

const initialRows = [
  {
    id: 2,
    communityMember: "Jane Roe",
    idNumber: "987654321",
    phoneNumber: "+0987654321",
    landSize: "30",
    communityName: "Community B",
    sublocation: "Subloc B",
    location: "Loc B",
    fieldCoordinator: "John Doe",
    dateSigned: "2023-10-02",
    signedLocal: "No",
    signedOrg: "Yes",
    witnessLocal: "Witness B",
    loiDocument: "Not Uploaded",
    gisDetails: "Not Available",
    mouDocument: "Uploaded",
  },
  {
    id: 1,
    communityMember: "John Doe",
    idNumber: "123456789",
    phoneNumber: "+1234567890",
    landSize: "50",
    sublocation: "Subloc A",
    location: "Loc A",
    fieldCoordinator: "Jane Smith",
    dateSigned: "2023-10-01",
    communityName: "Community A",
    signedLocal: "Yes",
    signedOrg: "No",
    witnessLocal: "Witness A",
    loiDocument: "Uploaded",
    gisDetails: "Available",
    mouDocument: "Not Uploaded",
  },
];

export default function DataTable() {
  const [expandedRow, setExpandedRow] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(initialRows);

  const handleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = initialRows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );

    setFilteredRows(filtered);
  };

  const handleAddIndividual = () => {
    console.log("Add Individual clicked");
    // Add your implementation here
  };

  const handleAddRepresentative = () => {
    console.log("Add Representative clicked");
    // Add your implementation here
  };

  return (
    <Box className="data-table">
      {/* New Header Section */}
      <Box className="table-header">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FilterListIcon className="filter-icon" />
              </InputAdornment>
            ),
          }}
        />
        <Box className="action-buttons">
          <Button
            variant="contained"
            onClick={handleAddIndividual}
            className="add-button"
          >
            Add Individual
          </Button>
          <Button
            variant="contained"
            onClick={handleAddRepresentative}
            className="add-button"
          >
            Add Representative
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* Original Data Columns */}
              <TableCell className="main-column">Community Member</TableCell>
              <TableCell className="main-column">ID Number</TableCell>
              <TableCell className="main-column">Phone</TableCell>
              <TableCell className="main-column">Land Size</TableCell>
              <TableCell className="main-column">Community</TableCell>
              {/* Action Column */}
              <TableCell className="action-column">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Main Row */}
                <TableRow className="table-row">
                  {/* Data Cells */}
                  <TableCell className="main-column">
                    {row.communityMember}
                  </TableCell>
                  <TableCell className="main-column">{row.idNumber}</TableCell>
                  <TableCell className="main-column">
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell className="main-column">
                    {row.landSize} acres
                  </TableCell>
                  <TableCell className="main-column">
                    {row.communityName}
                  </TableCell>
                  {/* Action Icons */}
                  <TableCell className="action-column">
                    <Tooltip title="View Details">
                      <IconButton
                        size="small"
                        onClick={() => handleExpand(row.id)}
                        className="table-button"
                      >
                        {expandedRow === row.id ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(row.id)}
                        className="table-button"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(row.id)}
                        className="table-button"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>

                {/* Detail Row */}
                <TableRow>
                  <TableCell
                    colSpan={6} // 5 data columns + 1 action column
                    className="detail-panel"
                    sx={{ padding: 0 }}
                  >
                    <Collapse
                      in={expandedRow === row.id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box className="detail-sections dark-detail">
                        <Grid container spacing={3}>
                          {/* Location Section */}
                          <Grid item xs={12} sm={6}>
                            <Typography variant="h6" className="detail-header">
                              Location Details
                            </Typography>
                            <div className="detail-item">
                              <span className="detail-label">Sublocation:</span>
                              <span className="detail-value">
                                {row.sublocation}
                              </span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Location:</span>
                              <span className="detail-value">
                                {row.location}
                              </span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">
                                Field Coordinator:
                              </span>
                              <span className="detail-value">
                                {row.fieldCoordinator}
                              </span>
                            </div>
                          </Grid>

                          {/* Documentation Section */}
                          <Grid item xs={12} sm={6}>
                            <Typography variant="h6" className="detail-header">
                              Documentation
                            </Typography>
                            <div className="detail-item">
                              <span className="detail-label">Date Signed:</span>
                              <span className="detail-value">
                                {row.dateSigned}
                              </span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Witness:</span>
                              <span className="detail-value">
                                {row.witnessLocal}
                              </span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">GIS Details:</span>
                              <span className="detail-value">
                                {row.gisDetails}
                              </span>
                            </div>
                          </Grid>

                          {/* Approval Status Section */}
                          <Grid item xs={12}>
                            <Typography variant="h6" className="detail-header">
                              Approval Status
                            </Typography>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <div className="detail-item">
                                  <span className="detail-label">
                                    Signed Local:
                                  </span>
                                  <span className="detail-value">
                                    {row.signedLocal}
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <div className="detail-item">
                                  <span className="detail-label">
                                    Signed Org:
                                  </span>
                                  <span className="detail-value">
                                    {row.signedOrg}
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <div className="detail-item">
                                  <span className="detail-label">
                                    LOI Document:
                                  </span>
                                  <span className="detail-value">
                                    {row.loiDocument}
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <div className="detail-item">
                                  <span className="detail-label">
                                    MOU Document:
                                  </span>
                                  <span className="detail-value">
                                    {row.mouDocument}
                                  </span>
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
