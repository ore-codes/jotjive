import ThemeProvider from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Montagu_Slab } from 'next/font/google';
import '@/app/globals.css';
import { PropsWithChildren } from 'react';

const mainFont = Montagu_Slab({ subsets: ['latin'] });

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | JotJive',
    default: 'JotJive',
  },
};
