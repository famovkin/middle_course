import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

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
      <AppRouter />
    </div>
  );
};

export default App;
