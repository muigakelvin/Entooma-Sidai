// src/components/AddFormDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const FORM_FIELDS = [
  "communityMember",
  "idNumber",
  "phoneNumber",
  "landSize",
  "sublocation",
  "location",
  "fieldCoordinator",
  "dateSigned",
  "communityName",
  "signedLocal",
  "signedOrg",
  "witnessLocal",
  "loiDocument",
  "gisDetails",
  "mouDocument",
];

export default function AddFormDialog({ open, onClose, onSubmit }) {
  const [formData, setFormData] = React.useState(
    FORM_FIELDS.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit({
      id: Date.now(),
      ...formData,
      landSize: `${formData.landSize} acres`,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="dark-dialog">
      <DialogTitle>Add New Individual</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              name="communityMember"
              label="Community Member"
              fullWidth
              value={formData.communityMember}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="idNumber"
              label="ID Number"
              fullWidth
              value={formData.idNumber}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="landSize"
              label="Land Size (acres)"
              fullWidth
              type="number"
              value={formData.landSize}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="sublocation"
              label="Sublocation"
              fullWidth
              value={formData.sublocation}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="location"
              label="Location"
              fullWidth
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="fieldCoordinator"
              label="Field Coordinator"
              fullWidth
              value={formData.fieldCoordinator}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date Signed"
                value={formData.dateSigned}
                onChange={(date) =>
                  setFormData({ ...formData, dateSigned: date })
                }
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="communityName"
              label="Community Name"
              fullWidth
              value={formData.communityName}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Signed Local</InputLabel>
              <Select
                name="signedLocal"
                value={formData.signedLocal}
                onChange={handleInputChange}
                label="Signed Local"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Signed Org</InputLabel>
              <Select
                name="signedOrg"
                value={formData.signedOrg}
                onChange={handleInputChange}
                label="Signed Org"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="witnessLocal"
              label="Witness Local"
              fullWidth
              value={formData.witnessLocal}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="loiDocument"
              label="LOI Document"
              fullWidth
              value={formData.loiDocument}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="gisDetails"
              label="GIS Details"
              fullWidth
              value={formData.gisDetails}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="mouDocument"
              label="MOU Document"
              fullWidth
              value={formData.mouDocument}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Individual
        </Button>
      </DialogActions>
    </Dialog>
  );
}
