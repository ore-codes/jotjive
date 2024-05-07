import { Meta, StoryObj } from '@storybook/react';
import Header from './index';

export const Default: StoryObj<typeof Header> = {};

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
