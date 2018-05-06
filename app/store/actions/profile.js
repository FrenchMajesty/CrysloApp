export default class Profile {

	static UPDATE_GUARDIANS_CONFIGS = 'UPDATE_GUARDIANS_CONFIGS';
	static UPDATE_ACCOUNT_PROFILE = 'UPDATE_ACCOUNT_PROFILE';

	/**
	 * Return the action to update the Guardians feature's settings
	 * @param  {Object} options.notify  The notifying options
	 * @param  {Object} options.configs The delimiters for the vitals
	 * @return {Object}                 
	 */
	static updateGuardiansConfigs({notify, configs}) {
		return {
			type: this.UPDATE_GUARDIANS_CONFIGS,
			notify,
			configs,
		};
	}

	/**
	 * Return the action to update the user's account profile informations
	 * @param  {Object} profile The new profile info
	 * @return {Object}         
	 */
	static updateAccountProfile(profile) {
		return {
			type: this.UPDATE_ACCOUNT_PROFILE,
			profile,
		};
	}
}