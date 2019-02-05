import {
  LOGIN,
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "../types";

const initialState = {
  loggedIn: true,
  isAUser: true,
  loginUsername: "",
  loginPassword: "",
  employee: {},
  users: [],
  loadingEmployee: false,
  employeeLoaded: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case UPDATE_LOGIN_FORM:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case CLEAR_LOGIN_FORM:
      return {
        ...state,
        loginUsername: "",
        loginPassword: ""
      };
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
      console.log(action.payload);
      return {
        ...state,
        users: action.payload
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
