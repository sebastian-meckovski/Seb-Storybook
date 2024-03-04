import type { Meta, StoryObj } from "@storybook/react";
import { ColorRadioButton } from "../components/ColorRadioButton/ColorRadioButton";
import React from "react";

const meta: Meta<typeof ColorRadioButton> = {
  component: ColorRadioButton,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ColorRadioButton>;
/**
The Color Radio Button component is an enhanced version of the standard HTML Radio Button <input type="radio"/> button. It behaves exactly like a radio button but provides the flexibility to set a custom style. */

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
