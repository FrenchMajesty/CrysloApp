export default class VerifyNumber {

	static SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
	static SET_USER_ID = 'SET_USER_ID';

	/**
	 * Return the action to update the user's phone number
	 * @param  {String} number The phone number
	 * @return {Object}        
	 */
	static setNumber(number) {
		return {
			type: this.SET_PHONE_NUMBER,
			number,
		};
	}

	/**
	 * Return the action to update the user's ID 
	 * @param  {Number} id The user's ID
	 * @return {Object}        
	 */
	static setUserId(id) {
		return {
			type: this.SET_USER_ID,
			id,
		};
	}
}