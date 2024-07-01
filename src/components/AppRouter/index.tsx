import { FC } from 'react';
import { BrowserRouter, Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { ContentLayout } from '@components/ContentLayout';
import { Path } from '@constants/path';
import BankCard from '@pages/BankCard';
import { Contacts } from '@pages/Contacts';
import { Home } from '@pages/Home';
import Timeline from '@pages/Timeline';

export const Routes: FC = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route element={<ContentLayout />}>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.CONTACTS} element={<Contacts />} />
        <Route path={Path.TIMELINE} element={<Timeline />} />
        <Route path={Path.BANK_MAP} element={<BankCard />} />

        <Route path="*" element={<Navigate to={Path.HOME} />} />
      </Route>
    </BrowserRoutes>
  </BrowserRouter>
);
