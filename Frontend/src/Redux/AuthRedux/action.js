import * as types from "../ActionTypes";

const initState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  isLoading: false,
  isError: false,
  data: {},
};
