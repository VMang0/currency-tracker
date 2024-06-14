import axios, { AxiosInstance } from 'axios';

const currencyApiUrl = process.env.REACT_APP_CURRENCY_API_URL;
const coinApiUrl = process.env.REACT_APP_COIN_API_URL;
const coinApiKey = process.env.REACT_APP_COIN_API_KEY;

export const currencyAxios = axios.create({
  baseURL: currencyApiUrl,
});

export const coinAxios: AxiosInstance = axios.create({
  baseURL: coinApiUrl,
  headers: {
    Accept: 'text/plain',
    'X-CoinAPI-Key': coinApiKey,
  },
});
