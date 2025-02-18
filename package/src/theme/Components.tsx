import './DefaultColors';
import { Theme } from '@mui/material/styles';

const components: any = (theme: Theme) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          height: '100%',
          width: '100%',
        },
        a: {
          textDecoration: 'none',
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
        },
        '#root': {
          height: '100%',
        },
        '.profile-img::before': {
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 0,
          animation: '2.5s blow 0s linear infinite',
          content: '""',
        },
        '.heartbit': {
          position: 'absolute',
          top: '-3px',
          right: '-2px',
          height: '20px',
          width: '20px',
          zIndex: 10,
          borderRadius: '50% !important',
          border: '2px solid',
          borderColor: theme.palette.error.main,
          animation: 'heartbit 1s ease-out',
          animationIterationCount: 'infinite',
        },
        "*[dir='rtl'] .buyNowImg": {
          transform: 'scaleX(-1)',
        },
        '.border-none': {
          border: '0px',
          td: {
            border: '0px',
          },
        },
        '.hover-text-primary:hover .text-hover': {
          color: theme.palette.primary.main,
        },
        '.MuiBox-root': {
          borderRadius: theme.shape.borderRadius,
        },
        '.MuiCardHeader-action': {
          alignSelf: 'center !important',
        },
        '.emoji-picker-react .emoji-scroll-wrapper': {
          overflowX: 'hidden',
        },
        '.scrollbar-container': {
          borderRight: '0 !important',
        },
        '.MuiAlert-root .MuiAlert-icon': {
          color: 'inherit!important',
        },
        ' .simplebar-scrollbar:before': {
          background: `${theme.palette.grey[300]} !important`,
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
        '@keyframes heartbit': {
          '0%': {
            opacity: 0,
            transform: 'scale(0)',
          },
          '25%': {
            opacity: 0.1,
            transform: 'scale(.1)',
          },
          '50% ': {
            opacity: 0.3,
            transform: 'scale(.5)',
          },
          '75% ': {
            opacity: 0.5,
            transform: 'scale(.8)',
          },
          '100% ': {
            opacity: 0,
            transform: 'scale(1)',
          },
        },
        hr: {
          height: '1px',
          border: 0,
          borderTop: `1px solid ${theme.palette.divider}`,
        },

        '.mui-nniyr1-MuiCollapse-root-MenuBar-root-RichTextField-menuBar-MenuBar-sticky, .mui-anumxs-FieldContainer-notchedOutline':
          {
            borderColor: `${theme.palette.divider} !important`,
          },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ':before': {
            backgroundColor: theme.palette.grey[100],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
        sizeSmall: {
          width: 40,
          height: 40,
          minHeight: 40,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '8px',
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
        },
        colorSecondary: {
          backgroundColor: theme.palette.secondary.light,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
          },
        },
        colorSuccess: {
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        },
        colorError: {
          backgroundColor: theme.palette.error.light,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: 'white',
          },
        },
        colorWarning: {
          backgroundColor: theme.palette.warning.light,
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: 'white',
          },
        },
        colorInfo: {
          backgroundColor: theme.palette.info.light,
          '&:hover': {
            backgroundColor: theme.palette.info.main,
            color: 'white',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 30,
        },
        text: {
          padding: '5px 15px',
        },
        textPrimary: {
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
        },
        textSecondary: {
          backgroundColor: theme.palette.secondary.light,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
          },
        },
        textSuccess: {
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        },
        textError: {
          backgroundColor: theme.palette.error.light,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: 'white',
          },
        },
        textInfo: {
          backgroundColor: theme.palette.info.light,
          '&:hover': {
            backgroundColor: theme.palette.info.main,
            color: 'white',
          },
        },
        textWarning: {
          backgroundColor: theme.palette.warning.light,
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: 'white',
          },
        },
        outlinedPrimary: {
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
        },
        outlinedSecondary: {
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
          },
        },
        outlinedError: {
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: 'white',
          },
        },
        outlinedSuccess: {
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        },
        outlinedInfo: {
          '&:hover': {
            backgroundColor: theme.palette.info.main,
            color: 'white',
          },
        },
        outlinedWarning: {
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: 'white',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '16px 30px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: '100%',
          padding: '15px',
          backgroundImage: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '30px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: '12px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiGridItem: {
      styleOverrides: {
        root: {
          paddingTop: '30px',
          paddingLeft: '30px !important',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[200],
          borderRadius: '6px',
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.divider,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '0.75rem',
          height: '26px',
        },
        sizeSmall: {
          fontSize: '0.65rem',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledSuccess: {
          color: 'white',
        },
        filledInfo: {
          color: 'white',
        },
        filledError: {
          color: 'white',
        },
        filledWarning: {
          color: 'white',
        },
        standardSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
        },
        standardError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
        },
        standardWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.main,
        },
        standardInfo: {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.main,
        },
        outlinedSuccess: {
          borderColor: theme.palette.success.main,
          color: theme.palette.success.main,
        },
        outlinedWarning: {
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning.main,
        },
        outlinedError: {
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
        },
        outlinedInfo: {
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
        },
        successIcon: {
          color: theme.palette.info.main,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor:
              theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300],
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[300],
          },
        },
        input: {
          padding: '12px 14px',
        },
        inputSizeSmall: {
          padding: '8px 14px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.palette.background.paper,
          background: theme.palette.text.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderColor: `${theme.palette.divider}`,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow:
            'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        },
      },
    },
  };
};
export default components;
