import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { func } from 'prop-types';
import Input from 'app/components/common/Input/TextWithIcon/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import PhoneNumber from 'awesome-phonenumber';
import style from 'app/screens/Auth/style';

class PhoneNumberVerification extends Component {

	static propTypes = {
		onSendCode: func.isRequired,
	};

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
			errors: {},
		};
	}
		
	/**
	 * Dispatch an action to update the number and submit it to the API 
	 * @return {Void}
	 */
	onButtonPress() {
		const {number} = this.state;

		this.setState({isSubmitting: true});
		this.props.onSendCode(number, (errors) => {
			if(errors) {
				this.setState({errors, isSubmitting: false});
			}
		}); 
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {number, isSubmitting, errors} = this.state;
		const formattedNum = new PhoneNumber(number, 'US').getNumber('national');

		return (
			<View style={[{width: 300, flex:1, justifyContent: 'space-between'}]}>
				<View style={[{flex: 3}]}>
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
						hint={errors.message}
						hasError={errors.field == 'number'}
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
				<View style={{flex: 8}} />
			</View>
		);
	}
}

export default PhoneNumberVerification;