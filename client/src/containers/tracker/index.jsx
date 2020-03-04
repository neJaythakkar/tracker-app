import React, { Component } from 'react';
import { connect } from 'react-redux';
import Log from '../../components/tracker/log';
import * as uiActions from '../../store/ui/actions';
import * as TrackerSelectors from '../../store/tracker/selectors';
import * as uiSelectors from '../../store/ui/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './tracker.css';

const Tracker = class extends Component {
	render() {
		let { events, toggleConsole, isConsoleCollapsed } = this.props;
		events = Object.values(events);
		return (
			<div
				className={`tracker-container d-flex flex-column ${
					isConsoleCollapsed ? 'collapsed' : ''
				}`}
			>
				<h4 className='text-center'>
					Console
					<div
						className='console-control'
						onClick={() => {
							toggleConsole(!isConsoleCollapsed);
						}}
					>
						{isConsoleCollapsed ? (
							<FontAwesomeIcon icon={faAngleUp} />
						) : (
							<FontAwesomeIcon icon={faAngleDown} />
						)}
					</div>
				</h4>
				<ul className='tracker-list p-1'>
					{events ? events.map(event => <Log event={event} />) : null}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	events: TrackerSelectors.getEvents(state),
	isConsoleCollapsed: uiSelectors.isCollapsed(state)
});
export default connect(mapStateToProps, {
	toggleConsole: uiActions.toggleConsole
})(Tracker);
