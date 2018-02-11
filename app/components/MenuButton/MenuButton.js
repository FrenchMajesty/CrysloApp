import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingIcon from '../common/Button/FloatingIcon/';
import styling from 'app/config/styling';

const MenuButton = ({navigation, style: customStyle}) => {

	const toggleMenu = () => {
		navigation.navigate('DrawerToggle');
	};

	return (
		<FloatingIcon onPress={toggleMenu} customStyle={customStyle}>
    		<Icon name="bars" size={styling.floatingButton.iconSize} />
    	</FloatingIcon>
	);
};

export default MenuButton;