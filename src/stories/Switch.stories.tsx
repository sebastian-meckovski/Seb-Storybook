import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch/Swtich";
import React from "react";

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Switch>;
/**
The Switch component is a simple toggle switch that behaves like an HTML Checkbox <input type="checkbox"/>. It can be used to create on/off switches or other binary choices in your React applications.
 */
export const Example: Story = {
  args: {
    checked: true,
    name: "testing",
    title: "hi Im title",
    onChange: (e) => {
      console.log("changing:", e.target);
    },
  },
};
