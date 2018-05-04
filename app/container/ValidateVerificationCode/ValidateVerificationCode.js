import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PhoneNumber from 'awesome-phonenumber';
import { connect } from 'react-redux';
import NumVerifAction from 'app/store/actions/verifyNumber';
import Input from 'app/components/common/Input/TextWithIcon/';
import Link from 'app/components/common/Link/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import style from 'app/screens/Auth/style';

class ValidateVerificationCode extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onCodeChange = this.onCodeChange.bind(this);
		this.onButtonPress = this.onButtonPress.bind(this);
		this.onChangeNumber = this.onChangeNumber.bind(this);
		this.createNewAccount = this.createNewAccount.bind(this);
		this.resetPassword = this.resetPassword.bind(this);
	}

	/**
	 * Clear the phone number from the store if it wasn't validated 
	 */
	componentWillUnmount() {
		if(! this.state.codeIsGood) {
			this.props.dispatch(NumVerifAction.setNumber(''));
		}
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			code: '',
			codeIsGood: false,
			isSubmitting: false,
		};
	}

	/**
	 * Format the validation code and update the state
	 * @param  {String} code The validation input's value
	 * @return {Void}        
	 */
	onCodeChange(code) {
		this.setState({code: code.replace(/[^0-9]+/g,'')});
	}

		
	/**
	 * Dispatch an action to validate the verification code and submit it to the API 
	 * @return {Void}
	 */
	onButtonPress() {
		const {code} = this.state;
		const {purpose} = this.props;

		if(code.length < 4) {
			this.setState({isSubmitting: true});
			
			setTimeout(() => {
				if(purpose == 'signup') {
					this.createNewAccount();
				}else if (purpose == 'reset-pwd') {
					this.resetPassword();
				}
			}, 1000);
		}
	}

	createNewAccount() {
		// send verif code to API and if valid, create user account
		this.setState({isSubmitting: false});
		this.onChangeNumber();
	}

	resetPassword() {
		// send verif code to API and if valid, redirect to reset password screen
		this.setState({isSubmitting: false});
		this.onChangeNumber();
		this.props.onNavigate();
	}

	/**
	 * Make an API call to re-send a new verification code
	 * @return {Void} 
	 */
	onResendCode() {
		alert('Just sent you a new code!');
	}

	/**
	 * Delete the phone number of the user from the store's state
	 * @return {Void} 
	 */
	onChangeNumber() {
		this.props.dispatch(NumVerifAction.setNumber(''));
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {code, isSubmitting} = this.state;
		const {purpose} = this.props;
		const formattedNum = new PhoneNumber(this.props.number, 'US').getNumber('national');
		
		return (
			<View style={[{width: 300, flex:1, justifyContent: 'space-between'}]}>
				{purpose == 'signup' ? 
					<View>
						<Text>A text message with a verification code was just sent to <Text style={{fontWeight: 'bold'}}>+1{formattedNum}</Text>. Did you not receive it?
						You can <Link onPress={this.onResendCode}>press here</Link> to re-send a new code.</Text>
						<Text style={{marginTop: 10}}>Did you enter the wrong number? <Link Press={this.onChangeNumber}>Change my number</Link>.
						</Text>
					</View>
				:
					<View>
						<Text>A text message with a verification code was just sent to <Text style={{fontWeight: 'bold'}}>+1{formattedNum}</Text>. Did you not receive it?
						You can <Text style={[style.link]} onPress={this.onResendCode}>press here</Text> to re-send a new code.</Text>
					</View>
				}
				<View style={[{flex: 1, marginTop: 25}]}>
					<Input
						iconColor="black"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						placeholderTextColor="black"
						selectionColor="black"
						textColor="black"
						iconName="lock"
						placeholder="Enter verification code here"
						keyboardType="numeric"
						returnKeyType="done"
						value={code}
						onChangeText={this.onCodeChange}
						maxLength={10}
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
							text="Validate"
							onPress={this.onButtonPress} />)
					}
				</View>
				<View style={{flex: 6}} />
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {Object} store.verifyNumber.number The user's phone number
 * @return {Object}                  
 */
const mapStateToProps = ({verifyNumber: {number}}) => ({
		number,
});

export default connect(mapStateToProps)(ValidateVerificationCode);