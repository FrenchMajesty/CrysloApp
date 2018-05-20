import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { node, object } from 'prop-types';
import style from './style';
import cardStyle from '../../Card/style';

const FloatIconButton = ({children, customStyle, ...others}) => {

	return (
		<TouchableOpacity
			activeOpacity={0.6} 
			style={[cardStyle.card, style.button, cardStyle.depth2, customStyle]}
			{...others}
		>
			{children}
		</TouchableOpacity>
	);
};

FloatIconButton.propTypes = {
	children: node.isRequired,
	customStyle: object,
};

FloatIconButton.defaultProps = {
	customStyle: {},
};

export default FloatIconButton;