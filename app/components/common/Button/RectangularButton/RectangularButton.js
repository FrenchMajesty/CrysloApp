import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const RectangularButton = ({children, text, disabled, onPress, style: customStyle}) => {
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
			{! children ?
				<Text style={[style.text, disabled ? style.disabledText : '']}>{text.toUpperCase()}</Text>
			:
				children
			}
		</TouchableOpacity>
	);
};

export default RectangularButton;