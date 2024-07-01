import { LastUpdated } from '@components/WelcomeSection/components/LastUpdated';
import { WelcomeHeader } from '@components/WelcomeSection/components/WelcomeHeader';
import { FlexColumn } from '@styled/components/layout/styled';

export const WelcomeSection = () => (
  <FlexColumn gap="l">
    <WelcomeHeader />
    <LastUpdated />
  </FlexColumn>
);
