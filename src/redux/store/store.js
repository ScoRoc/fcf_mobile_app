import { combineReducers, createStore } from 'redux';
import globals from '../modules/globals';

const rootReducer = combineReducers({
  globals,
});

const store = createStore(rootReducer);

export default store;
