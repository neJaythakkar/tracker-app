import { combineReducers } from 'redux';
import tracker from 'jay-dummy-component-library/dist/store';
import user from './user/reducer';
import ui from './ui/reducer';
export default combineReducers({ tracker: tracker, user: user, ui: ui });
