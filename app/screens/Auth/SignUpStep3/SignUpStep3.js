import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import { connect } from 'react-redux';
import ProfileAction from 'app/store/actions/profile';
import RoundedButton from 'app/components/common/Button/RoundedButton/';

class SignUpStep3 extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSubscribe = this.onSubscribe.bind(this);
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {

		};
	}

	onSubscribe() {
		this.props.updateSubscriptionStatus('active');
		this.props.navigation.navigate('Onboarding');
		//this.props.screenProps.authNav.navigate('App');
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		return (
			<View style={{top: '30%'}}>
				<RoundedButton
					style={[]}
					inverted={true}
					text="Pay now"
					onPress={this.onSubscribe}
				/>
			</View>
		);
	}
}

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	updateSubscriptionStatus: (newStatus) => {
		dispatch(ProfileAction.updateSubscriptionStatus(newStatus));
	},
});

export default connect(null, mapDispatchToProps)(SignUpStep3);