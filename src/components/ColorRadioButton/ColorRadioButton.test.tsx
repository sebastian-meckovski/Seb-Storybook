import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { ColorRadioButton } from "./ColorRadioButton";

describe("ColorRadioButton", () => {
  it("should render the ColorRadioButton", () => {
    const { getAllByRole } = render(
      <>
        <ColorRadioButton
          style={{ backgroundColor: "#2E3A8C" }}
          name={"test"}
          data-testid="my-radio-input"
        />
        <ColorRadioButton
          style={{ backgroundColor: "#3B755F" }}
          name={"test"}
          checked
          onChange={()=>{}}
        />
        <ColorRadioButton
          style={{ backgroundColor: "#000000" }}
          name={"test"}
        />
      </>
    );

    expect(getAllByRole("radio")[0]).toBeInTheDocument();
    expect(getAllByRole("radio")[1]).toBeChecked();
  });
});
