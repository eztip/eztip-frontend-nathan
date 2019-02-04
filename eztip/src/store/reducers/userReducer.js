import {
  LOGIN,
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
} from "../types";

const initialState = {
  loggedIn: true,
  loginUsername: "",
  loginPassword: "",
  loadingEmployee: false,
  employeeLoaded: false,
  employee: {}
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
    case GET_PROFILE_START:
      return {
        ...state,
        loadingEmployee: true
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loadingEmployee: false,
        employeeLoaded: true,
        employee: action.payload
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loadingEmployee: false
      };
    default:
      return state;
  }
};
