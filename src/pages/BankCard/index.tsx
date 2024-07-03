import { PureComponent } from 'react';

import Map from '@pages/BankCard/components/Map';
import { SearchInput } from '@pages/BankCard/components/SearchInput';
import { BankCardWrapper, SearchTitle } from '@pages/BankCard/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

class BankCard extends PureComponent {
  render() {
    return (
      <BankCardWrapper data-test-id={DATA_TEST_ID.BANK_CARD_PAGE}>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchInput />
        <Map />
      </BankCardWrapper>
    );
  }
}

export default BankCard;
