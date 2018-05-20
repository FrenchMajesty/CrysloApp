import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import Header from 'app/components/Header/';
import CommonText from 'app/components/common/CommonText/';
import DataRow from 'app/components/History/DataRow/';
import styling from 'app/config/styling';
import style from './style';

export default class History extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.renderDay = this.renderDay.bind(this);
		this.renderDayContent = this.renderDayContent.bind(this);
		this.updateDateExpanded = this.updateDateExpanded.bind(this);
	}

	/**
	 * Return the initial state of the component
	 * @return {Object} Initial state
	 */
	getInitialState() {
		return {
			today: moment().format('YYYY-MM-DD'),
			dateExpanded: moment().format('YYYY-MM-DD'),
		};
	}

	/**
	 * Update the state of the current date being viewed
	 * @param  {Object} day New date selected
	 * @return {Void}     
	 */
	updateDateExpanded({dateString: today}) {
		this.setState({today});
	}

	/**
	 * Renders the statistics of the current day observed
	 * @param  {Object} day  Date object
	 * @param  {Object} firstMetric First item of that day to display
	 * @return {ReactElement}      markup
	 */
	renderDay(day, firstMetric) {
		const {navigation} = this.props;

		if(day) {
			const date = new Date(`${day.year}/${day.month}/${day.day}`);
			return (
				<View style={style.dayContainer}>
					<View style={style.day}>
						<CommonText style={[style.dayNum]}>{day.day}</CommonText>
						<CommonText style={[style.dayText]}>{date.toLocaleString('en-US', {month: 'short'})}</CommonText>
					</View>
					{firstMetric ?
						<DataRow metric={firstMetric} onPress={() => navigation.navigate('Details', {vital: firstMetric.type})} />
					:
						<View>
							<CommonText style={[style.empty]}>Oops! No data was recorded on this day.</CommonText>
						</View>
					}
				</View>
			);
		}
	}

	/**
	 * Render a day's subsequent statistics
	 * @param  {Object}  item                The data row to render
	 * @param  {Boolean} isTheFirstItemOfDay Whether this data row is the first item of the day
	 * @return {ReactElement}                      
	 */
	renderDayContent(item, isTheFirstItemOfDay) {
		if(!isTheFirstItemOfDay) {
			return <DataRow metric={item} />;
		}
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {screenProps: {rootNavigation}} = this.props
		const {today} = this.state;
		const minusOne = moment().subtract(1,'d').format('YYYY-MM-DD');
		const minusTwo = moment().subtract(2,'d').format('YYYY-MM-DD');
		const minusThree = moment().subtract(3,'d').format('YYYY-MM-DD');

		const items = {
			[today]: [
				{
					type: 'sleep',
					name: 'Sleep',
					value: '10:20', 
					date: today,
				},
				{
					type: 'mood',
					name: 'Mood',
					value: 'Frustrated', 
					date: today,
				},
			],
			[minusOne]: [
				{
					type: 'heart',
					name: 'Heart Pulse',
					value: 88, 
					date: minusOne,
				},
				{
					type: 'breaths',
					name: 'Breaths Pulse',
					value: 17, 
					date: minusOne,
				},
			],
			[minusTwo] : [],
			[minusThree]: [
				{
					type: 'heart',
					name: 'Heart Pulse',
					value: 88, 
					date: minusThree,
				},
				{
					type: 'breaths',
					name: 'Breaths Pulse',
					value: 17, 
					date: minusThree,
				},
				{
					type: 'mood',
					name: 'Mood',
					value: 'Happy', 
					date: minusThree,
				},
				{
					type: 'sleep',
					name: 'Sleep',
					value: '7:29', 
					date: minusThree,
				},
			],
		};

		const white = '#fff';
		const purple = '#8563e5';
		const calendarStyle = {
	   		backgroundColor: white,
	   		calendarBackground: purple,
	   		selectedDayBackgroundColor: white,
	   		selectedDayTextColor: purple,
	   		dotColor: white,
	   		dayTextColor: white,
	   		textDisabledColor: '#ffffff40',
	   		todayTextColor: 'yellow',
	   		monthTextColor: white,
	   		textSectionTitleColor: '#ffffff80',
	   	};

		return (
			<View style={[styling.statusBarPadding, {flex: 1, backgroundColor: purple}]}>
				{/*<StatusBar barStyle="light-content" />*/}
				<Header 
					title="History"
					color="white"
					navigation={rootNavigation}
					forHistory={true}
					style={[{flex: 0, backgroundColor: purple}]}
				/>
				<Agenda
					items={items}
					loadItemsForMonth={(month) => {console.log('trigger items loading')}}
				  	onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
				  	onDayPress={this.updateDateExpanded}
				  	onDayChange={(day) => console.log('Scrolled onto another day')}
					selected={today}
					minDate={moment().subtract(7,'d').format('YYYY-MM-DD')}
					maxDate={moment().format('YYYY-MM-DD')}
					pastScrollRange={3}
					futureScrollRange={1}
					hideKnob={false}
  					renderItem={this.renderDayContent}
				  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
				  	renderDay={this.renderDay}
				  // specify how empty date content with no items should be rendered
				  	renderEmptyDate={() => {return (<View />);}}
				  // specify what should be rendered instead of ActivityIndicator
				  	renderEmptyData = {() => {return (<View />);}}
				   	rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
				   	style={{flex: 1}}
				   	theme={calendarStyle}
				/>
			</View>
		);
	}
}