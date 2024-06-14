import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  const parentNode = document.getElementById('modal');
  return createPortal(children, parentNode);
};
