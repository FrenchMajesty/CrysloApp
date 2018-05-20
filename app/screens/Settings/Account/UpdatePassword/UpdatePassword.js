import React, { Component } from 'react';
import { View, Text, ActivityIndicator as Spinner } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import Input from 'app/components/common/Input/TextInput/';
import styling from 'app/config/styling';
import style from '../style';

class UpdatePassword extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSubmit = this.onSubmit.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			currentPassword: '',
			repeatPassword: '',
			newPassword: '',
			isSubmitting: false,
		};
	}

	/**
	 * When the form is submitted, send the new user's profile info to the server
	 * @return {Void} 
	 */
	onSubmit() {
		this.setState({isSubmitting: true});

		setTimeout(() => {
			this.setState({isSubmitting: false});
		}, 1000);
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {navigation} = this.props;
		const {currentPassword, newPassword, repeatPassword, isSubmitting} = this.state;

		return (
			<View style={[styling.container, styling.grayScreenBackground, {height: '100%'}]}>
				<View style={{backgroundColor: '#fff', height: 90}}>
					<Header
						navigation={navigation}
						showBackButton={true}
						title="Account Password"
						elevated={true}
						style={[{flex: 2, position: 'absolute'}]}
					/>
				</View>
				<KeyboardAwareScrollView
					style={[style.screenPadding, style.listContainer, {height: null}]}
				    resetScrollToCoords={{ x: 0, y: 0 }}
					showsVerticalScrollIndicator={false}
				    scrollEnabled={true}
				>
					<View style={[style.formContainer, {flex: 3}]}>
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								secureTextEntry={true}
								label="Current Password"
								placeholder="Enter your current password"
								returnKeyType="done"
								value={currentPassword}
								onChangeText={(currentPassword) => this.setState({currentPassword})}
							/>
						</View>	
						<View style={[style.inputContainer, {marginTop: 30}]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								secureTextEntry={true}
								label="New Password"
								placeholder="Enter your new password"
								hint="Make sure that your new password is at least 6 characters long for security."
								returnKeyType="done"
								value={newPassword}
								onChangeText={(newPassword) => this.setState({newPassword})}
							/>
						</View>	
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								secureTextEntry={true}
								label="Repeat New Password"
								placeholder="Confirm your new password"
								keyboardType="email-address"
								returnKeyType="done"
								value={repeatPassword}
								onChangeText={(repeatPassword) => this.setState({repeatPassword})}
							/>
						</View>
					</View>
					<View style={[style.buttonStyle]}>
						{isSubmitting ? 
							<Button style={[{width: '70%'}]}>
								<Spinner color={styling.mainColor} />
							</Button>
						:
							<Button
								text="Update my password"
								style={[{width: '70%'}]}
								onPress={this.onSubmit}
							/>
						}
					</View>
				</KeyboardAwareScrollView>
			</View>
		);
	}
};

export default UpdatePassword;