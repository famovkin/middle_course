import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPageLazy } from './pages/AboutPage/AboutPage.async';
import { MainPageLazy } from './pages/MainPage/MainPage.async';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Main</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
