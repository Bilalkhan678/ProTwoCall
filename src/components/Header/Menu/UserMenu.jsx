import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Menu as MuiMenu,
} from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeAuthUser } from "@/redux/slices/authUser";
import Cookies from "js-cookie";

const UserMenu = ({ anchorEl, toggle }) => {
  // router
  const router = useRouter();

  // redux
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    toggle(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    Cookies.remove("loggedIn");
    router.push("/auth/login");
    dispatch(removeAuthUser());
    // const logoutEvent = new CustomEvent("logout", {
    //   detail: { logOut: true },
    // });
    // window.dispatchEvent(logoutEvent);
  };

  return (
    <>
      <MuiMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              width: 150,
              maxWidth: "100%",
            },
          },
        }}
      >
        <MenuList dense>
          <MenuItem autoFocus onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </MuiMenu>
    </>
  );
};

export default UserMenu;
