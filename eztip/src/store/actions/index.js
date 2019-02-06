import axios from "axios";
import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SITE
} from "../types";

export const getUserByID = id => dispatch => {
  dispatch({ type: GET_USER_START });
  axios
    .get(`https://eztip.herokuapp.com/workers/${id}`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_ERROR, payload: err.data });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .get("https://eztip.herokuapp.com/workers", reqOptions)
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR, payload: err.data });
    });
};

export const loginSite = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://eztip.herokuapp.com/login", credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.data });
    });
};

export const logoutSite = () => {
  return {
    type: LOGOUT_SITE
  };
};
