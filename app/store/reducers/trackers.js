import TrackerAction from '../actions/trackers';

const initialState = {
	heart: {
		type: 'heart',
		name: 'Heart pulse',
		value: 80,
		measure: 'bpm',
		lastReading: Date.now(),
	},
	breaths: {
		type: 'breaths',
		name: 'Breaths Rate',
		value: 16,
		measure: 'bpm',
		lastReading: Date.now(),
	},
	mood: {
		type: 'mood',
		name: 'Mood',
		value: 'Excited',
		measure: '',
		lastReading: Date.now(),
	},
	energy: {
		type: 'energy',
		name: 'Energy Level',
		value: 'Normal',
		measure: '',
		lastReading: Date.now(),
	},
	sleep: {
		type: 'sleep',
		name: 'Sleep',
		value: '7:36',
		measure: 'hours',
		lastReading: Date.now(),
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