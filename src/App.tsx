import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
