import { PAY_TIP_START, PAY_TIP_SUCCESS, PAY_TIP_ERROR } from "../types";

const initialState = {
  tipId: null
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_TIP_START:
      return state;
    case PAY_TIP_SUCCESS:
      return state;
    case PAY_TIP_ERROR:
      return state;
    default:
      return state;
  }
};
