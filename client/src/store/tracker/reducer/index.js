import Name from '../';
import * as TrackerActionTypes from '../actionTypes';
import { createReducer,createHandlers } from '../../helpers';

const initialState = { events: {} };
const typeKeyMap = [{ type: TrackerActionTypes.RESETEVENTS, stateKey: 'events' }];
const handlers = createHandlers({ typeKeyMap, Name, initialState });

handlers[`${Name}/${TrackerActionTypes.ADDEVENTS}`]=  (
	state = initialState,
	payload
) => {
	return {
		...state,
		events: { ...state.events, [new Date().getTime()]: payload }
	};
};


export default createReducer(initialState, handlers);
