import type { Meta, StoryObj } from '@storybook/react';
import { SebComponent } from '../components/SebComponent/SebComponent';

const meta: Meta<typeof SebComponent> = {
  component: SebComponent,
};
export default meta;

type Story = StoryObj<typeof SebComponent>;

export const Example: Story = {
  args: {
    name: 'Sebbie'
  },
};