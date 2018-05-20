import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { string, func, node, bool, object } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

const RoundedButton = ({children, text, onPress, style: customStyle, inverted}) => {

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
			{text ? 
				<Text 
					style={[
						style.text,
					 	inverted ? style.invertedText : style.normalText,
					]}
				>{text.toUpperCase()}</Text> : children}
			
		</TouchableOpacity>
	);
};

RoundedButton.propTypes = {
	text: string,
	onPress: func,
	children: node,
	inverted: bool,
	style: object,
};

RoundedButton.defaultProps = {
	text: '',
	onPress: null,
	children: null,
	inverted: false,
	style: {},
};

export default RoundedButton;