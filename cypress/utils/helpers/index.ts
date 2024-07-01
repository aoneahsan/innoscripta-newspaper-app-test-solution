import { API_URLS, LOCALSTORAGE_KEYS } from '@/utils/constants';
import { userAuthData } from '@cy/data/user';
import { CY_ENVS } from '../envKeys';
import { Preferences } from '@capacitor/preferences';
import { apisMockData } from '@cy/mock-data';

export const getCyElementTestSelector = (ets: string): string => {
	return `[zaions-ets="${ets}"]`;
};

// we can use faker instead to get actual unique emails
export const getUniqueEmail = (time: number): string => {
	const emailArr = userAuthData.email.split('@');
	const newEmail = emailArr[0] + time + '@' + emailArr[1];
	return newEmail;
};

export const getCompleteApiUrl = (apiPath: string) => {
	return apiPath.startsWith('/') ? `/api${apiPath}` : `/api/${apiPath}`;
};

export const authenticateUser = async (): Promise<boolean> => {
	try {
		const userDataStr = String(Cypress.env(CY_ENVS.userData)).trim();
		const userAuthToken = String(Cypress.env(CY_ENVS.userAuthToken)).trim();
		if (userDataStr.length && userAuthToken.length) {
			await Preferences.set({
				key: LOCALSTORAGE_KEYS.userData,
				value: userDataStr,
			});
			await Preferences.set({
				key: LOCALSTORAGE_KEYS.userAuthToken,
				value: userAuthToken,
			});

			return true;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};

export const interceptStabApiResponse = ({
	byPassEnvCheck,
	getUserData,
	updateUserStatus,
	searchNewsArticles,
	getNewsFeed,
}: {
	byPassEnvCheck?: boolean;
	getUserData?: boolean;
	updateUserStatus?: boolean;
	searchNewsArticles?: boolean;
	getNewsFeed?: boolean;
}) => {
	if (Cypress.env(CY_ENVS.enableApiResponseStabIntercept) || byPassEnvCheck) {
		if (getUserData) {
			cy.intercept(
				getCompleteApiUrl(API_URLS.getUserData),
				apisMockData.getUserData
			);
		}

		if (updateUserStatus) {
			cy.intercept(
				getCompleteApiUrl(API_URLS.updateUserStatus),
				apisMockData.updateUserStatus
			);
		}

		if (searchNewsArticles) {
			cy.intercept(
				getCompleteApiUrl(API_URLS.searchNewsArticles),
				apisMockData.searchNewsArticles
			);
		}

		if (getNewsFeed) {
			cy.intercept(
				getCompleteApiUrl(API_URLS.getNewsFeed),
				apisMockData.getNewsFeed
			);
		}
	}
};
