import type { Meta, StoryObj } from '@storybook/react';
import { BezierDrawer } from '../components/BezierDrawer/BezierDrawer';

const meta: Meta<typeof BezierDrawer> = {
  component: BezierDrawer,
  parameters: {
    controls: {
      exclude: 'onCoordUpdate'
    }
  }
};
export default meta;

type Story = StoryObj<typeof BezierDrawer>;

export const BezierDrawerExample: Story = {
  args: {
    onCoordUpdate: (e) => { console.log(e) },
    size: 400
  },
};