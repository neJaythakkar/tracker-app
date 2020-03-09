import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as userActions from '../../store/user/actions';
import * as userSelectors from '../../store/user/selector';
import * as trackerActions from '../../store/tracker/actions';
import * as trackerSelectors from '../../store/tracker/selectors';
import Spinner from '../../components/common/spinner';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import Checkbox from '../../components/common/checkbox';
import Radio from '../../components/common/radio';
import { spices, oilTypes, Vegetables } from '../../mock/index';

class Billing extends Component {
	postEvents = async () => {
		const { postEvents, resetEvents, history } = this.props;
		const { status } = await postEvents();
		if (status === 200) {
			resetEvents({});
			history.push('/billing');
		}
	};
	render = () => (
		<div className='p-4'>
			<div className='row'>
				<h1 className='text-center'>Vegetables</h1>
				<ul className='list row'>
					{Vegetables.map(item => (
						<li className='col-2 p-1'>
							<Checkbox className='w-100' text={item} />
						</li>
					))}
				</ul>
			</div>
			<div className='row'>
				<h1 className='text-center'>Oil</h1>
				<ul className='list row'>
					{oilTypes.map(item => (
						<li className='col-6 p-1'>
							<Radio className='w-100' name='oil' text={item} />
						</li>
					))}
				</ul>
			</div>
			<div className='row'>
				<Button
					text='Next'
					handler={this.postEvents}
					className='btn btn-primary'
				/>
			</div>
		</div>
	);
}
export default withRouter(
	connect(
		state => ({
			userId: userSelectors.getUserId(state),
			events: trackerSelectors.getEvents(state)
		}),
		{
			getUser: userActions.fetchUser,
			postEvents: trackerActions.postEvents,
			resetEvents: trackerActions.resetEvents
		}
	)(Billing)
);
