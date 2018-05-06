import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import CommonText from 'app/components/common/CommonText/';
import ContactList from 'app/components/WeCare/ContactList/';
import styling from 'app/config/styling';
import style from './style';

class WeCare extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.openContactDetails = this.openContactDetails.bind(this);
	}

	/**
	 * Open the contact's details screen
	 * @param {number} contactId Contact's ID
	 * @return {Void} 
	 */
	openContactDetails(contactId) {
		const {navigation, contacts: contactsList} = this.props;
		const contact = contactsList.find(contact => contact.id == contactId);

		navigation.navigate('ContactDetails', {contact, mode: 'update'});
	}

	/**
	 * Render the button to add additional emergency contacts
	 * @return {ReactElement} 
	 */
	renderAddButton() {
		const {navigation, contacts} = this.props;

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
		const {contacts} = this.props;

		return (
			<View style={[styling.grayScreenBackground]}>
				<View style={{backgroundColor: '#fff', height: 140}}>
					<Header
						navigation={rootNavigation}
						title="WeCare"
						hint="These contacts are the people we are going to notify via text or call if your vitals go into your danger zone or if you press the panic button."
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>
				<ScrollView style={[styling.screenPadding, style.listContainer]}>
					{contacts.length > 0 ?
					<ContactList 
						data={contacts} 
						onItemPress={this.openContactDetails}
					/>
					:
						<View style={{marginTop: 35, marginBottom: 35}}>
							<CommonText weight="heavy" style={{fontSize: 16, textAlign: 'center'}}>
								You have not added any emergency contacts to your account yet!
							</CommonText>
						</View>
					}
					<View style={[style.buttonStyle]}>
						{this.renderAddButton()}
					</View>
				</ScrollView>
			</View>
		);
	}
};

/**
 * Map the redux store's state to the component's props
 * @param  {Object} state.wecare.contacts The WeCare contacts list
 * @return {Object}                  
 */
const mapStateToProps = ({wecare: {contacts}}) => ({
		contacts,
});

export default connect(mapStateToProps, null)(WeCare);