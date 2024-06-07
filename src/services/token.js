import axios from "axios";

export const validateToken = async (token) => {
  try {
    await axios.get(`/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
