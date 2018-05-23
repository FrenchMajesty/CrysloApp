import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'app/components/Header/';
import VitalCard from 'app/components/Dashboard/VitalCard/';
import { connect } from 'react-redux';
import TrackerAction from 'app/store/actions/trackers';
import ProfileAction from 'app/store/actions/profile';
import WeCareAction from 'app/store/actions/wecare';
import styling from 'app/config/styling';
import HeartIcon from 'assets/images/heart-icon.png';
import LungIcon from 'assets/images/lung-icon.png';
import MoodIcon from 'assets/images/mood-icon.png';
import EnergyIcon from 'assets/images/energy-icon.png';
import BedIcon from 'assets/images/bed-icon.png';
import style from './style';

import { loadProfile } from 'app/lib/api';

const icons = {
	heart: {uri: 'https://i.imgur.com/RFbR4i9.png'},//HeartIcon,
	breaths: {uri: 'https://i.imgur.com/I32mEvm.png'},//LungIcon,
	energy: {uri: 'https://i.imgur.com/OdJpzPq.png'},// EnergyIcon,
	mood: {uri: 'https://i.imgur.com/30HhhiJ.png'},//MoodIcon,
	sleep: {uri: 'https://i.imgur.com/mqO6hJs.png'},//BedIcon,
};

class Home extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)

		this.state = this.getInitialState();

		this.loadUserData = this.loadUserData.bind(this);
		this.renderCard = this.renderCard.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
	}

	/**
	 * Get the initial state of the component
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			refreshing: false,
		};
	}

	/**
	 * Fetch all relevant data of the user
	 */
	componentDidMount() {
		this.loadUserData();
	}

	/**
	 * Load all of the user's data and put it into the store's state
	 * @return {Void}            
	 */
	loadUserData() {
		loadProfile('?withContact=true&withGuardians=true')
		.then(({data}) => {
			const {
				id,
				firstname,
				lastname,
				email,
				referral_id,
				number,
				contacts,
				guardians,
				created_at,
			} = data;

			this.props.setContacts(contacts);
			this.props.updateAccountProfile({id, email, referral_id, number, created_at});
			this.props.updateGuardiansConfigs(guardians);

			// Since the first & last name are optional check they exist before setting them
			if(firstname && lastname) {
				this.props.updateAccountProfile({
					firstname,
					lastname,
					name: `${firstname} ${lastname}`,
				});
			}
		})
		.catch((response) => console.log(response));
	}

	/**
	 * Render a stat card for the given vital object
	 * @param  {Object} item The vital to render
	 * @param  {Number} i    Item index
	 * @return {ReactElement}      
	 */
	renderCard(item, i) {
		const {updateVitalValue} = this.props;
		const newValue = {
			type: item.type,
			value: 99,
		};

		return (
			<VitalCard 
				key={i} 
				item={item} 
				icon={icons[item.type]}
				delay={(i * 100)+1}
				fadeInDuration={600}
				onPress={() => updateVitalValue(newValue)} 
			/>
		);
	}

	onRefresh() {
		this.setState({refreshing: true});
		setTimeout(() => this.setState({refreshing: false}), 1400);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {trackers} = this.props;
		const {screenProps: {rootNavigation}} = this.props;
		const {refreshing} = this.state;

		return (
			<View 
				style={[styling.statusBarPadding, styling.screenPadding, style.container]}
			>
				<StatusBar barStyle="dark-content" />
				<Header 
					title="Cryslo's Dashboard"
					navigation={rootNavigation}
					style={[{flex: 0, marginBottom: 20}]}
				/>
				
		        <ScrollView 
		        	contentContainerStyle={[style.list]} 
					style={[style.trackersContainer]}
					showsVerticalScrollIndicator={false}
				>
		        	{Object.keys(trackers).map((name, i) => this.renderCard(trackers[name], i))}
		        </ScrollView>
		        
			</View>
		);
	}
};

/**
 * Map the redux store's state to the component's props
 * @param  {Object} options.trackers Tree of the trackers values
 * @return {Object}                  
 */
const mapStateToProps = ({trackers}) => ({
		trackers,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	updateVitalValue: (newValue) => {
		dispatch(TrackerAction.updateVitalValue(newValue));
	},
	updateAccountProfile: (profile) => {
		dispatch(ProfileAction.updateAccountProfile(profile));
	},
	updateGuardiansConfigs: (configs) => {
		dispatch(ProfileAction.updateGuardiansConfigs(configs));
	},
	setContacts: (contacts) => {
		dispatch(WeCareAction.setContacts(contacts));
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);