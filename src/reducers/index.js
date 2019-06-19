import { combineReducers } from "redux";
import music from "./music";
import playlist from "./playlist";

const reducer = combineReducers({
  music,
  playlist
});

export default reducer;
