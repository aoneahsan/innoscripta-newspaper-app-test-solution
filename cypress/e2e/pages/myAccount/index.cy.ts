/// <reference types="cypress" />

import { API_URLS, APP_ROUTES } from '@/utils/constants';
import { apisMockData } from '@cy/mock-data';
import { CY_ENVS } from '@cy/utils/envKeys';
import {
	authenticateUser,
	getCompleteApiUrl,
	interceptStabApiResponse,
} from '@cy/utils/helpers';

let userIsAuthenticated = false;

describe('Login Page E2E Tests', () => {
	beforeEach(() => {
		cy.wrap(authenticateUser()).then((result) => {
			console.log({ result });
			userIsAuthenticated = result as boolean;

			if (userIsAuthenticated) {
				cy.log('User authenticated successfully!');
				cy.visit(APP_ROUTES.myAccount);
			} else {
				cy.log('User authentication failed!');
			}
		});
	});

	it.only('Login User into the app using Cypress ENV Variables', () => {
		interceptStabApiResponse({ getUserData: true, updateUserStatus: true });
	});
});
