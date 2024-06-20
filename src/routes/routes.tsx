import { FC } from 'react';
import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { ContentLayout } from '@components/ContentLayout';
import { Path } from '@constants/path';
import BankCard from '@pages/BankCard';
import { Contacts } from '@pages/Contacts';
import { Home } from '@pages/Home';
import Timeline from '@pages/Timeline';

export const Routes: FC = () => (
  <BrowserRoutes>
    <Route element={<ContentLayout />}>
      <Route exact path={Path.HOME} element={<Home />} />
      <Route exact path={Path.CONTACTS} element={<Contacts />} />
      <Route exact path={Path.TIMELINE} element={<Timeline />} />
      <Route exact path={Path.BANK_MAP} element={<BankCard />} />

      <Route path="*" element={<Navigate to={Path.HOME} />} />
    </Route>
  </BrowserRoutes>
);
