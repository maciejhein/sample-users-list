import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";

import { useUsers } from "./useUsers";

jest.mock("axios");

describe("HOOK - useUsers", () => {
  it("should fetch users", async () => {
    const users = [
      {
        name: "John Robinson",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: users }));

    const { result, waitForNextUpdate } = renderHook(() => useUsers());

    await waitForNextUpdate();

    expect(result.current.users).toEqual(users);
  });

  it("should return error", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Users error"))
    );

    const { result, waitForNextUpdate } = renderHook(() => useUsers());

    await waitForNextUpdate();

    expect(result.current.error.message).toBe("Users error");
  });
});
