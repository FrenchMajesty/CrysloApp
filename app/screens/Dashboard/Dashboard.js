import React, { Component } from 'react'
import { View } from 'react-native'
import VitalCard from './components/VitalCard/'
import styling from '../../config/styling'
import style from './style'

export default class Home extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)

		this.state = this.getInitialState()
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} Initial state
	 */
	getInitialState() {
		return {
			vitals: [
				{
					type: 'heart',
					name: 'Heart Pulse',
					value: 75,
					date: '32 Minutes Ago'
				},
				{
					type: 'breath',
					name: 'Breaths Rate',
					value: 23,
					date: '10 Minutes Ago'
				},
			]
		}
	}

	renderCard(item, i) {
		return (
			<VitalCard key={i} item={item} />
		)
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {vitals} = this.state
		return (
			<View>
				<View style={{flex: 1}} />
		        <View style={[style.list]}>
		        	{vitals.map(this.renderCard)}
		        </View>
		        <View style={{flex: 1}} />
			</View>
		)
	}
}