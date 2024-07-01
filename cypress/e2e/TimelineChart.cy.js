import { DATA_TEST_ID } from './data';
import { Path } from '@constants/path';
import { formatDateToShortISO } from '@pages/Timeline/utils/formatDateToShortISO';

describe('Timeline test', () => {
  beforeEach(() => {
    cy.visit(Path.TIMELINE);
  });

  it('should show chart with initially data', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.LOADER}]`).should('exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.LOADER}]`).should('not.exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.BAR_CHART}]`).should('exist');
  });
  it('should render the page components', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.INPUT_DATE}]`);
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(0).should('exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(1).should('exist');  })
  it('should update period value when period select is changed', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(0).should('exist').click();
    cy.get(`[data-test-id=select-item-10DAYS]`).click();
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT_INPUT}]`).eq(0).contains('10 Days').should('exist');
  });
  it('should update currency value when currency select is changed', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(1).should('exist').click();
    cy.get(`[data-test-id=select-item-BTC]`).click();
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT_INPUT}]`).eq(1)
      .contains('BTC - Bitcoins').should('exist');
  });
  it('should update date value when datepicker value is changed', () => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - 1)
    const formattedValue = formatDateToShortISO(targetDate.toString())
    cy.get(`[data-test-id=${DATA_TEST_ID.INPUT_DATE}]`).should('exist').click();
    cy.get(`[data-test-id=${DATA_TEST_ID.INPUT_DATE}]`).invoke('val').then((text) => {
      expect(formattedValue).to.equal(text);
    });
    cy.get(`[data-test-id=${DATA_TEST_ID.INPUT_DATE}]`).should('have.value', formattedValue);
  });
  it('should refetch data when period value is changed', () => {
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(0).should('exist').click();
    cy.get(`[data-test-id=select-item-10DAYS]`).click();
    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT_INPUT}]`).eq(0).contains('10 Days').should('exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.LOADER}]`).should('exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.LOADER}]`).should('not.exist');
    cy.get(`[data-test-id=${DATA_TEST_ID.BAR_CHART}]`).should('exist');
  });
});