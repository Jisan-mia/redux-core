import { DECREMENT, INCREMENT } from "./action-types"

const initialState = {
  value: 0
}
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}

export default counterReducer