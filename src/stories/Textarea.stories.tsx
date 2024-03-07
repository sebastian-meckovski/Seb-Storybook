import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/Textarea/Textarea";
import React from "react";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Textarea>;
/**
 */
export const Example: Story = {
  args: {
    placeholder: "Your message",
  },
};
