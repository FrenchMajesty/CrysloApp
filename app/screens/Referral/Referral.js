import React, { Component } from 'react';
import { View, Text, Image, Share } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Header from 'app/components/Header/';
import Card from 'app/components/common/Card/';
import Link from 'app/components/common/Link/';
import Button from 'app/components/common/Button/RectangularButton/';
import GiftIcon from 'assets/images/gift.png';
import styling from 'app/config/styling';
import style from './style';

class Referral extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);

		this.onSocialShare = this.onSocialShare.bind(this);
		this.onTextShare = this.onTextShare.bind(this);
	}

	/**
	 * When the button is pressed, show the prompt to share an invite link on social medias
	 * @return {Void} 
	 */
	onSocialShare() {
		Share.share({
			message: 'Hey check out the new Cryslo app for the Helo watch, you even get a free credit for using my code!',
			url: 'https://victron.tech',
		}, {
			subject: 'Have you heard about the Cryslo app for the Helo watch?',
			tintColor: 'red',
		}).then(({action, activityType}) => {
			if(action == 'dismissedAction') {
				// do stuff...
			}else if(action == 'sharedAction') {
				// do other stuff with activityType...
			}
		});
	}

	/**
	 * When the button is pressed, show the contact list to send a text invite
	 * @return {Void} 
	 */
	onTextShare() {
		// cool contact list
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation, referralId} = this.props;

		return (
			<View
				style={[styling.statusBarPadding, styling.screenPadding, styling.grayScreenBackground]}
			>
				<Header 
					title="Referral Program"
					navigation={navigation}
					style={[{flex: 0, marginBottom: 20}]}
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

					<Card card={[{marginTop: 40}]}>
						<Text style={[style.text, style.subtitle]}>Your Referral Code:</Text>
						<Text style={[style.text, style.code]}>{referralId}</Text>

						<View style={[style.buttonContainer]}>
							<Button
								inverted
								color="#5be"
								text="Share with a friend"
								style={[style.button]}
								onPress={this.onSocialShare}
							/>

							<Link style={[{marginTop: 10}]} onPress={() => alert('You have referred 99 people!')}>View Referral History</Link>
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

/**
 * Map the redux store's state to the component's props
 * @param  {String} store.profile.account.profile The User model of the current customer
 * @return {Object}                  
 */
const mapStateToProps = ({profile: {account: {profile}}}) => ({
		referralId: profile.referral_id,
});

export default connect(mapStateToProps, null)(Referral);
