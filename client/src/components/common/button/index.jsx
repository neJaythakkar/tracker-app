import React from 'react';
import WithClick from '../../../hocs/withclick';

const Button = props => {
	const { clickHandler, text, ...rest } = props;

	return (
		<button {...rest} onClick={clickHandler}>
			{text}
		</button>
	);
};

export default WithClick(Button);
