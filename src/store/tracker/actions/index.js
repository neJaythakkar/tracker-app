import Name from '../';
import * as TrackerActionTypes from '../actionTypes';

export const addEvents = payload => ({
	type: `${Name}/${TrackerActionTypes.ADDEVENTS}`,
	payload
});