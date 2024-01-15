import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counter/counter-reducer';

const store = createStore(counterReducer);

export default store;