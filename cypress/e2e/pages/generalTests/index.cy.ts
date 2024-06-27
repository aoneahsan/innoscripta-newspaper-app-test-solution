/// <reference types="cypress" />

import { UserAccountDataFormFieldsEnum } from '@/enums/formData';
import { IApiResponse } from '@/types/backendApi';
import { IUser } from '@/types/userData';
import { API_URLS, APP_ROUTES } from '@/utils/constants';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { apisMockData } from '@cy/mock-data';
import {
	authenticateUser,
	getCompleteApiUrl,
	getCyElementTestSelector,
} from '@cy/utils/helpers';

describe('General E2E Tests', () => {
	it.only('Login actions should be enabled if user is not signed in', () => {
		cy.visit(APP_ROUTES.rootRoute);

		cy.get(getCyElementTestSelector(elementTestSelector.header.nls.login))
			.as('hniLoginBtn')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.header.nls.register))
			.as('hniRegisterBtn')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.lp.heading))
			.as('lpHeading')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.lp.registerPnl))
			.as('registerPnl')
			.should('be.visible')
			.click();

		cy.get('@lpHeading').should('not.exist');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.rp.heading))
			.as('rpHeading')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.rp.loginPnl))
			.as('loginPnl')
			.should('be.visible')
			.click();

		cy.get('@rpHeading').should('not.exist');
		cy.get('@lpHeading').should('be.visible');
	});
});
