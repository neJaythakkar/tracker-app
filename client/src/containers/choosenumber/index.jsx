import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as userActions from '../../store/user/actions';
import * as userSelectors from '../../store/user/selector';
import Spinner from '../../components/common/spinner';
import { Button, Checkbox, Radio, Input } from 'jay-dummy-component-library';
import { numbersList, spices, oilTypes } from '../../mock/index';

class ChooseNumber extends Component {
	componentDidMount() {
		const { getUser } = this.props;
		getUser();
	}

	postEvents = async () => {
		const { history } = this.props;
		history.push('/billing');
	};
	render() {
		return this.props.userId ? (
			<div className='p-4'>
				<div className='row'>
					<Button
						className='col-auto mr-auto'
						text='click here'
						userId={this.props.userId}
					/>
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
					<h1 className='text-center'>Spices</h1>
					<ul className='list row'>
						{spices.map(item => (
							<li className='col-6 p-1'>
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
						userId={this.props.userId}
						pushEvents
					/>
				</div>
			</div>
		) : (
			<Spinner />
		);
	}
}
export default withRouter(
	connect(
		state => ({
			userId: userSelectors.getUserId(state)
		}),
		{
			getUser: userActions.fetchUser
		}
	)(ChooseNumber)
);
