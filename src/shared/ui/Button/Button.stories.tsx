import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};

export const PrimaryDark: Story = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
