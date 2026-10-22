import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";
import { expect } from "vitest";

test("renders player information and two buttons", () => {
  render(
    <Player
      name="John"
      score={5}
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />,
  );

  const name = screen.getByText("John");
  const score = screen.getByText("5");
  const buttons = screen.getAllByRole("button");

  expect(name).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecreaseMock = vi.fn();
  const handleIncreaseMock = vi.fn();

  render(
    <Player
      name="John"
      score="5"
      onDecreasePlayerScore={handleDecreaseMock}
      onIncreasePlayerScore={handleIncreaseMock}
    />,
  );

  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });
  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });

  await userEvent.click(decreaseButton);
  expect(handleDecreaseMock).toHaveBeenCalledTimes(1);
  expect(handleIncreaseMock).not.toHaveBeenCalled();

  await userEvent.click(increaseButton);
  expect(handleIncreaseMock).toHaveBeenCalledTimes(1);
  expect(handleDecreaseMock).toHaveBeenCalledTimes(1);
});
