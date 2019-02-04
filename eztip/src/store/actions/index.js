import axios from "axios";
import {
  LOGIN,
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
} from "../types";

export const getUserByID = id => dispatch => {
  dispatch({ type: GET_PROFILE_START });
  axios
    .get(`https://eztip.herokuapp.com/workers/${id}`)
    .then(res => {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROFILE_ERROR, payload: err.data });
    });
};

export const loginSite = () => {
  return {
    type: LOGIN
  };
};

export const updateLoginForm = e => {
  return {
    type: UPDATE_LOGIN_FORM,
    payload: e
  };
};

export const clearLoginForm = () => {
  return {
    type: CLEAR_LOGIN_FORM
  };
};
