import { useState } from 'react';
import { IconButton, Box, Badge, MenuItem, Typography, Divider } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as dropdownData from './data';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

const Notifications = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      '& .MuiMenuItem-root': {
        '&:hover': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `${theme.palette.action.hover}`
              : `${theme.palette.background.default}`,
        },
      },
    },
  }));

  return (
    <Box color="white">
      <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleClick2} size="large">
        <Box component="span" className="heartbit"></Box>
        <Badge color="error" variant="dot">
          <Icon icon="solar:bell-bing-line-duotone" height={20} />
        </Badge>
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <StyledMenu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        sx={{
          '& .MuiMenu-paper': {
            width: '120px',
            maxHeight: 'none',
            background: 'transparent',

            '& .MuiMenu-list': {
              paddingY: 0,
            },
          },
        }}
      >
        <Scrollbar sx={{ height: '120px' }}>
          {dropdownData.notifications.slice(0,3).map((notification, index) => {
            return (
              <Box key={index}>
                <MenuItem
                  sx={{
                    p: 2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
                    borderBottom: (theme: any) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          fontWeight={500}
                          fontSize="14px"
                          width="fit-content"
                          noWrap
                          sx={{
                            width: '200px',
                          }}
                        >
                          {notification.title}
                        </Typography>
                </MenuItem>
              </Box>
            );
          })}
        </Scrollbar>
        <Divider />
      </StyledMenu>
    </Box>
  );
};

export default Notifications;
