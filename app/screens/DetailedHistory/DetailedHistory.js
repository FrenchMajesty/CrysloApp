import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconButton from 'app/components/common/Button/IconButton/';

export default class DetailedHistry extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Render the component
	 * @return {ReactElement} markup
	 */
	render() {
		const {vital} = this.props.navigation.state.params;
		const {navigation} = this.props;
		return (
			<View>
				<Text>This is the screen to view more about your vitals and stuff hehe..</Text>
				<Text>{vital ? vital : 'No vital! :( Que paso?'}</Text>
				<IconButton 
					icon="arrow-left"
					onPress={() => navigation.goBack(null)}
				/>
			</View>
		);
	}
};