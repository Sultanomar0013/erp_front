import React from 'react';
import { createTheme } from '@mui/material/styles';


const defaultTheme = createTheme( {
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
        background: {
          default: '#ffffff',
          paper: '#f9f9f9',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#bb86fc',
        },
        background: {
          default: '#121212',
          paper: '#1d1d1d',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default defaultTheme;
