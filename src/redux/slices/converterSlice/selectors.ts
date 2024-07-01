import { RootState } from '@redux/store';

export const currencyFromSelector = (state: RootState) => state.converter.currencyFrom;
export const currencyToSelector = (state: RootState) => state.converter.currencyTo;
export const ratioSelector = (state: RootState) => state.converter.ratio;
