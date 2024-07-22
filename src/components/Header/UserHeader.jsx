"use client";

import styles from "./styles.module.scss";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { useReduxUser } from "utils/hooks";
import { useTheme } from "next-themes";
import UserMenu from "./Menu/UserMenu";
import {
  Home,
  Person,
  History,
  Policy,
  ContactMail,
  Call,
  ExitToApp,
  Menu,
  Close,
} from "@mui/icons-material";
import { projectName } from "theme/theme-config";
import { removeAuthUser } from "@/redux/slices/authUser";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const UserHeader = ({ drawerWidth }) => {
  // theme
  const { theme } = useTheme();

  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // redux
  const userRedux = useReduxUser();

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  const handleLogout = async () => {
    dispatch(removeAuthUser());
    router.push("/auth/login");
  };

  const menuItems = [
    { text: "Home", icon: <Home />, link: "/" },
    { text: "Profile", icon: <Person />, link: "/users" },
    { text: "Service History", icon: <History />, link: "/about-us" },
    { text: "Privacy Policy", icon: <Policy />, link: "/privacy-policy" },
    { text: "Contact Us", icon: <Call />, link: "/contact-us" },
    // { text: "Logout", icon: <ExitToApp />, link: "/logout" },
    // { text: "Logout", icon: <ExitToApp />, action :  }
  ];

  return (
    <Box
      className={`${styles["header-container"]} ${styles[theme]} shadow-md shadow-secondary/40 dark:shadow-primary-light/40 backdrop-blur-sm`}
    >
      <IconButton
        onClick={handleSidebarDrawerOpen}
        sx={{ color: "white", position: "absolute", left: 20 }}
      >
        <Menu sx={{ color: "white" }} />
      </IconButton>
      <Link href="/" className={styles["header-title"]}>
        {projectName}
      </Link>
      {userRedux && (
        <div className="flex items-center gap-3">
          <div className="items-center justify-center hidden md:flex">
            <span
              className={`${styles["date-span"]} text-primary-light dark:text-primary-dark`}
            >
              {/* {currentDate} */}
            </span>
          </div>
        </div>
      )}
      <UserMenu anchorEl={anchorEl} toggle={setAnchorEl} />
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
              display: "flex",
              justifyContent: "flex-start",
              padding: "8px",
              backgroundColor: "#2081c3",
              height: "73px",
            }}
          >
            <IconButton
              onClick={handleSidebarDrawerClose}
              sx={{ color: "white" }}
            >
              <Menu sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} href={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button component={Link} href="" onClick={handleLogout}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default UserHeader;
