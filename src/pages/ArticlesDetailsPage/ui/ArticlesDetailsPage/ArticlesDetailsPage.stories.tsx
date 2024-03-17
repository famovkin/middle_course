import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticlesDetailsPage from './ArticlesDetailsPage';

const meta: Meta<typeof ArticlesDetailsPage> = {
  title: 'pages/ArticlesDetailsPage',
  component: ArticlesDetailsPage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesDetailsPage>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
