import { useTheme } from "next-themes";
import colorVariables from "../../styles/colors.module.scss";

import { ThemeProvider, createTheme } from "@mui/material";

// mui themes
const primaryColor = colorVariables.primary;
const secondaryColor = colorVariables.secondary;
const tableHeadColor = colorVariables.tableHeadColor;

const createMuiTheme = (themeMode) => {
  const newMode = themeMode === "system" ? "light" : themeMode;

  return createTheme({
    palette: {
      mode: newMode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            color: "white",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: tableHeadColor,
          },
        },
      },
    },
  });
};

const MuiThemeProvider = ({ children }) => {
  // next theme
  const { theme } = useTheme();
  const muiTheme = createMuiTheme(theme);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
