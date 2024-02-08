import { CHANGE_FILTER_COLORS, CHANGE_FILTER_STATUS } from "./actionTypes";

const initialState = {
  status: 'All', // 'Incomplete' | 'Completed',
  colors: [] // ['green', 'red', 'yellow']
}

const todosFilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_FILTER_STATUS:
      return state
    case CHANGE_FILTER_COLORS:
      return state;
    default:
      return state;
  }
}

export default todosFilterReducer