import axios from "axios";

export function register_user({ name, email, password }) {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/register", {
        name,
        email,
        password,
        password_confirmation: password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
}
