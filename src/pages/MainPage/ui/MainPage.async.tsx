import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  setTimeout(resolve, 1000);
}).then(() => import('./MainPage')));
