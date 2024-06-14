import axios from 'axios';

export const sendComment = async (data) => {
  try {
    await axios.post('https://getform.io/f/lakmqnea', data);
  } catch (e) {
    throw new Error(e);
  }
};
