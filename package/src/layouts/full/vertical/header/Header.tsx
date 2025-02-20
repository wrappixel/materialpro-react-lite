import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack, Button } from '@mui/material';
import Notifications from './Notification';
import Profile from './Profile';
import Logo from '../../shared/logo/Logo';
import { useEffect, useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { DashboardContext } from 'src/context/DashboardContext';

const Header = () => {
  const [_height, setHeight] = useState('0px');
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));


  const toggleWidth = '256px';

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none !important',
    background: theme.palette.primary.main,
    justifyContent: 'center',
    position:"fixed",
    top:"64px",
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.down('lg')]: {
      minHeight: '64px',
      top: "90px"
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '64px',
      top: "99px"
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '64px',
      top: "134px"
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.warning.contrastText,
    gap: '8px',
    padding: '0 20px',
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setHeight('0px');
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {isMobileSidebar , setIsMobileSidebar} = useContext(DashboardContext);


  return (
    <>
      <AppBarStyled color="default" >
        <ToolbarStyled>
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}

          {lgUp ? (
            <>
              <Box
                sx={{
                  width: toggleWidth,
                }}
              >
                <Logo />
              </Box>
            </>
          ) : (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={
                lgUp
                  ? () => {}
                  : () => setIsMobileSidebar(!isMobileSidebar)
              }
            >
              <Icon icon="solar:list-bold" height={20} />
            </IconButton>
          )}
          {/* ------------------------------------------- */}
          {/* Toggle Button Sidebar */}
          {/* ------------------------------------------- */}

                <Notifications/>


          <Box flexGrow={1} />

          {lgUp ? (
            <>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained"  color="success"  target="_blank" href="https://www.wrappixel.com/templates/materialpro-react-admin/?ref=376">
                   Check Pro Template
               </Button>
                <Profile />
              </Stack>
            </>
          ) : (
            null
          )}
          {lgUp ? null : (
            <>
                        <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained"  color="success"  target="_blank" href="https://www.wrappixel.com/templates/materialpro-react-admin/?ref=376">
                   Check Pro Template
               </Button>
                <Profile />
              </Stack>
            </>
          )}
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;
