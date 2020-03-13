import Name from '../';
import * as userActionTypes from '../actionTypes';
import axios from 'axios';
import { createSetter } from '../../helpers';
import { apiUrl } from '../../../conf';

const [setUser] = createSetter(Name, [userActionTypes.USERID]);

export const fetchUser = () => async (dispatch, getState) => {
	const response = await axios.post(`${apiUrl}user`,{
		idAddress: '255.225.225.225',
		userAgent: navigator.userAgent,
		siteUrl: window.location.hostname
	});
	const {
		data: { id }
	} = response;
	setTimeout(() => {
		dispatch(setUser(id));
	}, 3000);
};
