import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import ListItem from 'app/components/common/ListItem';
import styling from 'app/config/styling';
import style from '../../style';

const AccountMenu = ({navigation, screenProps: {rootNavigation}}) => {

	return (
		<View style={[styling.grayScreenBackground]}>
			<View style={{backgroundColor: '#fff', height: 70}}>
				<Header
					navigation={rootNavigation}
					showBackButton={true}
					title="Account"
					elevated={true}
					style={{flex: 2, position: 'absolute'}}
				/>
			</View>
			<ScrollView style={[style.screenPadding, style.listContainer]}>
				<ListItem 
					primaryText="Profile Settings" 
					secondaryText="Here you can update your name and email."
					onPress={() => navigation.navigate('AccountProfile')}
				/>
				<ListItem 
					primaryText="Account Password" 
					secondaryText="You can update your password at any time here."
					onPress={() => navigation.navigate('UpdatePassword')}
				/>
				<ListItem 
					primaryText="Medical Profile Settings" 
					secondaryText="Your medical profile used to show you relevant advices."
					onPress={() => { /* navigate to the right screen here */ }}
				/>
				<ListItem 
					primaryText="Billing Settings" 
					secondaryText="Update and modify your billing informations."
				onPress={() => { /* navigate to the right screen here */ }}
				/>
			</ScrollView>
		</View>
	);
};


export default AccountMenu;