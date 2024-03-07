import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;
/**
 The Button component is a styled HTML button in React.
 */

export const Example: Story = {
  args: {
    children: "Read more",
  },
};
