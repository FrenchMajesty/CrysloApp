import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator as Spinner } from 'react-native';
import PhoneNumber from 'awesome-phonenumber';
import Header from 'app/components/Header/';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from 'app/components/common/Input/TextInput/';
import Button from 'app/components/common/Button/RectangularButton/';
import styling from 'app/config/styling';
import style from './style';

export default class ContactDetails extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
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
			isSubmitting: false,
		};
	}

	/**
	 * Transfer the person's contact information from prop to th state for editing
	 */
	componentWillMount() {
		const {id, name, number} = this.props.navigation.state.params.contact;
		this.setState({id, name, number});
	}

	/**
	 * On submit, update that person contact's information
	 * @return {Void} 
	 */
	onUpdate() {
		this.setState({isSubmitting: true});

		setTimeout(() => { 
			this.setState({isSubmitting: false})
		}, 1000);
	}

	/**
	 * On delete, get confirmation and remove that person as an emergency contact
	 * @return {Void} 
	 */
	onDelete() {
		alert('Are you sure you want to delete this contact?');
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {name, number, isSubmitting} = this.state;
		const {navigation} = this.props;
		const formattedNum = new PhoneNumber(number, 'US').getNumber('national');

		return (
			<View>
				<View style={{backgroundColor: '#fff', height: 30}}>
					<Header
						navigation={navigation}
						showBackButton={true}
						title="WeCare Contact"
						color={styling.black}
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
								value={formattedNum}
								onChangeText={(number) => this.setState({number})}
							/>
						</View>
						<View style={[style.buttonStyle]}>
							{isSubmitting ? 
								<Button inverted style={{width: '80%'}}>
									<Spinner color="#fff" />
								</Button>
							:
								<Button
									inverted
									text="Update this contact"
									style={{width: '80%'}}
									onPress={this.onUpdate}
								/>
							}
							<Button 
								color="red" 
								style={{width: '80%', marginTop: 20}} 
								onPress={this.onDelete}
							>
								<Icon name="trash" color="red" size={19} />
							</Button>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}