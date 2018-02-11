import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './style';
import cardStyle from '../../Card/style';

const FloatIconButton = (props) => {

	return (
		<TouchableOpacity 
			style={[cardStyle.card, style.button, cardStyle.depth2, props.customStyle]}
			{...props}
		>
			{props.children}
		</TouchableOpacity>
	);
};

export default FloatIconButton;