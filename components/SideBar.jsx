// src/components/Sidebar.jsx
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1E1E1E", // Dark background
          color: "#fff", // Light text
          borderRight: "none", // Remove default border
        },
      }}
    >
      {/* Main Navigation Section */}
      <Box
        sx={{
          margin: "20px 16px",
          borderRadius: "8px",
          backgroundColor: "#2B2B2B", // Slightly lighter than the drawer background
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }}
      >
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Analytics", icon: <AnalyticsIcon /> },
            { text: "LandOwners", icon: <PeopleIcon /> },
            { text: "Tasks", icon: <TaskIcon /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "8px", // Rounded corners
                  transition: "background-color 0.3s ease", // Smooth hover effect
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover glow
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff", // White icons
                    minWidth: "40px", // Adjust icon spacing
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: "14px", // Smaller font size
                    fontWeight: "bold", // Bold text
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section (Settings, About, Feedback) */}
      <Box
        sx={{
          margin: "20px 16px",
          borderRadius: "8px",
          backgroundColor: "#2B2B2B", // Slightly lighter than the drawer background
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          marginTop: "auto", // Pushes this section to the bottom
        }}
      >
        <List>
          {[
            { text: "Settings", icon: <SettingsIcon /> },
            { text: "About", icon: <InfoIcon /> },
            { text: "Feedback", icon: <FeedbackIcon /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "8px", // Rounded corners
                  transition: "background-color 0.3s ease", // Smooth hover effect
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover glow
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff", // White icons
                    minWidth: "40px", // Adjust icon spacing
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: "14px", // Smaller font size
                    fontWeight: "bold", // Bold text
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
