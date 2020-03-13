import React, { Component } from 'react';
import { Button } from 'jay-dummy-component-library';

class Success extends Component {
	render = () => (
		<div className='p-4'>
			<div className='d-flex flex-column my-5 single-select-dropdown-container'>
				<h1 className='text-center mb-5'>You were being trackerd!!!</h1>
			</div>
			<Button text="this button will push data to the end point provided" className="btn btn-primary" />
		</div>
	);
}
export default Success;