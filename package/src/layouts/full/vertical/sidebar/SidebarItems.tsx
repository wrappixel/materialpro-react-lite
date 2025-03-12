import { useLocation, Link } from 'react-router';
import { Box, Typography } from "@mui/material";
import {
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";

import Menuitems from "./MenuItems";
import { Icon } from "@iconify/react";
import { Upgrade } from "./Upgrade";

const renderMenuItems = (items: any[], pathDirect: string) => {



  return items.map((item) => {
    if (item.subheader) {
      // Display Subheader
      return (
        <Box sx={{ margin: "0 -24px", textTransform: 'uppercase', '& .MuiListSubheader-root': { fontWeight: '600 !important' } }} key={item.subheader}>
          <Menu
            subHeading={item.subheader}
            key={item.subheader}

          ><></></Menu>
        </Box>
      );
    }

    //If the item has children (submenu)
    if (item.children) {
      return (
        <Submenu
          key={item.id}
          title={item.title}
          borderRadius='999px'
          icon={
            item.icon ? (
              <Icon icon={"solar:" + item.icon} width="20" height="20" />
            ) : (
              <Icon icon="mdi:circle" width="6" height="6" />
            )
          }
        >
          {renderMenuItems(item.children, pathDirect)}
        </Submenu>
      );
    }

    // If the item has no children, render a MenuItem
    return (
      <MenuItem
        key={item.id}
        isSelected={pathDirect === item?.href}
        borderRadius='999px'
        icon={
          item.icon ? (
            <Icon icon={"solar:" + item.icon} width="20" height="20" />
          ) : (
            <Icon icon="mdi:circle" width="6" height="6" />
          )
        }
        component="div"
        link={item.href && item.href !== "" ? item.href : undefined}
        target={item.href && item.href.startsWith("https") ? "_blank" : "_self"}
        badge={item.chip ? true : false}
        badgeContent={item.chip || ""}
        badgeColor='secondary'
        badgeTextColor="#1b84ff"
        disabled={item.disabled}
      >
        <Link to={item.href} target={item.href.startsWith("https") ? "_blank" : "_self"} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography component='span' color={pathDirect === item?.href ? '#fff' : 'inherit'}>
            {item.title}</Typography>
        </Link>
      </MenuItem>


    );
  });
};

const SidebarItems = () => {
  const location = useLocation();
  const pathDirect = location.pathname;

  return (
    <Box sx={{ px: "20px", overflowX: 'hidden' }}>
      <MUI_Sidebar width={"100%"} showProfile={false} themeColor={"#43ced7"} themeSecondaryColor={'#1b84ff1a'}>
        {renderMenuItems(Menuitems, pathDirect)}
      </MUI_Sidebar>
      <Upgrade />
    </Box>
  );
};

export default SidebarItems;

