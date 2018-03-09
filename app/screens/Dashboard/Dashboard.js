import React, { Component } from 'react';
import { View, ScrollView, ListView, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'app/components/Header/';
import VitalCard from './components/VitalCard/';
import FloatingIcon from 'app/components/common/Button/FloatingIcon/';
import styling from 'app/config/styling';
import style from './style';

export default class Home extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props)

		this.state = this.getInitialState();

		this.renderCard = this.renderCard.bind(this);
		this.triggerNavigation = this.triggerNavigation.bind(this);
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
		};
	}

	renderCard(item, i) {
		return (
			<VitalCard 
				key={i} 
				item={item} 
				onPress={null} 
			/>
		);
	}

	triggerNavigation(item) {
		const {navigation} = this.props;

		return;
		navigation.navigate('DashboardDetails', {vital: item.type});
		const action = NavigationActions.navigate({
			index: 0,
			actions: [NavigationActions.navigate({
					routeName: 'History',
				})],
		});

		navigation.dispatch(action);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {vitals} = this.state;
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
		        	{vitals.map(this.renderCard)}
		        </View>
		        
			</ScrollView>
		);
	}
};