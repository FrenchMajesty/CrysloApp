import React from 'react';
import { View, Text } from 'react-native';
import { string, bool, object, array } from 'prop-types';
import IconButton from '../common/Button/IconButton/';
import style from './style';
import styling from 'app/config/styling';
import cardStyle from '../common/Card/style';

const Header = ({title, showBackButton, navigation, hint, elevated, forHistory, style: customStyle, color}) => {

	const openMenu = () => {
		navigation.navigate('DrawerToggle');
	};

	const flexDirection = forHistory ? 
		{flexDirection: 'row', marginBottom: 1} : 
		{flexDirection: 'column', marginBottom: 25};

	return (
		<View style={[
			styling.screenPadding, 
			style.container, 
			elevated ? cardStyle.depth2 : '',
			elevated ? style.elevated : '',
			flexDirection, 
			...customStyle,
			]}
		>
			{showBackButton ?
				<IconButton
					icon="arrow-left"
					style={[{position: 'absolute', marginLeft: 10}]}
					onPress={()=> navigation.pop()}
				/>
			:	<IconButton
					icon="bars"
					style={[{position: 'absolute', marginLeft: 10}]}
					onPress={() => navigation.navigate('DrawerToggle')}
				/>
		}
			<Text 
				style={[style.title, {color}]} 
				OnPress={() => navigation.navigate('DrawerToggle')}
			>{title}</Text>
			{hint ? 
				<Text style={[styling.text.prop.light, style.hint]}>{hint}</Text>
				:
				null
			}
		</View>
	);
};

Header.propTypes = {
	title: string.isRequired,
	navigation: object.isRequired,
	style: array,
	hint: string,
	color: string,
	showBackButton: bool,
	forHistory: bool,
	elevated: bool,
};

Header.defaultProps = {
	elevated: false,
	showBackButton: false,
	forHistory: false,
	color: styling.black,
	hint: '',
	style: [],
};

export default Header;