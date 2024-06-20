import { FC, memo } from 'react';

import { ToggleInputStyled, ToggleLabelStyled } from '@components/Header/ToggleTheme/styled';

import { DATA_TEST_ID } from '../../../../cypress/e2e/data.ts';

type ToggleThemePropsType = {
  onToggleTheme: () => void;
  isDarkTheme: boolean;
};

export const ToggleTheme: FC<ToggleThemePropsType> = memo(({ onToggleTheme, isDarkTheme }) => {
  return (
    <ToggleLabelStyled htmlFor="switch" $isDarkTheme={isDarkTheme} data-test-id={DATA_TEST_ID.TOGGLE_THEME}>
      Toggle
      <ToggleInputStyled type="checkbox" id="switch" checked={isDarkTheme} onChange={onToggleTheme} />
    </ToggleLabelStyled>
  );
});

ToggleTheme.displayName = 'ToggleTheme';
