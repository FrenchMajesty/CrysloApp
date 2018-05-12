export default class Profile {

	static UPDATE_GUARDIANS_CONFIGS = 'UPDATE_GUARDIANS_CONFIGS';
	static UPDATE_ACCOUNT_PROFILE = 'UPDATE_ACCOUNT_PROFILE';
	static UPDATE_SUBSCRIPTION_STATUS = 'UPDATE_SUBSCRIPTION_STATUS';

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
	
	/**
	 * Return the action to update the user's subscription status
	 * @param  {Object} status The new status
	 * @return {Object}         
	 */
	static updateSubscriptionStatus(status) {
		return {
			type: this.UPDATE_SUBSCRIPTION_STATUS,
			status,
		};
	}	
}