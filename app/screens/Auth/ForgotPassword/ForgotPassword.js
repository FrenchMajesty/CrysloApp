import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import IconButton from 'app/components/common/Button/IconButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import PhoneNumberVerification from 'app/container/PhoneNumberVerification/';
import ValidateVerificationCode from 'app/container/ValidateVerificationCode/';
import styling from 'app/config/styling';
import style from '../style';

class ForgotPassword extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);
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
						<ValidateVerificationCode purpose="reset-pwd" />
					: 
						<PhoneNumberVerification purpose="reset-pwd" />
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

export default connect(mapStateToProps)(ForgotPassword);