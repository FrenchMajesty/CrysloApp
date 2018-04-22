import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import IconButton from 'app/components/common/Button/IconButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import PhoneVerification from 'app/container/SignUpVerification/';
import ValidateSecurityCode from 'app/container/SignUpVerificationCode/';
import styling from 'app/config/styling';
import style from '../style';
import phoneImg from '../../../../assets/images/text.png';

class SignUpStep2 extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.numberSubmitted = this.numberSubmitted.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			number: '',
		}
	}

	numberSubmitted(number) {
		this.setState({number});
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation, signup: {number}} = this.props;

		return (
			<View style={[styling.statusBarPadding, style.container, {flex: 1}]}>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.goBack(null)}
				/>
				<View style={[{alignSelf: 'center', top: '10%'}]}>
					{number ?
						<ValidateSecurityCode />
					: 
						<PhoneVerification />
					}
				</View>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {Object} store.signup User's sign up data
 * @return {Object}                  
 */
const mapStateToProps = ({signup}) => ({
		signup,
})

export default connect(mapStateToProps)(SignUpStep2);