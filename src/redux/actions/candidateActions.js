import { ActionTypes } from "../constants/action-types";

export const setCandidate = (data) => {
  return {
    type: ActionTypes.SET_CANDIDATE,
    payload: data,
  };
};
