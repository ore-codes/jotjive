'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import useThemeSwitcher from './hooks';
import Button from '@/components/Button';

export default function ThemeSwitcher() {
  const h = useThemeSwitcher();

  return (
    <Button variant="ghost" size="icon" onClick={h.toggleTheme}>
      {h.currentTheme() === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
