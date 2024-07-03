import { createSelector } from '@reduxjs/toolkit';

import { currencyData } from '@constants/currency';
import { RootState } from '@redux/store';

export const searchQuerySelector = (state: RootState) => state.banks.searchQuery;

export const filteredOptionsSelector = createSelector([searchQuerySelector], (searchQuery) => {
  if (!searchQuery) return currencyData;
  return currencyData.filter(
    (option) =>
      option.value.includes(searchQuery.toUpperCase()) ||
      option.label.toUpperCase().includes(searchQuery.toUpperCase()),
  );
});
