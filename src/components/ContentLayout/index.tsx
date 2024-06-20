import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ContentLayoutStyled, PageWrapperStyled } from '@components/ContentLayout/styled';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { WelcomeSection } from '@components/WelcomeSection';

export const ContentLayout: FC = () => (
  <ContentLayoutStyled>
    <Header />
    <WelcomeSection />
    <PageWrapperStyled>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </PageWrapperStyled>
    <Footer />
  </ContentLayoutStyled>
);
