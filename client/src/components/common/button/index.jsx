import React from 'react';
import { withRouter } from 'react-router';
import * as TrackerActions from '../../../store/tracker/actions';
import * as userSelectors from '../../../store/user/selector';
import { connect } from 'react-redux';
import user from '../../../store/user';

const Button = props => {
	const { text, addEvents, match,handler, ...rest } = props;
	const callBack = event => {
		const time = new Date();
		const { target } = event;
		addEvents({
			userId: props.userId,
			time: time.getTime(),
			date: `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`,
			hours: `${time.getHours()}:${time.getMinutes()}`,
			event: event.type,
			controlType: target.type,
			text: target.innerText,
			position: { ...target.getBoundingClientRect().toJSON() },
			page: match.path
		});
		handler && handler();
	};
	return (
		<button {...rest} onClick={callBack}>
			{text}
		</button>
	);
};
export default withRouter(
	connect(state => ({
		userId : userSelectors.getUserId(state)
	}), {
		addEvents: TrackerActions.addEvents
	})(Button)
);
