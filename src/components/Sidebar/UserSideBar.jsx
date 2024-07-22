import React, { useState, useEffect } from "react";
import Link from "next/link";
import { routes } from "../../routes/routes";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import UserSidebarActions from "./Actions/UserSidebarActions.jsx";
import { useTheme } from "next-themes";

const drawer = Object.freeze({
  open: 240,
  closed: 80,
});

const SideBar = ({
  drawerWidth,
  handleSidebarDrawerClose,
  setDrawerWidth,
  renderActions,
  renderToggleButton,
}) => {
  // theme
  const { theme } = useTheme();

  console.log(theme);

  // state
  const [filterRoutes, setFilterRoutes] = useState([]);

  // router
  const pathname = usePathname();

  useEffect(() => {
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  const handleListItemClick = () => {
    if (handleSidebarDrawerClose);
    {
      handleSidebarDrawerClose();
    }
  };

  const toggleDrawer = () => {
    if (drawerWidth === drawer.closed) {
      setDrawerWidth(drawer.open);
    } else {
      setDrawerWidth(drawer.closed);
    }
  };

  return (
    <Box sx={{ width: drawerWidth }} className={`sidebar-container ${theme}`}>
      <Box className="logo-box">
        <Typography
          className="logo-heading"
          color="primary"
          textAlign="center"
          variant="h5"
        >
          [Logo]
        </Typography>
      </Box>
      <Box className="links-box">
        <List className="navLink">
          {filterRoutes.map((route) => (
            <Link href={route.path} key={route.path}>
              <ListItemButton
                button
                className="list-item"
                key={route.path}
                onClick={() => handleListItemClick(route.path)}
                selected={pathname === route.path}
              >
                <Tooltip
                  title={drawerWidth === drawer.closed ? route.name : ""}
                  placement="right"
                  arrow
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                </Tooltip>
                {drawerWidth === drawer.open && (
                  <ListItemText
                    primary={route.name}
                    secondary={route?.description ?? ""}
                  />
                )}
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Box>
      {renderActions && (
        <div className="drawer-footer-actions">
          {/* <UserSidebarActions drawerWidth={drawerWidth} /> */}
          {renderToggleButton && (
            <Box className="drawer-toggle-btn">
              <Button
                onClick={toggleDrawer}
                fullWidth
                color="primary"
                variant="contained"
              >
                {drawerWidth === drawer.open ? (
                  <ArrowBackIos style={{ fontSize: "inherit" }} />
                ) : (
                  <ArrowForwardIos style={{ fontSize: "inherit" }} />
                )}
              </Button>
            </Box>
          )}
        </div>
      )}
    </Box>
  );
};

export default SideBar;
