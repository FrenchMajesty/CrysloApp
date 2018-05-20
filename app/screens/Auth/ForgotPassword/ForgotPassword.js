import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import VerificationAction from 'app/store/actions/verifyNumber';
import IconButton from 'app/components/common/Button/IconButton/';
import PhoneNumberVerification from 'app/container/PhoneNumberVerification/';
import ValidateVerificationCode from 'app/container/ValidateVerificationCode/';
import styling from 'app/config/styling';
import style from '../style';

import { validateNumberForgotPwd } from 'app/lib/api';

class ForgotPassword extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.onSuccess = this.onSuccess.bind(this);
		this.onSendCode = this.onSendCode.bind(this);
	}

	/**
	 * Move on to the next step when the verification code is verified
	 * @return {Void} 
	 */
	onSuccess() {
		const {navigation} = this.props;

		this.props.setNumber('');
		navigation.navigate('ResetPassword');
	}

	/**
	 * Make a call to the API to text a verification code to the number
	 * @param  {String} number The number where to send the code
	 * @param  {Function} callb  The callback function
	 * @return {Void}        
	 */
	onSendCode(number, callb) {
		const callback = callb || (() => {}) // default callback value

		validateNumberForgotPwd(number).then(({data}) => {
			this.props.setNumber(number);
			this.props.setUserId(data.id);
			callback();
		})
		.catch(({response: {data}}) => data[0] ? callback(data[0]) : callback());
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation, number} = this.props;

		return (
			<View style={[styling.statusBarPadding, style.container, {flex: 1}]}>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.goBack(null)}
				/>
				<View style={[{alignSelf: 'center', top: '20%'}]}>
					{number ?
						<ValidateVerificationCode
							purpose="reset-pwd"
							onSuccess={this.onSuccess}
							onResendCode={this.onSendCode}
						/>
					: 
						<PhoneNumberVerification onSendCode={this.onSendCode} />
					}
				</View>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {Object} store.verifyNumber.number The user's phone number
 * @return {Object}                  
 */
const mapStateToProps = ({verifyNumber :{number}}) => ({
		number,
})

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	setNumber: (number) => {
		dispatch(VerificationAction.setNumber(number));
	},
	setUserId: (id) => {
		dispatch(VerificationAction.setUserId(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);