export const routeParams = {
	newsId: ':newsId',
} as const;

export const APP_ROUTES = {
	wildCard: '*',
	rootRoute: '/',
	home: '/news-articles',
	register: '/register',
	login: '/login',
	userFeed: '/feed',
	myAccount: '/my-account',
	newsDetail: `/news/${routeParams.newsId}`,
};
