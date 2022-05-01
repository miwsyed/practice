import { ActionTypes } from "../constants/action-types";

export const setAge = (age) => {
  return {
    type: ActionTypes.SET_AGE,
    payload: age,
  };
};

export const resetAge = (age) => {
  return {
    type: ActionTypes.RESET_AGE,
    payload: age,
  };
};
