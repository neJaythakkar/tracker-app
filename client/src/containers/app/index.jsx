import React from 'react';
import Routes from './Routes';
import Tracker from '../tracker';
import './App.css';

function App() {
	return (
		<div className='App h-100'>
			<header className='App-header'></header>
			<div className='body-container container-fluid row h-100'>
				<div class="col-6">
					<Routes />
				</div>
				<Tracker />
			</div>
		</div>
	);
}

export default App;
