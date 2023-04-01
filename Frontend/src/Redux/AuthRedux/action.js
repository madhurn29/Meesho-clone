import axios from "axios";
import {
  POST_REGISTER_REQUEST,
  POST_REGISTER_REQUEST_FAILURE,
  POST_REGISTER_REQUEST_SUCCESS,
} from "../ActionTypes";

export const postRequest = () => {
  return {
    type: POST_REGISTER_REQUEST,
  };
};

export const postRequestSuccess = (payload) => {
  return {
    type: POST_REGISTER_REQUEST_SUCCESS,
    payload,
  };
};

export const postRequestError = () => {
  return {
    type: POST_REGISTER_REQUEST_FAILURE,
  };
};

export const postRegisterRequest = (obj) => (dispatch) => {
  dispatch(postRequest());

  return axios
    .post("https://long-lime-fly-tux.cyclic.app/user/register", obj)
    .then((res) => {
      console.log(res.data, "from actions");
      dispatch(postRequestSuccess(res.data));
      return res;
    })
    .catch((err) => {
      dispatch(postRequestError);
    });
};

export const validateOtp = (obj) => (dispatch) => {
  dispatch(postRequest());

  return axios
    .post("https://long-lime-fly-tux.cyclic.app/user/validateOtp", obj)
    .then((res) => {
      dispatch(postRequestSuccess(res.data));

      return res.data;
    })
    .catch((err) => {
      dispatch(postRequestError);
      return false;
    });
};

export const loginRequest = (obj) => (dispatch) => {
  dispatch(postRequest());

  return axios
    .post("https://long-lime-fly-tux.cyclic.app/user/login", obj)
    .then((res) => {
      dispatch(postRequestSuccess(res.data));
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      dispatch(postRequestError);
      return false;
    });
};

export const adminLoginRequest = (obj) => (dispatch) => {
  dispatch(postRequest());
  console.log(obj, "from action");
  return axios
    .post("https://long-lime-fly-tux.cyclic.app/admin/register", obj)
    .then((res) => {
      dispatch(postRequestSuccess(res.data));
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      dispatch(postRequestError);
      return false;
    });
};

export const validateAdminOtp = (obj) => (dispatch) => {
  dispatch(postRequest());

  return axios
    .post("https://long-lime-fly-tux.cyclic.app/admin/validateOtp", obj)
    .then((res) => {
      dispatch(postRequestSuccess(res.data));
      // console.log(res.data, "from action");
      return res.data;
    })
    .catch((err) => {
      dispatch(postRequestError);
      return false;
    });
};
