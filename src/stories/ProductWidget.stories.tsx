import type { Meta, StoryObj } from "@storybook/react";
import { ProductWidget } from "../components/ProductWidget/ProductWidget";
import React, { useState } from "react";
import { IProductWidget, productWidgetColors } from "../shared/types";

const meta: Meta<typeof ProductWidget> = {
  component: ProductWidget,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ProductWidget>;

export const Example: Story = {
  args: {
    id: 20,
    amount: 200,
    selectedColor: productWidgetColors.blue,
    availableColors: Object.values(productWidgetColors),
    action: "offsets",
    active: true,
    linked: true,
    type: "plastic bottles",
    handleCheckboxClick: (e) => {
      console.log(e.target);
    },
    handleSwitchClick: (e) => {
      console.log(e.target);
    },
    handleColorClick: (e) => {
      console.log(e.target);
    },
    handleOnMouseEnter: (e) => {
      console.log(e.target);
    },
    handleInfoMarkFocus: (e) => {
      console.log(e.target);
    },
    handleInfoMarkBlur: (e) => {
      console.log(e.target);
    },
  },
};
