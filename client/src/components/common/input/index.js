import React from 'react';
import { withRouter } from 'react-router';
import * as TrackerActions from '../../../store/tracker/actions';
import { connect } from 'react-redux';

const Input = props => {
	const { text, addEvents, match } = props;
	const callBack = event => {
		const time = new Date();
		const { target } = event;
		addEvents({
			time: time.getTime(),
			date: `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`,
			hours: `${time.getHours()}:${time.getMinutes()}`,
			event: event.type,
			controlType: target.type,
			text: target.innerText,
			position: { ...target.getBoundingClientRect().toJSON() },
			page: match.path
		});
	};
	return <input onBlur={callBack} onClick={callBack} type='text' />;
};
export default withRouter(
	connect(null, {
		addEvents: TrackerActions.addEvents
	})(Input)
);
