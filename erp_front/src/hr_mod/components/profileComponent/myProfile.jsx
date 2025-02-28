import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar, Typography, List, ListItem, ListItemText, Grid, Paper, Divider, useMediaQuery, useTheme } from "@mui/material";

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
    <Box sx={{
      width: '100%',
      maxWidth: '1400px',
      display: 'flex',
      justifyContent: 'center', flexDirection: "column", minHeight: "100vh"
    }}>

      <CssBaseline />

      {/* Main Content Area */}
      <Box sx={{
        width: '100%',

      }}>
        <Box
          sx={{
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

                }}
                key={text}
                onClick={() => setSelectedPanel(text)}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    textAlign: "center",
                   // color: selectedPanel === text ? "white" : "inherit",
                  }}
                />
              </ListItem>

            ))}
          </List>
        </Box>
        <Toolbar />

        {selectedPanel === "Personal" && (
          <Box sx={{

          }}>
            <Grid sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, // 1 column on xs, 2 on sm+
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
              <Grid sx={{
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}>
                <Paper elevation={6}
                  sx={{
                    width: 200,
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    borderRadius: '50%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    overflow: 'hidden',
                  }}>
                </Paper>

              </Grid>
              <Grid sx={{
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}>
                <Grid
                  sx={{
                    placeItems: 'center',
                    overflow: 'hidden',
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

            <Box sx={{
              width: '100%',
              display: 'grid',
              justifyItems: 'center',
            }}>

            <Paper
              elevation={6}
              sx={{
                padding: "30px",
                width: "85%",
                display: "grid",
                gridAutoFlow: "row",
                alignItems: "start",
                justifyItems: "center",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.6)", // Glassmorphism effect
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px", color: "#333" }}>
                Personal Information
              </Typography>

              <Grid
                sx={{
                  width: "95%",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: "20px",
                  justifyItems: "center",
                }}
              >
                {/* Left Column */}
                <Grid
                  container
                  direction="column"
                  alignItems="left"
                  sx={{
                    width: "100%",
                    maxWidth: "350px",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.85)", // Light card effect
                  }}
                >
                  {[
                    { label: "Full Name", value: "Sultan Omar" },
                    { label: "Father's Name", value: "Saleh Majumder" },
                    { label: "Mother's Name", value: "Gulshan Ara Begum" },
                    { label: "Blood Group", value: "O+" },
                    { label: "Religion", value: "Islam" },
                  ].map((item, index) => (
                    <Typography key={index} variant="body1" sx={{ fontWeight: 500, marginBottom: "8px" }}>
                      <strong>{item.label}:</strong> {item.value}
                    </Typography>
                  ))}
                </Grid>

                {/* Right Column */}
                <Grid
                  container
                  direction="column"
                  alignItems="left"
                  sx={{
                    width: "100%",
                    maxWidth: "350px",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  {[
                    { label: "Date of Birth", value: "Onek Age" },
                    { label: "Place of Birth", value: "Qatar" },
                    { label: "Nationality", value: "Bangladeshi" },
                    { label: "Gender", value: "Male" },
                    { label: "Marital Status", value: "Complicated" },
                  ].map((item, index) => (
                    <Typography key={index} variant="body1" sx={{ fontWeight: 500, marginBottom: "8px" }}>
                      <strong>{item.label}:</strong> {item.value}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Paper>


              <br></br>

              <Paper
                elevation={4}
                sx={{
                  padding: '20px',
                  width: '80%',
                  display: 'grid',
                  gridAutoFlow: 'row',
                  alignItems: 'start',
                  justifyItems: 'center',
                  borderRadius: '10px'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                  Employee Information
                </Typography>

                <Grid sx={{
                  width: '90%',
                  display: 'grid',
                  gridAutoFlow: 'row',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: '0px',
                  justifyItems: 'center',
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
                  width: '80%',
                  height: 'auto',
                  display: 'grid',
                  gridAutoFlow: 'row',
                  alignItems: 'start',
                  justifyItems: 'center',
                  borderRadius: '10px'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                  Contact Information
                </Typography>

                <Grid sx={{
                  width: '90%',
                  display: 'grid',
                  gridAutoFlow: 'row',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: '0px',
                  justifyItems: 'center',
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

            </Box>


            <br></br>

          </Box>
        )}

        {selectedPanel === "Education" && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
            <Paper
              elevation={4}
              sx={{
                padding: '20px',
                width: '70%',
                display: 'grid',
                gridAutoFlow: 'row',
                alignItems: 'start',
                justifyItems: 'center',
                borderRadius: '10px'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                MSC
              </Typography>


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

            </Paper>

            <br></br>
            {/* <Paper
              elevation={4}
              sx={{
                padding: '20px',
                width: '90%',
                display: 'grid',
                gridAutoFlow: 'row',
                alignItems: 'start',
                justifyItems: 'center',
                borderRadius: '10px'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                BSC
              </Typography>

              <Grid sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
                justifyItems: 'center',
                borderRadius: '10px'
              }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  sx={{
                    width: '100%',
                    padding: '10px',
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
                borderRadius: '10px'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                HSC
              </Typography>

              <Grid sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
                justifyItems: 'center',
                borderRadius: '10px'
              }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  sx={{
                    width: '100%',
                    padding: '10px',
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
                borderRadius: '10px'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                SSC
              </Typography>

              <Grid sx={{
                width: '100%',
                display: 'grid',
                gridAutoFlow: 'row',
                justifyItems: 'center',
                borderRadius: '10px'
              }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  sx={{
                    width: '100%',
                    padding: '10px',
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

            </Paper> */}

            <br></br>


          </Box>
        )}
      </Box>

    </Box>
  );
}

export default Panel;
