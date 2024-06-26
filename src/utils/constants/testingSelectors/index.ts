import {
	LoginFormFieldsEnum,
	NewsFeedPreferenceFormFieldsEnum,
	RegisterFormFieldsEnum,
	SearchArticlesFiltersFormFieldsEnum,
	UserAccountDataFormFieldsEnum,
} from '@/enums/formData';

export const elementTestSelectorParams = {
	newsItemId: '$newsItemId',
};

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
			},
		},
		lp: {
			heading: 'lp-heading',
			registerPnl: 'lp-register-pnl',
			form: {
				con: 'lp-form-con',
				fields: {
					[LoginFormFieldsEnum.email]: {
						input: `lpff-${LoginFormFieldsEnum.email}`,
						iconButton: undefined,
						errorMessage: `lpff-${LoginFormFieldsEnum.email}-fem`,
					},
					[LoginFormFieldsEnum.password]: {
						input: `lpff-${LoginFormFieldsEnum.password}`,
						iconButton: `lpff-${LoginFormFieldsEnum.password}-fib`,
						errorMessage: `lpff-${LoginFormFieldsEnum.password}-fem`,
					},
				},
			},
		},
		searchNews: {
			filters: {
				con: 'snp-filters-con',
				heading: 'snp-filters-heading',
				form: {
					con: 'snp-form-con',
					fields: {
						[SearchArticlesFiltersFormFieldsEnum.keyword]: {
							input: `snpff-${SearchArticlesFiltersFormFieldsEnum.keyword}`,
							iconButton: undefined,
							errorMessage: `snpff-${SearchArticlesFiltersFormFieldsEnum.keyword}-fem`,
						},
						[SearchArticlesFiltersFormFieldsEnum.startDate]: {
							input: `snpff-${SearchArticlesFiltersFormFieldsEnum.startDate}`,
							iconButton: undefined,
							errorMessage: `snpff-${SearchArticlesFiltersFormFieldsEnum.startDate}-fem`,
						},
						[SearchArticlesFiltersFormFieldsEnum.endDate]: {
							input: `snpff-${SearchArticlesFiltersFormFieldsEnum.endDate}`,
							iconButton: undefined,
							errorMessage: `snpff-${SearchArticlesFiltersFormFieldsEnum.endDate}-fem`,
						},
						[SearchArticlesFiltersFormFieldsEnum.category]: {
							input: `snpff-${SearchArticlesFiltersFormFieldsEnum.category}`,
							iconButton: undefined,
							errorMessage: `snpff-${SearchArticlesFiltersFormFieldsEnum.category}-fem`,
						},
						[SearchArticlesFiltersFormFieldsEnum.source]: {
							input: `snpff-${SearchArticlesFiltersFormFieldsEnum.source}`,
							iconButton: undefined,
							errorMessage: `snpff-${SearchArticlesFiltersFormFieldsEnum.source}-fem`,
						},
					},
				},
			},
			refetchDataBtn: 'snp-refetch-button',
		},
		newsFeed: {
			filters: {
				con: 'nfp-filters-con',
				heading: 'nfp-filters-heading',
				form: {
					con: 'nfp-form-con',
					fields: {
						[NewsFeedPreferenceFormFieldsEnum.authors]: {
							input: `nfpff-${NewsFeedPreferenceFormFieldsEnum.authors}`,
							iconButton: undefined,
							errorMessage: `nfpff-${NewsFeedPreferenceFormFieldsEnum.authors}-fem`,
						},
						[NewsFeedPreferenceFormFieldsEnum.categories]: {
							input: `nfpff-${NewsFeedPreferenceFormFieldsEnum.categories}`,
							iconButton: undefined,
							errorMessage: `nfpff-${NewsFeedPreferenceFormFieldsEnum.categories}-fem`,
						},
						[NewsFeedPreferenceFormFieldsEnum.sources]: {
							input: `nfpff-${NewsFeedPreferenceFormFieldsEnum.sources}`,
							iconButton: undefined,
							errorMessage: `nfpff-${NewsFeedPreferenceFormFieldsEnum.sources}-fem`,
						},
					},
				},
			},
			refetchDataBtn: 'nfp-refetch-button',
		},
		myAccount: {
			heading: 'myap-heading',
			form: {
				con: 'myap-form-con',
				fields: {
					[UserAccountDataFormFieldsEnum.name]: {
						input: `myapf-${UserAccountDataFormFieldsEnum.name}`,
						iconButton: undefined,
						errorMessage: `myapf-${UserAccountDataFormFieldsEnum.name}-fem`,
					},
				},
			},
		},
	},

	components: {
		fvsh: {
			con: 'fvsh-con',
			stateText: 'fvsh-state-text',
			switchButton: 'fvsh-switch-button',
		},
		logout: 'logout-btn',
		newsList: {
			listCon: 'news-list-con',
			genericItemSelector: 'news-list-item',
			specificItemSelector: `news-list-item-${elementTestSelectorParams.newsItemId}`,
			newsItem: {
				image: 'news-item-image',
				title: 'news-item-title',
				description: 'news-item-description',
				actions: {
					openExternalLink: 'news-item-external-link',
					viewDetailPage: 'news-item-detail-page',
				},
			},
		},
		formActions: {
			reset: 'form-action-reset',
			submit: 'form-action-submit',
		},
		fullPageCenteredMessage: {
			con: 'fpcm-con',
			heading: 'fpcm-heading',
			button: 'fpcm-button',
		},
		fullPageLoader: {
			con: 'full-page-loader-con',
			icon: 'full-page-loader-icon'
		}
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
