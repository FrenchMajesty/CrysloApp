import validator from 'validator';

export default class Validator {

	/**
	 * Test whether a value passes a validation rule not
	 * @param  {Any} value Value to test
	 * @param  {String} rule  Validation rule to use to test the value
	 * @return {Boolean}       
	 */
	testValidationRule(value, rule) {
		if(rule == 'required') {
			return value.trim().length > 0;
		}

		if(rule == 'email') {
			return validator.isEmail(value);
		}

		if(rule == 'number') {
			return ! isNaN(value);
		}
	}

	/**
	 * Validate a field input against a set a rules
	 * @param  {Object} input The input to test
	 * @param  {Array} rules The validations rules to test for
	 * @return {Array}       The errors found
	 */
	validateField(input, rules) {

		if(typeof input ==! 'object') {
			throw new Error('The input parameter to validateField must be a valid object.');
		}

		if(Object.keys(input).length > 1) {
			throw new Error('The input object given to validateField cannot have more than one key.');
		}

		if(typeof rules ==! 'array') {
			throw new Error('The rules parameter of validateField must be a valid array.');
		}

		if(rules.length == 0) {
			throw new Error('The rules parameter of validateField must be an array with a length greater than zero.');
		}

		const name = Object.keys(input)[0];

		if(typeof input[name] === 'undefined' || input[name] === null) {
			throw new Error('The value of the input parameter in validateField cannot be undefined or null.');
		}

		let errors = [];
		rules.forEach((rule) => {

		});

		return errors;
	}
}

/*
Validator.validate({
	email: {
		value: 'blabla',
		rules: ['blablabla']
	}
})*/