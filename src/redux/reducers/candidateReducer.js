import { ActionTypes } from "../constants/action-types";
import { initialState } from "./InitialState";
export const candidates = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CANDIDATE: {
      return [...state, payload];
    }
    default:
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
