import type { Meta, StoryObj } from "@storybook/react";
import { ColorRadioButton } from "../components/ColorRadioButton/ColorRadioButton";
import React from "react";

const meta: Meta<typeof ColorRadioButton> = {
  component: ColorRadioButton,
};
export default meta;

type Story = StoryObj<typeof ColorRadioButton>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <ColorRadioButton  
          style={{ backgroundColor: "#2E3A8C" }}
          name={"test"}
        />
        <ColorRadioButton
          style={{ backgroundColor: "#3B755F" }}
          name={"test"}
        />
        <ColorRadioButton
          style={{ backgroundColor: "#000000" }}
          name={"test"}
        />
      </>
    );
  },
};
