import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as userSelectors from '../../store/user/selector';
import {
	Button as LibButton,
	Checkbox,
	Select,
	Modal
} from 'jay-dummy-component-library';
import { Vegetables, make, makeModal } from '../../mock/index';
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
		const { history } = this.props;
		history.push('/success');
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
			<div className='d-flex flex-column my-5 single-select-dropdown-container'>
				<h1 className='text-center mb-5'>single select dropDown</h1>
				<div className='row'>
					<label className='d-flex justify-content-center align-items-center p-0 col-3'>
						Select the Brand
					</label>
					<Select
						options={make}
						handler={() => {}}
						displayField='label'
						valueField='value'
						parentClasses='col-9'
					/>
				</div>
			</div>
			<div className='d-flex flex-column my-5 single-select-dropdown-container'>
				<h1 className='text-center mb-5'>Multi Select dropDown</h1>
				<div className='row'>
					<label className='d-flex justify-content-center align-items-center p-0 col-3'>
						Select the Brand
					</label>
					<Select
						options={makeModal}
						handler={() => {}}
						displayField='label'
						valueField='value'
						parentClasses='col-9'
						multi={true}
					/>
				</div>
			</div>
			<div className='row'>
				<LibButton
					text='Open Modal'
					className='btn btn-primary'
					handler={this.clickHandler}
				/>
				<Modal
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

					<form class='form-inline'>
						<div className='form-group w-100'>
							<label className='col-3 text-left'>Make</label>
							<Select
								options={make}
								handler={() => {}}
								displayField='label'
								valueField='value'
								parentClasses='col-9'
							/>
						</div>
					</form>
				</Modal>
			</div>
			<div className='d-flex flex-column my-5 single-select-dropdown-container'>
				<div className='row'>
					<LibButton
						text='Next'
						handler={this.postEvents}
						className='btn btn-primary'
						userId={this.props.userId}
						pushEvents
					/>
				</div>
			</div>
		</div>
	);
}
export default withRouter(
	connect(state => ({
		userId: userSelectors.getUserId(state),
	}))(Billing)
);
