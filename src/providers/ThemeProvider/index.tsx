'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { PropsWithChildren, useEffect, useState } from 'react';

export default function ThemeProvider(props: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return props.children;

  return (
    <NextThemeProvider enableSystem={true} attribute="class">
      <div className="text-dark dark:text-light">{props.children}</div>
    </NextThemeProvider>
  );
}
