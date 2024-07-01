import { FC } from 'react';

import { Navbar } from '@components/Header/components/Navbar';
import { Blur, SideMenuContent, SideMenuWrapper } from '@components/Header/components/SideMenu/styled';
import { BurgerMenuPropsType } from '@components/Header/components/SideMenu/types';
import { Text } from '@styled/components/typography/styled';
import { stopPropagation } from '@utils/helpers/stopPropagation';

export const SideMenu: FC<BurgerMenuPropsType> = ({ onToggleMenu, isMenuOpen }) => (
  <SideMenuWrapper isMenuOpen={isMenuOpen}>
    <Blur onClick={onToggleMenu} />
    <SideMenuContent onClick={stopPropagation}>
      <Text>Menu</Text>
      <Navbar />
    </SideMenuContent>
  </SideMenuWrapper>
);
