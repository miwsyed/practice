import { ActionTypes } from "../constants/action-types";

export const setCandidate = (data) => {
  return {
    type: ActionTypes.SET_CANDIDATE,
    payload: data,
  };
};

export const deleteCandidate = (id) => {
  return {
    type: ActionTypes.DELETE_CANDIDATE,
    payload: id,
  };
};
export const updateCandidate = (data) => {
  console.log(data);
  return {
    type: ActionTypes.EDIT_CANDIDATE,
    payload: data,
  };
};
