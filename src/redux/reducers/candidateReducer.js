import { ActionTypes } from "../constants/action-types";
import { initialState } from "./InitialState";
export const candidates = (state = { test: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CANDIDATE: {
      const newTest = [...state.test, payload];

      return { ...state, test: newTest };
    }
    default:
      console.log("asdf");
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
