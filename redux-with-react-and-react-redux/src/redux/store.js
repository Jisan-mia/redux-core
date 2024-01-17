import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './root-reducer';

// first logger
const myLogger = (store) => (next) => (action) => {
  console.log('Action: ', action)
  console.log('Before state: ', store.getState())
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log('Upcoming state: ', upcomingState)


  return next(action);
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;