import React from 'react';
import { Text } from 'react-native';
import { func, array, node } from 'prop-types';
import style from './style';

const Link = ({style: customStyle, onPress, children}) => {

	return (
		<Text style={[style.link, ...customStyle]} onPress={onPress}>
			{children}
		</Text>
	);
};

Link.propTypes = {
	children: node.isRequired,
	onPress: func,
	style: array,
};

Link.defaultProps = {
	onPress: null,
	style: [],
};

export default Link;