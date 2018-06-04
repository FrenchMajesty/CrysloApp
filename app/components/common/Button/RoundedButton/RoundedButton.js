import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator as Spinner } from 'react-native';
import { array, string, func, node, bool } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styling from 'app/config/styling';
import style from './style';

const RoundedButton = ({
	children,
	text,
	onPress,
	style: customStyle,
	contentColor,
	loading,
	success,
	inverted}) => {

	const iconColor = () => {
		if(contentColor) {
			return contentColor;
		}

		return inverted ? '#fff' : styling.mainColor;
	};

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={onPress}
			style={[
				style.container,
				inverted ? style.invertedContainer : style.normalContainer,
				...customStyle,
			]}
		>
			{(() => {
				const baseTextColor = inverted ? style.invertedText : style.normalText;
				const textColor = contentColor ? contentColor : baseTextColor;
				
				if(success) {
					return (<Icon name="check" color={iconColor()} size={30} style={{margin: -5}} />);
				}else if(loading) {
					return (<Spinner color={iconColor()} />);
				}else if (text) {
					return (<Text style={[style.text, textColor]}>{text.toUpperCase()}</Text>);
				}else {
					return children;
				}
			})()}
			
		</TouchableOpacity>
	);
};

RoundedButton.propTypes = {
	text: string,
	onPress: func,
	children: node,
	inverted: bool,
	style: array,
	spinnerColor: string,
	loading: bool,
	success: bool,
};

RoundedButton.defaultProps = {
	loading: false,
	success: false,
	spinnerColor: null,
	text: '',
	onPress: null,
	children: null,
	inverted: false,
	style: [],
};

export default RoundedButton;