import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
  title: 'category/ArticleDetails',
  component: ArticleDetails,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
