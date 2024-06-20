import { useSelector } from 'react-redux';

import { ImpulseBadge } from '@components/ImpulseBadge';
import { lastUpdatedDateSelector } from '@redux/slices/currencySlice';
import { FlexCenter } from '@styled/components/layout';
import { Text } from '@styled/components/typography ';
import { convertTo12HourFormat } from '@utils/helpers/convertTo12HourFormat';

export const LastUpdated = () => {
  const lastUpdatedDate = useSelector(lastUpdatedDateSelector);
  const convertedDate = convertTo12HourFormat(lastUpdatedDate);

  return (
    <FlexCenter $gap="s">
      <ImpulseBadge />
      <Text size="m" color="600" $lineHeight="s">
        Last updated at {convertedDate ?? '11:59pm'}
      </Text>
    </FlexCenter>
  );
};
