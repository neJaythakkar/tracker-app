import React, { Component } from 'react';
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
				className={`list-item card ${this.state.collapsed ? classes.collapsed : ''}`}
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
					<p className='d-inline'>
						<span>Control Type -> </span>
						<span className='badge badge-secondary'>{`${event.controlType}`}</span>
					</p>
					<p className='d-inline'>
						<span>Event -> </span>
						<span className='badge badge-secondary'>{`${event.event}`}</span>
					</p>
					{event.text ? (
						<p className='d-inline'>
							<span>Text -> </span>
							<span className='badge badge-secondary'>{`${event.text}`}</span>
						</p>
					) : null}
					<p className='d-inline'>
						<span>hours -> </span>
						<span className='badge badge-secondary'>{`${event.hours}`}</span>
					</p>
					<p className='d-inline'>
						<span>Date -> </span>
						<span className='badge badge-secondary'>{`${event.date}`}</span>
					</p>
					<p className='d-inline'>
						<span>Page -> </span>
						<span className='badge badge-secondary'>{`${event.page}`}</span>
					</p>
					<p className='d-inline'>
						<span>Position -> </span>
						<span className='badge badge-secondary'>{`x:${event.position.x} , y: ${event.position.y}`}</span>
					</p>
					{event.value ? (
						<p className='d-inline'>
							<span>value -> </span>
							<span className='badge badge-secondary'>{`${event.value}`}</span>
						</p>
					) : null}
				</div>
			</li>
		);
	}
}
