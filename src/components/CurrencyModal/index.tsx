import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BackgroundStyled } from '@components/CurrencyModal/styled';
import { Portal } from '@components/Portal';
import { closeModal, isModalOpenSelector } from '@redux/slices/windowSlice';
import { AppDispatch } from '@redux/store';

export const CurrencyModal = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(isModalOpenSelector);

  const close = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    isOpen && (
      <Portal>
        <BackgroundStyled onClick={close}>{children}</BackgroundStyled>
      </Portal>
    )
  );
};
