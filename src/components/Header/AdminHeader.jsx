"use client";

import { Box, Drawer } from "@mui/material";
import ThemeSwitcher from "@/components/ThemSwitcher/ThemSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { projectName } from "theme/theme-config";
import { useReduxUser } from "utils/hooks";
import AdminSidebar from "../Sidebar/AdminSidebar";
import DrawerToggle from "./DrawerToggle";
import styles from "./styles.module.scss";

const AdminHeader = ({ drawerWidth }) => {
  // theme
  const { theme } = useTheme();

  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);

  // redux
  const userRedux = useReduxUser();

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  return (
    <Box
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className={`${styles["header-container"]} ${styles[theme]} shadow-md shadow-secondary/40 dark:shadow-primary-light/40 backdrop-blur-sm`}
    >
      <Box className={styles["header-title-btn"]}>
        <DrawerToggle handleSidebarDrawerOpen={handleSidebarDrawerOpen} />
        <Link href="/">
          <p
            className={`${styles["header-title"]} text-sm md:text-lg font-semibold`}
          >
            {projectName}
          </p>
        </Link>
      </Box>
      {userRedux && (
        <div className="flex items-center justify-center gap-4">
          <ThemeSwitcher />
          <div className={styles["link-box"]}>
            <span className={styles["link"]}>Link</span>
          </div>
        </div>
      )}
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <AdminSidebar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          renderActions
        />
      </Drawer>
    </Box>
  );
};

export default AdminHeader;
