import { loginReducer } from "./loginReducer";
import { paymentReducer } from "./paymentReducer";
import { combineReducers } from "redux";

export default combineReducers({
  loginReducer,
  paymentReducer
});
