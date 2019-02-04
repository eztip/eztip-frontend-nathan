import { LOGIN } from "../types";

const initialState = {
  loggedIn: false
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case UPDATE_LOGIN_FORM:
      console.log(action.payload.target.name);
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
    default:
      return state;
  }
};
