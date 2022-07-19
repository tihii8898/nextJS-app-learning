import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
      dark: '#21243D',
      light: '#8695A4',
    },
    secondary: {
      main: '#00A8CC',
    },

    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
      defaultProps: {
        maxWidth: 'md',
      },
      variants: [],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
      defaultProps: {
        underline: 'none',
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: 20,
          justifyContent: 'center',
        },
      },
    },
    MuiButton: {},
  },
});
