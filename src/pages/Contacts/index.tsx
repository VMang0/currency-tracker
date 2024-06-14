import { ContactsForm } from '@pages/Contacts/ContactsForm';
import { ContactsInfo } from '@pages/Contacts/ContactsInfo';
import { ContactsStyled } from '@pages/Contacts/styled';

export const Contacts = () => (
  <ContactsStyled>
    <ContactsInfo />
    <ContactsForm />
  </ContactsStyled>
);
