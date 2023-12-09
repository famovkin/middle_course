import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpeg';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      first: 'Tolya',
      lastname: 'Fam',
      age: 28,
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Vladimir',
      avatar,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'error',
  },
};
