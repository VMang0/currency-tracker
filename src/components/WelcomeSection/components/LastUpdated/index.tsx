import { useSelector } from 'react-redux';

import { ImpulseBadge } from '@components/ImpulseBadge';
import { lastUpdatedDateSelector } from '@redux/slices/currencySlice/selectors';
import { FlexCenter } from '@styled/components/layout/styled';
import { Text } from '@styled/components/typography/styled';
import { convertISOStringTo12HourFormat } from '@utils/helpers/convertTo12HourFormat';

export const LastUpdated = () => {
  const lastUpdatedDate = useSelector(lastUpdatedDateSelector);
  const convertedDate = convertISOStringTo12HourFormat(lastUpdatedDate);

  return (
    <FlexCenter gap="s">
      <ImpulseBadge />
      <Text size="m" color={600} lineHeight="s">
        Last updated at {convertedDate}
      </Text>
    </FlexCenter>
  );
};
