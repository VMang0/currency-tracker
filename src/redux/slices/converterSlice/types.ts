export type ConverterSliceInitialStateType = {
  isLoading: boolean;
  currencyFrom: string;
  currencyTo: string;
  ratio: number;
};

export type RejectedResponse = {
  message: string;
};
