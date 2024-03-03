const { legacy_createStore: createStore, applyMiddleware } = require("redux")
const {
  delayActionMiddleware,
  fetchAsyncMiddleware,
} = require("./middlewares");
const { fetchTodos } = require("./functions");
// initial state
const initialState = {
  todos: []
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'todo/todoAdded':
      return {
        ...state,
        todos: [...state.todos, {title: action.payload}]
      }
    case 'todo/todoLoaded':
      return {
        ...state,
        todos: [...state.todos, ...action.payload]
      }
    default:
      return state
  }
}

// store
const store = createStore(
  reducer,
  applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)
);

// subscript to state changes
store.subscribe(() => {
  console.log(store.getState())
})

// dispatch actions
// store.dispatch({
//   type: "todo/todoAdded",
//   payload: 'this is a todo'
// });


store.dispatch(fetchTodos);