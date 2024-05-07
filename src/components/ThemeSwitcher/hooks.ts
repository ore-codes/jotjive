import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export default function useThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = useCallback(() => {
    return theme === 'system' ? systemTheme : theme;
  }, [theme, systemTheme]);

  const toggleTheme = useCallback(() => {
    currentTheme() === 'light' ? setTheme('dark') : setTheme('light');
  }, [currentTheme, setTheme]);

  return { currentTheme, toggleTheme };
}
