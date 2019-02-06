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
  LOGOUT_SITE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  NEW_USER_START,
  NEW_USER_SUCCESS,
  NEW_USER_ERROR,
  UPDATE_PHOTO_START,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_ERROR
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

export const updateUser = user => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  console.log(user.id);
  axios
    .put(`https://eztip.herokuapp.com/workers/${user.id}`, user)
    .then(res => {
      console.log("Update user", res.data);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_ERROR, payload: err.data });
    });
};

export const newUser = user => dispatch => {
  dispatch({ type: NEW_USER_START });
  axios
    .post("https://eztip.herokuapp.com/register", user)
    .then(res => {
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: NEW_USER_ERROR, payload: err.data });
    });
};

export const updateProfilePhoto = (id, fd) => dispatch => {
  dispatch({ type: UPDATE_PHOTO_START });
  axios
    .post(`https://eztip.herokuapp.com/workers/${id}/upload`, fd)
    .then(res => {
      dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: res.data.data.imgUrl });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PHOTO_ERROR, payload: err.data });
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
