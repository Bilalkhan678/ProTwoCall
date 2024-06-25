import { Group, Dashboard } from "@mui/icons-material";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <Dashboard />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/classes",
    name: "Classes",
    icon: <Group />,
    sidebar: true,
    isPrivate: true,
  },
];
