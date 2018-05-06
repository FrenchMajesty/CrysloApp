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
	account: {
		profile: {
			firstname: 'Verdi',
			lastname: 'Kapuku',
			name: 'Verdi Kapuku',
			email: 'awesome@cryslo.com',
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

		case ProfileAction.UPDATE_ACCOUNT_PROFILE:
			return {
				...state,
				account: {
					...state.account,
					profile: {
						...state.account.profile,
						...action.profile,
					},
				}
			};

		default:
			return state;
	}
}