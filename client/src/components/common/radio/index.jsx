import React from 'react';
import WithClick from '../../../hocs/withclick';
import * as classes from './Radio.module.css';

const Radio = props => {
	const { clickHandler, text, ...rest } = props;

	return (
		<label class={classes.container}>
			{text}
			<input {...rest} onClick={clickHandler} type='radio' />
			<span class={classes.checkmark}></span>
		</label>
	);
};

export default WithClick(Radio);
