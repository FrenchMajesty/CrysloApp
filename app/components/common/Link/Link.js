import React from 'react';
import { Text } from 'react-native';
import style from './style';

const Link = (props) => {

	return (
		<Text style={[style.link, props.style]} onPress={props.onPress}>
			{props.children}
		</Text>
	);
};

export default Link;