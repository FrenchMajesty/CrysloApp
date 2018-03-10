import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconButton from 'app/components/common/Button/IconButton/';
import Header from 'app/components/Header/';
import style from './style';
import styling from 'app/config/styling';

export default class ContactDetails extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {name} = this.props.navigation.state.params.contact;
		const {navigation} = this.props;

		return (
			<View style={[styling.container, styling.statusBarPadding, styling.screenPadding]}>
					<IconButton
						icon="arrow-left"
						style={{marginTop: 7}}
						onPress={() => navigation.goBack(null)}
					/>
				<Text>Contact Details screen... of {name}</Text>
			</View>
		);
	}
}