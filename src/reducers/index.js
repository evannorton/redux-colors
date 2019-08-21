import { combineReducers } from "redux";
import modal from "./modalReducer";
import color from "./colorReducer";

const rootReducer = combineReducers({ color });

export default rootReducer;