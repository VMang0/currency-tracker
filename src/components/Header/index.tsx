import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '@components/Header/Navbar';
import { HeaderContentStyled, HeaderStyled } from '@components/Header/styled';
import { Theme } from '@constants/theme';
import { useScreenSize } from '@hooks/useScreenSize';
import { changeTheme, themeSelector } from '@redux/slices/themeSlice';
import { LogoStyled } from '@styled/components/logo';

export const Header = () => {
  const dispatch = useDispatch();
  const { isSmallScreen } = useScreenSize();
  const theme = useSelector(themeSelector);
  const isDarkTheme = theme === Theme.DARK;

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? Theme.LIGHT : Theme.DARK;
    dispatch(changeTheme(newTheme));
  };

  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <LogoStyled />
        {!isSmallScreen && <Navbar />}
        <button type="button" onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
