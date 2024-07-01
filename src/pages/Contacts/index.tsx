import { ContactsForm } from '@components/forms/ContactsForm';
import { ContactsInfo } from '@pages/Contacts/components/ContactsInfo';
import { ContactsWrapper } from '@pages/Contacts/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Contacts = () => (
  <ContactsWrapper data-test-id={DATA_TEST_ID.CONTACTS_PAGE}>
    <ContactsInfo />
    <ContactsForm />
  </ContactsWrapper>
);
