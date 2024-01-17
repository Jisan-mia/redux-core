import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxLogger from 'redux-logger';
import myLogger from './middlewares/my-logger';
import rootReducer from './root-reducer';

const store = createStore(rootReducer, applyMiddleware(reduxLogger, myLogger));

export default store;