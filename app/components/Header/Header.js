import React from 'react';
import { View, Text } from 'react-native';
import MenuButton from '../MenuButton/';
import style from './style';
import styling from 'app/config/styling';

const Header = ({title, navigation, style: customStyle, color}) => {

	return (
		<View style={[styling.screenPadding, style.container, customStyle]}>
			<MenuButton navigation={navigation} style={{position: 'absolute', marginLeft: 10}} />
			<Text 
				style={[style.title, {color: color}]} 
				OnPress={() => navigation.navigate('DrawerToggle')}
			>{title}</Text>
		</View>
	);
};

export default Header;