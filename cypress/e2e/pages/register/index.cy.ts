/// <reference types="cypress" />
import { APP_ROUTES } from './../../utils/constants';

describe('Register Page E2E Tests', () => {
	beforeEach(() => {
		cy.visit(APP_ROUTES.register);
	});

	it('Signup User with correct details', () => {
    cy.log('okay')
  });
});
