import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quas sint eligendi, id dolores beatae totam laboriosam hic maxime mollitia officia eveniet eius iste dignissimos praesentium aspernatur quam vitae suscipit dolor autem nam natus voluptatibus delectus. Voluptatem velit tenetur, quae nam harum facilis minus inventore ex eligendi sint! Quam nisi, consequatur laborum laudantium, ex pariatur dolorem doloribus at eveniet blanditiis quasi, ratione illum ipsum facilis! Consequuntur ducimus quos sequi eos magni ad aspernatur iusto dolores expedita exercitationem. Illo cum ipsa nostrum, ratione ex saepe animi. Accusantium temporibus deleniti, dolor quis soluta perferendis eligendi quas repellendus ullam deserunt inventore debitis obcaecati.',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
