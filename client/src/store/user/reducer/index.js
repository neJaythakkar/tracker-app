import Name from '../';
import * as userActionTypes from '../actionTypes';
import { createReducer, createHandlers } from '../../helpers';

const initialState = { userId: '' };

const typeKeyMap = [{ type: userActionTypes.USERID, stateKey: 'userId' }];
const handlers = createHandlers({ typeKeyMap, Name, initialState });

export default createReducer(initialState, handlers);
