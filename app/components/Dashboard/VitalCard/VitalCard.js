import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { shape, oneOfType, func, number, string, node } from 'prop-types';
import distanceInWords from 'date-fns/distance_in_words';
import Card from 'app/components/common/Card/';
import FadeInView from 'app/container/FadeInView/';
import style from './style';

class VitalCard extends Component {

	static propTypes = {
		item: shape({
			name: string.isRequired,
			value: oneOfType([string, number]).isRequired,
			measure: string.isRequired,
			lastReading: oneOfType([string, number]).isRequired,
		}).isRequired, 
		//icon: shape({uri: string.isRequired}).isRequired,
		icon: node.isRequired,
		fadeInDuration: number,
		delay: number,
		onPress: func,
	};

	static defaultProps = {
		fadeInDuration: 0,
		delay: 0,
		onPress: null,
	};

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.timer = this.timer.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			time: null,
			intervalId: null,
		};
	}

	/**
	 * Set the time value and create the time updating interval at every minute
	 */
	componentWillMount() {
		const {item: {lastReading}, icon: {uri: url}} = this.props;

		if(lastReading) {
			const time = distanceInWords(lastReading, new Date());
			const intervalId = setInterval(this.timer, 1000 * 60);

			this.setState({time, intervalId});
		}

		//Image.prefetch(url);
	}

	/**
	 * Set the time value and create the time updating interval at every minute
	 */
	componentWillReceiveProps({item: {lastReading}}) {
		const {intervalId} = this.state;

		if(!intervalId && lastReading) {
			const time = distanceInWords(lastReading, new Date());
			const newIntervalId = setInterval(this.timer, 1000 * 60);
			clearInterval(intervalId);

			this.setState({time, intervalId: newIntervalId});
		}
	}

	/**
	 * Clear the interval timer created at the mounting of the component
	 */
	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	/**
	 * On Interval loop, update the time in the state
	 * @return {Void} 
	 */
	timer() {
		const {lastReading} = this.props.item;
		this.setState({time: distanceInWords(lastReading, new Date())});
	}

	/**
	 * Render the component markup
	 * @return {ReactElement} 
	 */
	render() {
		const {item, onPress, icon, fadeInDuration, delay} = this.props;
		const {time} = this.state;

		return (
			<FadeInView duration={fadeInDuration} delay={delay}>
				<Card card={[style.card]} body={[style.body]} onPress={onPress}>
					<Text style={style.name}>{item.name}</Text>
					<View style={style.logoContainer}>
						<Image style={style.logo} source={icon} />
					</View>
					<Text style={style.vitalValue}>{item.value} {item.measure}</Text>
					<Text style={style.date}>{time} ago</Text>
				</Card>
			</FadeInView>
		);
	}
}

export default VitalCard;