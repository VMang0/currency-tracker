import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ContentLayoutWrapper, PageWrapper } from '@components/ContentLayout/styled';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { WelcomeSection } from '@components/WelcomeSection';

export const ContentLayout: FC = () => (
  <ContentLayoutWrapper>
    <Header />
    <WelcomeSection />
    <PageWrapper>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </PageWrapper>
    <Footer />
  </ContentLayoutWrapper>
);
