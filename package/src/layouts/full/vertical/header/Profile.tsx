import { useState } from 'react';
import { Link } from 'react-router';
import { Box, Menu, Avatar, Typography, IconButton, Button } from '@mui/material';
import * as dropdownData from './data';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';



const Profile = () => {

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={ProfileImg}
          alt={'ProfileImg'}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '240px',
            p: 0,
          },
        }}
      >
        <Box paddingX={2}>
          {dropdownData.profile.map((profile) => (
            <Box key={profile.title}>
              <Box
                sx={{
                  px: 2,
                  borderRadius: '9px',
                  py: '10px',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
                className="hover-text-primary"
              >
                <Link to={profile.href}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    color="textPrimary"
                    className="text-hover" component='span'
                    noWrap
                    sx={{
                      width: '240px',
                    }}
                  >
                    {profile.title}
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
        <Box p={0}>
          <Box
            sx={{
              px: 2,
              py: '10px',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
            className="hover-text-primary"
          >
            <Button variant="outlined" component={Link} color="primary" sx={{ width: "100%" }} to="/auth/login">
              Logout
            </Button>
          </Box>

        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
