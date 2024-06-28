import axios from 'axios';

import { FormDataType } from '@api/comment/types';
import { handleError } from '@utils/helpers/errorHandler';

const getFormUrl = process.env.REACT_APP_GET_FORM_URL as string;

export const sendComment = async (data: FormDataType) => {
  try {
    await axios.post(getFormUrl, data);
  } catch (e: unknown) {
    throw handleError(e);
  }
};
