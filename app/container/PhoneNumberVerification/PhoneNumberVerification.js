import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import NumVerifAction from 'app/store/actions/verifyNumber';
import Input from 'app/components/common/Input/TextWithIcon/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import PhoneNumber from 'awesome-phonenumber';
import style from 'app/screens/Auth/style';

class PhoneNumberVerification extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			number: '',
			isSubmitting: false,
		};
	}
		
	/**
	 * Dispatch an action to update the number and submit it to the API 
	 * @return {Void}
	 */
	onButtonPress() {
		const {number} = this.state;
		const {purpose} = this.props;

		if(number.length > 8) {
			this.setState({isSubmitting: true});

			setTimeout(() => {
				this.setState({isSubmitting: false});

				if(purpose == 'signup') {
					this.props.dispatch(NumVerifAction.setNumber(number));
				}else if(purpose == 'reset-pwd') {
					this.props.dispatch(NumVerifAction.setNumber(number));
				}
			}, 1000);
		}
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {number, isSubmitting} = this.state;
		const formattedNum = new PhoneNumber(number, 'US').getNumber('national');

		return (
			<View style={[{width: 300, flex:1, justifyContent: 'space-between'}]}>
				<View style={[{flex: 1}]}>
					<Input
						iconColor="black"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						placeholderTextColor="black"
						selectionColor="black"
						textColor="black"
						iconName="phone"
						placeholder="Enter your phone number"
						keyboardType="numeric"
						returnKeyType="done"
						value={formattedNum}
						onChangeText={(number) => this.setState({number})}
						hint=""
					/>
				</View>
				<View style={[style.actionButtonContainer, style.submitContainer2]}>
					{isSubmitting ? 
						(<RoundedButton style={[style.submitButton2]} inverted={true}>
							<ActivityIndicator size="small" color="#fff" />
						</RoundedButton>) 
					:  
						(<RoundedButton
							style={[style.submitButton2]}
							inverted={true}
							text="Send Code"
							onPress={this.onButtonPress} />)
					}
				</View>
				<View style={{flex: 9}} />
			</View>
		);
	}
}

export default connect(null)(PhoneNumberVerification);