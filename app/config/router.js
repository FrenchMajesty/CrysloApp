import React from 'react';
import { StackNavigator,
	 TabNavigator,
	  DrawerNavigator,
	  SwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


// Authentication Stack
import Login from 'app/screens/Auth/Login/';
import SignUp from 'app/screens/Auth/SignUp/';
import SignUpStep2 from 'app/screens/Auth/SignUpStep2/';
import ForgotPassword from 'app/screens/Auth/ForgotPassword/';

import Dashboard from 'app/screens/Dashboard/';
import History from 'app/screens/History/';
import Guardians from 'app/screens/Guardians/';
import WeCare from 'app/screens/WeCare/';
import ContactDetails from 'app/screens/ContactDetails/';
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

const WeCareTab = StackNavigator({
	WeCare: {
		screen: WeCare,
		path: '/wecare',
		navigationOptions: {
			header: null,
		},
	},
	ContactDetails: {
		screen: ContactDetails,
		path: '/contact/:id',
		navigationOptions: ({navigation}) => ({
			header: null,
			contact: navigation.state.params.contact,
		}),
	},
});

const SimpleTabs = TabNavigator(
	{
		Dashboard: {
			screen: Dashboard,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="plus-square" size={styling.tabIcon.size} color={tintColor} />
				},
			}
		},
		History: {
			screen: HistoryTab,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="bar-chart" size={styling.tabIcon.size} color={tintColor} />
				},
			}
		},
		Guardians: {
			screen: Guardians,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="user" size={styling.tabIcon.size} color={tintColor} />
				},
			}
		},
		WeCare: {
			screen: WeCareTab,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return <Icon name="share-alt" size={styling.tabIcon.size} color={tintColor} />
				},
			}
		}, 
	},
	{
		tabBarOptions: {
			activeTintColor: styling.mainColor,
			inactiveTintColor: '#a7a6a6',
			style: {
				backgroundColor: 'white',
				height: 50,
				paddingTop: 7,
				marginBottom: 7,
				borderTopWidth: 0,
			    borderColor: 'rgba(0,0,0, .125)',
				shadowOffset: {
			    	width: 0,
			    	height: -15,
			    },
			    shadowRadius: 20,
			    shadowOpacity: .03,
			},
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

const AuthStack = StackNavigator({
	Login: {
		screen: Login,
		path: '/login',
		navigationOptions: {
			header: null,
		},
	},
	SignUp: {
		screen: SignUp,
		path: '/signup',
		navigationOptions: {
			header: null,
		},
	},
	SignUpStep2: {
		screen: SignUpStep2,
		path: '/signup/2',
		navigationOptions: {
			header: null,
		},
	},
	ForgotPassword: {
		screen: ForgotPassword,
		path: '/forgot-pwd',
		navigationOptions: {
			header: null,
		},
	},
});

const TabsInDrawer = DrawerNavigator(
	{
		Home: {
			screen: ({navigation}) => {
				return <SimpleTabs screenProps={{ rootNavigation: navigation }} /> 
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

export const SwitchNavigation = SwitchNavigator({
	App: TabsInDrawer,
	Auth: ({navigation}) => {
		return <AuthStack screenProps={{authNav: navigation}} />
	},
}, {
	initialRouteName: 'Auth',
});


