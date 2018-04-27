import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import IconButton from 'app/components/common/Button/IconButton/';
import styling from 'app/config/styling'; 
import style from '../style';

class SignUp extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this._onSubmit = this._onSubmit.bind(this);
	}

	/**
	 * Return the initial state of the screen component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			password: '',
			repeated: '',
			isSubmitting: false,
		};
	}

	/**
	 * When the form is submitted send the data to the API for updating the password
	 * @return {Void} 
	 */
	_onSubmit() {
		this.setState({isSubmitting: true});

		setTimeout(() => {
			this.setState({isSubmitting: false});
			// make api calls to set new password then redirect to dashboard...
		}, 1000);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {password ,repeated, isSubmitting} = this.state;
		const {navigation} = this.props;

		return (
			<View style={[styling.statusBarPadding]}>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.navigate('Login')}
				/>
				<KeyboardAwareScrollView
				    resetScrollToCoords={{ x: 0, y: 0 }}
					showsVerticalScrollIndicator={false}
				    scrollEnabled={true}
				>	
					<View style={{marginTop: 40, marginBottom: 30}}>
						<Text style={[style.text, style.title]}>Reset your password</Text>
						<Text style={[style.text, style.subtitle]}>and create a new one.</Text>
					</View>
					<View style={[style.screenPadding, style.formContainer, {flex: 3}]}>
						<View style={[style.inputContainer]}>
							<Input
								iconColor="black"
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								iconName="lock"
								secureTextEntry={true}
								placeholder="Enter your new password"
								returnKeyType="done"
								value={password}
								onChangeText={(password) => this.setState({password})}
								hint="Make sure your password is at least 6 characters long for security."
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
								secureTextEntry={true}
								placeholder="Repeat your new password"
								returnKeyType="done"
								value={repeated}
								onChangeText={(repeated) => this.setState({repeated})}
							/>
						</View>
						<View style={[style.submitContainer, style.actionButtonContainer]}>
							{isSubmitting ? 
								(<RoundedButton style={[style.submitButton]} inverted={true}>
									<ActivityIndicator size="small" color="#fff" />
								</RoundedButton>) 
							:  
								(<RoundedButton
									style={[style.submitButton]}
									inverted={true}
									text="Reset my password"
									onPress={this._onSubmit} />)
							}
						</View>
					</View>
					<View style={{flex: 3}} />
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

export default connect(null)(SignUp);