import { Meta, StoryObj } from '@storybook/react';
import ArticleCard from './index';

export const Default: StoryObj<typeof ArticleCard> = {
  args: {
    post: {
      _id: 'test',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        name: 'John Doe',
      },
    },
  },
};

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
