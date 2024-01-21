import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  todo: todosReducer
})

export default rootReducer;