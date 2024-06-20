import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '@components/Header/Navbar';
import { SideMenu } from '@components/Header/SideMenu';
import { BurgerIconStyled, ButtonsWrapper, HeaderContentStyled, HeaderStyled } from '@components/Header/styled';
import { ToggleTheme } from '@components/Header/ToggleTheme';
import { Theme } from '@constants/theme';
import { useScreenSize } from '@hooks/useScreenSize';
import { changeTheme, themeSelector } from '@redux/slices/themeSlice';
import { LogoStyled } from '@styled/components/logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isSmallScreen } = useScreenSize();
  const theme = useSelector(themeSelector);
  const isDarkTheme = theme === Theme.DARK;

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? Theme.LIGHT : Theme.DARK;
    dispatch(changeTheme(newTheme));
  };

  const onToggleMenu = () => setIsMenuOpen((state) => !state);

  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <LogoStyled />
        {!isSmallScreen && <Navbar />}
        <ButtonsWrapper>
          <ToggleTheme onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          {isSmallScreen && (
            <>
              <BurgerIconStyled type="button" onClick={onToggleMenu} />
              <SideMenu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
            </>
          )}
        </ButtonsWrapper>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
