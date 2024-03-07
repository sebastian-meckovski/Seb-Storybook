import type { Meta, StoryObj } from "@storybook/react";
import { Textbox } from "../components/Textbox/Textbox";
import React from "react";

const meta: Meta<typeof Textbox> = {
  component: Textbox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Textbox>;
/**
 */
export const Example: Story = {
  args: {
    placeholder: "First name",
    name: "name"
  },
};
