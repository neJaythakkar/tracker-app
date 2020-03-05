import React from 'react';
import WithClick from '../../../hocs/withclick';
import WithConnect from '../../../hocs/withconnect';

const Button = props => {
	const { clickHandler, text, ...rest } = props;

	return (
		<button {...rest} onClick={clickHandler}>
			{text}
		</button>
	);
};

export default WithConnect(WithClick(Button));
