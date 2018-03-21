import TrackerAction from '../actions/trackers';

const initialState = {
	heart: {
		type: 'heart',
		name: 'Heart pulse',
		value: 80,
		lastReading: null,
	},
	breaths: {
		type: 'breaths',
		name: 'Breaths Rate',
		value: 16,
		lastReading: null,
	},
	sleep: {
		type: 'sleep',
		name: 'Sleep',
		value: '7:36',
		lastReading: null,
	},
};

export default function trackers(state = initialState, action) {
	switch(action.type) {
		case TrackerAction.UPDATE_VITAL_VALUE:
			return {
				...state, 
				[action.data.type]: {
					...state[action.data.type],
					value: action.data.value,
					lastReading: action.data.lastReading,
				},
			};

		default:
			return state;
	}
}