import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class WeCare extends Component {

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
			<View>
				<Text>Hey man! this is the WeCare view screen of the app..</Text>
			</View>
		)
	}
}