import React from "react";
import { render } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";

describe("COMPONENT - ErrorBoundary", () => {
  let consoleErrorSpy;

  // Dummy components, for testing purposes
  function ChildComponent() {
    return <p>I'm child component!</p>;
  }

  function ComponentWithError() {
    throw new Error("Something went wrong...");
  }

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {
      // Allows suppressing error bounadry logs
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it("renders the child component if there is no error", () => {
    const { asFragment } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders fallback Error component if there is error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    expect(getByText("Error: Something went wrong...")).toBeTruthy();
  });
});
