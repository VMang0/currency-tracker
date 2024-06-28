import { Link } from 'react-router-dom';

import { footerData, footerLabels } from '@components/Footer/components/FooterNavigation/data';
import {
  FooterNavigationWrapper,
  NavigationItem,
  NavigationList,
} from '@components/Footer/components/FooterNavigation/styled';
import { Path } from '@constants/path';
import { FlexColumn } from '@styled/components/layout';
import { Text } from '@styled/components/typography ';

export const FooterNavigation = () => (
  <FooterNavigationWrapper>
    {footerLabels.map((label, index) => (
      <FlexColumn key={label}>
        <Text $lineHeight="s">{label}</Text>
        <NavigationList>
          <NavigationItem>
            <Link to={Path.HOME}>{footerData[index].firstLink}</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to={Path.HOME}>{footerData[index].secondLink}</Link>
          </NavigationItem>
        </NavigationList>
      </FlexColumn>
    ))}
  </FooterNavigationWrapper>
);
