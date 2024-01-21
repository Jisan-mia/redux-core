import { ADD_TODO } from "./actionTypes";

const initialState =  [{ id: 1, text: "My todo", is_completed: false, color: 'green' }];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: action.payload,
        color: "green",
        is_completed: false,
      };
      return [...state, newTodo];
    }

    default:
      return state
  }
}

export default todosReducer