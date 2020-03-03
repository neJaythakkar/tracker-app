import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../store/user/actions';
import * as userSelectors from '../../store/user/selector';
import * as trackerActions from '../../store/tracker/actions';
import * as trackerSelectors from '../../store/tracker/selectors';
import Spinner from '../../components/common/spinner';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import { numbersList } from '../../mock/index';

class ChooseNumber extends Component {
	componentDidMount() {
		const { getUser } = this.props;
		getUser();
	}
	postEvents = () => {
		const { postEvents } = this.props;
		postEvents();
	}
	render() {
		return this.props.userId ? (
			<div className='p-4'>
				<div className='row'>
					<Button className='col-auto mr-auto' text='click here' />
					<Input className='col-auto' />
				</div>
				<div className='row'>
					<h1 className='text-center'>Available Numbers</h1>
					<ul className='list row'>
						{numbersList.map(number => (
							<li className='col-6 p-1'>
								<Button className='w-100' text={number} />
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
		) : (
			<Spinner />
		);
	}
}
export default connect(
	state => ({
		userId: userSelectors.getUserId(state),
		events: trackerSelectors.getEvents(state)
	}),
	{
		getUser: userActions.fetchUser,
		postEvents: trackerActions.postEvents
	}
)(ChooseNumber);
