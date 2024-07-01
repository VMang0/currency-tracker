import { contactsInfo } from '@constants/contactsInfo';
import { FlexColumn } from '@styled/components/layout/styled';
import { Text } from '@styled/components/typography/styled';

export const ContactsInfo = () => (
  <FlexColumn>
    {Object.keys(contactsInfo).map((item) => (
      <FlexColumn key={item} gap="xxs">
        <Text isLeftAlign size="xs" color={400}>
          {item}
        </Text>
        <Text isLeftAlign size="s">
          {contactsInfo[item as keyof typeof contactsInfo]}
        </Text>
      </FlexColumn>
    ))}
  </FlexColumn>
);
