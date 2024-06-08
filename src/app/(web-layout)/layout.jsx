"use client";

import { Container } from "@mui/material";
// import Footer from "components/Footer/Footer";
import UserHeader from "components/Header/UserHeader";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { DRAWER_WIDTH } from "../../theme/drawer";


const WebLayout = ({ children }) => {
  // state
  const [drawerWidth] = useState(DRAWER_WIDTH);

  return (
    <div className="main-container" maxheight={false}>
      <UserHeader drawerWidth={drawerWidth} />
      <Container className="content-container" maxWidth={false} disableGutters>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default WebLayout;
