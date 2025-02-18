import { useState } from "react";
import { Box, Menu, Typography, Button, Divider, Grid2 as Grid, IconButton } from "@mui/material";
import { Link } from 'react-router';
import { IconHelp } from "@tabler/icons-react";
import { Icon } from "@iconify/react";

const AppDD = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (<>
    <Box>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleClick2}
        size="large"
      >
        <Icon icon="solar:widget-3-line-duotone" height={20} />
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
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "850px",
          },
          "& .MuiMenu-paper ul": {
            p: 0,
          },
        }}
      >
        <Grid container>
          <Grid
            display="flex"
            size={{
              sm: 8
            }}>
            <Box p={4} pr={0} pb={3}>
              {/* <AppLinks /> */}
              <Divider />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
                alignItems="center"
                justifyContent="space-between"
                pt={2}
                pr={4}
              >
                <Link to="/faq" className="hover-text-primary">
                  <Typography
                    variant="subtitle2"
                    fontWeight="400"
                    fontSize='15px'
                    color="grey.600"
                    display="flex"
                    className="text-hover"
                    alignItems="center"
                    gap="6px"
                  >
                    <IconHelp width={20} stroke={1.5} />
                    Frequently Asked Questions
                  </Typography>
                </Link>
                <Button variant="contained" color="primary" sx={{ borderRadius: "50px" }}>
                  <Typography fontWeight="500" variant="subtitle2" lineHeight={1.75}>Check</Typography>
                </Button>
              </Box>
            </Box>
            <Divider orientation="vertical" />
          </Grid>
          <Grid
            size={{
              sm: 4
            }}>
            <Box p={4}>
              {/* <QuickLinks /> */}
            </Box>
          </Grid>
        </Grid>
      </Menu>

    </Box>
  </>);
};

export default AppDD;
