import {
  ADD_TODO,
  CHANGE_TODO_COLOR,
  COMPLETE_ALL_TODO,
  DELETE_COMPLETED_TODO,
  DELETE_TODO,
  TODO_LOADED,
  TOGGLE_TODO,
} from "./actionTypes";

const initialState = [
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LOADED:
      return [...initialState, ...action.payload]

    case ADD_TODO: {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: action.payload,
        // color: "green", // yellow, red
        is_completed: false,
      };
      return [...state, newTodo];
    }

    case TOGGLE_TODO:
      return [
        ...state.map((todoItem) => {
          if (todoItem.id === action.payload) {
            return {
              ...todoItem,
              is_completed: !todoItem.is_completed,
            };
          }
          return todoItem;
        }),
      ];

    case DELETE_TODO:
      return [...state.filter((todoItem) => todoItem.id !== action.payload)];

    case CHANGE_TODO_COLOR:
      return [
        ...state.map((todoItem) => {
          if (todoItem.id === action.payload.id) {
            return action.payload;
          }
          return todoItem;
        }),
      ];

    case COMPLETE_ALL_TODO:
      return [...state.map((todoItem) => ({...todoItem, is_completed: true}))]

    case DELETE_COMPLETED_TODO:
      return [...state.filter(todoItem => todoItem.is_completed === false)]

    default:
      return state;
  }
};

export default todosReducer;
