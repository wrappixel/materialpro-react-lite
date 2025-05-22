import {
  IconButton,
  Box,
  AppBar,
  useMediaQuery,
  Toolbar,
  styled,
  Stack,
  Button,
  Menu,
  MenuItem,
  Typography,
  Badge,
} from '@mui/material';
import Profile from './Profile';
import Logo from '../../shared/logo/Logo';
import { useEffect, useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { DashboardContext } from 'src/context/DashboardContext';
import { IconBell } from '@tabler/icons-react';

const Header = () => {
  const [_height, setHeight] = useState('0px');
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const toggleWidth = '256px';

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none !important',
    background: theme.palette.primary.main,
    justifyContent: 'center',
    position: 'fixed',
    top: '72px',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.down('md')]: {
      minHeight: '64px',
      top: '157px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.warning.contrastText,
    gap: '8px',
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

  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);

  // notification
  const [anchorEl, setAnchorEl] = useState(null);

  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  const handleClick = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Get exact position
    setMenuPosition({
      top: rect.bottom + window.scrollY, // Position menu below the icon
      left: rect.left + window.scrollX, // Align with icon
    });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBarStyled color="default">
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
              onClick={lgUp ? () => {} : () => setIsMobileSidebar(!isMobileSidebar)}
            >
              <Icon icon="solar:list-bold" height={20} />
            </IconButton>
          )}
          {/* ------------------------------------------- */}
          {/* Toggle Button Sidebar */}
          {/* ------------------------------------------- */}

          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Badge variant="dot" color="primary">
              <IconBell size="21" stroke="1.5" />
            </Badge>
          </IconButton>

          <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorReference="anchorPosition" // Use custom positioning
            anchorPosition={
              menuPosition ? { top: menuPosition.top, left: menuPosition.left } : undefined
            }
            slotProps={{
              paper: {
                sx: {
                  mt: 1, // Ensures the menu appears slightly below the bell icon
                  boxShadow: 9, // Optional: Improves visibility with a shadow
                  minWidth: '200px', // Adjust width to ensure proper alignment
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Typography variant="body1">Item 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1">Item 2</Typography>
            </MenuItem>
          </Menu>

          <Box flexGrow={1} />

          {lgUp ? (
            <>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button
                  variant="contained"
                  color="success"
                  target="_blank"
                  href="https://www.wrappixel.com/templates/materialpro-react-admin/?ref=376#demos"
                >
                  Check Pro Template
                </Button>
                <Profile />
              </Stack>
            </>
          ) : null}
          {lgUp ? null : (
            <>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button
                  variant="contained"
                  color="success"
                  target="_blank"
                  href="https://www.wrappixel.com/templates/materialpro-react-admin/?ref=376"
                >
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
