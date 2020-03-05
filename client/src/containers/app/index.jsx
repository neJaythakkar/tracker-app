import React from 'react';
import Routes from './Routes';
import Tracker from '../tracker';
import { connect } from 'react-redux';
import * as uiSelectors from '../../store/ui/selectors';
import './App.css';

function App(props) {
	
	return (
		<div className='App h-100'>
			<header className='App-header'></header>
			<div className='body-container container-fluid row h-100 m-0 p-0'>
				<div class={`page-container w-100 h-75 overflow-auto position-relative ${props.isConsoleCollapsed? 'open-full' : ''}`}>
					<Routes />
				</div>
				<Tracker />
			</div>
		</div>
	);
}

export default connect(state => ({
	isConsoleCollapsed : uiSelectors.isCollapsed(state)
}))(App);
