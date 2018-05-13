import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import VerificationAction from 'app/store/actions/verifyNumber';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import IconButton from 'app/components/common/Button/IconButton/';
import styling from 'app/config/styling'; 
import style from '../style';

import { resetPassword } from 'app/lib/api';

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
			password: '',
			repeated: '',
			isSubmitting: false,
			errors: {},
		};
	}

	/**
	 * Send the new password data to the API for updating
	 * @return {Void} 
	 */
	onSubmit() {
		const {password, repeated: password_confirmation} = this.state;
		const {id} = this.props;
		this.setState({isSubmitting: true});

		resetPassword({id, password, password_confirmation}).then(() => {
			this.props.navigation.navigate('Login');
		})
		.catch(({response: {data}}) => this.setState({errors: data[0], isSubmitting: false}));
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {password ,repeated, isSubmitting, errors} = this.state;
		const {navigation} = this.props;
		const pwdHint = 'Make sure your password is at least 6 characters long for security.';
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
								hasError={errors.field ? true : false}
								hint={errors.message ? errors.message : pwdHint}
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
									onPress={this.onSubmit} />)
							}
						</View>
					</View>
					<View style={{flex: 3}} />
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {Object} store.verifyNumber.id The user's account ID
 * @return {Object}                  
 */
const mapStateToProps = ({verifyNumber: {id}}) => ({
		id,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	setUserId: (id) => {
		dispatch(VerificationAction.setUserId(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);