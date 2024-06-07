import { LastUpdated } from '@components/WelcomeSection/LastUpdated';
import { WelcomeHeader } from '@components/WelcomeSection/WelcomeHeader';
import { FlexColumn } from '@styled/components/layout';

export const WelcomeSection = () => (
  <FlexColumn $gap="l">
    <WelcomeHeader />
    <LastUpdated />
  </FlexColumn>
);
