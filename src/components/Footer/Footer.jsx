import styles from "./styles.module.scss";

import { Box } from "@mui/material";
import { projectName } from "../../theme/theme-config";
import { useTheme } from "next-themes";

const Footer = () => {
  // theme
  const { theme } = useTheme();

  return (
    <Box className={`${styles["footer"]} ${styles[theme]}`}>
      {projectName} @ DEVELO IT
    </Box>
  );
};

export default Footer;
