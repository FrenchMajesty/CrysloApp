import React from 'react';
import { View, Text } from 'react-native';
import MenuButton from '../MenuButton/';
import style from './style';
import styling from 'app/config/styling'

const Header = ({title, navigation, style: customStyle}) => {

	return (
		<View 
			style={[styling.screenPadding, style.container, customStyle]}
		>
			<MenuButton navigation={navigation} style={{flex: 1}} />
			<Text style={[style.title, {flex: 100}]}>{title}</Text>
		</View>
	);
};

export default Header;