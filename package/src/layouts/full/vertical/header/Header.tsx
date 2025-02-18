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
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '64px',
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
      <AppBarStyled position="sticky" color="default">
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

          {lgUp ? (
            <>
                <Notifications/>
            </>
          ) : null}


          <Box flexGrow={1} />

          {lgUp ? (
            <>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="contained"  color="success"  target="_blank" href="https://www.wrappixel.com/templates/materialpro-react-admin/">
                   Check Pro Template
               </Button>
                <Profile />
              </Stack>
            </>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                width: toggleWidth,
              }}
            >
              <Logo />
            </Box>
          )}
          {lgUp ? null : (
            <>
              <Box flexGrow={1} />
            </>
          )}
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;
