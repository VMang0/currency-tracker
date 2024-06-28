import { useState } from 'react';

import { Navbar } from '@components/Header/components/Navbar';
import { SideMenu } from '@components/Header/components/SideMenu';
import { ToggleTheme } from '@components/Header/components/ToggleTheme';
import { BurgerIcon, ButtonsWrapper, HeaderContent, HeaderWrapper } from '@components/Header/styled';
import { useScreenSize } from '@hooks/useScreenSize';
import { Logo } from '@styled/components/logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSmallScreen } = useScreenSize();

  const onToggleMenu = () => setIsMenuOpen((state) => !state);

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        {!isSmallScreen && <Navbar />}
        <ButtonsWrapper>
          <ToggleTheme />
          {isSmallScreen && (
            <>
              <BurgerIcon type="button" onClick={onToggleMenu} />
              <SideMenu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
            </>
          )}
        </ButtonsWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};
