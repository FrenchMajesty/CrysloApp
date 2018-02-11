import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styling from 'app/config/styling'

export default class Guardians extends Component {

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		return (
			<View style={styling.statusBarPadding}>
				<Text>This is the guardians screen.</Text>
			</View>
		)
	}
}