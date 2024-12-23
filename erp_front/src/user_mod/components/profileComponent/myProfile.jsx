import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar, Typography, List, ListItem, ListItemText } from "@mui/material";

const drawerWidth = 240;

function Panel() {
  const [selectedPanel, setSelectedPanel] = useState("Personal");

  useEffect(() => {
    const savedPanel = localStorage.getItem("selectedPanel");
    if (savedPanel) {
      setSelectedPanel(savedPanel);
    } else {
      setSelectedPanel("Personal");
    }
  }, []);


  const handlePanelClick = (panel) => {
    setSelectedPanel(panel);
    localStorage.setItem("selectedPanel", panel);
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar />
        {selectedPanel === "Personal" && (
          <Box>
            <Typography variant="h4">This is Personal Information</Typography>
            <Typography>
              This is the main content area for personal information. Use this space to
              display data, charts, or other content.
            </Typography>
          </Box>
        )}
        {selectedPanel === "Education" && (
          <Box>
            <Typography variant="h4">This is Education Information</Typography>
            <Typography>
              This is the main content area for education information. Use this space to
              display data, charts, or other content.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Footer Navigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <List sx={{ display: "flex", justifyContent: "center" }}>
          {["Personal", "Education"].map((text) => (
            <ListItem
              component="button"
            sx={{
              width: "auto",
              cursor: "pointer",
              backgroundColor: "transparent",
              borderBottom:(theme) =>
                selectedPanel === text ? `2px solid ${theme.palette.primary.main}` : "none",
            }}
            key={text}
            onClick={() => setSelectedPanel(text)}
          >
            <ListItemText
              primary={text}
              sx={{
                textAlign: "center",
                color: selectedPanel === text ? "blue" : "inherit",
              }}
            />
          </ListItem>

          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Panel;
