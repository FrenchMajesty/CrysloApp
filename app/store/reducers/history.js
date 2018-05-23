import HistoryAction from '../actions/history';

const initialState = {
	data: {}
};

export default function history(state = initialState, action) {
	switch(action.type) {
		
		case HistoryAction.ADD_MONTH_DATA:
			return {
				...state,
				data: {
					...state.data,
					[action.month]: action.data,
				}
			};

		default:
			return state;
	}
}