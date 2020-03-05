import React from 'react';
import WithClick from '../../../hocs/withclick';
import WithConnect from '../../../hocs/withconnect';
import './CheckBox.css';

const CheckBox = props => {
	const { clickHandler, text, ...rest } = props;

	return (
		<label class='container'>
			{text}
			<input {...rest} onClick={clickHandler} type='checkbox' />
			<span class='checkmark'></span>
		</label>
	);
};

export default WithConnect(WithClick(CheckBox));
