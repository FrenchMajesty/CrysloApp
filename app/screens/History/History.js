import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styling from 'app/config/styling'

export default class History extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		return (
			<View style={[styling.statusBarPadding, {flex: 1}]}>
				<Text>Welcome to the history screen... Stop looking at the past and worry for the future :)</Text>
			</View>
		)
	}
}