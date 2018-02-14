import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import styling from 'app/config/styling';

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
	updateDateExpanded({dateString: dateExpanded}) {
		this.setState({dateExpanded});
	}

	/**
	 * Renders the statistics of the current day observed
	 * @param  {Object} day  Date object
	 * @param  {Object} firstItem First item of that day to display
	 * @return {ReactElement}      markup
	 */
	renderDay(day, firstItem) {
		const {dateExpanded} = this.state;

		if(day) {
			return (
				<View style={{marginTop: 20}}>
					<View style={{width: 700}}>
						<Text style={{fontSize: 15}}>{day.dateString}</Text>
					</View>
					<Text>{firstItem.text}</Text>
				</View>
			);
		}
	}

	renderDayContent(item, isTheFirstItemOfDay) {
		const {dateExpanded} = this.state;

		return (
			<View>
				<Text>{item.text}</Text>
			</View>
		);
	}


	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {today} = this.state;
		const minusOne = moment().subtract(1,'d').format('YYYY-MM-DD');
		const plusOne = moment().add(1,'d').format('YYYY-MM-DD');
		const plusTwo = moment().add(2,'d').format('YYYY-MM-DD');

		const items = {
			[minusOne]: [
				{ text: 'This is meant to represent yesterday 1', date: minusOne},
				{ text: 'This is meant to represent yesterday 2', date: minusOne},
			],
			[today]: [
				{ text: 'firs item: Any JS Object here.. but why?', date: today},
				{ text: 'Any JS Object here.. but why?', date: today},
			],
			[plusOne]: [
				{ text: 'This is the first item of the second day.', date: plusOne },
				{ text: 'This is the second day.', date: plusOne },
			],
			[plusTwo]: [
				{ text: '3 things in this day just because.', date: plusTwo },
				{ text: 'Where are you guys?', date: plusTwo },
				{ text: 'This should also be in the same 3rd day....', date: plusTwo },
			],
		};

		return (
			<View style={[styling.statusBarPadding, {flex: 1}]}>
				<Agenda
					items={items}
					loadItemsForMonth={(month) => {console.log('trigger items loading')}}
				  	onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
				  	onDayPress={this.updateDateExpanded}
				  	onDayChange={(day) => console.log('Scrolled onto another day')}
					//selected={today}
					minDate={moment().subtract(7,'d').format('YYYY-MM-DD')}
					maxDate={moment().add(7,'d').format('YYYY-MM-DD')}
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
				/>
			</View>
		);
	}
}