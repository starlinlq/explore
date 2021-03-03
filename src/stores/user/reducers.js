const initialState = {
  loading: false,
  user: null,
  token: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "get_user":
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
