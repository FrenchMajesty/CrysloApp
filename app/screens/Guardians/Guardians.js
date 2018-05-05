import React, { Component } from 'react';
import { ScrollView, View, Switch, Text } from 'react-native';
import Header from 'app/components/Header/';
import Slider from 'app/components/common/Slider/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import styling from 'app/config/styling';
import style from './style';

export default class Guardians extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.renderAlerts = this.renderAlerts.bind(this);
		this.renderBloodPressure = this.renderBloodPressure.bind(this);
	}

	/**
	 * Get the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			notifyMe: false,
			notifySOS: true,
			bloodMin: 85,
			bloodMax: 105,
		};
	}

	/**
	 * Render the alert section of the form
	 * @return {ReactElement}
	 */
	renderAlerts() {
		const {notifyMe, notifySOS, notifyWeCare} = this.state;
		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Alerts</Text>
				<View style={[style.alertOption]}>
					<Switch
						onTintColor={styling.mainColor}
						onValueChange={() => this.setState({notifyMe: !notifyMe})}
						value={notifyMe}
					/>
					<Text style={[styling.text.prop.light, style.alertText]}>Notify me</Text>
				</View>
				<View style={[style.alertOption]}>
					<Switch
						onTintColor={styling.mainColor}
						onValueChange={() => this.setState({notifySOS: !notifySOS})}
						value={notifySOS}
					/>
					<Text style={[styling.text.prop.light, style.alertText]}>Notify my emergency contacts</Text>
				</View>
			</View>
		);
	}

	/**
	 * Render the blood pressure section of the form
	 * @return {ReactElement} 
	 */
	renderBloodPressure() {
		const {bloodMin, bloodMax} = this.state;

		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Blood Pressure</Text>
				
				<Text style={[styling.text.prop.light, style.sectionSubtitle]}>Systollic</Text>
				<View style={[style.sliderContainer]}>	
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{bloodMin}</Text>
						<Slider 
							label="Minimum"
							minimumValue={80}
							maximumValue={120}
							step={5}
							value={bloodMin}
							onValueChange={(newVal) => this.setState({bloodMin: newVal})}
							style={{flex: 1}}
						/>
					</View>
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{bloodMax}</Text>
						<Slider 
							label="Maximum"
							minimumValue={100}
							maximumValue={160}
							step={5}
							value={bloodMax}
							onValueChange={(newVal) => this.setState({bloodMax: newVal})}
							style={{flex: 1}}
						/>
					</View>
				</View>
			</View>
		);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {rootNavigation} = this.props.screenProps;
		return (
			<View style={[styling.container, styling.grayScreenBackground]}>
				<View style={{backgroundColor: '#fff', height: 140, marginBottom: 23}}>
					<Header
						navigation={rootNavigation}
						title="Guardians"
						color={styling.black}
						hint="Guardians helps you set notifications if your health indicators are outside of their normal range."
						elevated={true}
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>
				<ScrollView style={[styling.screenPadding]}>
					{this.renderAlerts()}
					{this.renderBloodPressure()}

					<View style={[style.buttonContainer]}>
						<RoundedButton
							text="Save Changes"
							inverted={true}
							center={true}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
};