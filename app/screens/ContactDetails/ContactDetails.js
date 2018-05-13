import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator as Spinner } from 'react-native';
import { connect } from 'react-redux';
import BtnIcon from 'react-native-vector-icons/MaterialIcons';
import WeCareAction from 'app/store/actions/wecare';
import PhoneNumber from 'awesome-phonenumber';
import Header from 'app/components/Header/';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from 'app/components/common/Input/TextInput/';
import Button from 'app/components/common/Button/RectangularButton/';
import isEqual from 'app/lib/form/equality';
import styling from 'app/config/styling';
import style from './style';

import { addWeCareContact } from 'app/lib/api';

class ContactDetails extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onCreate = this.onCreate.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.navigateBack = this.navigateBack.bind(this);
		this.renderEditButtons = this.renderEditButtons.bind(this);
		this.renderCreateButton = this.renderCreateButton.bind(this);
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			id: null,
			name: '',
			number: '',
			buttonIndicator: null,
			deleteBtnIndicator: null,
			errors: {},
		};
	}

	/**
	 * Transfer the person's contact info from prop to the state for editing
	 */
	componentWillMount() {
		const {contact} = this.props.navigation.state.params;

		if(contact) {
			const {id, name, number} = contact;
			this.setState({id, name, number});
		}
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
	 * Send the form fields to the API for insertion
	 * @return {Void} 
	 */
	onCreate() {
		this.setState({
			buttonIndicator: <Spinner color="#fff" />,
		});

		const {name, number} = this.state;
		addWeCareContact({name, number}).then(({data: {id}}) => {

			this.setState({
				buttonIndicator: <BtnIcon name="check" color="#fff" size={30} style={{margin: -5}} />,
			});

			this.props.addNewContact({id, name, number});
			this.navigateBack();
		})
		.catch(({response: {data}}) => this.setState({errors: data[0]}));
	}

	/**
	 * On submit, update that person contact's information
	 * @return {Void} 
	 */
	onUpdate() {
		this.setState({
			buttonIndicator: <Spinner color="#fff" />,
		});

		setTimeout(() => { 
			const {navigation} = this.props;

			this.props.updateContact({id, name, number});

			this.setState({
				buttonIndicator: <BtnIcon name="check" color="#fff" size={30} style={{margin: -5}} />,
			});

			this.navigateBack();
		}, 1000);
	}

	/**
	 * On delete, get confirmation and remove that person as an emergency contact
	 * @return {Void} 
	 */
	onDelete() {
		this.setState({
			deleteBtnIndicator: <Spinner color="red" />,
		});

		setTimeout(() => { 
			const {id} = this.state;
			const {navigation} = this.props;
			
			this.props.deleteContact(id);
			this.setState({deleteBtnIndicator: null});
			this.navigateBack();
		}, 1000);
	}

	/**
	 * Wait about a second before navigating back to the previous screen
	 * @return {Void} 
	 */
	navigateBack() {
		setTimeout(() => this.props.navigation.pop(), 700);
	}

	/**
	 * Render the buttons when editing a person's contact informations
	 * @return {ReactElement} 
	 */
	renderEditButtons() {
		const {buttonIndicator, deleteBtnIndicator} = this.state;

		return (
			<View style={[style.buttonStyle]}>
				{buttonIndicator ? 
					<Button inverted style={{width: '80%'}}>
						{buttonIndicator}
					</Button>
				:
					<Button
						inverted
						text="Update this contact"
						style={{width: '80%'}}
						onPress={this.onUpdate}
					/>
				}

				{deleteBtnIndicator ?
					<Button 
						color="red" 
						style={{width: '80%', marginTop: 20}} 
					>{deleteBtnIndicator}</Button>
				:
					<Button 
						color="red" 
						style={{width: '80%', marginTop: 20}} 
						onPress={this.onDelete}
					>
						<Icon name="trash" color="red" size={19} />
					</Button>
				}
			</View>
		);
	}

	/**
	 * Render the button for submitting when adding a new WeCare contact person
	 * @return {ReactElement} 
	 */
	renderCreateButton() {
		const {buttonIndicator} = this.state;
		
		return (
			<View style={[style.buttonStyle]}>
				{buttonIndicator ? 
					<Button inverted style={{width: '80%'}}>
						{buttonIndicator}
					</Button>
				: 
					<Button
						inverted
						text="Add this new contact"
						style={{width: '80%'}}
						onPress={this.onCreate}
					/>
				}
			</View>
		);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {name, number, errors} = this.state;
		const {navigation} = this.props;
		const {mode} = navigation.state.params;
		const formattedNum = new PhoneNumber(number, 'US').getNumber('national');
		const numberHint = 'Only valid U.S. numbers are supported for now.';
		
		return (
			<View>
				<View style={{backgroundColor: '#fff', height: 30}}>
					<Header
						navigation={navigation}
						showBackButton={true}
						title="WeCare Contact"
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>
				<ScrollView style={[styling.screenPadding, style.content]}>
					<View style={[style.formContainer]}>
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								label="Name"
								placeholder="Enter your contact's name"
								returnKeyType="done"
								value={name}
								onChangeText={(name) => this.setState({name})}
								hasError={errors.field == 'name'}
								hint={errors.field == 'name' ? errors.message : null}
							/>
						</View>	
						<View style={[style.inputContainer]}>
							<Input
								backgroundColor="rgba(0, 0, 0, 0.05)"
								placeholderTextColor="black"
								selectionColor="black"
								textColor="black"
								label="Phone Number"
								placeholder={(name.length > 0 ? `Enter ${name}'s` : 'Enter your contact\'s') + ' phone number'}
								returnKeyType="done"
								keyboardType="numeric"
								value={formattedNum}
								onChangeText={(number) => this.setState({number})}
								hasError={errors.field == 'number'}
								hint={errors.field == 'number' ? errors.message : numberHint}
							/>
						</View>

						{mode == 'update' ?
							this.renderEditButtons()
						:
							this.renderCreateButton()
						}
					</View>
				</ScrollView>
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
	addNewContact: (details) => {
		dispatch(WeCareAction.addNewContact(details));
	},
	updateContact: (details) => {
		dispatch(WeCareAction.updateContact(details));
	},
	deleteContact: (id) => {
		dispatch(WeCareAction.deleteContact(id));
	},
});

export default connect(null, mapDispatchToProps)(ContactDetails);