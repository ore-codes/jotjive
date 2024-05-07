import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import '@/app/globals.css';
import { themes } from '@storybook/theming';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
