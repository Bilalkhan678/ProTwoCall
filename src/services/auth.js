import axios from "axios";

export const loginFunction = async (credentials) => {
  try {
    return await axios.post(
      "https://api.dev.protowcall.ca/api/v1/auth/login/customer",
      credentials
    );
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};


// const API_BASE_URL = 'https://api.dev.protowcall.ca/api/v1/users/me'; // Replace with your API base URL


// import { useMutation, useQuery } from "@tanstack/react-query";
// // import axios from "axios";

// // Function to fetch user profile
// const fetchUserProfile = async () => {
//   const token = localStorage.getItem("token");
//   return axios
//     .get(`https://api.dev.protowcall.ca/api/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => res.data);
// };

// // Function to update user password
// const changePassword = async (data) => {
//   const token = localStorage.getItem("token");
//   return axios
//     .put(`https://api.dev.protowcall.ca/api/v1/users/me`, data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => res?.data);
// };

// // Custom hook to fetch user profile using React Query
// export const useUserProfile = () => {
//   return useQuery({
//     queryKey: ["get-user-profile"],
//     queryFn: () => fetchUserProfile(),
//     refetchOnWindowFocus: false,
//   });
// };

// // Custom hook to change user password using React Query
// export const useChangePassword = () => {
//   return useMutation({
//     mutationKey: ["change-password"],
//     mutationFn: (data) => changePassword(data),
//   });
// };





// // const API_BASE_URL = 'https://api.dev.protowcall.ca/api/v1/users/me'; // Replace with your API base URL

// // export const fetchUserProfile = async () => {
// //   try {
// //     const response = await axios.get(`${API_BASE_URL}`);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error('Error fetching user profile');
// //   }
// // };

// // export const updateUserProfile = async (data) => {
// //   try {
// //     const response = await axios.get(`${API_BASE_URL}`, data);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error('Error updating user profile');
// //   }
// // };





// // export const updateUserPassword = async (data) => {
// //   try {
// //     const response = await axios.post(`${API_BASE_URL}/user/change-password`, data);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error('Error changing password');
// //   }
// // };
