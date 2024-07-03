import { Path } from '@constants/path';
import { DATA_TEST_ID } from './data';

describe('CurrencyConverter', () => {
  beforeEach(() => {
    cy.visit(Path.HOME);
  });

  it('should have correctly ratio', () => {
    cy.get(`[data-test-id=card-item-Euro]`).click();
    cy.get(`[data-test-id=${DATA_TEST_ID.RATIO_VALUE}]`)
      .eq(0)
      .invoke('text')
      .then((text) => {
        const ratioText = text.trim();
        cy.get(`[data-test-id=${DATA_TEST_ID.RATIO_VALUE}]`).eq(1).should('contain.text', (1 / ratioText).toFixed(5));
      });
  });

  it('should convert currency correctly', () => {
    cy.get(`[data-test-id=card-item-Euro]`).click();
    const newValue = 100;
    const input1Selector = `[data-test-id=${DATA_TEST_ID.CONVERTER_INPUT}]:eq(0)`;
    const input2Selector = `[data-test-id=${DATA_TEST_ID.CONVERTER_INPUT}]:eq(1)`;

    cy.get(input1Selector).clear().type(newValue.toString());
    cy.get(`[data-test-id=${DATA_TEST_ID.RATIO_VALUE}]`)
      .eq(0)
      .invoke('text')
      .then((text) => {
        const ratioText = text.trim();
        cy.get(input2Selector).should('have.value', (newValue * ratioText).toString());
      });
  });
});