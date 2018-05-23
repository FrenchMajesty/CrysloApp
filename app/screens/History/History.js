import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import { connect } from 'react-redux';
import HistoryAction from 'app/store/actions/history';
import Header from 'app/components/Header/';
import CommonText from 'app/components/common/CommonText/';
import DataRow from 'app/components/History/DataRow/';
import styling from 'app/config/styling';
import style from './style';

import { loadMonthMeasuredData, fetchMonthMeasuredData } from 'app/lib/api';

class History extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.renderDay = this.renderDay.bind(this);
		this.renderDayContent = this.renderDayContent.bind(this);
		this.loadAdditionalMonth = this.loadAdditionalMonth.bind(this);
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
	 * Load the measurement data of the current month
	 */
	componentDidMount() {
		const month = moment().startOf('month').format('YYYY-MM-DD');
		loadMonthMeasuredData().then(({data}) => this.props.addMonthData({month, data}));
	}

	/**
	 * Update the state of the current date being viewed
	 * @param  {String} day.dateString New date selected in the Agenda comp's format
	 * @return {Void}     
	 */
	updateDateExpanded({dateString: today}) {
		this.setState({today});
	}

	/**
	 * Send a request to load a specific month's measurement datas
	 * @param  {String} options.dateString The date of the trigger item
	 * @return {Void}                    
	 */
	loadAdditionalMonth({dateString}) {
		const {history} = this.props;
		const date = moment(dateString, 'YYYY-MM-DD').startOf('month').format('YYYY-MM-DD');
		const isAlredyFetched = Object.keys(history).some(month => month == date);

		if(! isAlredyFetched) {
			fetchMonthMeasuredData({date}).then(({data}) => {
				this.props.addMonthData({month: date, data});
			});
		}
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
	 * Render the component markup
	 * @return {ReactElement} 
	 */
	render() {
		const minusOne = moment().subtract(1,'d').format('YYYY-MM-DD');
		const minusTwo = moment().subtract(2,'d').format('YYYY-MM-DD');
		const minusThree = moment().subtract(3,'d').format('YYYY-MM-DD');
		const {history: {data}, userSignupDate, screenProps: {rootNavigation}} = this.props
		const {today} = this.state;

		// Combine all the dates into a single obj
		let items = {};
		Object.keys(data).forEach((month) => items = { ...items, ...data[month] });

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
					loadItemsForMonth={this.loadAdditionalMonth}
				  	onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
				  	onDayPress={this.updateDateExpanded}
				  	onDayChange={(day) => console.log('Scrolled onto another day', day)}
					selected={today}
					minDate={moment(userSignupDate).format('YYYY-MM-DD')}
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
				  	//renderEmptyData = {() => {return (<View />);}}
				   	rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
				   	style={{flex: 1}}
				   	theme={calendarStyle}
				/>
			</View>
		);
	}
}

/**
 * Map the redux store's state to the component's props
 * @param  {Object} options.history Tree of the vitals measurement datas
 * @param  {Object} options.profile.account.profile The User's model and entry info
 * @return {Object}                  
 */
const mapStateToProps = ({history, profile: {account: {profile}}}) => ({
		history,
		userSignupDate: profile.created_at,
});

/**
 * Map the store's action dispatcher to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}           
 */
const mapDispatchToProps = (dispatch) => ({
	addMonthData: (details) => {
		dispatch(HistoryAction.addMonthData(details));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
