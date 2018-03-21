import React, { Component } from 'react';
import { View, ScrollView, ListView, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'app/components/Header/';
import VitalCard from './components/VitalCard/';
import FloatingIcon from 'app/components/common/Button/FloatingIcon/';
import { connect } from 'react-redux';
import TrackerAction from 'app/store/actions/trackers';
import styling from 'app/config/styling';
import style from './style';

class Home extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)

		this.renderCard = this.renderCard.bind(this);
		this.triggerNavigation = this.triggerNavigation.bind(this);
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
				onPress={() => dispatch(TrackerAction.updateVitalValue(newValue))} 
			/>
		);
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

		return (
			<ScrollView 
				contentContainerStyle={{flexGrow: 1}}
				style={[styling.statusBarPadding, styling.screenPadding, style.container]}
			>
				<StatusBar barStyle="dark-content" />
				<Header 
					title="Victron"
					style={{flex: 2}}
					navigation={rootNavigation}
				/>
				
		        <View style={[style.list, {flex: 900}]}>
		        	{Object.keys(trackers).map((name, i) => this.renderCard(trackers[name], i))}
		        </View>
		        
			</ScrollView>
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