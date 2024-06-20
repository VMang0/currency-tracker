import { StyledLoader } from '@components/Loader/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

export const Loader = () => <StyledLoader data-test-id={DATA_TEST_ID.LOADER} />;
