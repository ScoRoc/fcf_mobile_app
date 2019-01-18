import { combineReducers, createStore } from 'redux';
import globals from '../modules/globals';
import user from '../modules/user';

const rootReducer = combineReducers({
  globals,
  user,
});

const store = createStore(rootReducer);

export default store;
