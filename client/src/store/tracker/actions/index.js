import Name from '../';
import axios from 'axios';
import { apiUrl } from '../../../conf';
import * as TrackerActionTypes from '../actionTypes';
import { createSetter } from '../../helpers';

export const [resetEvents] = createSetter(Name, [TrackerActionTypes.RESETEVENTS]);

export const addEvents = payload => ({
	type: `${Name}/${TrackerActionTypes.ADDEVENTS}`,
	payload
});

export const postEvents = payload => async (dispatch, getState) => {
	const {tracker:{events}} = getState()
	const response = await axios.post(`${apiUrl}events`,events);
	dispatch(resetEvents({}));
};



