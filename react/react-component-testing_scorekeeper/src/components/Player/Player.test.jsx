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
  const handleDecreasePlayerScore = vi.fn();
  const handleIncreasePlayerScore = vi.fn();

  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={handleDecreasePlayerScore}
      onIncreasePlayerScore={handleIncreasePlayerScore}
    />,
  );

  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });

  expect(handleDecreasePlayerScore).toHaveBeenCalledTimes(0);
  await user.click(decreaseButton);
  expect(handleDecreasePlayerScore).toHaveBeenCalledTimes(1);

  const increaseButton = screen.getByRole("button", { name: "Increase Score" });

  expect(handleIncreasePlayerScore).toHaveBeenCalledTimes(0);
  await user.click(increaseButton);
  expect(handleIncreasePlayerScore).toHaveBeenCalledTimes(1);
});
