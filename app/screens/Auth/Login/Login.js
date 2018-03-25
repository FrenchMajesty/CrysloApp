import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import RoundedButton from 'app/components/common/Button/RoundedButton';
import Input from 'app/components/common/Input/TextWithIcon/';
import Icon from 'react-native-vector-icons/FontAwesome';
import IosIcon from 'react-native-vector-icons/Ionicons';
import styling from 'app/config/styling'; 
import style from './style';


class Login extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
	}

	/**
	 * Return the initial state of the screen component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			email: '',
			password: '',
			passwordIsHidden: true,
		};
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
							/>
						</View>
						<View style={[style.touchId]}>
							<Text style={[style.text, {marginTop: 10, marginRight: 5}]}>
								Or login with your Touch ID {"\b"}
								</Text>
							<TouchableOpacity>
								<IosIcon name="ios-finger-print" size={40} color="white" />
							</TouchableOpacity>
						</View>
					</View>
					<View style={{flex: 3, marginTop: 25}}>
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

export default Login;