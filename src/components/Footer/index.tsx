import { FooterNavigation } from '@components/Footer/components/FooterNavigation';
import { FooterContent, FooterWrapper, LogoWrapper } from '@components/Footer/styled';
import { FlexColumn } from '@styled/components/layout/styled';
import { Logo } from '@styled/components/logo/styled';
import { SubTitle, Text } from '@styled/components/typography/styled';

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FlexColumn>
        <LogoWrapper>
          <Logo />
          <SubTitle size="xs">Modsen Currency Tracker</SubTitle>
        </LogoWrapper>
        <Text size="xs" isLeftAlign>
          Since then, the company has grown organically to. Starsup is the worlds largest trading platform, with $12
          billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.
        </Text>
      </FlexColumn>
      <FooterNavigation />
    </FooterContent>
    <Text color={400} size="xs">
      Startsup © Vmang0 2023-2024, All Rights Reserved
    </Text>
  </FooterWrapper>
);
