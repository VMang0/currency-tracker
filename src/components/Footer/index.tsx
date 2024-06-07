import { FooterNavigation } from '@components/Footer/FooterNavigation';
import { FooterContentStyled, FooterStyled, LogoWrapperStyled } from '@components/Footer/styled';
import { FlexColumn } from '@styled/components/layout';
import { LogoStyled } from '@styled/components/logo';
import { SubTitle, Text } from '@styled/components/typography ';

export const Footer = () => (
  <FooterStyled>
    <FooterContentStyled>
      <FlexColumn>
        <LogoWrapperStyled>
          <LogoStyled />
          <SubTitle size="xs">Modsen Currency Tracker</SubTitle>
        </LogoWrapperStyled>
        <Text $lineHeight="s" size="xs" $isLeftAlign>
          Since then, the company has grown organically to. Starsup is the worlds largest trading platform, with $12
          billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.
        </Text>
      </FlexColumn>
      <FooterNavigation />
    </FooterContentStyled>
    <Text color="dark" size="xs">
      Startsup © Vmang0 2023-2024, All Rights Reserved
    </Text>
  </FooterStyled>
);
