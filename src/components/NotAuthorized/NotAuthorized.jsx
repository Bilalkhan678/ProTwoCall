import { Error } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

const NotAuthorized = () => {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col gap-4">
      <div className="flex items-center gap-2">
        <Error className="text-red-500" fontSize="large" />
        <h2 className="text-red-500">
          You are not authorized to access this page!
        </h2>
      </div>
      <Link href="/">
        <Button variant="contained" disableElevation>
          Home
        </Button>
      </Link>
    </div>
  );
};

export default NotAuthorized;
