import { CHANGE_FILTER_COLORS, CHANGE_FILTER_STATUS } from "./actionTypes";

export const changeFilterStatus = (status) => {
  return {
    type: CHANGE_FILTER_STATUS,
    payload: { status },
  };
}

export const changeFilterColors = (color) => {
  return {
    type: CHANGE_FILTER_COLORS,
    payload: {color}
  }
}