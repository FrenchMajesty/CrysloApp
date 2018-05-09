import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import IconButton from 'app/components/common/Button/IconButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import CommonText from 'app/components/common/CommonText/';
import PhoneNumberVerification from 'app/container/PhoneNumberVerification/';
import ValidateVerificationCode from 'app/container/ValidateVerificationCode/';
import VerificationAction from 'app/store/actions/verifyNumber';
import SignUpAction from 'app/store/actions/signup';
import styling from 'app/config/styling';
import style from '../style';
import phoneImg from '../../../../assets/images/text.png';

import { signUp } from 'app/lib/api';

class SignUpStep2 extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSuccess = this.onSuccess.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			errors: '',
		};
	}

	/**
	 * Submit to the API a request to create a new account then redirect 
	 * to subscription screen
	 * @return {Void} 
	 */
	onSuccess() {
		const {email, password, number, navigation, setNumber, setCredentials} = this.props; 

		signUp({email, password, number}).then(() => {

			setNumber('');
			setCredentials({email: '', password: ''});
			navigation.navigate('SignUpStep3');
		})
		.catch(err => {
			console.log(err);
			this.setState({errors: 'Oops! An error occured while creating your account. Please try again.'});
		});
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation, number} = this.props;
		const {errors} = this.state;

		return (
			<View style={[styling.statusBarPadding, style.container, {flex: 1}]}>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.goBack(null)}
				/>
				<CommonText weight="heavy" style={style.errors}>{errors}</CommonText>
				<View style={[{alignSelf: 'center', top: '20%'}]}>
					{number ?
						<ValidateVerificationCode purpose="signup"  onSuccess={this.onSuccess} />
					: 
						<PhoneNumberVerification purpose="signup"/>
					}
				</View>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {String} store.verifyNumber.number The user's phone number
 * @param  {String} store.signup.email The user's email
 * @param  {String} store.signup.password The user's password
 * @return {Object}                  
 */
const mapStateToProps = ({verifyNumber: {number}, signup: {email, password}}) => ({
		number,
		email,
		password,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	setNumber: (number) => {
		dispatch(VerificationAction.setNumber(number));
	},
	setCredentials: (details) => {
		dispatch(SignUpAction.setCredentials(details));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpStep2);