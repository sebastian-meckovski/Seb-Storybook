import type { Meta, StoryObj } from "@storybook/react";
import { ProductWidget } from "../components/ProductWidget/ProductWidget";
import React from "react";
import { IProductWidget, productWidgetColors } from "../shared/types";

const meta: Meta<typeof ProductWidget> = {
  component: ProductWidget,
};
export default meta;

type Story = StoryObj<typeof ProductWidget>;

const mock_api_response: IProductWidget[] = [
  {
    id: 1,
    type: "plastic bottles",
    amount: 100,
    action: "collects",
    active: true,
    linked: true,
    selectedColor: productWidgetColors["green"],
  },
  {
    id: 2,
    type: "trees",
    amount: 10,
    action: "plants",
    active: false,
    linked: false,
    selectedColor: productWidgetColors["beige"],
  },
  {
    id: 3,
    type: "carbon",
    amount: 20,
    action: "offsets",
    active: false,
    linked: false,
    selectedColor: productWidgetColors["blue"],
  },
];

export const Example: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {mock_api_response.map((x) => {
          return (
            <ProductWidget
              amount={x.amount}
              action={x.action}
              id={x.id}
              active={x.active}
              type={x.type}
              linked={x.linked}
              selectedColor={x.selectedColor}
            />
          );
        })}
      </div>
    );
  },
};
