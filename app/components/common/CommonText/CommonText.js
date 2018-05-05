import React from 'react';
import { Text } from 'react-native';
import styling from 'app/config/styling';

export default CommonText = ({weight, color, style, children}) => {

	const fontWeight = weight == 'heavy' ? 'heavy' : 'light';
	const textColor = {
		color: color ? color : styling.black,
	};

	const styleProps = [
		styling.text.prop[fontWeight],
		textColor,
		style,
	];

	return (
		<Text style={styleProps}>
			{children}
		</Text>
	);
};