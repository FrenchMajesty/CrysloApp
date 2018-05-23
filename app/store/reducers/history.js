import HistoryAction from '../actions/history';

const initialState = {

};

export default function history(state = initialState, action) {
	switch(action.type) {
		
		case HistoryAction.ADD_MONTH_DATA:
			return {
				...state,
				[action.month]: action.data,
			};

		default:
			return state;
	}
}