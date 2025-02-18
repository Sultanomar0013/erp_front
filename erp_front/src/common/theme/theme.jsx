import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";


const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#81DAF5",
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
      main: "#bb86fc",
    },
    secondary: {
      main: "#E3CEF6",
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
    secondary: {
      main: "#e8f5e9",
    },
    background: {
      default: "#e8f5e9",
      paper: "#c8e6c9",
    },
  },
});


export const getTheme = (customTheme) => {

  if( customTheme  === "light" ){
    return defaultTheme;
  }else if( customTheme  === "dark"  ){
    return darkTheme;
  }else if( customTheme  === "green"  ){
    return greenTheme;
  }
};



export default getTheme;
