import { loginReducer } from "./loginReducer";
import { paymentReducer } from "./paymentReducer";
import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";

export default combineReducers({
  loginReducer,
  paymentReducer,
  profileReducer
});
