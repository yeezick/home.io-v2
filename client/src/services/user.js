import api from "./apiConfig";

export const register = (userData) => {
  try {
    const res = await api.post("/users", { user: userData });
    const { token } = res.data;
    if (token) {
      localStorage.setItem("authToken", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      return res.data.user;
    }
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const res = await api.post("users/login", { user: userData });
    const { token } = res.data;
    if (token) {
      localStorage.setItem("authToken", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      return res.data.user;
    }
  } catch (error) {
    throw error;
  }
};

export const verify = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const res = await api.get("/users/verify");
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
};
