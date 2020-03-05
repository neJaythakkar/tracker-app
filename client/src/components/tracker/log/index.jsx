import React, { Component } from 'react';
import LogItem from './logitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as classes from './Log.module.css';

export default class Log extends Component {
	state = {
		collapsed: true
	};
	render() {
		const { event } = this.props;
		return (
			<li
				className={`list-item card ${
					this.state.collapsed ? classes.collapsed : ''
				}`}
				key={event.time}
			>
				<div
					className={classes.control}
					onClick={() => {
						this.setState(prevState => ({ collapsed: !prevState.collapsed }));
					}}
				>
					{this.state.collapsed ? (
						<FontAwesomeIcon icon={faAngleUp} />
					) : (
						<FontAwesomeIcon icon={faAngleDown} />
					)}
				</div>
				<div className={`${classes.itemWrapper} card-body p-2`}>
					<LogItem label={`Control Type -> `} value={event.controlType} />
					<LogItem label={`Event -> `} value={event.event} />
					{event.text ? (
						<LogItem label={`Text -> `} value={event.text} />
					) : null}
					<LogItem label={`hours -> `} value={event.hours} />
					<LogItem label={`Date -> `} value={event.date} />
					<LogItem label={`Page -> `} value={event.page} />
					<LogItem
						label={`Position -> `}
						value={`x:${event.position.x} , y: ${event.position.y}`}
					/>
					{event.value ? (
						<LogItem label={`Value -> `} value={event.value} />
					) : null}
				</div>
			</li>
		);
	}
}
