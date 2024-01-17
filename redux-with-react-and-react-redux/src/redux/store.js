import { legacy_createStore as createStore } from 'redux';
import rootReducer from './root-reducer';

const store = createStore(rootReducer);

export default store;