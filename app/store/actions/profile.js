export default class Profile {

	static UPDATE_GUARDIANS_CONFIGS = 'UPDATE_GUARDIANS_CONFIGS';
	static UPDATE_ACCOUNT_PROFILE = 'UPDATE_ACCOUNT_PROFILE';
	static UPDATE_SUBSCRIPTION_STATUS = 'UPDATE_SUBSCRIPTION_STATUS';
	static UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';

	/**
	 * Return the action to update the Guardians feature's settings
	 * @param  {Object} settings  The guardians settings to set
	 * @return {Object}                 
	 */
	static updateGuardiansConfigs(settings) {
		return {
			type: this.UPDATE_GUARDIANS_CONFIGS,
			notify: {
				self: settings.notify_self,
				wecare: settings.notify_wecare,
			},
			configs: {
				heart: {
					min: settings.heart_min,
					max: settings.heart_max,
				},
				breath: {
					min: settings.breath_min,
					max: settings.breath_max,
				},
			},
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
	 * Return the action to update the user's auth token
	 * @param  {String} token The JWT token
	 * @return {Object}         
	 */
	static updateAuthToken(token) {
		return {
			type: this.UPDATE_AUTH_TOKEN,
			token,
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