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
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: '0px',
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
                  Employee Information
                </Typography>

             <Grid  sx={{
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: '0px',
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
                  <strong>Code:</strong> 0013
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Membership Type:</strong> Onk beshi Premium
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Joining Date :</strong> 10-10-2022
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Service Length:</strong> 2 Year, 2 mon
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Note :</strong> Notes
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
                  <strong>Job Status:</strong> In Service
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Confirmation Date:</strong> 30-11--0001
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Due Confirmation Date:</strong> 30-11--0001
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Job Status Date:</strong> 30-11--0001
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Description :</strong>
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
                height:'auto',
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
                  Contact Information
                </Typography>

             <Grid  sx={{
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: '0px',
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
                  <strong>Line Manager:</strong> None
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Office Email:</strong> sultanomar756@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Office Extension No:</strong> 0013
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Personal Mobile :</strong> 01861330616
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Present Address :</strong>
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
                  <strong>Date of Birth:</strong> National Id
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong> Personal Email:</strong> sultanomar756@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Office Mobile:</strong> 01303596389
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Emergency Contact:</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Permanent Address:</strong>
                </Typography>
              </Grid>
            </Grid>

            </Paper>

            <br></br>

          </Box>
        )}
        {selectedPanel === "Education" && (
          <Box>
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
                  MSC
                </Typography>

             <Grid  sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
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
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >

                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Institution :</strong> GOVT. SCIENCE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Passing Year:</strong> 2015
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Subject:</strong> Science
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>GPA:</strong> 5.00
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
                  BSC
                </Typography>

             <Grid  sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
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
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >

                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Institution :</strong> GOVT. SCIENCE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Passing Year:</strong> 2015
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Subject:</strong> Science
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>GPA:</strong> 5.00
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
                  HSC
                </Typography>

             <Grid  sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
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
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >

                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Institution :</strong> GOVT. SCIENCE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Passing Year:</strong> 2015
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Subject:</strong> Science
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>GPA:</strong> 5.00
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
                  SSC
                </Typography>

             <Grid  sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
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
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >

                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Institution :</strong> GOVT. SCIENCE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Passing Year:</strong> 2015
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>Subject:</strong> Science
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>GPA:</strong> 5.00
                </Typography>
              </Grid>
            </Grid>

            </Paper>

            <br></br>
          </Box>
        )}
      </Box>

    </Box>
  );
}

export default Panel;
