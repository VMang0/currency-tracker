import { ContactsForm } from '@pages/Contacts/ContactsForm';
import { ContactsInfo } from '@pages/Contacts/ContactsInfo';
import { ContactsStyled } from '@pages/Contacts/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

export const Contacts = () => (
  <ContactsStyled data-test-id={DATA_TEST_ID.CONTACTS_PAGE}>
    <ContactsInfo />
    <ContactsForm />
  </ContactsStyled>
);
