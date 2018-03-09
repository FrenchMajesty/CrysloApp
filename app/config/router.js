import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from 'app/screens/Dashboard/';
import History from 'app/screens/History/';
import Guardians from 'app/screens/Guardians/';
import WeCare from 'app/screens/WeCare/';
import DetailedHistory from 'app/screens/DetailedHistory/';

// Drawers screens
import Syncing from 'app/screens/Syncing/';

import styling from 'app/config/styling';

const HistoryTab = StackNavigator({
	History: {
		screen: History,
		path: '/',
		navigationOptions: {
			header: null,
		},
	},
	Details: {
		path: '/history/:vital',
		screen: DetailedHistory,
		navigationOptions: ({navigation}) => ({
			vital: navigation.state.params.vital,
			header: null,
		})
	}
});


const SimpleTabs = TabNavigator(
	{
		Dashboard: {
			screen: Dashboard,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="plus-square" size={25} color={tintColor} />
				},
			}
		},
		History: {
			screen: HistoryTab,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="bar-chart" size={25} color={tintColor} />
				},
			}
		},
		Guardians: {
			screen: Guardians,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="user" size={25} color={tintColor} />
				},
			}
		},
		WeCare: {
			screen: WeCare,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="share-alt" size={25} color={tintColor} />
				},
			}
		}, 
	},
	{
		tabBarOptions: {
			activeTintColor: styling.mainColor,
		},
		animationEnabled: true,
		swipeEnabled: false,
		configureTransition: (currentTransProps, nextTransProps) => ({
			timing: Animated.spring,
			tension: 1,
			friction: 35,
		})
	},
);

export const TabsInDrawer = DrawerNavigator(
	{
		Home: {
			screen: ({navigation}) => {
				return <SimpleTabs screenProps={{ rootNavigation: navigation }} /> 
			},
			navigationOptions: {
				title: 'Home',
			},
		},
		Sync: {
			screen: Syncing,
			navigationOptions: {
				title: 'Sync Device',
			},
		},
	}
);