import { Menu } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { useReduxUser } from "utils/hooks";
import { IconButton, Tooltip } from "@mui/material";

const DrawerToggle = ({ handleSidebarDrawerOpen }) => {
  // redux
  const userRedux = useReduxUser();

  return userRedux ? (
    <Tooltip title="Menu" arrow={true} placement="right">
      <IconButton
        className={styles["header-sidebar-btn"]}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
        onClick={handleSidebarDrawerOpen}
      >
        <Menu />
      </IconButton>
    </Tooltip>
  ) : (
    <></>
  );
};

export default DrawerToggle;
