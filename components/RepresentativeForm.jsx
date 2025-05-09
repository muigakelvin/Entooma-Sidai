// src/components/RepresentativeForm.jsx
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
  Fab,
  Tooltip,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import "../index.css";

export default function RepresentativeForm({
  open,
  onClose,
  formData,
  onFormChange,
  onFileChange,
  onSubmit,
}) {
  const [members, setMembers] = React.useState(
    formData.members || [
      {
        memberIdNumber: "",
        memberName: "",
        memberPhoneNumber: "",
        titleNumber: "",
      },
    ]
  );

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setMembers(updatedMembers);
  };

  const addMemberField = () => {
    setMembers([
      ...members,
      {
        memberIdNumber: "",
        memberName: "",
        memberPhoneNumber: "",
        titleNumber: "",
      },
    ]);
  };

  const removeMemberField = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const validateMembers = () => {
    const isValid = members.every(
      (member) => member.memberName && member.memberPhoneNumber
    );
    if (!isValid) {
      alert("Please fill out all required fields for group members.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateMembers()) return;
    onSubmit({ ...formData, members });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle className="dialog-title">
        {formData.id ? "Edit Representative" : "Add New Representative"}
      </DialogTitle>
      <DialogContent className="dialog-content">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component="form" className="form-container">
            {/* Community Group Details Section */}
            <Box className="section-box">
              <Typography variant="h6" className="section-header">
                Community Group Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="groupName"
                    label="Group Name"
                    value={formData.groupName}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="representativeName"
                    label="Representative Name"
                    value={formData.representativeName}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="representativeIdNumber"
                    label="Representative ID Number"
                    value={formData.representativeIdNumber}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="representativePhone"
                    label="Representative Phone Number"
                    value={formData.representativePhone}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="communityName"
                    label="Community Name"
                    value={formData.communityName}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="landSize"
                    label="Land Size (acres)"
                    value={formData.landSize}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="sublocation"
                    label="Sublocation"
                    value={formData.sublocation}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="location"
                    label="Location"
                    value={formData.location}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Group Members Section */}
            <Box className="section-box">
              <Typography variant="h6" className="section-header">
                Group Member Details
              </Typography>
              {members.map((member, index) => (
                <Box key={index} className="member-box">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className="grid-item">
                      <TextField
                        name={`memberName-${index}`}
                        label="Member Name"
                        value={member.memberName}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "memberName",
                            e.target.value
                          )
                        }
                        fullWidth
                        className="text-field"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className="grid-item">
                      <TextField
                        name={`memberPhoneNumber-${index}`}
                        label="Member Phone Number"
                        value={member.memberPhoneNumber}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "memberPhoneNumber",
                            e.target.value
                          )
                        }
                        fullWidth
                        className="text-field"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className="grid-item">
                      <TextField
                        name={`memberIdNumber-${index}`}
                        label="Member ID Number"
                        value={member.memberIdNumber}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "memberIdNumber",
                            e.target.value
                          )
                        }
                        fullWidth
                        className="text-field"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className="grid-item">
                      <TextField
                        name={`titleNumber-${index}`}
                        label="Title Number"
                        value={member.titleNumber}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "titleNumber",
                            e.target.value
                          )
                        }
                        fullWidth
                        className="text-field"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    onClick={() => removeMemberField(index)}
                    className="remove-member-button"
                    disabled={members.length === 1}
                  >
                    Remove Member
                  </Button>
                </Box>
              ))}
              <Tooltip title="Add Member">
                <Fab
                  color="primary"
                  aria-label="add"
                  onClick={addMemberField}
                  className="add-member-fab"
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Box>

            {/* Authorized Signatories Section */}
            <Box className="section-box">
              <Typography variant="h6" className="section-header">
                Authorized Signatories
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="fieldCoordinator"
                    label="Field Coordinator"
                    value={formData.fieldCoordinator}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="witnessLocal"
                    label="Local Witness"
                    value={formData.witnessLocal}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="signedLocal"
                    label="Signed (Local)"
                    value={formData.signedLocal}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    name="signedOrg"
                    label="Signed (Org)"
                    value={formData.signedOrg}
                    onChange={onFormChange}
                    fullWidth
                    className="text-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <DatePicker
                    label="Date Signed"
                    value={formData.dateSigned}
                    onChange={(newValue) =>
                      onFormChange({
                        target: { name: "dateSigned", value: newValue },
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        className="date-picker"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Documents and GIS Information Section */}
            <Box className="section-box">
              <Typography variant="h6" className="section-header">
                Documents and GIS Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    type="file"
                    name="loiDocument"
                    label="Upload LOI Document (.pdf)"
                    inputProps={{ accept: ".pdf" }}
                    onChange={onFileChange}
                    fullWidth
                    className="file-upload"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    type="file"
                    name="mouDocument"
                    label="Upload MOU Document (.pdf)"
                    inputProps={{ accept: ".pdf" }}
                    onChange={onFileChange}
                    fullWidth
                    className="file-upload"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="grid-item">
                  <TextField
                    type="file"
                    name="gisDetails"
                    label="Upload GIS File (.gpx, .kml)"
                    inputProps={{ accept: ".gpx,.kml" }}
                    onChange={onFileChange}
                    fullWidth
                    className="file-upload"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} className="cancel-button">
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="submit-button">
          {formData.id ? "Update Record" : "Add Record"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
