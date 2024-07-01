import { RootState } from '@redux/store';

export const searchQuerySelector = (state: RootState) => state.banks.searchQuery;
export const filteredOptionsSelector = (state: RootState) => state.banks.filteredOptions;
