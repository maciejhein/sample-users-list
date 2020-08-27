import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

const mockedArticleValue = jest.fn();
const mockedErrorValue = jest.fn();

jest.mock("../Users", () => () => "Users");

jest.mock("../../hooks", () => ({
  useUsers: () => ({
    users: mockedArticleValue(),
    error: mockedErrorValue(),
  }),
}));

describe("COMPONENT - App", () => {
  it("renders App component with Users", () => {
    mockedArticleValue.mockImplementation(() => "fooUsers");
    mockedErrorValue.mockImplementation(() => null);

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders App component with loading", () => {
    mockedArticleValue.mockImplementation(() => null);
    mockedErrorValue.mockImplementation(() => null);

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("throws an Error if useUsers failed", () => {
    let consoleErrorSpy;

    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {
      // Allows suppressing error logs
    });

    mockedArticleValue.mockImplementation(() => null);
    mockedErrorValue.mockImplementation(() => new Error("Foo error"));

    expect(() => render(<App />)).toThrow();

    consoleErrorSpy.mockRestore();
  });
});
