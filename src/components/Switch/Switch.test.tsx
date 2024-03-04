import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { Switch } from "./Swtich";

describe("Switch", () => {
  it("should render the switch", () => {
    const title = "my-switch";
    const { getByTitle } = render(<Switch title={title} />);
    expect(getByTitle(title)).toBeInTheDocument();
  });
});
