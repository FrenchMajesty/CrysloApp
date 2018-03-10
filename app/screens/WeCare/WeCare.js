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
	}

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
	 * Render the button to add additional emergency contacts
	 * @return {ReactElement} 
	 */
	renderAddButton() {
		const {contacts} = this.state;

		if(contacts.length >= 3) {
			return (
				<Button
					text="You have reached the limit"
					style={{width: '70%'}}
					disabled={true}
				/>
			);
		}

		return (
			<Button
				text={`Add ${3-contacts.length} more`}
				style={{width: '70%'}}
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
			<View style={[styling.container, styling.grayScreenBackground]}>
				<View style={{backgroundColor: '#fff', height: 140}}>
					<Header
						navigation={rootNavigation}
						title="WeCare"
						color={styling.black}
						hint="These contacts are the people we are going to notify via text or call if your vitals go into your danger zone."
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>
				<ScrollView style={[style.screenPadding, style.listContainer]}>
					<ContactList 
						data={contacts} 
					/>
					<View style={[style.buttonStyle]}>
						{this.renderAddButton()}
					</View>
				</ScrollView>
			</View>
		);
	}
};