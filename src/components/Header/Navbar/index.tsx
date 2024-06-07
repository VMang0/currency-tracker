import { LinkGroupStyled, LinkItemStyled, LinkStyled, NavBarStyled } from '@components/Header/Navbar/styled';
import { Path } from '@constants/path';

export const Navbar = () => (
  <NavBarStyled>
    <LinkGroupStyled>
      <LinkItemStyled>
        <LinkStyled to={Path.HOME}>Home</LinkStyled>
      </LinkItemStyled>
      <LinkItemStyled>
        <LinkStyled to={Path.TIMELINE}>Timeline</LinkStyled>
      </LinkItemStyled>
      <LinkItemStyled>
        <LinkStyled to={Path.BANK_MAP}>Bank map</LinkStyled>
      </LinkItemStyled>
      <LinkItemStyled>
        <LinkStyled to={Path.CONTACTS}>Contacts</LinkStyled>
      </LinkItemStyled>
    </LinkGroupStyled>
  </NavBarStyled>
);
