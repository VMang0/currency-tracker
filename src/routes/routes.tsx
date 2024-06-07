import { FC } from 'react';
import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { ContentLayout } from '@components/ContentLayout';
import { Path } from '@constants/path';
import { Home } from '@pages/Home';

export const Routes: FC = () => (
  <BrowserRoutes>
    <Route element={<ContentLayout />}>
      <Route exact path={Path.HOME} element={<Home />} />
      <Route path="*" element={<Navigate to={Path.HOME} />} />
    </Route>
  </BrowserRoutes>
);
