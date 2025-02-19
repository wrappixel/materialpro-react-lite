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
};

const baseDarkTheme = {
  direction: 'ltr',
  palette: {
    primary: {
      main: '#1B84FF',
      light: '#253662',
      dark: '#1B84FF',
    },
    secondary: {
      main: '#21c1d6',
      light: '#1c455d',
      dark: '#21c1d6',
    },
    success: {
      main: '#2cd07e',
      light: '#1b3c48',
      dark: '#2cd07e',
      contrastText: '#ffffff',
    },
    info: {
      main: '#725AF2',
      light: '#223662',
      dark: '#725AF2',
      contrastText: '#ffffff',
    },
    error: {
      main: '#F8285A',
      light: '#4b313d',
      dark: '#f3704d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F6C000',
      light: '#4d3a2a',
      dark: '#ae8e59',
      contrastText: '#ffffff',
    },
    purple: {
      A50: '#dedaf9',
      A100: '#6610f2',
      A200: '#557fb9',
    },
    grey: {
      100: '#1d2430',
      200: '#465670',
      300: '#7C8FAC',
      400: '#DFE5EF',
      500: '#EAEFF4',
      600: '#F2F6FA',
    },
    text: {
      primary: 'rgba(255,255,255,0.9)',
      secondary: 'rgba(255,255,255,0.67)',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: '#1d2430',
    },
    divider: '#1d2430',
    background: {
      default: '#1c222e',
      dark: '#1c222e',
      paper: '#171c26',
    },
  },
};

export { baseDarkTheme, baselightTheme };
