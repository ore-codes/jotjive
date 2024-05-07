import { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './index';

export const Default: StoryObj<typeof ThemeSwitcher> = {};

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
