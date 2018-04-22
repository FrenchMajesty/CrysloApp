export default class Signup {

	static SET_LOGIN_DETAILS = 'SET_LOGIN_DETAILS';
	static SET_PROFILE_DETAILS = 'SET_PROFILE_DETAILS';

	/**
	 * Return the action to update the user's login credentials
	 * @param {String} data.email The user's email address
	 * @param {String} data.password The user's password unencrypted
	 * @return {Object}        
	 */
	static setCredentials({email, password}) {
		return {
			type: this.SET_LOGIN_DETAILS,
			email,
			password,
		};
	}
}