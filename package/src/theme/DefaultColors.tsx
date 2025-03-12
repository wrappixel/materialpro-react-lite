const baselightTheme = {
  direction: 'ltr',
  palette: {
    primary: {
      main: '#1B84FF',
      light: '#EDF5FD',
      dark: '#1B84FF',
      transparent: "#ffffff00"
    },
    secondary: {
      main: '#43CED7',
      light: '#F2FCFC',
      dark: '#43CED7',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2cd07e',
      light: '#EDFDF2',
      dark: '#2cd07e',
      contrastText: '#ffffff',
    },
    info: {
      main: '#725AF2',
      light: '#e9e5ff',
      dark: '#725AF2',
      contrastText: '#ffffff',
    },
    error: {
      main: '#F8285A',
      light: '#FFF0F4',
      dark: '#F8285A',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F6C000',
      light: '#FFFCF0',
      dark: '#F6C000',
      contrastText: '#ffffff',
    },
    purple: {
      A50: '#e4f5ff',
      A100: '#6610f2',
      A200: '#557fb9',
    },
    grey: {
      100: '#f2f4f8',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#768B9E',
      600: '#2a3547',
    },
    text: {
      primary: '#3A4752',
      secondary: '#768B9E',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: '#EDF5FD',
    },
    divider: '#ebf1f6',
    background: {
      default: '#EEF5F9',
      dark: '#ffffff',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          //color: '#3A4752',
          textDecoration: "none",
        },
        '.simplebar-scrollbar:before': {
          background: " #DFE5EF!important"
        },
        ".rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path":
        {
          clipPath: "inset(0 0 5% 0 round 20px)",
        },
        '.hover-text-primary:hover .text-hover': (theme: any) => ({
          color: theme.palette.primary.main,
        }),
        '.MuiTypography-root, .MuiListSubheader-root, .MuiChip-label': {
          fontFamily: '"poppins", sans !important'
        },
        '@keyframes gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: ' 100% 50%',
          },
          '100% ': {
            backgroundPosition: ' 0% 50%',
          },
        },
        '@keyframes blow': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0,0,0,.1)',
            opacity: 1,
            transform: 'scale3d(1,1,.5)',
          },
          '50%': {
            boxShadow: ' 0 0 0 10px rgba(0,0,0,.1)',
            opacity: 1,
            transform: 'scale3d(1,1,.5)',
          },
          '100% ': {
            boxShadow: '0 0 0 20px rgba(0,0,0,.1)',
            opacity: 0,
            transform: 'scale3d(1,1,.5)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e5eaef !important',
          },
          borderRadius: "7px",
          '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1B84FF !important'
          },

        },
      },
    },
  }
};


export { baselightTheme };
