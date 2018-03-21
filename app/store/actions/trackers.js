export default class Tracker {

	static UPDATE_VITAL_VALUE = 'UPDATE_VITAL_VALUE';

	/**
	 * Return the action to update a vital's value
	 * @param  {Object} options.type  Identifying name of the vital to update
	 * @param  {String} options.value New value to set
	 * @return {Object}               Action
	 */
	static updateVitalValue({type, value}) {
		return {
			type: this.UPDATE_VITAL_VALUE,
			data: {
				type,
				value,
				lastReading: Date.now(),
			},
		};
	}
}