import axios from "axios";
const API_URL = "http://localhost:5000/api/auth/";

const register = (username, email, password) => {
    console.log(username, email, password, 'adfasd')
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;