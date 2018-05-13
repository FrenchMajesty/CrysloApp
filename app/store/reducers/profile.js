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
			referral_id: '',
			number: '',
		},
		billing: {
			subscriptionStatus: '',
		},
	},
	auth: {
		token: '',
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

		case ProfileAction.UPDATE_SUBSCRIPTION_STATUS:
			return {
				...state,
				account: {
					...state.account,
					billing: {
						...state.account.billing,
						subscriptionStatus: action.status,
					},
				}
			};

		case ProfileAction.UPDATE_AUTH_TOKEN:
			return {
				...state,
				auth: {
					...state.auth,
					token: action.token,
				},
			};

		default:
			return state;
	}
}