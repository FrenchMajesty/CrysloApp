import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import ListItem from 'app/components/common/ListItem';
import styling from 'app/config/styling';
import style from './style';

const SettingsMenu = ({navigation, screenProps:{rootNavigation}}) => {

	return (
		<View style={[styling.container, styling.grayScreenBackground]}>
			<View style={{backgroundColor: '#fff', height: 120}}>
				<Header
					navigation={rootNavigation}
					title="Settings"
					color={styling.black}
					hint="Here is the place where you update all of your account and app settings."
					elevated={true}
					style={{flex: 2, position: 'absolute'}}
				/>
			</View>
			<ScrollView style={[style.screenPadding, style.listContainer]}>
				<ListItem 
					primaryText="Account settings" 
					secondaryText="Here you can check all that stuff out bro."
					onPress={() => navigation.navigate('AccountSettings')}
				/>
				<ListItem 
					primaryText="Terms and Conditions of Use" 
					secondaryText="In case you want to review our terms."
					onPress={() => { /* navigate to the right screen here */ }}
				/>
				<ListItem 
					primaryText="Privacy Policy" 
					secondaryText="We respect your privacy and data, read our policy."
				onPress={() => { /* navigate to the right screen here */ }}
				/>
			</ScrollView>
		</View>
	);
};

export default SettingsMenu;