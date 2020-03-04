import React from 'react';
import { withRouter } from 'react-router';
import * as TrackerActions from '../../store/tracker/actions';
import * as userSelectors from '../../store/user/selector';
import { connect } from 'react-redux';
import CustomEvent from '../event';

const WithClick = WrappedComponent =>
	withRouter(
		connect(
			state => ({
				userId: userSelectors.getUserId(state)
			}),
			{
				addEvents: TrackerActions.addEvents
			}
		)(props => {
			const { addEvents, match, handler, userId, text, ...rest } = props;

			const clickHandler = event => {
				const time = new Date();
				const { target } = event;
				const customEvent = new CustomEvent({
					time,
					target,
					match,
					userId,
					event
				});
				if(text)
					customEvent.text = text;
				addEvents(customEvent);
				handler && handler();
			};
			return <WrappedComponent text={text} {...rest} clickHandler={clickHandler} />;
		})
	);

export default WithClick;
