import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render button with a some JSX content in it", () => {
    const testId = "test-button";
    const { getByTestId } = render(
      <Button data-testid={testId}>
        <p>Test JSX Content here</p>
      </Button>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId(testId)).toContainHTML("<p>Test JSX Content here</p>");
  });
});
