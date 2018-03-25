import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export default Hint = ({isError, text, containerStyle, textStyle}) => {

	return (
		<View style={[style.container, containerStyle]}>
		<Text 
			style={[
				style.text,
				isError ? style.error : '',
				textStyle
			]}
		>{text}</Text>
		</View>
	);
};