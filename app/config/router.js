import React from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

import Dashboard from 'app/screens/Dashboard/'
import History from 'app/screens/History/'
import Guardians from 'app/screens/Guardians/'
import WeCare from 'app/screens/WeCare/'

// Drawers screens
import Syncing from 'app/screens/Syncing/'

const SimpleTabs = TabNavigator(
	{
		Dashboard: {
			screen: Dashboard,
		},
		History: {
			screen: History,
		},
		Guardians: {
			screen: Guardians,
		},
		WeCare: {
			screen: WeCare,
		}, 
	},
	{
		animationEnabled: true,
		swipeEnabled: false,
		configureTransition: (currentTransProps, nextTransProps) => ({
			timing: Animated.spring,
			tension: 1,
			friction: 35,
		})
	}
)

export const TabsInDrawer = DrawerNavigator(
	{
		Home: {
			screen: SimpleTabs,
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
)