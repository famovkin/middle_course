import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Main</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
