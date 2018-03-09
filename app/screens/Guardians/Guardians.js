import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from 'app/components/Header/';
import styling from 'app/config/styling';

export default class Guardians extends Component {

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
		const {rootNavigation} = this.props.screenProps;

		return (
			<ScrollView style={[styling.container]}>
				<Header
					navigation={rootNavigation}
					title="Guardians"
					hint="This is where you can update your parameters for your Helo watch."
					elevated={true}
					style={{flex: 2}}
				/>
				<View style={[styling.screenPadding]}>
					<Text>This is the guardians screen.</Text>
				</View>
			</ScrollView>
		);
	}
};