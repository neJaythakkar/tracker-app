import React, { Component } from 'react';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import { numbersList } from '../../mock/index';

class ChooseNumber extends Component {
	render() {
		return (
			<div className='p-4'>
				<div className='row'>
					<Button className='col-auto mr-auto' text='click here' />
					<Input className='col-auto' />
				</div>
				<div className='row'>
					<h1 className='text-center'>Available Numbers</h1>
					<ul className='list row'>
						{numbersList.map(number => (
							<li className="col-6 p-1">
								<Button className="w-100" text={number} />
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default ChooseNumber;
