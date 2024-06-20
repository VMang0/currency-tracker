import axios from 'axios';

type FormDataType = {
  email: string;
  name: string;
  comment: string;
};

const getFormUrl = process.env.REACT_APP_GET_FORM_URL;

export const sendComment = async (data: FormDataType) => {
  try {
    await axios.post(getFormUrl, data);
  } catch (e) {
    throw new Error(e);
  }
};
