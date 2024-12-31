import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar, Typography, List, ListItem, ListItemText, Grid, Paper } from "@mui/material";

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
      <Box >
          <Box
        sx={{
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
        <Toolbar />
       
        {selectedPanel === "Personal" && (
          <Box sx={{
            placeItems : 'center',
          }}>
            <Grid sx={{
              display:'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent:'center',
              alignItems:'center',
              width:'100%',
            }}>
              <Grid sx={{
              width: '50%',
              display: 'grid', 
              placeItems:'center',
              }}>
                  <Paper elevation={6}
                    sx={{
                          width: 200,
                          display:'flex',
                          justifyContent:'center',
                          alignItems:'center',
                          height: 200,

                          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),url(${PaperOne})`,
                          borderRadius: '50%',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          overflow:'hidden',
                        }}>
                </Paper>

              </Grid>
              <Grid sx={{
              width: '50%',
              display: 'grid', 
              placeItems:'center',
              }}>
              <Grid
                    sx={{ 
                          placeItems:'center',
                          overflow:'hidden',
                        }}>
                  <Typography variant="h6" >
                        Name : Sultan Omar
                  </Typography>
                   <Typography variant="h6" >
                        Emp ID : HO-0013
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <br></br>
            <Paper elevation={3} sx={{
            width : '90%',
            height : '250',
            }}>
            
            </Paper>
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
   
    </Box>
  );
}

export default Panel;
