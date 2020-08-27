import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

const mockedUsersValue = jest.fn();
const mockedErrorValue = jest.fn();

jest.mock("../Users", () => () => "Users");

jest.mock("../../hooks", () => ({
  useUsers: () => ({
    users: mockedUsersValue(),
    error: mockedErrorValue(),
  }),
}));

describe("COMPONENT - App", () => {
  it("renders App component with Users", () => {
    mockedUsersValue.mockImplementation(() => "fooUsers");
    mockedErrorValue.mockImplementation(() => null);

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders App component with loading", () => {
    mockedUsersValue.mockImplementation(() => null);
    mockedErrorValue.mockImplementation(() => null);

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("throws an Error if useUsers failed", () => {
    let consoleErrorSpy;

    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {
      // Allows suppressing error logs
    });

    mockedUsersValue.mockImplementation(() => null);
    mockedErrorValue.mockImplementation(() => new Error("Foo error"));

    expect(() => render(<App />)).toThrow();

    consoleErrorSpy.mockRestore();
  });
});
