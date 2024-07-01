import axios, { AxiosInstance } from 'axios';

const coinApiUrl = process.env.REACT_APP_COIN_API_URL as string;
const coinApiKey = process.env.REACT_APP_COIN_API_KEY as string;

export const coinAxios: AxiosInstance = axios.create({
  baseURL: coinApiUrl,
  headers: {
    Accept: 'text/plain',
    'X-CoinAPI-Key': coinApiKey,
  },
});
