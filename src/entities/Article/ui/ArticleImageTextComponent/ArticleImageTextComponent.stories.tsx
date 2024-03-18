import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleImageTextComponent } from './ArticleImageTextComponent';

const meta: Meta<typeof ArticleImageTextComponent> = {
  title: 'category/ArticleImageTextComponent',
  component: ArticleImageTextComponent,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleImageTextComponent>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
