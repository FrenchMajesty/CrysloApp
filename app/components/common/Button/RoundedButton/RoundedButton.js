import React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import style from './style';

const RoundedButton = ({text, onPress, style: customStyle, inverted}) => {

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={onPress}
			style={[
				style.container,
				inverted ? style.invertedContainer : style.normalContainer,
				customStyle
			]}
		>
			<Text 
				style={[
					style.text,
				 	inverted ? style.invertedText : style.normalText,
				]}
			>{text.toUpperCase()}</Text>
		</TouchableOpacity>
	);
};

export default RoundedButton;