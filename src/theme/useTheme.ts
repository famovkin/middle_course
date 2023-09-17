import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  console.log(newTheme)
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  const toggleTheme = () => setTheme(newTheme);

  return {
    theme: newTheme,
    toggleTheme,
  };
};
