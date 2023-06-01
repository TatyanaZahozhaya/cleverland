import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { ApplicationRoutes } from './shared/routes';
import { persistor, store } from './shared/store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <ReduxProvider store={store}>
        <ApplicationRoutes />
      </ReduxProvider>
    </PersistGate>
  </React.StrictMode>
);
