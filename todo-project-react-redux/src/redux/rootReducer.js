import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";
import todosFilterReducer from "./todosFilter/todosFilterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  todosFilter: todosFilterReducer,
});

export default rootReducer;
