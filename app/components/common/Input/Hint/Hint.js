import React from 'react';
import { Text, View } from 'react-native';
import { array, bool, string } from 'prop-types';
import style from './style';

const Hint = ({isError, text, containerStyle, textStyle}) => {

	return (
		<View style={[style.container, ...containerStyle]}>
			<Text 
				style={[
					style.text,
					isError ? style.error : '',
					...textStyle,
				]}
			>{text}</Text>
		</View>
	);
};

Hint.propTypes = {
	containerStyle: array,
	textStyle: array,
	isError: bool,
	text: string,
};

Hint.defaultProps = {
	containerStyle: [],
	textStyle: [],
	isError: false,
	text: '',
};

export default Hint;