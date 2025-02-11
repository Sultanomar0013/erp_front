import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          py: 1,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ✅ Change Box to Grid container */}
        <Grid container spacing={2} justifyContent="center" sx={{ width: "100%" }}>
          {/* ✅ Add item prop */}
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>




      <Box
        sx={{
          width: "100%",
          py: 1,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ✅ Change Box to Grid container */}
        <Grid container spacing={2} justifyContent="center" sx={{ width: "100%" }}>
          {/* ✅ Add item prop */}
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                margin: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Outfit",
                  color: "Black",
                  p: 2,
                  zIndex: 2,
                  textAlign: "center",
                }}
              >
                "Lorem"
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
