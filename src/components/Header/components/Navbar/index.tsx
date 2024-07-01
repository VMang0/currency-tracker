import { LinkGroup, LinkItem, NavbarLink, NavBarWrapper } from '@components/Header/components/Navbar/styled';
import { NAVBAR_LINKS } from '@constants/navbarLinks';

type NavbarLinkKeys = keyof typeof NAVBAR_LINKS;

export const Navbar = () => (
  <NavBarWrapper>
    <LinkGroup>
      {Object.keys(NAVBAR_LINKS).map((key) => (
        <LinkItem key={key}>
          <NavbarLink to={NAVBAR_LINKS[key as NavbarLinkKeys]}>{key}</NavbarLink>
        </LinkItem>
      ))}
    </LinkGroup>
  </NavBarWrapper>
);
