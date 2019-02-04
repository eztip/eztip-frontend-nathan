import { LOGIN, LOGOUT } from "../types";

const initialState = {
  loggedIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
