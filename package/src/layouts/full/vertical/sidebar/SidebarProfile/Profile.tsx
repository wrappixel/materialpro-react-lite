import { Box, Avatar, Typography, Tooltip, IconButton, Button } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { IconCaretDownFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import SidebarProfileBgImg from 'src/assets/images/backgrounds/sidebar-profile-bg.jpg';
import { Link } from 'react-router';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenuItem-root': {
      gap: '6px',
      alignItems: 'center',
      padding: '8px 16px',
      '&:hover': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? `${theme.palette.action.hover}`
            : `${theme.palette.background.default}`,
      },
    },
  },
}));

export const Profile = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${SidebarProfileBgImg})`,
        borderRadius: '0 !important',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
    >
      <>
        <Box
          py="28px"
          borderRadius="0 !important"
          sx={{
            px: '30px',
          }}
        >
          <Box className="profile-img" position="relative">
            <Avatar alt="Remy Sharp" src={ProfileImg} sx={{ height: 50, width: 50 }} />
          </Box>
        </Box>
        <IconButton
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          aria-label="action"
          sx={{ p: 0, width: '100%' }}
        >
          { <Box

            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              py: '4px',
              px: 2,
              bgcolor: 'rgba(0,0,0,0.5)',
              borderRadius: '0 !important',
              width: '100%',
            }}
          >
            <Typography
              variant="h6"
              fontSize="15px"
              color="white"
              fontWeight="400"
              sx={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              Markarn Doe
            </Typography>
            <Box>
              <Tooltip title="User" placement="top">
                <Box color="white" sx={{ p: 0 }}>
                  <IconCaretDownFilled width={18} />
                </Box>
              </Tooltip>
            </Box>
          </Box>
          }
        </IconButton>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <Box color="primary.main" display="flex" alignItems="center">
              <Icon icon="solar:user-circle-line-duotone" height={22} />
            </Box>
            <Typography fontSize="15px" ml={1}>
              My Profile
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Box color="secondary.main" display="flex" alignItems="center">
              <Icon icon="solar:notes-line-duotone" height={21} />
            </Box>
            <Typography fontSize="15px" ml={1}>
              My Notes
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Box color="success.main" display="flex" alignItems="center">
              <Icon icon="solar:inbox-line-line-duotone" height={21} />
            </Box>
            <Typography fontSize="15px" ml={1}>
              Inbox
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            <Box color="warning.main" display="flex" alignItems="center">
              <Icon icon="solar:settings-line-duotone" height={21} />
            </Box>
            <Typography fontSize="15px" ml={1}>
              Account Setting
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            <Box color="error.main" display="flex" alignItems="center">
              <Icon icon="solar:logout-2-line-duotone" height={21} />
            </Box>
            <Link to="/auth/auth1/login">
              <Typography fontSize="15px" ml={1} color="textPrimary">
                Logout
              </Typography>
            </Link>
          </MenuItem>
          <Divider />
          <Box px="12px">
            <Button variant="contained" color="primary" fullWidth>
              View Profile
            </Button>
          </Box>
        </StyledMenu>
      </>
    </Box>
  );
};
