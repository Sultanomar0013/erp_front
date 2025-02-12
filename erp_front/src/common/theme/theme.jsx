import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // "light" or "dark" mode
      primary: {
        main: mode === "dark" ? "#bb86fc" : "#008b8b",
      },
      secondary: {
        main:
            mode === "dark" ? "#bb86fc"
          : mode === "light" ? alpha("#96f2d7", 0.8)
          : "#000000",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1d1d1d" : "#f9f9f9",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900, // fixed md breakpoint (was the same as sm)
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default getTheme;
