import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const RectangularButton = ({text, disabled, onPress, style: customStyle}) => {
	return (
		<TouchableOpacity
			activeOpacity={disabled ? 1 : 0.6}
			onPress={disabled ? null : onPress}
			style={[
				style.container,
				disabled ? style.disabled : '',
				customStyle
			]}
		>
			<Text style={[style.text, disabled ? style.disabledText : '']}>{text.toUpperCase()}</Text>
		</TouchableOpacity>
	);
};

export default RectangularButton;