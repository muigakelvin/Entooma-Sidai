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
import AddIcon from "@mui/icons-material/Add"; // Import Add Icon

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

  React.useEffect(() => {
    console.log("Initial Members State:", members); // Log initial state of members
  }, []);

  // Function to handle changes in member fields
  const handleMemberChange = (index, field, value) => {
    console.log(
      `Updating Member at index ${index}, field: ${field}, value: ${value}`
    ); // Debugging log
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    console.log("Updated Members Array:", updatedMembers); // Log updated members array
    setMembers(updatedMembers);
  };

  // Function to add a new member field
  const addMemberField = () => {
    console.log("Adding new member field"); // Debugging log
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

  // Function to remove a member field
  const removeMemberField = (index) => {
    console.log(`Removing member at index ${index}`); // Debugging log
    const updatedMembers = members.filter((_, i) => i !== index);
    console.log("Updated Members Array After Removal:", updatedMembers); // Log updated array
    setMembers(updatedMembers);
  };

  // Validate members before submission
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

  // Function to handle form submission
  const handleSubmit = () => {
    if (!validateMembers()) return;
    console.log("Final Members Data Before Submission:", members); // Debugging log
    onSubmit({ ...formData, members });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {formData.id ? "Edit Representative" : "Add New Representative"}
      </DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component="form" sx={{ mt: 2 }}>
            {/* Community Group Details Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Community Group Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="groupName"
                    label="Group Name"
                    value={formData.groupName}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="representativeName"
                    label="Representative Name"
                    value={formData.representativeName}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="representativeIdNumber"
                    label="Representative ID Number"
                    value={formData.representativeIdNumber}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="representativePhone"
                    label="Representative Phone Number"
                    value={formData.representativePhone}
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
            {/* Group Members Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Group Member Details
              </Typography>
              {members.map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ccc",
                    p: 2,
                    borderRadius: "8px",
                    mb: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                      />
                    </Grid>
                  </Grid>
                  <Button
                    onClick={() => removeMemberField(index)}
                    color="error"
                    sx={{ mt: 1 }}
                    disabled={members.length === 1} // Disable if only one member is left
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
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                  }}
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
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
