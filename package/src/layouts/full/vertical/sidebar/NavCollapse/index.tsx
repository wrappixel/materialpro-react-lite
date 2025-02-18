import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
// mui imports
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';

// custom imports
import NavItem from '../NavItem';
import { isNull } from 'lodash';

// plugins
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { Icon } from '@iconify/react';
import { Chip } from '@mui/material';

type NavGroupProps = {
  [x: string]: any;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
};

interface NavCollapseProps {
  menu: NavGroupProps;
  level: number;
  pathWithoutLastPart: any;
  pathDirect: any;
  hideMenu: any;
  chip : string,
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

// FC Component For Dropdown Menu
export default function NavCollapse({
  menu,
  level,
  pathWithoutLastPart,
  pathDirect,
  hideMenu,
  onClick,
  chip
}: NavCollapseProps) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));


  const theme = useTheme();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const menuIcon =
    level > 1 ? <Icon icon={menu.icon} height={14} /> : <Icon icon={menu.icon} height={20} />;
  const handleClick = () => {
    setOpen(!open);
  };

  // menu collapse for sub-levels
  React.useEffect(() => {
    setOpen(false);
    menu?.children?.forEach((item: any) => {
      if (item?.href === pathname) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItemButton)(() => ({
    marginBottom: '2px',
    padding: '8px 10px',
    paddingLeft: hideMenu ? '12px' : level > 2 ? `${level * 15}px` : '12px',
    backgroundColor: open && level < 2 ? theme.palette.secondary.main : '',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor:
        pathname.includes(menu.href) || open
          ? theme.palette.secondary.main
          : theme.palette.secondary.light,
      color: pathname.includes(menu.href) || open ? 'white' : theme.palette.secondary.main,
    },
    color:
      open && level < 2
        ? 'white'
        : level > 1 && open
          ? theme.palette.secondary.main
          : theme.palette.text.primary,
    borderRadius: `${10 * 3}px`,
  }));

  // If Menu has Children
  const submenus = menu.children?.map((item: any) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item?.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
          chip={item?.chip}
        />
      );
    } else {
      return (
        <NavItem
          key={item.id}
          item={item}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={lgDown ? onClick : isNull}
        />
      );
    }
  });

  return (
    <>
      <ListItemStyled
        onClick={handleClick}
        selected={pathWithoutLastPart === menu.href}
        key={menu?.id}
      >
        <ListItemIcon
          sx={{
            minWidth: '36px',
            p: '3px 0',
            color: 'inherit',
          }}
        >
          {menuIcon}
        </ListItemIcon>
        <ListItemText color="inherit">{hideMenu ? '' : <>{t(`${menu.title}`)}</>}</ListItemText>
        {!chip || hideMenu ? null : (
          <Chip
            color={"primary"}
            variant={'filled'}
            size="small"
            label={"Pro"}
            sx={{
              height: 'fit-content', 
             
              borderRadius:"999px",
              '& .MuiChip-label': {
                fontSize:"10px",
                paddingX:"10px",
                lineHeight:1.9
              },
            }}
          />
        )}
        {!open ? <IconChevronDown size="1rem" /> : <IconChevronUp size="1rem" />}
      </ListItemStyled>
      <Collapse in={open} timeout="auto">
        {submenus}
      </Collapse>
    </>
  );
}
