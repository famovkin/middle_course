import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/tests/storybook.jpeg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const initialFormData = {
  username: 'admin',
  first: 'Tolya',
  lastname: 'Fam',
  age: 28,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Vladimir',
  avatar,
};

export const Light: Story = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: initialFormData,
    },
  }),
];

export const Dark: Story = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: initialFormData,
    },
  }),
];
