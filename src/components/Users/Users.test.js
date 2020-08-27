import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Users from "./Users";

const users = [
  {
    id: 1,
    name: "John Robinson",
  },
  {
    id: 2,
    name: "John Bradley",
  },
];

describe("COMPONENT - Users", () => {
  it("renders Users component", () => {
    const { asFragment } = render(<Users users={users} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("list with searched users", () => {
    const { getByTestId, container } = render(<Users users={users} />);

    const input = getByTestId("users-input");

    fireEvent.change(input, { target: { value: "Bradley" } });

    const currentUsers = container.querySelectorAll("li");

    expect(currentUsers).toHaveLength(1);
  });
});
