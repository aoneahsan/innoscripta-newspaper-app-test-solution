/// <reference types="cypress" />

import { APP_ROUTES } from '@/utils/constants';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { userAuthData } from '@cy/data/user';
import { getCyElementTestSelector, getUniqueEmail } from '@cy/utils/helpers';

describe('Register Page E2E Tests', () => {
	beforeEach(() => {
		cy.visit(APP_ROUTES.register);
	});

	it.skip('Signup User with correct details', () => {
		const currentTime = new Date().getTime();

		cy.get(
			getCyElementTestSelector(elementTestSelector.pages.rp.form.actions.submit)
		).as('rpSubmitBtn');
		cy.get(
			getCyElementTestSelector(elementTestSelector.pages.rp.form.actions.reset)
		).as('rpResetBtn');

		cy.get('@rpResetBtn').should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields.name.input
			)
		)
			.focus()
			.blur();

		cy.get('@rpSubmitBtn').should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields.name.input
			)
		).type(userAuthData.name + currentTime); // adding this to get a unique user name each time

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields.email.input
			)
		).type(getUniqueEmail(currentTime));
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields.password.input
			)
		).type(userAuthData.password);
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields.passwordConfirmation.input
			)
		)
			.type(userAuthData.password)
			.blur();

		cy.get('@rpSubmitBtn').should('be.enabled');
		cy.get('@rpResetBtn').should('be.enabled');

		// cy.get('@rpResetBtn').click();
		cy.get('@rpSubmitBtn').click();
	});

	it('Trying SignUp with existing user details - it should fail', () => {
		cy.log('okay, ready for start')
	})
});
