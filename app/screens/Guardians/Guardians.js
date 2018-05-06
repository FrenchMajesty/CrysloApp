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

class Guardians extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onSave = this.onSave.bind(this);
		this.renderAlerts = this.renderAlerts.bind(this);
		this.renderHeartSettings = this.renderHeartSettings.bind(this);
	}

	/**
	 * Get the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			notifyMe: null,
			notifyWeCare: null,
			heartMin: null,
			heartMax: null,
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
			notifyMe: notify.self,
			notifyWeCare: notify.wecare,
			heartMin: configs.heart.min,
			heartMax: configs.heart.max,
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

		setTimeout(() => {
			this.setState({
				buttonIndicator: <Icon name="check" color="#fff" size={30} style={{margin: -5}} />,
			});

			this.props.updateGuardiansConfigs({
				notify: {
					self: this.state.notifyMe,
					wecare: this.state.notifyWeCare,
				},
				configs: {
					heart: {
						min: this.state.heartMin,
						max: this.state.heartMax,
					},
				}
			});
		}, 1000);
	}

	/**
	 * Render the alert section of the form
	 * @return {ReactElement}
	 */
	renderAlerts() {
		const {notifyMe, notifyWeCare} = this.state;
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
						onValueChange={() => this.setState({notifyWeCare: !notifyWeCare})}
						value={notifyWeCare}
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
		const {heartMin, heartMax} = this.state;

		return (
			<View>
				<Text style={[styling.text.prop.heavy, style.sectionTitle]}>Heart Beat</Text>
				
				{/*<Text style={[styling.text.prop.light, style.sectionSubtitle]}>Systollic</Text>*/}
				<View style={[style.sliderContainer]}>	
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{heartMin}</Text>
						<Slider 
							label="Minimum"
							minimumValue={30}
							maximumValue={80}
							step={5}
							value={heartMin}
							onValueChange={(newVal) => this.setState({heartMin: newVal})}
							style={{flex: 1}}
						/>
					</View>
					<View style={[style.sliderWrapper]}>
						<Text style={[styling.text.prop.heavy, style.sliderValue]}>{heartMax}</Text>
						<Slider 
							label="Maximum"
							minimumValue={60}
							maximumValue={180}
							step={5}
							value={heartMax}
							onValueChange={(newVal) => this.setState({heartMax: newVal})}
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
						style={{flex: 2, position: 'absolute'}}
					/>
				</View>

				<ScrollView style={[styling.screenPadding]}>
					{this.renderAlerts()}
					{this.renderHeartSettings()}

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