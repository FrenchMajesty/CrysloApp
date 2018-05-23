export default class History {

	static ADD_MONTH_DATA = 'ADD_MONTH_DATA';

	/**
	 * Return an action to add a month's measurement data to the store
	 * @param {String} options.month The full date of the month to add
	 * @param {Array} options.data  The data to add
	 */
	static addMonthData({month, data}) {
		return {
			type: this.ADD_MONTH_DATA,
			month,
			data,
		};
	}
}