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

const initialState = {
  userType: null,
  users: [],
  userProfile: {},
  loadingEmployee: false,
  employeeLoaded: false,
  loginMessage: null,
  loggingInUser: false,
  loggedIn: false,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        loadingEmployee: true
      };
    case GET_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loadingEmployee: false,
        employeeLoaded: true,
        employees: action.payload
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loadingEmployee: false
      };
    case GET_USERS_START:
      return state;
    case GET_USERS_SUCCESS:
      const userProfile = action.payload
        .filter(user => user.username === state.username)
        .pop();
      return {
        ...state,
        users: action.payload,
        userProfile: userProfile
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loggingInUser: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loginMessage: action.payload.message,
        loggedIn: true,
        username: action.payload.username,
        userType: action.payload.user_type,
        loggingInUser: false
      };
    case LOGIN_ERROR:
      localStorage.clear();
      return {
        ...state,
        loggingInUser: false,
        error: action.payload
      };
    case LOGOUT_SITE:
      localStorage.clear();
      return {
        ...state,
        loggedIn: false,
        token: "",
        loginMessage: "",
        username: "",
        userType: null,
        users: []
      };
    default:
      return state;
  }
};
