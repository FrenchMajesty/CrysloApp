import React from 'react';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styling from 'app/config/styling';
import style from './style';
import Circle from 'assets/images/circle.png';
const image = {uri : 'http://www.pngmart.com/files/4/Circle-PNG-File.png'};
const OnboardingScreen = (props) => {

	const onSkip = () => {
		// tell the server that I skipped the onboarding and redirect to dashboard
	};

	const onDone = () => {
		// tell the server that I went through the onboarding and redirect to dashboard
	};

	const pages = [
		{
			backgroundColor: 'white',
	      	image: <Image source={Circle} style={[style.image]} />,
	      	title: 'Onboarding',
	      	subtitle: 'Done with React Native Onboarding Swiper',
		},
		{
			backgroundColor: 'white',
	      	image: <Image source={Circle} style={[style.image]} />,
	      	title: 'The start of something beautiful...',
	      	subtitle: 'Done with React Native Onboarding Swiper',
		},
		{
			backgroundColor: 'white',
	      	image: <Image source={Circle} style={[style.image]} />,
	      	title: 'Are you ready for it?',
	      	subtitle: 'Done with React Native Onboarding Swiper',
		},
	];

	return <Onboarding pages={pages} onSkip={onSkip} onDone={onDone} />;
}

export default OnboardingScreen;