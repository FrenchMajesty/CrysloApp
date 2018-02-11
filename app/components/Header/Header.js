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
			<MenuButton navigation={navigation} />
			<Text style={[style.title, {flex: 100}]} OnPress={() => navigation.navigate('DrawerToggle')}>{title}</Text>
		</View>
	);
};

export default Header;