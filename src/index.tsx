import isPropValid from '@emotion/is-prop-valid';
import { ReactNode, StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components';

import { App } from '@components/App';
import { store } from '@redux/store';

import './index.css';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw new Error('Root element not found');
}

const root: Root = createRoot(rootContainer);
root.render(
  (
    <StrictMode>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <Provider store={store}>
          <App />
        </Provider>
      </StyleSheetManager>
    </StrictMode>
  ) as ReactNode,
);
