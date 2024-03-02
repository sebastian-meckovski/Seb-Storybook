import type { Meta, StoryObj } from "@storybook/react";
import { ProductWidget } from "../components/ProductWidget/ProductWidget";
import React, { useState } from "react";
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
    const [apiDataState, setApiDataState] = useState(mock_api_response);
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {apiDataState.map((x) => {
          return (
            <ProductWidget
              key={x.id}
              amount={x.amount}
              action={x.action}
              id={x.id}
              active={x.active}
              type={x.type}
              linked={x.linked}
              availableColors={Object.values(productWidgetColors)}
              selectedColor={x.selectedColor}
              handleCheckboxClick={(e) => {
                console.log(e.target.checked);
              }}
              handleSwitchClick={(e) => {
                console.log(e.target.checked);
              }}
              handleColorClick={(e, color) => {
                console.log(e.target.checked);
                console.log(color)
              }}
              handleOnMouseEnter={(e) => {
                console.log("mouse entering...", e);
              }}
              handleOnMouseLeave={(e) => {
                console.log("mouse leaving...", e);
              }}
            />
          );
        })}
      </div>
    );
  },
};
