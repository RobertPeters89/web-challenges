import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
import { expect } from "vitest";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Player name"
      placeholder="Enter a name"
      name="playername"
      value=""
      onChange={() => {}}
      required
    />,
  );

  const label = screen.getByText("Player name");
  const input = screen.getByLabelText("Player name");

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Enter a name");
  expect(input).toHaveAttribute("name", "playername");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChangeMock = vi.fn();
  render(
    <Input
      labelText="Player name"
      placeholder="Enter a name"
      name="playername"
      value=""
      onChange={handleChangeMock}
    />,
  );

  const input = screen.getByLabelText("Player name");
  await userEvent.type(input, "John");

  expect(handleChangeMock).toHaveBeenCalledTimes(4);
});
