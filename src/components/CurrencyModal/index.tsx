import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Background } from '@components/CurrencyModal/styled';
import { CurrencyModalPropsType } from '@components/CurrencyModal/types';
import { Portal } from '@components/Portal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useBodyOverflow } from '@hooks/useBodyOverflow';
import { closeModal } from '@redux/slices/windowSlice';
import { isModalOpenSelector } from '@redux/slices/windowSlice/selectors';

export const CurrencyModal: FC<CurrencyModalPropsType> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useSelector(isModalOpenSelector);

  const handleCloseModal = () => dispatch(closeModal());

  useBodyOverflow(isModalOpen);

  return (
    isModalOpen && (
      <Portal>
        <Background onClick={handleCloseModal}>{children}</Background>
      </Portal>
    )
  );
};
