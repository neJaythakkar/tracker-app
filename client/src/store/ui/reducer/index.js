import Name from '../';
import * as uiActionTypes from '../actionTypes';
import { createHandlers, createReducer } from '../../helpers';

const initialState = { consoleCollapsed: false };
const typeKeyMap = [
	{ type: uiActionTypes.TOGGLECONSOLE, stateKey: 'consoleCollapsed' }
];
const handlers = createHandlers({ typeKeyMap, Name, initialState });
export default createReducer(initialState, handlers);
