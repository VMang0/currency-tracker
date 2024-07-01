import { LoaderWrapper } from '@components/Loader/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Loader = () => <LoaderWrapper data-test-id={DATA_TEST_ID.LOADER} />;
