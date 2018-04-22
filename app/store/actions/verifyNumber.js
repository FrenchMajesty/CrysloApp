export default class VerifyNumber {

	static SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';

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
}