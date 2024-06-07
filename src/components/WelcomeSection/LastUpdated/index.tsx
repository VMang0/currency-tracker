import { ImpulseBadge } from '@components/ImpulseBadge';
import { LastUpdatedStyled } from '@components/WelcomeSection/LastUpdated/styled';
import { Text } from '@styled/components/typography ';

export const LastUpdated = () => (
  <LastUpdatedStyled>
    <ImpulseBadge />
    <Text size="m" color="secondary" $lineHeight="s">
      Last updated at 11:59pm
    </Text>
  </LastUpdatedStyled>
);
