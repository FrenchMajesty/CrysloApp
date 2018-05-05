import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import ContactList from 'app/components/WeCare/ContactList/';
import style from './style';
import styling from 'app/config/styling';

export default class WeCare extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.openContactDetails = this.openContactDetails.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			contacts: [
				{
					id: 2,
					name: 'John Dope',
					number: '+1 (123)-444-3309',
				},
				{
					id: 3,
					name: 'Marie Antoinette',
					number: '+33 7 33 78 56 29',
				},
			]
		};
	}

	/**
	 * Open the contact's details screen
	 * @param {number} contactId Contact's ID
	 * @return {Void} 
	 */
	openContactDetails(contactId) {
		const {navigation} = this.props;
		const contact = this.state.contacts.find(contact => contact.id == contactId);

		navigation.navigate('ContactDetails', {contact, mode: 'update'});
	}

	/**
	 * Render the button to add additional emergency contacts
	 * @return {ReactElement} 
	 */
	renderAddButton() {
		const {navigation} = this.props;
		const {contacts} = this.state;

		const text = () => {
			if(contacts.length >= 3) {
				return 'You have reached the limit';
			}

			return `Add ${3-contacts.length} more`;
		}

		return (
			<Button
				text={text()}
				style={{width: '70%'}}
				disabled={contacts.length >= 3}
				onPress={() => navigation.navigate('ContactDetails', {mode: 'add'})}
			/>
		);
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {rootNavigation} = this.props.screenProps;
		const {contacts} = this.state;

		return (
			<View style={[styling.grayScreenBackground]}>
				<View style={{backgroundColor: '#fff', height: 140}}>
					<Header
						navigation={rootNavigation}
						title="WeCare"
						color={styling.black}
						hint="These contacts are the people we are going to notify via text or call if your vitals go into your danger zone or if you press the panic button."
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>
				<ScrollView style={[style.screenPadding, style.listContainer]}>
					<ContactList 
						data={contacts} 
						onItemPress={this.openContactDetails}
					/>
					<View style={[style.buttonStyle]}>
						{this.renderAddButton()}
					</View>
				</ScrollView>
			</View>
		);
	}
};