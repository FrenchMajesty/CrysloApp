import React, { Component } from 'react';
import { ScrollView, View, Switch, Text, ActivityIndicator as Spinner } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from 'app/components/Header/';
import Slider from 'app/components/common/Slider/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import ProfileAction from 'app/store/actions/profile';
import isEqual from 'app/lib/form/equality';
import styling from 'app/config/styling';
import style from './style';

import { updateGuardiansConfigs } from 'app/lib/api';

class Guardians extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSave = this.onSave.bind(this);
		this.renderAlertsSettings = this.renderAlertsSettings.bind(this);
		this.renderHeartSettings = this.renderHeartSettings.bind(this);
		this.renderBreathSettings = this.renderBreathSettings.bind(this);
	}

	/**
	 * Get the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			notify_self: null,
			notify_wecare: null,
			heart_min: null,
			heart_max: null,
			breath_min: null,
			breath_max: null,
			isSubmitting: false,
			buttonIndicator: null,
		};
	}

	/**
	 * Transfer the guardians data from props to the component's state for modification
	 */
	componentWillMount() {
		const {notify, configs} = this.props.guardians;

		this.setState({
			notify_self: notify.self,
			notify_wecare: notify.wecare,
			heart_min: configs.heart.min,
			heart_max: configs.heart.max,
			breath_min: configs.breath.min,
			breath_max: configs.breath.max,
		});
	}

	/**
	 * Reset the button indicator based on component's state change
	 * @param  {Object} nextProps The new props
	 * @param  {Object} nextState The next state
	 */
	shouldComponentUpdate(nextProps, nextState) {
		const newState2 = Object.assign({}, nextState);
		const currentState = Object.assign({}, this.state);
		delete newState2.buttonIndicator;
		delete currentState.buttonIndicator;

		if(nextState.buttonIndicator && ! isEqual(newState2, currentState)) {
			this.setState({
				...nextState,
				buttonIndicator: null,
			});
		}

		return true;
	}

	/**
	 * When the button is pressed, submit the new configs to the server
	 * @return {Void} 
	 */
	onSave() {
		this.setState({
			buttonIndicator: <Spinner color="#fff" />,
		});

		const {notify_self, notify_wecare, heart_min, heart_max, breath_min, breath_max} = this.state;
		const config = {
			notify_self,
			notify_wecare,
			heart_min,
			heart_max,
			breath_min,
			breath_max,
		};

		updateGuardiansConfigs(config).then(() => {
			this.setState({
				buttonIndicator: <Icon name="check" color="#fff" size={30} style={{margin: -5}} />,
			});

			this.props.updateGuardiansConfigs({
				notify: {
					self: this.state.notify_self,
					wecare: this.state.notify_wecare,
				},
				configs: {
					heart: {
						min: this.state.heart_min,
						max: this.state.heart_max,
					},
				}
			});
		})
		.catch(({response}) => console.log(response));
	}

	/**
	 * Render the alert section of the form
	 * @return {ReactElement}
	 */
	renderAlertsSettings() {
		const {notify_self, notify_wecare} = this.state;
		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Alerts</Text>
				<View style={[style.alertOption]}>
					<Switch
						onTintColor={styling.mainColor}
						onValueChange={() => this.setState({notify_self: !notify_self})}
						value={notify_self}
					/>
					<Text style={[styling.text.prop.light, style.alertText]}>Notify me</Text>
				</View>
				<View style={[style.alertOption]}>
					<Switch
						onTintColor={styling.mainColor}
						onValueChange={() => this.setState({notify_wecare: !notify_wecare})}
						value={notify_wecare}
					/>
					<Text style={[styling.text.prop.light, style.alertText]}>Notify my emergency contacts</Text>
				</View>
			</View>
		);
	}

	/**
	 * Render the heartbeat's section of the form
	 * @return {ReactElement} 
	 */
	renderHeartSettings() {
		const {heart_min, heart_max} = this.state;

		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Heart Beat</Text>
				
				{/*<Text style={[styling.text.prop.light, style.sectionSubtitle]}>Systollic</Text>*/}
				<View style={[style.sliderContainer]}>	
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{heart_min}</Text>
						<Slider 
							label="Minimum"
							minimumValue={30}
							maximumValue={80}
							step={5}
							value={heart_min}
							onValueChange={(newVal) => this.setState({heart_min: newVal})}
							style={[{flex: 1}]}
						/>
					</View>
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{heart_max}</Text>
						<Slider 
							label="Maximum"
							minimumValue={60}
							maximumValue={180}
							step={5}
							value={heart_max}
							onValueChange={(newVal) => this.setState({heart_max: newVal})}
							style={[{flex: 1}]}
						/>
					</View>
				</View>
			</View>
		);
	}

	/**
	 * Render the breathing rate's section of the form
	 * @return {ReactElement} 
	 */
	renderBreathSettings() {
		const {breath_min, breath_max} = this.state;

		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Breathing Rate</Text>
				
				<View style={[style.sliderContainer]}>	
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{breath_min}</Text>
						<Slider 
							label="Minimum"
							minimumValue={10}
							maximumValue={30}
							step={2}
							value={breath_min}
							onValueChange={(newVal) => this.setState({breath_min: newVal})}
							style={[{flex: 1}]}
						/>
					</View>
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{breath_max}</Text>
						<Slider 
							label="Maximum"
							minimumValue={20}
							maximumValue={50}
							step={2}
							value={breath_max}
							onValueChange={(newVal) => this.setState({breath_max: newVal})}
							style={[{flex: 1}]}
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
		const {buttonIndicator} = this.state;
		const {rootNavigation} = this.props.screenProps;

		return (
			<View style={[styling.container, styling.grayScreenBackground]}>
				<View style={{backgroundColor: '#fff', height: 140, marginBottom: 23}}>
					<Header
						navigation={rootNavigation}
						title="Guardians"
						hint="Guardians helps you set notifications if your health indicators are outside of their normal range."
						elevated={true}
						style={[{flex: 2, position: 'absolute'}]}
					/>
				</View>

				<ScrollView style={[styling.screenPadding]}>
					{this.renderAlertsSettings()}
					{this.renderHeartSettings()}
					{this.renderBreathSettings()}

					<View style={[style.buttonContainer]}>
						{buttonIndicator ?
							<RoundedButton
								inverted={true}
								center={true}
							>{buttonIndicator}</RoundedButton>
						:
							<RoundedButton
								text="Save Changes"
								inverted={true}
								center={true}
								onPress={this.onSave}
							/>	
						}
					</View>
				</ScrollView>
			</View>
		);
	}
};

/**
 * Map the redux store's state to the component's props
 * @param  {Object} options.profile.guardians Tree of the Guardians settings
 * @return {Object}                  
 */
const mapStateToProps = ({profile: {guardians}}) => ({
		guardians,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	updateGuardiansConfigs: (newConfigs) => {
		dispatch(ProfileAction.updateGuardiansConfigs(newConfigs));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Guardians);