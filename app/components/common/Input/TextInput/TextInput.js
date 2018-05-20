import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { string, bool, array } from 'prop-types';
import Hint from '../Hint/';
import styling from 'app/config/styling';
import style from './style';

const SimpleTextInput = ({label, style: customStyle, hint, hasError, ...others}) => {

	return (
		<View>
			{label ? <Text style={[style.label]}>{label}</Text> : null}
			<TextInput
				placeholderTextColor={styling.text.gray}
				style={[style.input, ...customStyle]}
				{...others}
			/>
			{hint ? <Hint text={hint} isError={hasError} /> : null}
		</View>
	);
}

SimpleTextInput.propTypes = {
	label: string,
	hint: string,
	hasError: bool,
	style: array,
};

SimpleTextInput.defaultProps = {
	hasError: false,
	label: '',
	hint: '',
	style: [],
};

export default SimpleTextInput;