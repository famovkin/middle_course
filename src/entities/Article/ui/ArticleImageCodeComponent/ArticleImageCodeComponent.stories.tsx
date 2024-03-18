import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleImageCodeComponent } from './ArticleImageCodeComponent';

const meta: Meta<typeof ArticleImageCodeComponent> = {
  title: 'category/ArticleImageCodeComponent',
  component: ArticleImageCodeComponent,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleImageCodeComponent>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
