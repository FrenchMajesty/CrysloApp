import React from 'react';
import { View, Text } from 'react-native';
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
			customStyle
			]}
		>
			{showBackButton ?
				<IconButton
					icon="arrow-left"
					style={{position: 'absolute', marginLeft: 10}}
					onPress={()=> navigation.pop()}
				/>
			:	<IconButton
					icon="bars"
					style={{position: 'absolute', marginLeft: 10}}
					onPress={() => navigation.navigate('DrawerToggle')}
				/>
		}
			<Text 
				style={[style.title, {color: color}]} 
				OnPress={() => navigation.navigate('DrawerToggle')}
			>{title}</Text>
			{hint ? 
				<Text
					style={[styling.text.prop.light, style.hint]}
				>{hint}</Text>
				:
				null
			}
		</View>
	);
};

export default Header;