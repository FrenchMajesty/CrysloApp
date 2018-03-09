import React from 'react';
import { View, Text } from 'react-native';
import IconButton from '../common/Button/IconButton/';
import style from './style';
import styling from 'app/config/styling';

const Header = ({title, navigation, style: customStyle, color}) => {

	const openMenu = () => {
		navigation.navigate('DrawerToggle');
	};

	return (
		<View style={[styling.screenPadding, style.container, customStyle]}>
			<IconButton
				icon="bars"
				style={{position: 'absolute', marginLeft: 10}}
				onPress={openMenu}
			/>
			<Text 
				style={[style.title, {color: color}]} 
				OnPress={() => navigation.navigate('DrawerToggle')}
			>{title}</Text>
		</View>
	);
};

export default Header;