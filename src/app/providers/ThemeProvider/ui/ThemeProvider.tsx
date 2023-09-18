import { useState, useMemo, FC } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () =>
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
