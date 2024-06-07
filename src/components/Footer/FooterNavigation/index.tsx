import { Link } from 'react-router-dom';

import { footerData, footerLabels } from '@components/Footer/FooterNavigation/data';
import { FooterNavigationStyled, NavigationItem, NavigationList } from '@components/Footer/FooterNavigation/styled';
import { Path } from '@constants/path';
import { FlexColumn } from '@styled/components/layout';
import { Text } from '@styled/components/typography ';

export const FooterNavigation = () => (
  <FooterNavigationStyled>
    {footerLabels.map((label, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <FlexColumn key={index}>
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
  </FooterNavigationStyled>
);
