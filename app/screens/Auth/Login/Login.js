import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import ProfileAction from 'app/store/actions/profile';
import RoundedButton from 'app/components/common/Button/RoundedButton';
import Input from 'app/components/common/Input/TextWithIcon/';
import Icon from 'react-native-vector-icons/FontAwesome';
import IosIcon from 'react-native-vector-icons/Ionicons';
import styling from 'app/config/styling'; 
import style from '../style';

import { login, loadProfile } from 'app/lib/api';

class Login extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSignOn = this.onSignOn.bind(this);
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
	 * Send the user's credentials to the server for authentication
	 * @return {Void} 
	 */
	onSignOn() {
		const {navigate} = this.props.screenProps.authNav;
		const {email, password} = this.state;

		login({email, password}).then(({data: {token}}) => {
			this.props.updateAuthToken(token);

			loadProfile()
			.then(({data: {id, firstname, lastname, referral_id, number}}) => {

				this.props.updateAccountProfile({id, email, referral_id, number});

				// Since the first & last name are optional check they exist before setting them
				if(firstname && lastname) {
					this.props.updateAccountProfile({
						firstname,
						lastname,
						name: `${firstname} ${lastname}`,
					});
				}
			})
			.catch(({response}) => console.log(response))

			navigate('App');
		})
		.catch(({response: {data}}) => {
			alert(data[0].message);
		});
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {email, password, passwordIsHidden} = this.state;
		const {navigate} = this.props.navigation;

		return (
			<View>
				<LinearGradient 
					start={[0.1,0.1]}
					colors={styling.gradient} 
					style={[styling.screenPadding, styling.statusBarPadding, style.gradientBg, style.container]}
				>
					<Text>[App Logo Placeholder]</Text>
					<View style={{flex: 2}} />
					<View style={[style.formContainer]}>
						<View style={[style.inputContainer]}>
							<Input
								iconColor="white"
								backgroundColor="#ffffff12"
								placeholderTextColor="white"
								selectionColor="#fff"
								iconName="envelope"
								placeholder="Enter your email"
								keyboardType="email-address"
								returnKeyType="done"
								value={email}
								onChangeText={(email) => this.setState({email})}
							/>
						</View>
						<View style={[style.inputContainer]}>
							<Input
								iconColor="white"
								backgroundColor="#ffffff12"
								placeholderTextColor="white"
								selectionColor="#fff"
								iconName="lock"
								secureTextEntry={passwordIsHidden}
								placeholder="Enter your password"
								returnKeyType="done"
								value={password}
								onChangeText={(password) => this.setState({password})}
							/>
						</View>
						<View style={[style.submitContainer]}>
							<RoundedButton
								style={[style.submitButton]}
								text="Sign In"
								onPress={this.onSignOn}
							/>
						</View>
						{/*<View style={[style.touchId]}>
							<Text style={[style.text, {marginTop: 10, marginRight: 5}]}>
								Or login with your Touch ID {"\b"}
								</Text>
							<TouchableOpacity>
								<IosIcon name="ios-finger-print" size={40} color="white" />
							</TouchableOpacity>
						</View>*/}
					</View>
					<View style={{flex: 4, marginTop: 25}}>
					<TouchableOpacity onPress={() => navigate('ForgotPassword')}>
						<Text style={[style.text]}>
							Forgot your password?</Text>
					</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => navigate('SignUp')}>
						<Text style={[style.text, {marginBottom: 20}]}>
							Don't have an account? {"\b"}
							<Text style={[style.underline]}>Sign Up</Text>
						</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {String} store.profile.auth.token The JWT token of the signed in user
 * @return {Object}                  
 */
const mapStateToProps = ({profile: {auth: {token}}}) => ({
		token,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	updateAuthToken: (token) => {
		dispatch(ProfileAction.updateAuthToken(token));
	},
	updateAccountProfile: (profile) => {
		dispatch(ProfileAction.updateAccountProfile(profile));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
