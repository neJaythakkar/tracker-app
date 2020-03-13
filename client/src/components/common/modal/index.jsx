import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import WithConnect from '../../../hocs/withconnect';
import CustomEvents from '../../../hocs/event';

class ModalWithTracker extends React.Component {
	modalRef = null;

	modalOpenHandler = event => {
		const {
			addEvents,
			match,
			userId,
			onOpenHandler
		} = this.props;
		onOpenHandler && onOpenHandler();
		const time = new Date();
		const { contentEl: target } = event;
		this.modalRef = target;
		target.type = 'Modal';
		event.type = 'ModalOpen';
		const customEvent = new CustomEvents({
			userId,
			time,
			target,
			match,
			userId,
			event
		});
		addEvents(customEvent);
	};

	modalCloseHandler = event => {
		const {
			addEvents,
			match,
			userId,
			onCloseHandler
		} = this.props;
		onCloseHandler && onCloseHandler();
		const time = new Date();
		const target = this.modalRef;
		target.type = 'Modal';
		event = {};
		event.type = 'ModalClose';
		const customEvent = new CustomEvents({
			userId,
			time,
			target,
			match,
			userId,
			event
		});
		addEvents(customEvent);
	};

	render() {
		return (
			<Modal
				{...this.props}
				onAfterOpen={this.modalOpenHandler}
				onAfterClose={this.modalCloseHandler}
			></Modal>
		);
	}
}
export default withRouter(WithConnect(ModalWithTracker));
