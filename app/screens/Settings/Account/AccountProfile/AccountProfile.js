import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator as Spinner } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import Input from 'app/components/common/Input/TextInput/';
import styling from 'app/config/styling';
import style from '../style';

class AccountProfile extends Component {

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
			email: 'awesome@cryslo.com',
			firstname: 'Verdi',
			lastname: 'Kapuku',
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
		const {email, firstname, lastname, isSubmitting} = this.state;

		return (
			<View style={[styling.container, styling.grayScreenBackground, {height: '100%'}]}>
				<View style={{backgroundColor: '#fff', height: 140}}>
					<Header
						navigation={navigation}
						showBackButton={true}
						title="Account Settings"
						color={styling.black}
						hint="This is your personal profile. Your health information is private and only visible to you and authorized members."
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
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
								label="First Name"
								placeholder="Enter your first name"
								returnKeyType="done"
								value={firstname}
								onChangeText={(firstname) => this.setState({firstname})}
							/>
						</View>	
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								label="Last Name"
								placeholder="Enter your last name"
								returnKeyType="done"
								value={lastname}
								onChangeText={(lastname) => this.setState({lastname})}
							/>
						</View>	
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								label="Email"
								placeholder="Enter your email"
								keyboardType="email-address"
								returnKeyType="done"
								value={email}
								onChangeText={(email) => this.setState({email})}
							/>
						</View>
					</View>
					<View style={[style.buttonStyle]}>
						{isSubmitting ? 
							<Button style={{width: '70%'}}>
								<Spinner color={styling.mainColor} />
							</Button>
						:
							<Button
								text="Update my account"
								style={{width: '70%'}}
								onPress={this.onSubmit}
							/>
						}
					</View>
				</KeyboardAwareScrollView>
			</View>
		);
	}
};

export default AccountProfile;