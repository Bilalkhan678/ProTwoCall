
"use client";

import { useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "formik-mui";
import * as Yup from "yup";
import { setAuthUser } from "@/redux/slices/authUser";
import Image from "next/image"; // Import the Next.js Image component
import styles from "./styles.module.scss";

// Setup QueryClient
const queryClient = new QueryClient();

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email Required"),
  password: Yup.string().required("Password Required"),
});

// Define the loginUser function
// Define the loginUser function
const loginUser = async (credentials) => {
  try {
    console.log("Login credentials:", credentials); // Debugging
    const response = await axios.post("https://api.dev.protowcall.ca/api/v1/auth/login/customer", credentials);
    console.log("API response:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("API error:", error); // Debugging
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Define the hardcoded credentials
const predefinedUser = {
  email: "farrukh@admin.com",
  password: "Admin123@"
};

const Login = () => {
  // Redux
  const dispatch = useDispatch();

  // Router
  const router = useRouter();

  // Mutation setup
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { user, token } = data;
      const reduxState = { userData: user, token };
      dispatch(setAuthUser(reduxState));
      localStorage.setItem("userSelection", JSON.stringify({ currentState: "service-location" }));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      router.push("/");
      toast.success("Logged in successfully.");
    },
    onError: (error) => {
      // Show error from API or fallback to hardcoded values
      if (error.message === "Login failed") {
        handleHardcodedLogin();
      } else {
        toast.error(error.message || "Email or password is invalid.");
      }
    },
  });

  // Handle login with predefined values
  const handleHardcodedLogin = () => {
    const { email, password } = predefinedUser;
    if (email === predefinedUser.email && password === predefinedUser.password) {
      const data = { user: { name: "farrukh", email }, token: "some-dummy-token" };
      const reduxState = { userData: data.user, token: data.token };
      dispatch(setAuthUser(reduxState));
      localStorage.setItem("userSelection", JSON.stringify({ currentState: "service-location" }));
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      router.push("/");
      toast.success("Logged in successfully with hardcoded values.");
    } else {
      toast.error("Email or password is invalid.");
    }
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      await mutation.mutateAsync(values); // Await the mutation
    } catch (error) {
      // Catch any errors from mutation
      toast.error(error.message || "An error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  // Ensure theme is defined
  const theme = 'defaultTheme'; // Replace with your actual theme or logic to get it

  return (
    <div>
      <Grid container className={`${styles[`login-page`] || 'defaultLoginPage'} ${styles[theme] || 'defaultTheme'}`}>
        <Grid container justifyContent="center" alignItems="center" className={styles["logo-container"]}>
          <Grid item>
            <Image src="/images/logo.jpg" alt="Logo" width={200} height={100} className={styles["logo"]} />
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
            <div className={`px-3 pt-1 pb-4 rounded-md shadow-md ${styles["paper-div"]}`} elevation={3}>
              <h3 className={`mb-4 text-xl md:text-3xl text-center ${styles["heading"]}`}>Login</h3>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={loginUser}
                validationSchema={LoginSchema}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box margin={1}>
                      <Field
                        margin="dense"
                        component={TextField}
                        name="email"
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Login />
  </QueryClientProvider>
);

export default App;

























// "use client";

// import styles from "./styles.module.scss";
// import * as Yup from "yup";
// import { Box, Button, Grid, LinearProgress } from "@mui/material";
// import { Field, Form, Formik } from "formik";
// import LoginIcon from "@mui/icons-material/Login";
// import { TextField } from "formik-mui";
// import { projectName } from "theme/theme-config";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "sonner";
// import { useTheme } from "next-themes";
// import Image from "next/image"; // Import the Next.js Image component

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid Email").required("Email Required"),
//   password: Yup.string().required("Password Required"),
// });

// const Login = () => {
//   // theme
//   const { theme } = useTheme();

//   // redux
//   const dispatch = useDispatch();

//   // router
//   const router = useRouter();

//   const handleLogin = async (values, setSubmitting) => {
//     const toastID = toast.loading("Logging in...", {
//       important: true,
//     });
//     setTimeout(() => {
//       const { email, password } = values;
//       if (email === "farrukh@admin.com" && password === "Admin123@") {
//         const data = { name: "farrukh", email: "farrukh@admin.com" };
//         const token = "some-dummy-token";
//         const reduxState = {
//           userData: data,
//           token,
//         };
//         toast.success("Logged in", {
//           id: toastID,
//         });
//         dispatch(setAuthUser(reduxState));
//         localStorage.setItem(
//           "userSelection",
//           JSON.stringify({ currentState: "service-location" })
//         );
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         router.push("/");
//       } else {
//         toast.error("Email or password is invalid.", { id: toastID });
//       }

//       setSubmitting(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       <Grid container className={`${styles[`login-page`]} ${styles[theme]}`}>
//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           className={styles["logo-container"]}
//         >
//           <Grid item>
//             <Image
//               src="/images/logo.jpg"
//               alt="Logo"
//               width={200}
//               height={100}
//               className={styles["logo"]}
//             />
//           </Grid>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           style={{ height: "calc(100vh - 120px)" }} // Adjust height to account for logo height
//           // style={{ height: "100vh" }}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           margin-top="100px"
//         >
//           <Box
//             sx={{
//               width: {
//                 xs: "600px",
//               },
//               marginX: {
//                 xs: 2,
//                 md: 0,
//               },
//             }}
//           >
//             <div
//               className={`px-3 pt-1 pb-4 rounded-md shadow-md ${styles["paper-div"]}`}
//               elevation={3}
//             >
//               <h3
//                 className={`mb-4 text-xl md:text-3xl text-center ${styles["heading"]}`}
//               >
//                 {/* {projectName} */}
//               </h3>
//               <Formik
//                 initialValues={{
//                   email: "",
//                   password: "",
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                   handleLogin(values, setSubmitting);
//                 }}
//                 validationSchema={LoginSchema}
//               >
//                 {({ isSubmitting }) => (
//                   <Form>
//                     <Box margin={1}>
//                       <Field
//                         margin="dense"
//                         component={TextField}
//                         name="email"
//                         type="email"
//                         label="Email/Username"
//                         required
//                         fullWidth
//                       />
//                     </Box>
//                     <Box margin={1}>
//                       <Field
//                         margin="dense"
//                         component={TextField}
//                         name="password"
//                         type="password"
//                         label="Password"
//                         required
//                         fullWidth
//                       />
//                     </Box>
//                     <Box margin={1}>
//                       <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         startIcon={<LoginIcon />}
//                         disabled={isSubmitting}
//                       >
//                         Login
//                       </Button>
//                       {isSubmitting && <LinearProgress className="mt-3" />}
//                     </Box>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Login;
