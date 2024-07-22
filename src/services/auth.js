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
