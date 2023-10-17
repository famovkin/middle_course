import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
