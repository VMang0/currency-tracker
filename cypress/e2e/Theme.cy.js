import { Path } from '@constants/path';
import { DATA_TEST_ID } from './data';

describe('Theme toggle test', () => {
  beforeEach(() => {
    cy.visit(Path.HOME);
  });

  it('should load with default theme from localStorage', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
  });

  it('should change theme when toggling', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.TOGGLE_THEME}]`).click();
    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 252)');
  });

  it('should remember selected theme after page reload', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.TOGGLE_THEME}]`).click();
    cy.reload();
    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 252)');
  });
});
