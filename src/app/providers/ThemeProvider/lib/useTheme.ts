import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    let newTheme: Theme;
    // const newTheme = Theme.YELLOW;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.YELLOW;
      break;
    case Theme.YELLOW:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    console.log('newTheme:', newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
    document.body.className = newTheme;
  };

  return {
    theme: theme || Theme.YELLOW,
    toggleTheme,
  };
};
