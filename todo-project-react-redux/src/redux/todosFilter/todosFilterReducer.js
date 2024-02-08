import { CHANGE_FILTER_COLORS, CHANGE_FILTER_STATUS } from "./actionTypes";

const initialState = {
  status: 'All', // 'Incomplete' | 'Completed',
  colors: [] // ['green', 'red', 'yellow']
}

const todosFilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_FILTER_STATUS:
      return {
        ...state,
        status: action.payload.status
      }
    case CHANGE_FILTER_COLORS:
      if(state.colors.includes(action.payload.color)) {
        return {
          ...state,
          colors: state.colors.filter(existingColor => existingColor !== action.payload.color)
        }
      } else {
        return {
          ...state,
          colors: [
            ...state.colors,
            action.payload.color
          ]
        }
      }
    default:
      return state;
  }
}

export default todosFilterReducer