import { combineReducers } from "redux";
import color from "./colorReducer";
import orientation from "./orientationReducer";

const rootReducer = combineReducers({ color, orientation });

export default rootReducer;