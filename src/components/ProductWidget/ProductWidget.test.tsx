import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { ProductWidget } from "./ProductWidget";
import { productWidgetColors } from "../../shared/types";

describe("ProductWidget", () => {
  it("should render the widget with both checked checkbox and a switch", () => {
    const { getByText, getByTitle } = render(
      <ProductWidget
        id={20}
        amount={200}
        selectedColor={productWidgetColors.blue}
        availableColors={Object.values(productWidgetColors)}
        action={"offsets"}
        active={true}
        linked={true}
        type={"plastic bottles"}
        handleCheckboxClick={() => {}}
        handleSwitchClick={() => {}}
        handleColorClick={() => {}}
        handleOnMouseEnter={() => {}}
        handleInfoMarkFocus={() => {}}
        handleInfoMarkBlur={() => {}}
      />
    );
    expect(getByText("This product offsets")).toBeInTheDocument();
    expect(getByText("200 plastic bottles")).toBeInTheDocument();
    expect(getByTitle("200 plastic bottles - Link to Public Profile")).toBeChecked();
    expect(getByTitle("200 plastic bottles - Activate badge")).toBeChecked();
  });
});
