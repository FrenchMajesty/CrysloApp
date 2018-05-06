import WeCareAction from '../actions/wecare';

const initialState = {
	contacts: [
		{
			id: 1,
			name: 'Troy',
			number: '+18171232018',
		},
	],
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

		case WeCareAction.UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) => {
					return contact.id == action.id 
						? { id: action.id, name: action.name, number: action.number }
						: contact;
				}),
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