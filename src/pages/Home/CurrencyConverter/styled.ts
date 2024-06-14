import styled from 'styled-components';

export const CurrencyModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  width: 500px;
  background-color: ${({ theme }) => theme.themeColors[100]};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spaces.l} ${theme.spaces.s}`};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;

export const ModalTitle = styled.h2`
  font-weight: 300;
  display: inline-block;
  color: ${({ theme }) => theme.themeColors[700]};
  text-align: start;
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.s};
  line-height: ${({ theme, $lineHeight }) => theme.lineHeight[$lineHeight] || theme.lineHeight.m};
`;

export const CurrencyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RatioStyled = styled.p`
  color: ${({ theme }) => theme.themeColors[400]};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.xxxs};
`;

export const CurrencyDataStyled = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LineStyled = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.themeColors[400]};
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
