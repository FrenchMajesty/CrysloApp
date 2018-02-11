import React from 'react';
import { View } from 'react-native';
import style from './style';
import cardStyle from '../../Card/style';

const FloatIconButton = (props) => {

	return (
		<View 
			style={[cardStyle.card, style.button, cardStyle.depth2]}
			{...props}
		>
			{props.children}
		</View>
	);
};

export default FloatIconButton;