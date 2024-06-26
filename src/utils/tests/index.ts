import { RegisterFormFieldsEnum } from '@/enums/formData';

export const elementTestSelector = {
	header: {
		con: 'header-con',
		logo: 'hc-logo',
		nls: {
			login: 'hc-nl-login',
			register: 'hc-nl-register',
			searchArticles: 'hc-nl-searchArticles',
			newsFeed: 'hc-nl-newsFeed',
			myAccount: 'hc-nl-myAccount',
		},
	},

	pages: {
		// register page
		rp: {
			heading: 'rp-heading',
			loginPnl: 'rp-login-pnl',
			form: {
				con: 'rp-form-con',
				fields: {
					[RegisterFormFieldsEnum.name]: {
						input: `rpff-${RegisterFormFieldsEnum.name}`,
						iconButton: undefined,
						errorMessage: `rpff-${RegisterFormFieldsEnum.name}-fem`,
					},
					[RegisterFormFieldsEnum.email]: {
						input: `rpff-${RegisterFormFieldsEnum.email}`,
						iconButton: undefined,
						errorMessage: `rpff-${RegisterFormFieldsEnum.email}-fem`,
					},
					[RegisterFormFieldsEnum.password]: {
						input: `rpff-${RegisterFormFieldsEnum.password}`,
						iconButton: `rpff-${RegisterFormFieldsEnum.password}-fib`,
						errorMessage: `rpff-${RegisterFormFieldsEnum.password}-fem`,
					},
					[RegisterFormFieldsEnum.passwordConfirmation]: {
						input: `rpff-${RegisterFormFieldsEnum.passwordConfirmation}`,
						iconButton: `rpff-${RegisterFormFieldsEnum.passwordConfirmation}-fib`,
						errorMessage: `rpff-${RegisterFormFieldsEnum.passwordConfirmation}-fem`,
					},
				},
				actions: {
					reset: 'rpfa-reset',
					submit: 'rpfa-submit',
				},
			},
		},
	},

  components: {
    fvsh: {
      con: 'fvsh-con',
      stateText: 'fvsh-state-text',
      switchButton: 'fvsh-switch-button'
    },
		logout: 'logout-btn'
  },

	footer: {
		con: 'footer-con',
		cprText: 'cpr-text',
		dicText: 'dic-text',
		links: {
			in: 'fls-in',
			gh: 'fls-gh',
			ur: 'fls-ur',
			uc: 'fls-uc',
		},
	},
} as const;
