import Name from '../';
import * as TrackerActionTypes from '../actionTypes';
import { createReducer } from '../../helpers';

const initialState = { events: {} };

const handlers = {
	[`${Name}/${TrackerActionTypes.ADDEVENTS}`]: (
		state = initialState,
		payload
	) => {
		return {
			...state,
			events: { ...state.events, [new Date().getTime()]: payload }
		};
	}
};

export default createReducer(initialState, handlers);
