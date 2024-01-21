import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from './rootReducer';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxLogger)),
);


export default store