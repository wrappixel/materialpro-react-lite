import React from "react";
import { Link } from 'react-router';
import { Icon } from "@iconify/react";
// mui imports
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
// import { CustomizerContext } from "src/context/CustomizerContext";


type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  children?: NavGroup[];
  chip?: string;
  chipColor?: any;
  variant?: string | any;
  external?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

export default function NavItem({
  item,
  level,
  pathDirect,
  hideMenu,
  onClick,
}: ItemType) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));


  const theme = useTheme();
  const { t } = useTranslation();
  const itemIcon =
    level > 1 ? (
      <Icon icon={item.icon} height={14} />
    ) : (
      <Icon icon={item.icon} height={20} />
    );

  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "8px 10px",
    borderRadius: `${10 * 3}px`,
    backgroundColor: level > 1 ? "transparent !important" : "inherit",
    color:
      level > 1 && pathDirect === item?.href
        ? `${theme.palette.secondary.main}!important`
        : theme.palette.text.primary,
    paddingLeft: hideMenu ? "12px" : level > 2 ? `${level * 15}px` : "12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.main,
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "white",
      },
    },
  }));



  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <Link to={item.href} target={`${item.chip ? "blank" :"_self"}`}>
        <ListItemStyled
          disabled={item?.disabled}
          selected={pathDirect === item?.href}
          onClick={lgDown ? onClick : undefined}
        >
          <ListItemIcon
            sx={{
              minWidth: "32px",
              p: "3px 0",
              color:
                level > 1 && pathDirect === item?.href
                  ? `${theme.palette.secondary.main}!important`
                  : "inherit",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText sx={{minWidth:"60px", overflowX:"hidden", textOverflow:"ellipsis" , whiteSpace:"nowrap"}}>
            {hideMenu ? "" : <>{t(`${item?.title}`)}</>}
            <br />
            {item?.subtitle ? (
              <Typography variant="caption">
                {hideMenu ? "" : item?.subtitle}
              </Typography>
            ) : (
              ""
            )}
          </ListItemText>

          {!item.chip || hideMenu ? null : (
          <Chip
            variant={'filled'}
            size="small"
            label={"Pro"}
            sx={{
              height: 'fit-content', 
              backgroundColor: 'primary.light',
              color: 'primary.main',
              fontWeight: 500,
              borderRadius:"999px",
              '& .MuiChip-label': {
                fontSize:"10px",
                paddingX:"10px",
                lineHeight:1.9
              },
            }}
          />
        )}
        </ListItemStyled>
      </Link>
    </List>
  );
}