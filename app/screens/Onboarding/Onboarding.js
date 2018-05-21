import React from 'react';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styling from 'app/config/styling';
import style from './style';
import Circle from 'assets/images/circle.png';
import Notification from 'assets/images/notif.png';
import DevicePerson from 'assets/images/device.png';
import ShareWithFriends from 'assets/images/friends.png';

import { reportOnboarding } from 'app/lib/api';

const OnboardingScreen = ({screenProps: {authNav: {navigate}}}) => {

	/**
	 * Tell the server that I skipped the onboarding and redirect to dashboard
	 * @return {Void} 
	 */
	const onSkip = () => {
		reportOnboarding('SKIP').then(() => navigate('App'));
	};

	/**
	 * Tell the server that I went through the onboarding and redirect to dashboard
	 * @return {Void} 
	 */
	const onDone = () => {
		reportOnboarding('THROUGH').then(() => navigate('App'));
	};

	const pages = [
		{
			backgroundColor: 'white',
	      	image: <Image source={Notification} style={[{width: 220, height: 220}]} />,
	      	title: 'Measure, Analyze and Share',
	      	subtitle: 'Make your Helo watch work for your health and well being.',
		},
		{
			backgroundColor: 'white',
	      	image: <Image source={DevicePerson} style={[{width: 200, height: 280}]} />,
	      	title: 'Feel Safe at All Times',
	      	subtitle: 'Add emergency contacts to your account to be notified.',
		},
		{
			backgroundColor: '#f8fafb',
	      	image: <Image source={ShareWithFriends} style={[{width: 300, height: 300}]} />,
	      	title: 'Everything is Better Together!',
	      	subtitle: 'Invite your friends to Cryslo and receive a FREE referral bonus.',
		},
	];

	return <Onboarding pages={pages} onSkip={onSkip} onDone={onDone} />;
};

export default OnboardingScreen;