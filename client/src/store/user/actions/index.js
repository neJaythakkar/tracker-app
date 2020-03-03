import Name from '../';
import * as userActionTypes from '../actionTypes';
import axios from 'axios';
import { createSetter } from '../../helpers';
import { apiUrl } from '../../../conf';

const [setUser] = createSetter(Name, [userActionTypes.USERID]);

export const fetchUser = () => async (dispatch, getState) => {
	const response = await axios.get(`${apiUrl}user`);
	const {
		data: { id }
	} = response;
	setTimeout(() => {
		dispatch(setUser(id));
	}, 3000);
};
