import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'app/components/Header/';
import Card from 'app/components/common/Card/';
import Button from 'app/components/common/Button/RectangularButton/';
import GiftIcon from 'assets/images/gift.png';
import styling from 'app/config/styling';
import style from './style';

class Referral extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);


	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			c: '',
		};
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation} = this.props;

		return (
			<View
				style={[styling.statusBarPadding, styling.screenPadding, style.container, styling.grayScreenBackground]}
			>
				<Header 
					title="Referral Program"
					style={{flex: 0, marginBottom: 20}}
					navigation={navigation}
				/>

				<KeyboardAwareScrollView
					style={[styling.grayScreenBackground, {height: '100%'}]}
				    resetScrollToCoords={{ x: 0, y: 0 }}
					showsVerticalScrollIndicator={false}
				    scrollEnabled={true}
				>
					<Image source={GiftIcon} style={[style.image]} />
					<Text style={[style.text, style.title]}>Refer your friends to sign up for Cryslo and get a 2 weeks credit for free!</Text>
					<Text style={[style.text, style.subtitle]}>PS: They also get 2 extra weeks for free!</Text>

					<Card style={[{marginTop: 30}]}>
						<Text style={[style.text, style.subtitle]}>Your Referral Code:</Text>
						<Text style={[style.text, style.code]}>ABC123</Text>

						<View style={[style.buttonContainer]}>
							<Button
								inverted
								color="#5be"
								text="Share on social media"
								style={[style.button]}
							/>
							<Button
								inverted
								text="Send Text Invite"
								style={[style.button]}
							/>
						</View>
					</Card>

					<View style={{marginTop: 20, marginBottom: 100}}>
						<Text style={[style.text, style.title]}>So how does it work?</Text>
						<Text style={[style.text, style.steps]}>The way Cryslo's referral program works is very simple.</Text>
						<Text style={[style.text, style.steps]}>1. Find a cake without icing.</Text>
						<Text style={[style.text, style.steps]}>2. Put a strawberry on top of it and then put it in the oven for an hour and a half at 250 degrees.</Text>
					</View>
				</KeyboardAwareScrollView>		
			</View>
		);
	}
}

export default Referral;