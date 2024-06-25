"use client";

import styles from "./styles.module.scss";

import { Box, Container, Drawer, Paper } from "@mui/material";
import { useState } from "react";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminHeader from "../../components/Header/AdminHeader";
// import Footer from "../../components/Footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { DRAWER_WIDTH } from "../../theme/drawer";
import DashboardLayoutWrapper from "../../components/LayoutWrappers/Dashboard/LayoutWrapper";
import { useTheme } from "next-themes";

const DashboardLayout = ({ children }) => {
  // theme
  const { theme } = useTheme();

  // state
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH);

  return (
    <DashboardLayoutWrapper>
      <AdminHeader drawerWidth={drawerWidth} />
      <Drawer
        variant="permanent"
        anchor="left"
        className="xs:hidden md:block"
        PaperProps={{
          sx: {
            borderRight: "none",
          },
        }}
      >
        <AdminSidebar
          drawerWidth={drawerWidth}
          setDrawerWidth={setDrawerWidth}
          renderActions
        />
      </Drawer>
      <Box
        className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
        }}
      >
        <Container className={styles["content-container"]}>
          <Paper elevation={0} className={styles["paper-container"]}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Box>{children}</Box>
            </ErrorBoundary>
          </Paper>
        </Container>
        {/* <Footer /> */}
      </Box>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
