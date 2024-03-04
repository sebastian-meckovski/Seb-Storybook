import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render the chekbox and it should be checked", () => {
    const title = "my-checkbox";
    const { getByTitle } = render(<Checkbox title={title} checked onChange={(e) => {console.log(e)}}/>);
    expect(getByTitle(title)).toBeInTheDocument();
    expect(getByTitle(title)).toBeChecked();
  });
});
