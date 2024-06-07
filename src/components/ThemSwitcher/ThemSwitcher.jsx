import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { useTheme } from "next-themes";

const ThemeChange = () => {
  // themes
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <FormControl onChange={handleChangeTheme}>
      <FormControlLabel
        control={
          <Switch
            title={theme}
            checked={theme === "dark"}
            icon={
              <LightModeOutlined
                fontSize="small"
                className="text-white bg-yellow-500 rounded-full"
              />
            }
            checkedIcon={
              <DarkModeOutlined
                fontSize="small"
                className="text-white rounded-full bg-primary"
              />
            }
          />
        }
      />
    </FormControl>
  );
};

export default ThemeChange;
