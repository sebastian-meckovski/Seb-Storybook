import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox/Checkbox";
import React from "react";
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Checkbox>;
/**
The Checkbox component is a simple toggle switch that behaves like an HTML Checkbox <input type="checkbox"/>. It can be used to create on/off switches or other binary choices in your React applications.
 */
export const Example: Story = {
  args: {
    checked: true,
    title: "checkbox title",
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <Checkbox
        {...args}
        onChange={onChange}
        checked={checked}
      />
    )
  }
};

