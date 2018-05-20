import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { func, string, object, bool, node } from 'prop-types';
import styling from 'app/config/styling';
import style from './style';

const RectangularButton = ({children, text, inverted, color, disabled, onPress, style: customStyle}) => {
	
	const getButtonStyle = () => {
		return inverted ? 
			{ backgroundColor: color, borderColor: '#0000' }
		:
			{ backgroundColor: '#0000', borderColor: color };
	};

	const getTextStyle = () => inverted ? { color: '#fff' } : { color };

	return (
		<TouchableOpacity
			activeOpacity={disabled ? 1 : 0.6}
			onPress={disabled ? null : onPress}
			style={[
				style.container,
				getButtonStyle(),
				disabled ? style.disabled : '',
				customStyle
			]}
		>
			{! children ?
				<Text 
					style={[
						style.text, 
						getTextStyle(),
						disabled ? style.disabledText : '',
					]}
				>{text.toUpperCase()}</Text>
			:
				children
			}
		</TouchableOpacity>
	);
};

RectangularButton.propTypes = {
	children: node,
	text: string,
	inverted: bool,
	color: string,
	disabled: bool,
	onPress: func,
	style: object,
};

RectangularButton.defaultProps = {
	children: null,
	text: '',
	inverted: false,
	color: styling.mainColor,
	disabled: false,
	onPress: null,
	style: {},
};

export default RectangularButton;