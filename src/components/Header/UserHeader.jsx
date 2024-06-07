"use client";

import styles from "./styles.module.scss";
import { Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { useReduxUser } from "utils/hooks";
import { useTheme } from "next-themes";
import UserMenu from "./Menu/UserMenu";
import { Home, Person, Security, ExitToApp, Menu,Close } from "@mui/icons-material";
import { color } from "framer-motion";

const UserHeader = ({ drawerWidth }) => {
  // theme
  const { theme } = useTheme();

  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // redux
  const userRedux = useReduxUser();

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, link: "/" },
    { text: "Profile", icon: <Person />, link: "/profile" },
    { text: "Privacy", icon: <Security />, link: "/privacy" },
    { text: "Logout", icon: <ExitToApp />, link: "/logout" }
  ];

  return (
    <Box
      className={`${styles["header-container"]} ${styles[theme]} shadow-md shadow-secondary/40 dark:shadow-primary-light/40 backdrop-blur-sm`}
    >
      <Box className={styles["header-title-btn"]}>
      <IconButton onClick={handleSidebarDrawerOpen} sx={{ color: 'white' }}>
          <Menu sx={{ color: 'white' }} />
        </IconButton>
        <Link href="/">
          <p className={`${styles["header-title"]} text-lg font-semibold `}>
            {/* {projectName} */}
          </p>
        </Link>
      </Box>
      {userRedux && (
        <div className="flex items-center gap-3">
          <div className="items-center justify-center hidden md:flex">
            <span className={`${styles["date-span"]} text-primary-light dark:text-primary-dark`}>
              {/* {currentDate} */}
            </span>
          </div>
        </div>
      )}
      {/* menu */}
      <UserMenu anchorEl={anchorEl} toggle={setAnchorEl} />

      {/* dialog */}
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <Box
          sx={{ width: drawerWidth }}
          role="presentation"
          onClick={handleSidebarDrawerClose}
          onKeyDown={handleSidebarDrawerClose}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '8px',
              backgroundColor: '#2081c3',  // Use camelCase for CSS properties
             
            }}
          >
            <IconButton onClick={handleSidebarDrawerClose} sx={{ color: 'white' }}>
              <Menu sx={{ color: 'white' }}/>
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} href={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default UserHeader;
