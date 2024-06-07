import {
  TitleWrapperStyled,
  WelcomeHeaderContentStyled,
  WelcomeHeaderStyled,
} from '@components/WelcomeSection/WelcomeHeader/styled';
import { LogoStyled } from '@styled/components/logo';
import { Text, Title } from '@styled/components/typography ';

export const WelcomeHeader = () => (
  <WelcomeHeaderStyled>
    <WelcomeHeaderContentStyled>
      <TitleWrapperStyled $gap="xs">
        <Title>Modsen currency</Title>
        <Title size="ex">Tracker</Title>
        <Text size="xs" color="secondary">
          Quotes for the dollar and other <br /> international currencies.
        </Text>
      </TitleWrapperStyled>
      <LogoStyled size="xl" $isSmallHidden />
    </WelcomeHeaderContentStyled>
  </WelcomeHeaderStyled>
);
