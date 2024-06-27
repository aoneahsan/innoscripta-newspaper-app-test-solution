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

describe('MyAccount Page E2E Tests', () => {
	beforeEach(() => {
		cy.wrap(authenticateUser()).then((result) => {
			if (result) {
				cy.log('User authenticated successfully!');
				cy.visit(APP_ROUTES.myAccount);
			} else {
				cy.log('User authentication failed!');
			}
		});
	});

	it.only('Update User Data Successfully - MyAccount Page', () => {
		// * Uncomment the following line to intercept fetch apis and speed up the test flow (data will be mock data, not the actual server data then).
		// interceptStabApiResponse({ getUserData: true, updateUserStatus: true });

		cy.intercept(getCompleteApiUrl(API_URLS.updateUserData)).as(
			'updatedUserDataApiRequest'
		);

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.myAccount.form.fields[
					UserAccountDataFormFieldsEnum.name
				].input
			)
		).as('myapNameField');

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.components.formActions.submit
			)
		)
			.as('submitButton')
			.should('be.enabled');

		cy.get(
			getCyElementTestSelector(elementTestSelector.components.formActions.reset)
		)
			.as('resetButton')
			.should('be.disabled');

		cy.get('@myapNameField').clear().blur();

		cy.get(
			getCyElementTestSelector(
				elementTestSelector.pages.myAccount.form.fields[
					UserAccountDataFormFieldsEnum.name
				].errorMessage
			)
		)
			.as('myapNameFEM')
			.should('be.visible');

		cy.get('@resetButton').should('be.enabled');
		cy.get('@submitButton').should('be.disabled');

		cy.get('@myapNameFEM').should('be.visible');

		const currentTime = new Date().getTime();
		const updatedName = apisMockData.getUserData.result.data.name + currentTime;
		cy.get('@myapNameField').type(updatedName);

		cy.get('@myapNameFEM').should('not.exist');

		cy.get('@resetButton').should('be.enabled');

		cy.get('@submitButton').should('be.enabled').click();

		cy.wait('@updatedUserDataApiRequest').then((interceptResult) => {
			const resBody = interceptResult.response?.body as IApiResponse<IUser>;
			const resData = resBody.result?.data;

			if (resData?.id) {
				cy.wrap(resData.name).should('eq', updatedName);
			}
		});
	});
});
