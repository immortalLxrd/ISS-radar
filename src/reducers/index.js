import { combineReducers } from "redux";
import position from "./position";
import members from "./members";

const rootReducer = combineReducers({
  position,
  members,
});

export default rootReducer;
