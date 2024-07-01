/// <reference types="cypress" />

import { ResponseCodeEnum } from '@/enums/backendApi';
import { LoginFormFieldsEnum } from '@/enums/formData';
import { IApiResponse } from '@/types/backendApi';
import { IUser } from '@/types/userData';
import { API_URLS, APP_ROUTES } from '@/utils/constants';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { MESSAGES } from '@/utils/messages';
import { userAuthData } from '@cy/data/user';
import {
	getCompleteApiUrl,
	getCyElementTestSelector,
	getUniqueEmail,
} from '@cy/utils/helpers';
import { CY_MESSAGES } from '@cy/utils/messages';

describe('Login Page E2E Tests', () => {
	beforeEach(() => {
		cy.visit(APP_ROUTES.login);
	});

	it.skip('SignIn User with correct details', () => {
		// intercept "Login Api"
		cy.intercept(getCompleteApiUrl(API_URLS.login)).as('loginApiRequest');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		).as('rpSubmitBtn');
		cy.get(
			getCyElementTestSelector(elementTestSelector.components.formActions.reset)
		).as('rpResetBtn');

		cy.get('@rpResetBtn').should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.email]
					.input
			)
		)
			.focus()
			.blur();

		cy.get('@rpSubmitBtn').should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.email]
					.input
			)
		).type(userAuthData.email);

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.password]
					.input
			)
		)
			.type(userAuthData.password)
			.blur();

		cy.get('@rpSubmitBtn').should('be.enabled');
		cy.get('@rpResetBtn').should('be.enabled');

		cy.get('@rpSubmitBtn').click();

		cy.wait('@loginApiRequest').then((interceptResult) => {
			if (
				interceptResult.response?.body &&
				interceptResult.response?.body?.code
			) {
				const resBody = interceptResult.response?.body as IApiResponse<IUser>;

				if (resBody.code === ResponseCodeEnum.success) {
					// logout button should be visible
					cy.get(
						getCyElementTestSelector(elementTestSelector.components.logout)
					)
						.should('be.visible')
						.should('be.enabled');
				} else {
					cy.contains(MESSAGES.general.failed).should('not.exist');
				}
			} else {
				cy.contains(CY_MESSAGES.general.invalidApiResponse).should('not.exist');
			}
		});
	});

	it.skip('SignIn User with incorrect details', () => {
		const currentTime = new Date().getTime();

		// intercept "Login Api"
		cy.intercept(getCompleteApiUrl(API_URLS.login)).as('loginApiRequest');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		).as('rpSubmitBtn');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.email]
					.input
			)
		).type(getUniqueEmail(currentTime));

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.password]
					.input
			)
		)
			.type(userAuthData.password)
			.blur();

		cy.get('@rpSubmitBtn').should('be.enabled');

		cy.get('@rpSubmitBtn').click();

		cy.wait('@loginApiRequest').then((interceptResult) => {
			if (
				interceptResult.response?.body &&
				interceptResult.response?.body?.code
			) {
				const resBody = interceptResult.response?.body as IApiResponse<IUser>;

				if (resBody.code === ResponseCodeEnum.notFound) {
					// user not found error should be visible
					cy.get(
						getCyElementTestSelector(
							elementTestSelector.pages.lp.form.fields[
								LoginFormFieldsEnum.email
							].errorMessage
						)
					).should('be.visible');
				} else {
					cy.contains(MESSAGES.general.failed).should('not.exist');
				}
			} else {
				cy.contains(CY_MESSAGES.general.invalidApiResponse).should('not.exist');
			}
		});
	});

	it.only('Error Messages should show if no valid data is provided and submit button is clicked - Login Page', () => {
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		).as('rpSubmitBtn');

		cy.get('@rpSubmitBtn').click().should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.email]
					.errorMessage
			)
		)
			.as('lpEmailFEM')
			.should('be.visible');
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.email]
					.input
			)
		).type(userAuthData.email);
		cy.get('@lpEmailFEM').should('not.exist');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.password]
					.errorMessage
			)
		)
			.as('lpPasswordFEM')
			.should('be.visible');
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.lp.form.fields[LoginFormFieldsEnum.password]
					.input
			)
		).type(userAuthData.password);
		cy.get('@lpPasswordFEM').should('not.exist');

		cy.get('@rpSubmitBtn').should('be.enabled');
	});
});
