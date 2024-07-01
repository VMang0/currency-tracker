import axios from 'axios';

const mapApiUrl = process.env.REACT_APP_MAP_BOX_API_URL as string;

export const mapBoxAxios = axios.create({
  baseURL: mapApiUrl,
});
