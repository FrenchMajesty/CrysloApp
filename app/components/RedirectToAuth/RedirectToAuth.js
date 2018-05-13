import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from 'app/lib/api';
import ProfileAction from 'app/store/actions/profile';

const RedirectToAuth = ({resetState, screenProps: {authNav}}) => {

	resetState();
	authNav.navigate('Auth');

	return <View />;
};

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	resetState: () => dispatch(ProfileAction.resetState()),
});

export default connect(null, mapDispatchToProps)(RedirectToAuth);