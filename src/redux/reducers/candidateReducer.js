import { Action } from "history";
import { ActionTypes } from "../constants/action-types";
const persistedState = JSON.parse(localStorage.getItem("candidates"));
export const initialState = {
  candidates: persistedState ?? [],
};

export const candidates = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CANDIDATE: {
      return {
        ...state,
        ...state.candidates,
        candidates: [...state.candidates, payload],
      };
    }
    case ActionTypes.DELETE_CANDIDATE: {
      return {
        ...state,
        ...state.candidates,
        candidates: state.candidates.filter((e) => e.id !== payload),
      };
    }
    case ActionTypes.EDIT_CANDIDATE: {
      console.log(payload);
      let findCadndidate = state.candidates.find((e) => e.id === payload.id);
      findCadndidate.name = payload.name;
      findCadndidate.age = payload.age;
      let tempCandidates = JSON.parse(JSON.stringify(state.candidates));
      let indexNo = state.candidates.indexOf(
        state.candidates.find((e) => e.id === payload.id)
      );
      tempCandidates[indexNo] = findCadndidate;

      return {
        ...state,
        ...state.candidates,
        candidates: [...state.candidates, tempCandidates],
      };
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
