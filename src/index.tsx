import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@components/App';
import './index.css';
import { store } from '@redux/store';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw new Error('Root element not found');
}

const root: Root = createRoot(rootContainer);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
