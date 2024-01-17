

import { combineReducers } from "redux";

import counterReducer from "./counter/counter-reducer";
import dynamicCounterReducer from "./dynamic-counter/dynamic-counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer
})


export default rootReducer;