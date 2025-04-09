// src/components/DataTable.jsx
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
  const [rows, setRows] = React.useState(initialRows);
  const [filteredRows, setFilteredRows] = React.useState(initialRows);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    communityMember: "",
    idNumber: "",
    phoneNumber: "",
    landSize: "",
    sublocation: "",
    location: "",
    fieldCoordinator: "",
    dateSigned: null,
    communityName: "",
    signedLocal: "",
    signedOrg: "",
    witnessLocal: "",
    loiDocument: "",
    gisDetails: "",
    mouDocument: "",
  });

  const handleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );

    setFilteredRows(filtered);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormData({
      communityMember: "",
      idNumber: "",
      phoneNumber: "",
      landSize: "",
      sublocation: "",
      location: "",
      fieldCoordinator: "",
      dateSigned: null,
      communityName: "",
      signedLocal: "",
      signedOrg: "",
      witnessLocal: "",
      loiDocument: "",
      gisDetails: "",
      mouDocument: "",
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newRow = {
      id: Date.now(),
      ...formData,
      landSize: `${formData.landSize} acres`,
      dateSigned: formData.dateSigned.format("YYYY-MM-DD"),
    };

    setRows([...rows, newRow]);
    setFilteredRows([...filteredRows, newRow]);
    handleCloseForm();
  };

  return (
    <Box className="data-table">
      {/* Header Section */}
      <Box className="table-header">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
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
          <AddIcon sx={{ color: "#4caf50", fontSize: 32, marginRight: 1 }} />
          <Button
            variant="contained"
            onClick={handleOpenForm}
            className="add-button"
            startIcon={<AddIcon />}
          >
            Individual
          </Button>
          <Button
            variant="contained"
            onClick={handleOpenForm}
            className="add-button"
            startIcon={<AddIcon />}
          >
            Representative
          </Button>
        </Box>
      </Box>

      {/* Table Content */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="main-column">Community Member</TableCell>
              <TableCell className="main-column">ID Number</TableCell>
              <TableCell className="main-column">Phone</TableCell>
              <TableCell className="main-column">Land Size</TableCell>
              <TableCell className="main-column">Community</TableCell>
              <TableCell className="action-column">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Main Row */}
                <TableRow className="table-row">
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
                    colSpan={6}
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

      {/* Add Form Dialog */}
      <Dialog
        open={isFormOpen}
        onClose={handleCloseForm}
        className="dark-dialog"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Add New Record</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component="form" sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {/* Community Member */}
                <Grid item xs={12}>
                  <TextField
                    name="communityMember"
                    label="Community Member"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.communityMember}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* ID Number */}
                <Grid item xs={12}>
                  <TextField
                    name="idNumber"
                    label="ID Number"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.idNumber}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12}>
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.phoneNumber}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Land Size */}
                <Grid item xs={12}>
                  <TextField
                    name="landSize"
                    label="Land Size (acres)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.landSize}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Sublocation */}
                <Grid item xs={12}>
                  <TextField
                    name="sublocation"
                    label="Sublocation"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.sublocation}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Location */}
                <Grid item xs={12}>
                  <TextField
                    name="location"
                    label="Location"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.location}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Field Coordinator */}
                <Grid item xs={12}>
                  <TextField
                    name="fieldCoordinator"
                    label="Field Coordinator"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.fieldCoordinator}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Date Signed */}
                <Grid item xs={12}>
                  <DatePicker
                    label="Date Signed"
                    value={formData.dateSigned}
                    onChange={(date) =>
                      setFormData({ ...formData, dateSigned: date })
                    }
                    renderInput={(params) => (
                      <TextField {...params} fullWidth size="small" required />
                    )}
                  />
                </Grid>

                {/* Community Name */}
                <Grid item xs={12}>
                  <TextField
                    name="communityName"
                    label="Community Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.communityName}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* Signed Local */}
                <Grid item xs={12}>
                  <FormControl fullWidth size="small" required>
                    <InputLabel>Signed Local</InputLabel>
                    <Select
                      name="signedLocal"
                      value={formData.signedLocal}
                      onChange={handleFormChange}
                      label="Signed Local"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Signed Org */}
                <Grid item xs={12}>
                  <FormControl fullWidth size="small" required>
                    <InputLabel>Signed Org</InputLabel>
                    <Select
                      name="signedOrg"
                      value={formData.signedOrg}
                      onChange={handleFormChange}
                      label="Signed Org"
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Witness Local */}
                <Grid item xs={12}>
                  <TextField
                    name="witnessLocal"
                    label="Witness Local"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.witnessLocal}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* LOI Document */}
                <Grid item xs={12}>
                  <TextField
                    name="loiDocument"
                    label="LOI Document"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.loiDocument}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* GIS Details */}
                <Grid item xs={12}>
                  <TextField
                    name="gisDetails"
                    label="GIS Details"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.gisDetails}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>

                {/* MOU Document */}
                <Grid item xs={12}>
                  <TextField
                    name="mouDocument"
                    label="MOU Document"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.mouDocument}
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add Record
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
