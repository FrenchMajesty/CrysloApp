import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Hint from '../Hint/';
import styling from 'app/config/styling';
import style from './style';

const SimpleTextInput = (props) => {

	return (
		<View>
			{props.label ? <Text style={[style.label]}>{props.label}</Text> : null}
			<TextInput
				{...props}
				placeholderTextColor={styling.text.gray}
				style={[style.input, props.style]}
			/>
			{props.hint ? <Hint text={props.hint} isError={props.hasError} /> : null}
		</View>
	);
}

export default SimpleTextInput;