import { DECREMENT, INCREMENT } from "./action-types"

export const incrementCount = (value) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

export const decrementCount = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}