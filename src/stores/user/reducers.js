import { REGISTER, LOGOUT, LOADING, LOGIN } from "./types";
const initialState = {
  loading: false,
  user: null,
  Authorization: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOGIN:
      return { ...state, user: action.payload };
    case REGISTER:
      return {
        ...state,
        loading: false,
        user: action.payload.userData,
      };

    case LOGOUT:
      return { ...state, user: null, loading: false };

    default:
      return state;
  }
};
