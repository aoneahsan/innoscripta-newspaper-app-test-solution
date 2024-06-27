import TestingWrapperHOC from '@/HOC/TestingWrapperHOC';
import Header from '@/components/Header';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { getCyElementTestSelector } from '@cy/utils/helpers';

describe('Heading Component Testing', () => {
	it('Test that header component shows Logo, Login and register button', () => {
		cy.mount(
			<TestingWrapperHOC>
				<Header />
			</TestingWrapperHOC>
		);

		cy.get(getCyElementTestSelector(elementTestSelector.header.logo)).should(
			'be.visible'
		);

		cy.get(
			getCyElementTestSelector(elementTestSelector.header.nls.login)
		).should('be.visible');

		cy.get(
			getCyElementTestSelector(elementTestSelector.header.nls.register)
		).should('be.visible');

		cy.get(
			getCyElementTestSelector(elementTestSelector.header.nls.searchArticles)
		).should('not.exist');
	});
});
