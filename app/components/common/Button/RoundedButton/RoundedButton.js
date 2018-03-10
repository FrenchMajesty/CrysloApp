import React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import style from './style';

const RoundedButton = ({text, onPress, style: customStyle}) => {

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={onPress}
			style={[
				style.container,
				customStyle
			]}
		>
			<Text style={[style.text]}>{text.toUpperCase()}</Text>
		</TouchableOpacity>
	);
};

export default RoundedButton;