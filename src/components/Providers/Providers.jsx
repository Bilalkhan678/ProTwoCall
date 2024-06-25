"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayoutWrapper from "@/components/LayoutWrappers/Root/LayoutWrapper";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import { sonner } from "@/theme/theme-config";
import MuiThemeProvider from "./MuiThemeProvider";
import Spinner from "@/components/Spinner/Spinner";
import { Next13ProgressBar } from "next13-progressbar";
import colorVariables from "@/styles/colors.module.scss";

// colors
const primaryColor = colorVariables.primary;

// react query
const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <>
      <Next13ProgressBar
        color={primaryColor}
        options={{
          showSpinner: false,
        }}
      />
      <Toaster
        position={sonner.position}
        expand={sonner.expand}
        closeButton={sonner.closeButton}
        richColors={sonner.richColors}
        visibleToasts={sonner.visibleToasts}
        loadingIcon={<Spinner size={20} />}
        toastOptions={{
          duration: sonner.toastOptions.duration,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider attribute="class" enableSystem={false}>
          <MuiThemeProvider>
            <ReduxProvider store={store}>
              <RootLayoutWrapper>
                <main>{children}</main>
              </RootLayoutWrapper>
            </ReduxProvider>
          </MuiThemeProvider>
        </NextThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
