import Actions from '../actions/verifyNumber';

const initialState = {
	number: '',
};

export default function verifyNumber(state = initialState, action) {
	switch(action.type) {
		case Actions.SET_PHONE_NUMBER:
			return {...state, number: action.number};
		default:
			return state;
	}
}