import React from 'react';
import { View, Text } from 'react-native';
import distanceInWords from 'date-fns/distance_in_words';
import Card from 'app/components/common/Card';
import style from './style';

export default class VitalCard extends React.Component {

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {children, item, onPress} = this.props
		return (
			<Card card={style.card} body={style.body} onPress={onPress}>
				<Text style={style.name}>{item.name}</Text>
				<View style={style.logo} />
				<Text style={style.vitalValue}>{item.value} Peanuts</Text>
				<Text style={style.date}>{distanceInWords(item.lastReading, new Date())} ago</Text>
			</Card>
		);
	}
}