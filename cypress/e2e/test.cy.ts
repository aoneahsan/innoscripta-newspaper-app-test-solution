/// <reference types="cypress" />

describe('Test#1 - Demo Test Cypress', () => {
	it('Check "Login" test is visible on login page', () => {
		cy.visit('/login');
		cy.get('.rt-r-w > .rt-Heading').then((res) => {
			const elText = res.text();

			cy.log(elText);
			expect(elText).toEqual('Login');
		});

		cy.log('just a simple log');
		console.log('in js console');
	});
});
