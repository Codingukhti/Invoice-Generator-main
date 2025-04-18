// src/app/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Use 'light' for light theme
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
