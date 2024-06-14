import styled from 'styled-components';

import ArrowDropUp from '@assets/icons/arrow-up-icon.svg';

export const SelectStyled = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`;

export const SelectInputStyled = styled.div`
  width: 100%;
  height: 44px;
  border-radius: ${({ $isOpen }) => ($isOpen ? '18px 18px 0 0' : '18px')};
  border: none;
  padding: 11px 16px;
  font-size: 15px;
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(-50%, -50%) ${({ $isOpen }) => ($isOpen ? 'rotate(0)' : 'rotate(180deg)')};
  }
  box-sizing: border-box;
`;

export const SelectListStyled = styled.ul`
  top: 44px;
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.themeColors[200]};
  border-radius: 18px;
  max-height: 140px;
  overflow-y: auto;
  z-index: 100;
`;

export const SelectListItemStyled = styled.li`
  padding: 11px 16px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green[400]};
  }
  &:last-child:hover {
    border-radius: 0 0 18px 18px;
    background-color: ${({ theme }) => theme.colors.green[400]};
  }
`;

export const ArrowStyled = styled(ArrowDropUp)`
  width: 20px;
`;
