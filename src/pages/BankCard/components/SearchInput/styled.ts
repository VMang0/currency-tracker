import styled from 'styled-components';

import Icon from '@assets/icons/search-icon.svg';

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  max-width: 450px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 19px 20px;
  font-size: 18px;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.themeColors[100]};
  color: ${({ theme }) => theme.themeColors[700]};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.green[100]};
  }
  &:focus + svg path {
    fill: ${({ theme }) => theme.colors.green[100]};
  }
`;

export const DropdownList = styled.ul`
  top: 70px;
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.themeColors[100]};
  border-radius: 8px;
  max-height: 140px;
  overflow-y: auto;
  z-index: 2;
`;

export const DropdownItem = styled.li`
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

export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 19px;
`;
