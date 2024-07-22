"use client";

import { setAuthUser } from "@/redux/slices/authUser";
import { loginFunction } from "@/services/auth";
import LoginIcon from "@mui/icons-material/Login";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import Image from "next/image"; // Import the Next.js Image component
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as Yup from "yup";
import styles from "./styles.module.scss";

const LoginSchema = Yup.object().shape({
  username: Yup.string().email("Invalid Email").required("Email Required"),
  password: Yup.string().required("Password Required"),
});

const Login = () => {
  // Redux
  const dispatch = useDispatch();

  // Router
  const router = useRouter();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const { token } = await loginFunction(values);
      const reduxState = {
        userData: values.username,
        token,
      };
      dispatch(setAuthUser(reduxState));
      setSubmitting(false);
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      setSubmitting(false);
      toast.error(error?.message);
    }
  };

  // Ensure theme is defined
  const theme = "defaultTheme"; // Replace with your actual theme or logic to get it

  return (
    <div>
      <Grid
        container
        className={`${styles[`login-page`] || "defaultLoginPage"} ${
          styles[theme] || "defaultTheme"
        }`}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={styles["logo-container"]}
        >
          <Grid item>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={200}
              height={100}
              className={styles["logo"]}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ height: "calc(100vh - 120px)" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="100px"
        >
          <Box
            sx={{
              width: { xs: "600px" },
              marginX: { xs: 2, md: 0 },
            }}
          >
            <div
              className={`px-3 pt-1 pb-4 rounded-md shadow-md ${styles["paper-div"]}`}
              elevation={3}
            >
              <h3
                className={`mb-4 text-xl md:text-3xl text-center ${styles["heading"]}`}
              >
                Login
              </h3>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={handleLogin}
                validationSchema={LoginSchema}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box margin={1}>
                      <Field
                        margin="dense"
                        component={TextField}
                        name="username"
                        type="email"
                        label="Email/Username"
                        required
                        fullWidth
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        margin="dense"
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                        required
                        fullWidth
                      />
                    </Box>
                    <Box margin={1}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        startIcon={<LoginIcon />}
                        disabled={isSubmitting}
                      >
                        Login
                      </Button>
                      {isSubmitting && <LinearProgress className="mt-3" />}
                    </Box>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
