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
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../index.css"; // Import your CSS file

const rows = [
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

  const handleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <Box className="data-table">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="expand-column" />
              <TableCell className="main-column">Community Member</TableCell>
              <TableCell className="main-column">ID Number</TableCell>
              <TableCell className="main-column">Phone</TableCell>
              <TableCell className="main-column">Land Size</TableCell>
              <TableCell className="main-column">Community</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Main Row */}
                <TableRow>
                  <TableCell className="expand-column">
                    <IconButton
                      size="small"
                      onClick={() => handleExpand(row.id)}
                    >
                      {expandedRow === row.id ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </TableCell>
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
                      <Box className="detail-sections">
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
