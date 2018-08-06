import { combineReducers } from "redux";
import input from "./input_reducer";
import timer from "./timer_reducer";

const rootReducer = combineReducers({ input, timer });

export default rootReducer;
