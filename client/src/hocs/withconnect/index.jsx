import React from 'react';
import { connect } from 'react-redux';
import * as TrackerActions from '../../store/tracker/actions';
import * as userSelectors from '../../store/user/selector';

const mapStateToProps = state => ({
	userId: userSelectors.getUserId(state)
});

const mapDispatchToProps = {
	addEvents: TrackerActions.addEvents
};
export default WrappedComponent =>
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(props => <WrappedComponent {...props} />);
