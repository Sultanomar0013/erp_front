import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";


const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

const greenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008b8b", // Green
    },
    background: {
      default: "#e8f5e9",
      paper: "#c8e6c9",
    },
  },
});


export const getTheme = (mode) => {

  if( mode  === "light" ){
    return defaultTheme;
  }else if( mode  === "dark"  ){
    return darkTheme;
  }else if( mode  === "green"  ){
    return greenTheme;
  }
};



export default getTheme;
