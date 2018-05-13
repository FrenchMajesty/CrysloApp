import Actions from '../actions/verifyNumber';

const initialState = {
	number: '',
	id: '',
};

export default function verifyNumber(state = initialState, action) {
	switch(action.type) {
		case Actions.SET_PHONE_NUMBER:
			return {...state, number: action.number};

		case Actions.SET_USER_ID:
			return {...state, id: action.id};

		default:
			return state;
	}
}