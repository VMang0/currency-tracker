import React, { Component } from 'react';

import Map from '@components/Map';
import { CurrencySearch } from '@components/SearchInput';
import { currencyData } from '@constants/currency';
import { BankCardStyled, SearchTitle } from '@pages/BankCard/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

type BankCardPropsType = object;
type BankCardStateType = {
  searchQuery: string;
  filteredOptions: string[];
};

export default class BankCard extends Component<BankCardPropsType, BankCardStateType> {
  state: BankCardStateType = {
    searchQuery: '',
    filteredOptions: currencyData,
  };

  componentDidUpdate(prevProps: BankCardPropsType, prevState: BankCardStateType) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      const filteredOptions = this.filterCurrencies(searchQuery);
      this.setState({
        filteredOptions,
      });
    }
  }

  setSearchQuery = (value: string) => {
    this.setState({
      searchQuery: value,
    });
  };

  // eslint-disable-next-line class-methods-use-this
  filterCurrencies = (searchQuery: string) => {
    return currencyData.filter(
      (option) =>
        option.value.includes(searchQuery.toUpperCase()) ||
        option.label.toUpperCase().includes(searchQuery.toUpperCase()),
    );
  };

  render() {
    const { filteredOptions, searchQuery } = this.state;

    return (
      <BankCardStyled data-test-id={DATA_TEST_ID.BANK_CARD_PAGE}>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <CurrencySearch filteredOptions={filteredOptions} setSearchQuery={this.setSearchQuery} />
        <Map searchQuery={searchQuery} />
      </BankCardStyled>
    );
  }
}
