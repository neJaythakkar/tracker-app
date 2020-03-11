import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ModalWithTracker from '../../components/common/modal';
import * as userSelectors from '../../store/user/selector';
import * as trackerActions from '../../store/tracker/actions';
import * as trackerSelectors from '../../store/tracker/selectors';
import Checkbox from '../../components/common/checkbox';
import { Button as LibButton } from 'jay-dummy-component-library';
import { Vegetables } from '../../mock/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Billing.css';

class Billing extends Component {
	state = {
		modalIsOpen: false
	};

	componentDidMount() {
		const { userId, history } = this.props;
		if (!userId) {
			history.push('/number');
		}
	}
	setIsOpen = value => {
		this.setState({
			modalIsOpen: value
		});
	};

	closeModal = () => {
		this.setIsOpen(false);
	};

	clickHandler = () => {
		this.setIsOpen(true);
	};
	postEvents = async () => {
		const { postEvents, resetEvents, history, userId } = this.props;
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
			{console.log(this.props.userId)}
			<div className='row'>
				<LibButton
					text='Open Modal'
					className='btn btn-primary'
					handler={this.clickHandler}
				/>
				<ModalWithTracker
					isOpen={this.state.modalIsOpen}
					className='modal'
					overlayClassName='overlay'
					contentLabel='Example Modal'
					userId={this.props.userId}
				>
					<div className='modal-header'>
						<h3>Filter Car</h3>
						<button onClick={this.closeModal}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
						{/* <LibButton text="close" handler={this.closeModal}></LibButton> */}
					</div>
					<div>I am a modal</div>
					<form>
						<input />
						<button>tab navigation</button>
						<button>stays</button>
						<button>inside</button>
						<button>the modal</button>
					</form>
				</ModalWithTracker>
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
			postEvents: trackerActions.postEvents,
			resetEvents: trackerActions.resetEvents
		}
	)(Billing)
);
