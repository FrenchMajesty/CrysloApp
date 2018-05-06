export default class Profile {

	static UPDATE_GUARDIANS_CONFIGS = 'UPDATE_GUARDIANS_CONFIGS';

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
}