import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Hello, world!',
      user: {
        id: '1',
        username: 'Vasya',
        avatar:
          'https://static10.tgstat.ru/channels/_0/2a/2a39a2514814cb8f156a0b595744c835.jpg',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
