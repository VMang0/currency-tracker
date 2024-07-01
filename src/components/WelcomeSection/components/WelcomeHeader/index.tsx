import {
  TitleWrapper,
  WelcomeHeaderContent,
  WelcomeHeaderWrapper,
} from '@components/WelcomeSection/components/WelcomeHeader/styled';
import { Logo } from '@styled/components/logo/styled';
import { Text, Title } from '@styled/components/typography/styled';

export const WelcomeHeader = () => (
  <WelcomeHeaderWrapper>
    <WelcomeHeaderContent>
      <TitleWrapper gap="xs">
        <Title>Modsen currency</Title>
        <Title size="exl">Tracker</Title>
        <Text size="xs" color={600}>
          Quotes for the dollar and other <br /> international currencies.
        </Text>
      </TitleWrapper>
      <Logo size="xl" isSmallHidden />
    </WelcomeHeaderContent>
  </WelcomeHeaderWrapper>
);
