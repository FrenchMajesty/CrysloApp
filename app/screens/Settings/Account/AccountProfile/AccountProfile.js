import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator as Spinner } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import Input from 'app/components/common/Input/TextInput/';
import ProfileAction from 'app/store/actions/profile';
import isEqual from 'app/lib/form/equality';
import styling from 'app/config/styling';
import style from '../style';

import { updateAccountProfile } from 'app/lib/api';

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
			email: '',
			firstname: '',
			lastname: '',
			buttonIndicator: null,
			errors: {},
		};
	}

	/**
	 * Transfer the account profile's data from the props to the component's state for editing
	 */
	componentWillMount() {
		const {firstname, lastname, email} = this.props.profile;
		this.setState({firstname, lastname, email});
	}

	/**
	 * Reset the button indicator based on component's state change
	 * @param  {Object} nextProps The new props
	 * @param  {Object} nextState The next state
	 */
	shouldComponentUpdate(nextProps, nextState) {
		const newState2 = Object.assign({}, nextState);
		const currentState = Object.assign({}, this.state);
		delete newState2.buttonIndicator;
		delete currentState.buttonIndicator;

		if(nextState.buttonIndicator && ! isEqual(newState2, currentState)) {
			this.setState({
				...nextState,
				buttonIndicator: null,
			});
		}

		return true;
	}

	/**
	 * When the form is submitted, send the new user's profile info to the server
	 * @return {Void} 
	 */
	onSubmit() {
		const {firstname, lastname, email} = this.state;
		const {id} = this.props.profile;

		this.setState({
			buttonIndicator: <Spinner color={styling.mainColor} />,
		});

		updateAccountProfile({id, firstname, lastname, email}).then(() => {
			this.setState({
				buttonIndicator: <Icon name="check" color={styling.mainColor} size={30} style={{margin: -5}} />
			});

			this.props.updateAccountProfile({
				name: `${firstname} ${lastname}`,
				firstname,
				lastname,
				email,
			});
		})
		.catch(({response: {data}}) => this.setState({errors: data[0], buttonIndicator: null}));
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {email, firstname, lastname, buttonIndicator, errors} = this.state;
		const {navigation} = this.props;

		return (
			<View style={[styling.container, styling.grayScreenBackground, {height: '100%'}]}>
				<View style={{backgroundColor: '#fff', height: 140}}>
					<Header
						navigation={navigation}
						showBackButton={true}
						title="Account Settings"
						hint="This is your personal profile. Your health information is private and only visible to you and authorized members."
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
								label="First Name"
								placeholder="Enter your first name"
								returnKeyType="done"
								value={firstname.replace(/[^A-Za-z\s-]+/gi,'')}
								onChangeText={(firstname) => this.setState({firstname})}
								hasError={errors.field == 'firstname'}
								hint={errors.field == 'firstname' ? errors.message : null}
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
								value={lastname.replace(/[^A-Za-z\s-]+/gi,'')}
								onChangeText={(lastname) => this.setState({lastname})}
								hasError={errors.field == 'lastname'}
								hint={errors.field == 'lastname' ? errors.message : null}
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
								hasError={errors.field == 'email'}
								hint={errors.field == 'email' ? errors.message : null}
							/>
						</View>
					</View>
					<View style={[style.buttonStyle]}>
						{buttonIndicator ? 
							<Button style={[{width: '70%'}]}>
								{buttonIndicator}
							</Button>
						:
							<Button
								text="Update my account"
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

/**
 * Map the redux store's state to the component's props
 * @param  {Object} options.profile.account.profile Tree of the account's profile
 * @return {Object}                  
 */
const mapStateToProps = ({profile: {account: {profile}}}) => ({
		profile,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	updateAccountProfile: (profile) => {
		dispatch(ProfileAction.updateAccountProfile(profile));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfile);