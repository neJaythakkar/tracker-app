import React from 'react';
import { withRouter } from 'react-router';
import CustomEvent from '../event';

export default WrappedComponent =>
	withRouter(props => {
		const { addEvents, match, handler, userId, text, ...rest } = props;

		const blurHandler = event => {
			const time = new Date();
			console.log(event);
			const { target } = event;
			const customEvent = new CustomEvent({
				time,
				target,
				match,
				userId,
				event
			});
			addEvents(customEvent);
			handler && handler();
		};
		return <WrappedComponent {...rest} blurHandler={blurHandler} />;
	});
