export default class WeCare {

	static ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
	static DELETE_CONTACT = 'DELETE_CONTACT';

	/**
	 * Return an action to add a new WeCare contact
	 * @param {String} options.id   The contact's ID
	 * @param {String} options.name   The contact's name
	 * @param {String} options.number The contact's phone number
	 */
	static addNewContact({id, name, number}) {
		return {
			type: this.ADD_NEW_CONTACT,
			id,
			name,
			number,
		};
	}

	/**
	 * Return an action to delete a WeCare contact
	 * @param  {Number} id The ID of the contact to delete
	 * @return {Object}       
	 */
	static deleteContact(id) {
		return {
			type: this.DELETE_CONTACT,
			id,
		};
	}
}