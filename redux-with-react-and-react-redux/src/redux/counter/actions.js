import { DECREMENT, INCREMENT } from "./action-types"

export const incrementCount = () => {
  return {
    type: INCREMENT,
  }
}

export const decrementCount = () => {
  return {
    type: DECREMENT,
  }
}