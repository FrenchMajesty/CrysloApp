import React from 'react';
import { Text } from 'react-native';
import styling from 'app/config/styling';

export default CommonText = ({weight, style, children}) => {

	const fontWeight = weight == 'heavy' ? 'heavy' : 'light';

	return (
		<Text style={[styling.text.prop[fontWeight], style]}>
			{children}
		</Text>
	);
};