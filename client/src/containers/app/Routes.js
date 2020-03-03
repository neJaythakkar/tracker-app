import React from 'react';
import ChooseNumber from '../choosenumber';
import Billing from '../billing';
import { Route, Switch, Redirect } from 'react-router';

function Routes() {
	return (
		<Switch>
			<Redirect exact from='/' to='/number' />
			<Route path='/number' component={ChooseNumber} />
			<Route path='/billing' component={Billing} />
		</Switch>
	);
}

export default Routes;
