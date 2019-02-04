import axios from "axios";
import { LOGIN, UPDATE_LOGIN_FORM, CLEAR_LOGIN_FORM } from "../types";

// export const actionCreator = _ => dispatch => {
//   dispatch({ type: VARIABLE_NAMES_STARTED });
//   axios
//     .get("insert url")
//     .then(res => {
//       dispatch({ type: VARIABLE_NAMES_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: VARIABLE_NAMES_ERROR, payload: err.data });
//     });
// };

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
