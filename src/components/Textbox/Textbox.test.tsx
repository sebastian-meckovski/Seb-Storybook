import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { Textbox } from "./Textbox";

describe("Textbox", () => {
  it("should render the Textbox", () => {
    const id = "my-Textbox";
    const value = 'this is test value'
    const { getByTestId } = render(<Textbox data-testid={id} value={value}></Textbox>);
    expect(getByTestId(id)).toBeInTheDocument();
    expect(getByTestId(id)).toHaveValue(value)
  });
});
