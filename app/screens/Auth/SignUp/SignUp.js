import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import IconButton from 'app/components/common/Button/IconButton/';
import Icon from 'react-native-vector-icons/FontAwesome';
import IosIcon from 'react-native-vector-icons/Ionicons';
import styling from 'app/config/styling'; 
import style from '../style';
import illustration from '../../../../assets/images/signup.png';


class SignUp extends Component {

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
			emailHint: '',
			password: '',
			passwordHint: 'Use a password at least 6 characters long for security.',
			passwordIsHidden: true,
			errors: {},
		};
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {email, password, passwordIsHidden, emailHint, passwordHint} = this.state;
		const {navigation} = this.props;

		return (
			<View>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
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
									placeholderTextColor="black"
									selectionColor="black"
									textColor="black"
									iconName="envelope"
									placeholder="Enter your email"
									keyboardType="email-address"
									returnKeyType="done"
									value={email}
									onChangeText={(email) => this.setState({email})}
									hint={emailHint}
								/>
							</View>
							<View style={[style.inputContainer]}>
								<Input
									iconColor="black"
									backgroundColor="rgba(0, 0, 0, 0.05)"
									placeholderTextColor="black"
									selectionColor="black"
									textColor="black"
									iconName="lock"
									secureTextEntry={passwordIsHidden}
									placeholder="Enter your password"
									returnKeyType="done"
									value={password}
									onChangeText={(password) => this.setState({password})}
									hint={passwordHint}
								/>
							</View>
							<View style={[style.submitContainer, style.actionButtonContainer]}>
								<RoundedButton
									style={[style.submitButton]}
									inverted={true}
									text="Continue"
									onPress={() => navigation.navigate('SignUpStep2')}
								/>
							</View>
						</View>
						<View style={{flex: 3}} />
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

export default SignUp;