import React from 'react';
import WithConnect from '../../../hocs/withconnect';
import WithBlur from '../../../hocs/withblur';
import WithClick from '../../../hocs/withclick';

const Input = props => {
	const { blurHandler, clickHandler } = props;
	return <input onClick={clickHandler} onBlur={blurHandler} type='text' />;
};
export default WithConnect(WithClick(WithConnect(WithBlur(Input))));
