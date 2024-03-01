import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components/Switch/Swtich'
import React from 'react';

const meta: Meta<typeof Switch> = {
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Example: Story = {
    args: {
        name: 'testing',
        title: 'hi Im title',
    }
};