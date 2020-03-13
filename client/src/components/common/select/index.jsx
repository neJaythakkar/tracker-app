import React from 'react';
import Select from 'react-dropdown-select';
import { withRouter } from 'react-router';
import WithConnect from '../../../hocs/withconnect';
import CustomEvents from '../../../hocs/event';
import './select.css';

class select extends React.Component {
	selectRef = null;

	onChangeHandler = selectedOption => {
		const { addEvents, match, userId, handler } = this.props;
		const time = new Date();
		const target = this.selectRef;
		target.type = 'select';
		target.value = selectedOption;
		const customEvent = new CustomEvents({
			userId,
			time,
			target,
			match,
			event: { type: 'valueChange' }
		});
		addEvents(customEvent);
		handler && handler();
	};

	render = () => {
		const {
			options,
			displayField,
			valueField,
			parentClasses,
			...rest
		} = this.props;
		return (
			<div className={`custom-select-dropdown ${parentClasses}`}>
				<Select
					ref={ref => (this.selectRef = ref)}
					options={options}
					onChange={this.onChangeHandler}
					labelField={displayField}
					valueField={valueField}
					{...rest}
				/>
			</div>
		);
	};
}

export default withRouter(WithConnect(select));
