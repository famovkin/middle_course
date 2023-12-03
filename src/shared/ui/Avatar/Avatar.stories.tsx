import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpeg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg,
    alt: 'Аватар',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
  },
};

export const Small: Story = {
  args: {
    size: 50,
  },
};
