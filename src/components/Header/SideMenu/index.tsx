import { FC } from 'react';

import { Navbar } from '@components/Header/Navbar';
import { BlurStyled, SideMenuContentStyled, SideMenuStyled } from '@components/Header/SideMenu/styled';
import { Text } from '@styled/components/typography ';

type BurgerMenuPropsType = {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
};

export const SideMenu: FC<BurgerMenuPropsType> = ({ onToggleMenu, isMenuOpen }) => (
  <SideMenuStyled $isMenuOpen={isMenuOpen}>
    <BlurStyled onClick={onToggleMenu} />
    <SideMenuContentStyled onClick={(event) => event.stopPropagation()}>
      <Text>Menu</Text>
      <Navbar />
    </SideMenuContentStyled>
  </SideMenuStyled>
);
