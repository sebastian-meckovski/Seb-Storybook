import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../components/LinkButton/LinkButton";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof LinkButton>;
/**
 The LinkButton component is a styled anchor tag in React, resembling a button. 
 It combines the familiar behavior of an HTML anchor (<a>) tag with custom styles for
 a button-like appearance. By using this component, developers can create interactive links
 while ensuring accessibility and consistent user experience. 🚀
 */

export const Example: Story = {
  args: {
    children: "Read more",
  },
};
