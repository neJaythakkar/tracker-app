import React from 'react';
import * as TrackerActions from '../../store/tracker/actions';
import { connect } from 'react-redux';

const WithClick = WrappedComponent => props => {
	const clickHandler = event => {
		props.AddEvents();
	};
	return connect(null,{
		AddEvent: TrackerActions.AddEvents
	})(() => <WrappedComponent {...props} clickHandler={clickHandler} />);
};

export default WithClick;