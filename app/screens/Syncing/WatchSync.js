import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styling from 'app/config/styling'

export default class WatchSync extends Component {
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
			<View style={styling.statusBarPadding}>
				<Text>Connect your freaking Bluetooth watch man</Text>
			</View>
		)
	}
}