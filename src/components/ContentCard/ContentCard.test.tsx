import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { ContentCard } from "./ContentCard";

describe("ContentCard", () => {
  it("should render content card with a some JSX content in it", () => {
    const testId = "content card";
    const { getByTestId } = render(
      <ContentCard data-testid={testId}>
        <p>Test JSX Content here</p>
      </ContentCard>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toContainHTML("<p>Test JSX Content here</p>");
  });
});
