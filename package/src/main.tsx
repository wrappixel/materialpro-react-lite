// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Spinner from './views/spinner/Spinner';
import './utils/i18n';
import { DashboardContextProvider } from './context/DashboardContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <DashboardContextProvider>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
    </DashboardContextProvider>
);
