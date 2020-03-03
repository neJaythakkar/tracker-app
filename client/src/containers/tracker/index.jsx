import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TrackerSelectors from '../../store/tracker/selectors';
import './tracker.css';

const Tracker = class extends Component {
	render() {
		let { events } = this.props;
		events = Object.values(events);
		return (
			<div className='tracker-container col-6 h-100 d-flex flex-column'>
				<h1 className="text-center">Tracker App</h1>
				<ul className='tracker-list'>
					{events ? events.map(event => (
						<li className={`list-item card`} key={event.time}>
							<div className='item-wrapper card-body'>
								<p className='row'>
									Control Type -> <span className="badge badge-secondary">{`${event.controlType}`}</span>
								</p>
								<p className='row'>
									Event -> <span className="badge badge-secondary">{`${event.event}`}</span>
								</p>
								{
									event.controlType === 'submit' ? 	<p className='row'>
									Text -> <span className="badge badge-secondary">{`${event.text}`}</span>
								</p> : null
								}
								<p className='row'>
									hours -> <span className="badge badge-secondary">{`${event.hours}`}</span>
								</p>
								<p className='row'>
									Date -> <span className="badge badge-secondary">{`${event.date}`}</span>
								</p>
								<p className='row'>
									Page -> <span className="badge badge-secondary">{`${event.page}`}</span>
								</p>
								<p className='row'>
									Position -> <span className="badge badge-secondary">{`x:${event.position.x} , y: ${event.position.y}`}</span>
								</p>
							</div>
						</li>
					)) : null}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	events: TrackerSelectors.getEvents(state)
});
export default connect(mapStateToProps)(Tracker);
