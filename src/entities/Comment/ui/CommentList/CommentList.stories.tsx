import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hello, world!',
        user: {
          id: '1',
          username: 'Vasya',
          avatar:
            'https://static10.tgstat.ru/channels/_0/2a/2a39a2514814cb8f156a0b595744c835.jpg',
        },
      },
      {
        id: '2',
        text: 'Foo',
        user: {
          id: '2',
          username: 'Petya',
          avatar:
            'https://static10.tgstat.ru/channels/_0/2a/2a39a2514814cb8f156a0b595744c835.jpg',
        },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
