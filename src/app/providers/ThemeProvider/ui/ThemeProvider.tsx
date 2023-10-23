import {
  useState, useMemo, FC, useCallback,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const toggleTheme = useCallback(() => setTheme(theme === Theme.LIGHT
    ? Theme.DARK
    : Theme.LIGHT), [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme: toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
