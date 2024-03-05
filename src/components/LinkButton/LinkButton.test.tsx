import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("should render content card with a some JSX content in it", () => {
    const testId = "link button";
    const { getByTestId } = render(
      <LinkButton data-testid={testId}>
        <p>Test JSX Content here</p>
      </LinkButton>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toBeInstanceOf(HTMLAnchorElement)
    expect(getByTestId(testId)).toContainHTML("<p>Test JSX Content here</p>");
  });
});
