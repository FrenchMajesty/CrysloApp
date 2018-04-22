import Actions from '../actions/signup';

const initialState = {
	email: '',
	password: '',
};

export default function signup(state = initialState, action) {
	switch(action.type) {
		case Actions.SET_LOGIN_DETAILS:
			return {
				...state, 
				email: action.email,
				password: action.password,
			 };
			 
		default:
			return state;
	}
}