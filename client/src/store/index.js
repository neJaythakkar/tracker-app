import { combineReducers } from 'redux';
import tracker from './tracker/reducer';
export default combineReducers({ tracker: tracker });
