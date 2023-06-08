import { createTheme } from '@mui/material/styles';
import { green, blue, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main:blue[900],
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export { theme };
