import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar, Typography, List, ListItem, ListItemText, Grid, Paper, Divider, useMediaQuery, useTheme  } from "@mui/material";

const drawerWidth = 240;

function Panel() {
  const theme = useTheme();
  const [selectedPanel, setSelectedPanel] = useState("Personal");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
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
           <Paper 
              elevation={4} 
              sx={{
                padding: '20px',
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                alignItems: 'start',
                justifyItems: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px'
              }}
            >
              <Typography 
                  variant="h6" 
                  sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                  Personal Information
                </Typography>

             <Grid  sx={{
                padding: '20px',
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: '20px',
                alignItems: 'start',
                justifyItems: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px'
              }}>
               <Grid 
                container 
                direction="column" 
                alignItems="center"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
               
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Full Name:</strong> Sultan Omar
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Father's Name:</strong> Saleh Majumder
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Mother's Name:</strong> Gulshan Ara Begum
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Blood Group:</strong> O+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Religion:</strong> Islam
                </Typography>
              </Grid>
              
              <Grid 
                container 
                direction="column" 
                alignItems="center"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
               
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Date of Birth:</strong> Onek Age
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Place of Birth:</strong> Qatar
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Nationality:</strong> Bangladeshi
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Gender:</strong> Male
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Marital Status:</strong> Complicated
                </Typography>
              </Grid>
             </Grid>
              
            </Paper>
            
            <br></br>

            <Paper 
              elevation={4} 
              sx={{
                padding: '20px',
                width: '90%',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: '20px',
                alignItems: 'start',
                justifyItems: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px'
              }}
            >
              <Typography variant="h6">    Personal Information </Typography>
             
              <Grid 
                container 
                direction="column" 
                alignItems="center"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Full Name:</strong> Sultan Omar
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Father's Name:</strong> Saleh Majumder
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Mother's Name:</strong> Gulshan Ara Begum
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Blood Group:</strong> O+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Religion:</strong> Islam
                </Typography>
              </Grid>
              
              <Grid 
                container 
                direction="column" 
                alignItems="center"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
             
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Date of Birth:</strong> Onek Age
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Place of Birth:</strong> Qatar
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Nationality:</strong> Bangladeshi
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Gender:</strong> Male
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Marital Status:</strong> Complicated
                </Typography>
              </Grid>
            </Paper>

          <br></br>
            
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
