import { FC, MouseEvent } from 'react';

import { Navbar } from '@components/Header/components/Navbar';
import { Blur, SideMenuContent, SideMenuWrapper } from '@components/Header/components/SideMenu/styled';
import { BurgerMenuPropsType } from '@components/Header/components/SideMenu/types';
import { Text } from '@styled/components/typography/styled';

export const SideMenu: FC<BurgerMenuPropsType> = ({ onToggleMenu, isMenuOpen }) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <SideMenuWrapper isMenuOpen={isMenuOpen}>
      <Blur onClick={onToggleMenu} />
      <SideMenuContent onClick={stopPropagation}>
        <Text>Menu</Text>
        <Navbar />
      </SideMenuContent>
    </SideMenuWrapper>
  );
};
