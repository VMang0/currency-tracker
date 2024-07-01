import axios from 'axios';

const currencyApiUrl = process.env.REACT_APP_CURRENCY_API_URL as string;

export const currencyAxios = axios.create({
  baseURL: currencyApiUrl,
});
