import rootReducer from "../root-reducer";

// my logger
const myLogger = (store) => (next) => (action) => {
  console.log("Action: ", action);
  console.log("Before state: ", store.getState());
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log("Upcoming state: ", upcomingState);

  return next(action);
};


export default myLogger;