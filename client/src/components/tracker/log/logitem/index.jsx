import React from 'react';

export default ({ label, value }) => (
	<p className='d-inline'>
		<span>{label}</span>
		<span className='badge badge-secondary'>{value}</span>
	</p>
);
