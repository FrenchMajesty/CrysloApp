import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styling from 'app/config/styling';
import style from './style';

const RectangularButton = ({children, text, inverted, color, disabled, onPress, style: customStyle}) => {
	
	const btnColor = color ? color : styling.mainColor;

	const getButtonStyle = () => {
		return inverted ? 
			{
				backgroundColor: btnColor,
				borderColor: '#0000',
			}
		:
			{
				backgroundColor: '#0000',
				borderColor: btnColor,
			};
	};

	const getTextStyle = () => {
		return inverted ? 
			{ color: '#fff' }
		:
			{ color: btnColor };
	};

	const invertedText = {
		color: btnColor,

	};

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

export default RectangularButton;