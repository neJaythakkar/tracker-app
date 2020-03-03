import { combineReducers } from 'redux';
import tracker from './tracker/reducer';
import user from './user/reducer';
export default combineReducers({ tracker: tracker, user: user });
