import type { Meta, StoryObj } from "@storybook/react";
import { ColorRadioButton } from "../components/ColorRadioButton/ColorRadioButton";
import React from "react";
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof ColorRadioButton> = {
  component: ColorRadioButton,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ColorRadioButton>;
/**
The Color Radio Button component is an enhanced version of the standard HTML Radio Button <input type="radio"/> button. It behaves exactly like a radio button but provides the flexibility to set a custom style.
*/

export const Single: Story = {
  args: {
    checked: true,
    title: "checkbox title",
    style: { backgroundColor: "#3B755F" }
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <ColorRadioButton
        {...args}
        onChange={onChange}
        checked={checked}
      />
    )
  }
};

export const Grouped: Story = {
  render: function Render(args) {
    const [{ selectedValue }, updateArgs] = useArgs();

    function onChange(e) {
      console.log(`setting background color to: ${window.getComputedStyle(e.target.parentElement).backgroundColor}`);
      updateArgs({ selectedValue: e.target.value });
    }
    return (
      <>
        <ColorRadioButton
          style={{ backgroundColor: "#2E3A8C" }}
          value={1}
          checked={selectedValue == 1}
          onChange={onChange}
          name="test"
        />
        <ColorRadioButton
          style={{ backgroundColor: "#3B755F" }}
          value={2}
          checked={selectedValue == 2}
          onChange={onChange}
          name="test"
        />
        <ColorRadioButton
          style={{ backgroundColor: "#000000" }}
          value={3}
          checked={selectedValue == 3}
          onChange={onChange}
          name="test"
        />
      </>
    );
  },
};

