import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render the chekboxx", () => {
    const title = "my-checkbox";
    const { getByTitle } = render(<Checkbox title={title} />);
    expect(getByTitle(title)).toBeInTheDocument();
  });
});
