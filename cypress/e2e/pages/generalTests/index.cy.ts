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
	it.skip('Login actions should be enabled if user is not signed in', () => {
		cy.visit(APP_ROUTES.rootRoute);

		cy.get(getCyElementTestSelector(elementTestSelector.header.nls.login))
			.as('hniLoginBtn')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.header.nls.register))
			.as('hniRegisterBtn')
			.should('be.visible');

		let currentUrlPath = window.location.pathname;
		console.log({ currentUrlPath, window, location: window.location });
		cy.wrap(currentUrlPath).should('eq', APP_ROUTES.login);

		cy.get(getCyElementTestSelector(elementTestSelector.pages.lp.heading))
			.as('lpHeading')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.lp.registerPnl))
			.as('registerPnl')
			.should('be.visible')
			.click();

		// because we navigated
		currentUrlPath = window.location.pathname;
		cy.wrap(currentUrlPath).should('eq', APP_ROUTES.register);

		cy.get('@lpHeading').should('not.exist');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.rp.heading))
			.as('rpHeading')
			.should('be.visible');

		cy.get(getCyElementTestSelector(elementTestSelector.pages.rp.loginPnl))
			.as('loginPnl')
			.should('be.visible')
			.click();

		currentUrlPath = window.location.pathname;
		cy.wrap(currentUrlPath).should('eq', APP_ROUTES.login);

		cy.get('@rpHeading').should('not.exist');
		cy.get('@lpHeading').should('be.visible');
	});

  it.only('testing app-location-info', () => {
    cy.visit(APP_ROUTES.register)
    cy.get(getCyElementTestSelector('app-location-info')).then(el => {
      const content = JSON.parse(el.text())

      console.log({ content, el })
    })
  })
});
