// src/components/AddFormDialog.jsx
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function AddFormDialog({
  open,
  onClose,
  formData,
  onFormChange,
  onSubmit,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Record</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component="form" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              {/* Example Form Fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  name="communityMember"
                  label="Community Member"
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
                <DatePicker
                  label="Date Signed"
                  value={formData.dateSigned}
                  onChange={(newValue) =>
                    onFormChange({
                      target: { name: "dateSigned", value: newValue },
                    })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Signed Local</InputLabel>
                  <Select
                    name="signedLocal"
                    value={formData.signedLocal}
                    onChange={onFormChange}
                    label="Signed Local"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Add more fields as needed */}
            </Grid>
          </Box>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Add Record
        </Button>
      </DialogActions>
    </Dialog>
  );
}
