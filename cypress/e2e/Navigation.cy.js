import { Path } from '@constants/path';
import { DATA_TEST_ID } from './data';

describe('Navigation test', () => {
  it('should have the home page id', () => {
    cy.visit(Path.HOME);
    cy.get(`[data-test-id=${DATA_TEST_ID.HOME_PAGE}]`).should('exist');
  });
  it('should have the contacts page id', () => {
    cy.visit(Path.CONTACTS);
    cy.get(`[data-test-id=${DATA_TEST_ID.CONTACTS_PAGE}]`).should('exist');
  });
  it('should have the timeline page id', () => {
    cy.visit(Path.TIMELINE);
    cy.get(`[data-test-id=${DATA_TEST_ID.TIMELINE_PAGE}]`).should('exist');
  });
  it('should have the bank card page id', () => {
    cy.visit(Path.BANK_MAP);
    cy.get(`[data-test-id=${DATA_TEST_ID.BANK_CARD_PAGE}]`).should('exist');
  });
  it('should redirect to home page for unknown path', () => {
    cy.visit('/non-existent-path');
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get(`[data-test-id=${DATA_TEST_ID.HOME_PAGE}]`).should('exist');
  });
});