import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function AddFormDialog({
  open,
  onClose,
  formData,
  onFormChange,
  onFileChange,
  onSubmit,
}) {
  // Function to handle form submission
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {formData.id ? "Edit Record" : "Add New Record"}
      </DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component="form" sx={{ mt: 2 }}>
            {/* Member Details Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Member Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="communityMember"
                    label="Name"
                    value={formData.communityMember}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="idNumber"
                    label="ID Number"
                    value={formData.idNumber}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    value={formData.phoneNumber}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="communityName"
                    label="Community Name"
                    value={formData.communityName}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Land Details Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Land Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="landSize"
                    label="Land Size (acres)"
                    value={formData.landSize}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="sublocation"
                    label="Sublocation"
                    value={formData.sublocation}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="location"
                    label="Location"
                    value={formData.location}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Authorized Signatories Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Authorized Signatories
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fieldCoordinator"
                    label="Field Coordinator"
                    value={formData.fieldCoordinator}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="witnessLocal"
                    label="Local Witness"
                    value={formData.witnessLocal}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="signedLocal"
                    label="Signed (Local)"
                    value={formData.signedLocal}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="signedOrg"
                    label="Signed (Org)"
                    value={formData.signedOrg}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Date Signed"
                    value={formData.dateSigned}
                    onChange={(newValue) =>
                      onFormChange({
                        target: { name: "dateSigned", value: newValue },
                      })
                    }
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Documents and GIS Information Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Documents and GIS Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="file"
                    name="loiDocument"
                    label="Upload LOI Document (.pdf)"
                    inputProps={{ accept: ".pdf" }}
                    onChange={onFileChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="file"
                    name="mouDocument"
                    label="Upload MOU Document (.pdf)"
                    inputProps={{ accept: ".pdf" }}
                    onChange={onFileChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="file"
                    name="gisDetails"
                    label="Upload GIS File (.gpx, .kml)"
                    inputProps={{ accept: ".gpx,.kml" }}
                    onChange={onFileChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {formData.id ? "Update Record" : "Add Record"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
