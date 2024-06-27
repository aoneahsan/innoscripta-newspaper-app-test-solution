/// <reference types="cypress" />

import { ResponseCodeEnum } from '@/enums/backendApi';
import { RegisterFormFieldsEnum } from '@/enums/formData';
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

describe('Register Page E2E Tests', () => {
	beforeEach(() => {
		cy.visit(APP_ROUTES.register);
	});

	it.skip('Signup User with correct details', () => {
		const currentTime = new Date().getTime();

		// intercept "Register Api"
		cy.intercept(getCompleteApiUrl(API_URLS.register)).as('registerApiRequest');

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
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.name]
					.input
			)
		)
			.focus()
			.blur();

		cy.get('@rpSubmitBtn').should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.name]
					.input
			)
		).type(userAuthData.name + currentTime); // adding this to get a unique user name each time

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.email]
					.input
			)
		).type(getUniqueEmail(currentTime));
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.password
				].input
			)
		).type(userAuthData.password);
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.passwordConfirmation
				].input
			)
		)
			.type(userAuthData.password)
			.blur();

		cy.get('@rpSubmitBtn').should('be.enabled');
		cy.get('@rpResetBtn').should('be.enabled');

		cy.get('@rpSubmitBtn').click();

		cy.wait('@registerApiRequest').then((interceptResult) => {
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

	it.skip('Signup should fail it the user already exists, otherwise it should pass', () => {
		// intercept "Register Api"
		cy.intercept(getCompleteApiUrl(API_URLS.register)).as('registerApiRequest');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		).as('rpSubmitBtn');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.name]
					.input
			)
		).type(userAuthData.name);

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.email]
					.input
			)
		).type(userAuthData.email);
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.password
				].input
			)
		).type(userAuthData.password);
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.passwordConfirmation
				].input
			)
		)
			.type(userAuthData.password)
			.blur();

		cy.get('@rpSubmitBtn').should('be.enabled');

		cy.get('@rpSubmitBtn').click();

		cy.wait('@registerApiRequest').then((interceptResult) => {
			if (
				interceptResult.response?.body &&
				interceptResult.response?.body?.code
			) {
				const resBody = interceptResult.response?.body as IApiResponse<IUser>;

				if (resBody.code === ResponseCodeEnum.itemExists) {
					cy.get(
						getCyElementTestSelector(
							elementTestSelector.pages.rp.form.fields[
								RegisterFormFieldsEnum.email
							].errorMessage
						)
					).contains(CY_MESSAGES.user.exists);
				} else if (resBody.code === ResponseCodeEnum.success) {
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
				cy.log(MESSAGES.general.failed);
			}
		});
	});

	it.only('Error Messages should show if no valid data is provided and submit button is clicked - Register Page', () => {
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		).as('rpSubmitBtn');

		cy.get('@rpSubmitBtn').click().should('be.disabled');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.name]
					.errorMessage
			)
		)
			.as('rpNameFEM')
			.should('be.visible');
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.email]
					.errorMessage
			)
		)
			.as('rpEmailFEM')
			.should('be.visible');
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.password
				].errorMessage
			)
		)
			.as('rpPasswordFEM')
			.should('be.visible');
		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.passwordConfirmation
				].errorMessage
			)
		)
			.as('rpPasswordConfirmationFEM')
			.should('be.visible');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.name]
					.input
			)
		).type(userAuthData.name);
		cy.get('@rpNameFEM').should('not.exist');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[RegisterFormFieldsEnum.email]
					.input
			)
		).type(userAuthData.email);
		cy.get('@rpEmailFEM').should('not.exist');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.password
				].input
			)
		).type(userAuthData.password);
		cy.get('@rpPasswordFEM').should('not.exist');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.rp.form.fields[
					RegisterFormFieldsEnum.passwordConfirmation
				].input
			)
		).type(userAuthData.password);
		cy.get('@rpPasswordConfirmationFEM').should('not.exist');

		cy.get('@rpSubmitBtn').should('be.enabled');
	});
});
