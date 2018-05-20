import React from 'react';
import { Text } from 'react-native';
import { oneOf, string, node, array } from 'prop-types';
import styling from 'app/config/styling';

const CommonText = ({weight, color, style, children}) => {

	const styleProps = [
		styling.text.prop[weight],
		{color},
		...style,
	];

	return (
		<Text style={styleProps}>
			{children}
		</Text>
	);
};

CommonText.propTypes = {
	children: node.isRequired,
	weight: oneOf(['heavy','light']),
	color: string,
	style: array,
};

CommonText.defaultProps = {
	weight: 'light',
	color: styling.black,
	style: [],
};

export default CommonText;