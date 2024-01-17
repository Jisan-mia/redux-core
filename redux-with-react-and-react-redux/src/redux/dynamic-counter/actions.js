import { DDECREMENT, DINCREMENT } from "./action-types";

export const incrementDynamicCount = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const decrementDynamicCount = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
