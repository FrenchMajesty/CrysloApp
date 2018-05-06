import WeCareAction from '../actions/wecare';

const initialState = {
	contacts: [],
};

export default function wecare(state = initialState, action) {
	switch(action.type) {
		case WeCareAction.ADD_NEW_CONTACT:
			return {
				...state,
				contacts: [
					...state.contacts,
					{name: action.name, number: action.number, id: action.id},
				]
			};

		case WeCareAction.DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(({id}) => id != action.id),
			};

		default:
			return state;
	}
}