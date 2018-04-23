import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'app/components/Header/';
import VitalCard from './components/VitalCard/';
import FloatingIcon from 'app/components/common/Button/FloatingIcon/';
import { connect } from 'react-redux';
import TrackerAction from 'app/store/actions/trackers';
import styling from 'app/config/styling';
import HeartIcon from 'assets/images/heart-icon.png';
import LungIcon from 'assets/images/lung-icon.png';
import MoodIcon from 'assets/images/mood-icon.png';
import EnergyIcon from 'assets/images/energy-icon.png';
import BedIcon from 'assets/images/bed-icon.png';
import style from './style';

const icons = {
	heart: HeartIcon,
	breaths: LungIcon,
	energy: EnergyIcon,
	mood: MoodIcon,
	sleep: BedIcon,
};

class Home extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)

		this.state = this.getInitialState();

		this.renderCard = this.renderCard.bind(this);
		this._onRefresh = this._onRefresh.bind(this);
		this.triggerNavigation = this.triggerNavigation.bind(this);
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
	 * Render a stat card for the given vital object
	 * @param  {Object} item The vital to render
	 * @param  {Number} i    Item index
	 * @return {ReactElement}      
	 */
	renderCard(item, i) {
		const {dispatch} = this.props;
		const newValue = {
			type: item.type,
			value: 99,
		};

		return (
			<VitalCard 
				key={i} 
				item={item} 
				icon={icons[item.type]}
				onPress={() => dispatch(TrackerAction.updateVitalValue(newValue))} 
			/>
		);
	}

	_onRefresh() {
		this.setState({refreshing: true});
		setTimeout(() => this.setState({refreshing: false}), 1400);
	}

	triggerNavigation(item) {
		/*const {navigation} = this.props;

		return;
		navigation.navigate('DashboardDetails', {vital: item.type});
		const action = NavigationActions.navigate({
			index: 0,
			actions: [NavigationActions.navigate({
					routeName: 'History',
				})],
		});

		navigation.dispatch(action);*/
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
					title="Victron"
					style={{flex: 0, marginBottom: 20}}
					navigation={rootNavigation}
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
})


export default connect(mapStateToProps)(Home);