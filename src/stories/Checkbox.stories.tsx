import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs']
};
export default meta;
/**
The Checkbox component is a simple toggle switch that behaves like an HTML Checkbox <input type="checkbox"/>. It can be used to create on/off switches or other binary choices in your React applications.
 */
type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: {
    checked: true,
    title: "checkbox title",
    onChange:()=>{console.log('changing')}
  },
};
