import type { Meta, StoryObj } from "@storybook/react";
import { ProductWidget } from "../components/ProductWidget/ProductWidget";
import React from "react";
import { productWidgetColors } from "../shared/types";

const meta: Meta<typeof ProductWidget> = {
  component: ProductWidget,
};
export default meta;

type Story = StoryObj<typeof ProductWidget>;

export const Example: Story = {
  render: () => {
    return (
      <ProductWidget
        amount={100}
        action={"collects"}
        id={123}
        active={true}
        type="carbon"
        linked={true}
        selectedColor={productWidgetColors.black}
        headingA={"This product collects"}
        headingB={"100 plastic bottles"}
        headingStyle={{
          color: "white",
          backgroundColor: "#2E3A8C",
        }}
      />
    );
  },
};
