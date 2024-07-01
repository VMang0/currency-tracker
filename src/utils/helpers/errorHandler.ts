import { AxiosError } from 'axios';

export const handleError = (error: unknown): Error => {
  if (error instanceof AxiosError) {
    return new Error(error.response?.data.message || 'Failed to fetch data');
  }
  if (error instanceof Error) {
    return new Error(error.message);
  }
  return new Error(JSON.stringify(error));
};
