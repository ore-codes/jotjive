import { Meta, StoryObj } from '@storybook/react';
import ContributeAdCard from './index';

export const Default: StoryObj<typeof ContributeAdCard> = {};

const meta: Meta<typeof ContributeAdCard> = {
  component: ContributeAdCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
