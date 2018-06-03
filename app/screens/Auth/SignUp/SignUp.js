import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { validate } from 'indicative'; 
import SignUpActions from 'app/store/actions/signup';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import IconButton from 'app/components/common/Button/IconButton/';
import styling from 'app/config/styling'; 
import style from '../style';
import illustration from 'assets/images/signup.png';

import ValidatorMessages from 'app/lib/form/validator';
import { validateEmail } from 'app/lib/api';


class SignUp extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSubmit = this.onSubmit.bind(this);
	}

	/**
	 * Return the initial state of the screen component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			email: 'c@cool.com',
			password: '123',
			passwordIsHidden: true,
			errors: {},
		};
	}

	/**
	 * Validate the inputs and save to store's state before continuing
	 * @return {Void} 
	 */
	onSubmit() {
		const {email, password} = this.state;
		const {navigation} = this.props;

		// Validate inputs are okay
		const validator = validate({email, password}, {
			email: 'required|email',
			password: 'required',
		}, ValidatorMessages);

		validator.then(() => {

			// Verify that the email isn't already in use
			validateEmail(email).then(() => {
				this.props.setCredentials({email, password});
				navigation.navigate('SignUpStep2');
			})
			.catch(({response: {data}}) => this.setState({errors: data[0]}));
		})
		.catch((errors) => this.setState({errors: errors[0]}));
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {email, password, errors, passwordIsHidden} = this.state;
		const {navigation} = this.props;

		const emailHint = '';
		const passwordHint = 'Use a password at least 6 characters long for security.';

		return (
			<View>
				<IconButton
					icon="arrow-left"
					style={[styling.fixedNavButton]}
					onPress={() => navigation.goBack(null)}
				/>
				<KeyboardAwareScrollView
					style={{backgroundColor: 'white'}}
				    resetScrollToCoords={{ x: 0, y: 0 }}
					showsVerticalScrollIndicator={false}
				    scrollEnabled={true}
				>
					<Image
						style={{width: '100%'}}
						source={illustration}
					/>
					<View style={{marginBottom: 30}}>
						<Text style={[style.text, style.title]}>Sign Up</Text>
						<Text style={[style.text, style.subtitle]}>For a free trial of Cryslo today.</Text>
					</View>
					<View style={{flex: 1}} />
					<View style={[style.screenPadding, style.formContainer, {flex: 3}]}>
						<View style={[style.inputContainer]}>
							<Input
								iconColor="black"
								backgroundColor="rgba(0, 0, 0, 0.05)"
								selectionColor="black"
								textColor="black"
								iconName="envelope"
								placeholder="Enter your email"
								keyboardType="email-address"
								returnKeyType="done"
								value={email}
								onChangeText={(email) => this.setState({email})}
								hint={errors.field == 'email' ? errors.message : emailHint}
								hasError={errors.field == 'email'}
							/>
						</View>
						<View style={[style.inputContainer]}>
							<Input
								iconColor="black"
								backgroundColor="rgba(0, 0, 0, 0.05)"
								selectionColor="black"
								textColor="black"
								iconName="lock"
								secureTextEntry={passwordIsHidden}
								placeholder="Enter your password"
								returnKeyType="done"
								value={password}
								onChangeText={(password) => this.setState({password})}
								hint={errors.field == 'password' ? errors.message : passwordHint}
								hasError={errors.field == 'password'}
							/>
						</View>
						<View style={[style.submitContainer, style.actionButtonContainer]}>
							<RoundedButton
								style={[style.submitButton]}
								inverted={true}
								text="Continue"
								onPress={this.onSubmit}
							/>
						</View>
					</View>
					<View style={{flex: 3}} />
				</KeyboardAwareScrollView>
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
	setCredentials: (details) => {
		dispatch(SignUpActions.setCredentials(details));
	},
});

export default connect(null, mapDispatchToProps)(SignUp);