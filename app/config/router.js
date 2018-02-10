import React from 'react'
import { TabNavigator } from 'react-navigation'

import Dashboard from 'app/screens/Dashboard/'
import History from 'app/screens/History/'
import Guardians from 'app/screens/Guardians/'
import WeCare from 'app/screens/WeCare/'

export const Tabs = TabNavigator(
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