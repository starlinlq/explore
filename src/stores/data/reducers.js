const initialState = {
  loading: false,
  content: null,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "get_data":
      return {
        ...state,
        content: action.payload.content,
        loading: false,
      };

    default:
      return state;
  }
};
