import { FlexColumn } from '@styled/components/layout';
import { Text } from '@styled/components/typography ';

export const ContactsInfo = () => (
  <FlexColumn $gap="">
    <FlexColumn $gap="xxs">
      <Text $isLeftAlign size="xs" color="400">
        ADDRESS
      </Text>
      <Text $isLeftAlign size="s">
        Minsk, Belechcogo 50
      </Text>
    </FlexColumn>
    <FlexColumn $gap="xxs">
      <Text $isLeftAlign size="xs" color="400">
        PHONE
      </Text>
      <Text $isLeftAlign size="s">
        +375(44)73-39-153
      </Text>
    </FlexColumn>
    <FlexColumn $gap="xxs">
      <Text $isLeftAlign size="xs" color="400">
        EMAIL
      </Text>
      <Text $isLeftAlign size="s">
        valeriakorolkova2703@gmail.com
      </Text>
    </FlexColumn>
  </FlexColumn>
);
