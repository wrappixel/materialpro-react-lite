import { useMediaQuery, Box, Drawer, useTheme } from "@mui/material";
import Scrollbar from "src/components/custom-scroll/Scrollbar";
import AuthLogo from "../../shared/logo/AuthLogo";
import { useContext } from "react";
import SidebarItems from "./SidebarItems";
import { DashboardContext } from "src/context/DashboardContext";
import { Profile } from "./SidebarProfile/Profile";

const Sidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const theme = useTheme();


  const {isMobileSidebar , setIsMobileSidebar} = useContext(DashboardContext);


  const toggleWidth ='256px';



  return (
    <>
      {!lgUp ? (
        <Box
          sx={{
            zIndex: 100,
            width: toggleWidth,
            flexShrink: 0,
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar for desktop */}
          {/* ------------------------------------------- */}
          <Drawer
            anchor="left"
            open
            variant="permanent"
            slotProps={{
              paper: {
                sx: {
                  transition: theme.transitions.create("width", {
                    duration: theme.transitions.duration.shortest,
                  }),
                  width: toggleWidth,
                  boxSizing: "border-box",
                  border: "0",
                  top: '136px',
                  boxShadow: "1px 0 20px #00000014",
                }, 
              }
            }}
          >
            {/* ------------------------------------------- */}
            {/* Sidebar Box */}
            {/* ------------------------------------------- */}
            <Box
              borderRadius="0 !important"
              sx={{
                height: "100%",
              }}
            >
              <Profile />
               
              <Scrollbar sx={{ height: "calc(100% - 270px)" }}>

                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
              </Scrollbar>
            </Box>
            
          </Drawer>
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={isMobileSidebar}
          onClose={() => setIsMobileSidebar(false)}
          variant="temporary"
          slotProps={{
            paper: {
              sx: {
                width: '256px',
                border: "0 !important",
                boxShadow: (theme) => theme.shadows[8],
              },
            }
          }}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box px={2}>
            <AuthLogo />
          </Box>
          <Profile />
          {/* ------------------------------------------- */}
          {/* Sidebar For Mobile */}
          {/* ------------------------------------------- */}
          <SidebarItems />
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
