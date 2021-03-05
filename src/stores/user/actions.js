import axios from "axios";
import { REGISTER, LOGOUT, LOADING, LOGIN } from "./types";

export function register_user({ name, email, password }) {
  return async (dispatch) => {
    const url = "http://127.0.0.1:8000/api/auth/register";

    try {
      const res = await axios.post(url, {
        name,
        email,
        password,
        password_confirmation: password,
      });
      if (res) {
        const token = res.data.data.token;
        localStorage.setItem("Authorization", `Bearer ${token.slice(3, 1000)}`);

        dispatch({
          type: REGISTER,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function authenticate() {
  return async (dispatch) => {
    const token = localStorage.getItem("Authorization");

    if (token) {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/me", {
          headers: { Authorization: token },
        });
        dispatch({ type: LOGIN, payload: res.data });
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export function login_user({ email, password }) {
  return async (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login", { email, password })
      .then((response) => {
        localStorage.setItem(
          "Authorization",
          `Bearer ${response.data.data.token.slice(3, 1000)}`
        );
        dispatch({ type: LOGIN, payload: response.data.data.user });
      })
      .catch((res) => console.log(res));
  };
}

export function logout_user() {
  const token = localStorage.getItem("Authorization");
  return async (dispatch) => {
    try {
      axios.post("http://127.0.0.1:8000/api/auth/logout", {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: LOADING });
    localStorage.removeItem("Authorization");
    dispatch({ type: LOGOUT });
  };
}
