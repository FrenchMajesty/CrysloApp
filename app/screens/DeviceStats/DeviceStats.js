import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator as Spinner } from 'react-native';
import Header from 'app/components/Header/';
import Button from 'app/components/common/Button/RectangularButton/';
import StatsRow from 'app/components/DeviceStats/StatsRow/';
import Icon from 'react-native-vector-icons/FontAwesome';
import styling from 'app/config/styling';
import style from './style';

class DeviceStats extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onConnect = this.onConnect.bind(this);
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			searching: false,
		};
	}

	/**
	 * When the button is pressed, search for the Helo watch device
	 * @return {Void} 
	 */
	onConnect() {
		this.setState({searching: true});

		setTimeout(() => {
			this.setState({searching: false});
		}, 1000);
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {searching} = this.state;
		const {navigation} = this.props;

		return (
			<View style={[styling.statusBarPadding, style.container]}>
				<Header 
					title="Your Device"
					style={{flex: 0, marginBottom: 20}}
					navigation={navigation}
				/>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
				<View style={{backgroundColor: 'red', width: 200, height: 200, alignSelf: 'center'}} />

				<Text style={[styling.text.prop.heavy, style.title]}>Helo LX</Text>

				<View style={[style.rowContainer]}>
					<StatsRow
						label="Bluetooth"
						content="The Bluetooth is connected."
						icon={<Icon name="bluetooth-b" color="blue" size={30} />}
					/>
					<StatsRow
						label="Battery"
						content="Your battery level is at 86%."
						icon={<Icon name="battery-3" color="lightgreen" size={30} />}
					/>
					<StatsRow
						label="Location"
						content="Your GPS location is not activated."
						hint="Please allow Cryslo to have access to your location, or else the WeCare feature won't work as planned."
						icon={<Icon name="map-marker" color="gray" size={35} />}
						button={<Button text="Fix now" onPress={() => alert('Ask access to GPS location.')} />}
						depth={2}
						animation={{
							animation: 'pulse',
							delay: 200,
							duration: 1000,
							iterationCount: 'infinite',
							easing: 'ease-in-out',
						}}
					/>
				</View>
				</ScrollView>
			</View>
		);
	}
}

export default DeviceStats;