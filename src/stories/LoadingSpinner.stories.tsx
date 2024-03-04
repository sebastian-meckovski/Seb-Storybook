import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
};
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Example: Story = {
  args: {},
};
