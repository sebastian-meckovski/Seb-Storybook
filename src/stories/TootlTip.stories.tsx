import type { Meta, StoryObj } from "@storybook/react";
import { ToolTip } from "../components/Tooltip/ToolTip";
import React from "react";

const meta: Meta<typeof ToolTip> = {
  component: ToolTip,
};
export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Example: Story = {
  args: {
    target: "blank",
    anchorContent: "View Public Profile",
    href: "https://sebastian-meckovski.github.io/",
    tootlipcontent:
      "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.",
  },
};
