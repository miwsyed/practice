import { combineReducers } from "redux";
import { candidates } from "./candidateReducer";
const reducers = combineReducers({
  ALL_CANDIDATES: candidates,
});
export default reducers;
