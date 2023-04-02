import {
  POST_REGISTER_REQUEST,
  POST_REGISTER_REQUEST_FAILURE,
  POST_REGISTER_REQUEST_SUCCESS,
} from "../ActionTypes";

const initState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  isLoading: false,
  isError: false,
  response: {},
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case POST_REGISTER_REQUEST_SUCCESS: {
      return {
        isLoading: false,
        response: payload,
      };
    }

    case POST_REGISTER_REQUEST_FAILURE: {
      
      return {
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
