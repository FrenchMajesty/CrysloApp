import ProfileAction from '../actions/profile';

const initialState = {
	guardians: {
		notify: {
			self: false,
			wecare: false,
		},
		configs: {
			heart: {
				min: 65,
				max: 105,
			},
		},
	},
};

export default function profile(state = initialState, action) {
	switch(action.type) {
		case ProfileAction.UPDATE_GUARDIANS_CONFIGS:
			return {
				...state,
				guardians: {
					...state.guardians,
					notify: action.notify, 
					configs: action.configs,
				}
			};

		default:
			return state;
	}
}