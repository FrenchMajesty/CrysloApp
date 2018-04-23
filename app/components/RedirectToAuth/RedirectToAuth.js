import React from 'react';
import { View } from 'react-native';

const RedirectToAuth = ({screenProps: {authNav}}) => {

	authNav.navigate('Auth');

	return <View />;
};

export default RedirectToAuth;