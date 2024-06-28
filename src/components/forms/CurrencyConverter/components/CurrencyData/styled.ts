import styled from 'styled-components';

export const CurrencyDataWrapper = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Ratio = styled.p`
  color: ${({ theme }) => theme.themeColors[400]};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.xxxs};
`;

export const CurrencyInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.themeColors[700]};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.s};
  &:focus {
    outline: none;
  }
`;
