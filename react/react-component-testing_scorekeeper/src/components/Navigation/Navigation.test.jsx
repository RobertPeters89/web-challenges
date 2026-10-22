import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from ".";
import { expect } from "vitest";

test("renders with two buttons 'Play' and 'History'", () => {
  render(<Navigation view="play" onChangeView={() => {}} />);

  const playButton = screen.getByRole("button", { name: /play/i });
  const historyButton = screen.getByRole("button", { name: /history/i });

  expect(playButton).toBeInTheDocument();
  expect(historyButton).toBeInTheDocument();
});

test("calls the callback with the name of the view when a button is clicked", async () => {
  const handleChangeViewMock = vi.fn();

  render(<Navigation view="play" onChangeView={handleChangeViewMock} />);

  const playButton = screen.getByRole("button", { name: /play/i });
  const historyButton = screen.getByRole("button", { name: /history/i });

  await userEvent.click(historyButton);
  expect(handleChangeViewMock).toHaveBeenCalledWith("history");

  await userEvent.click(playButton);
  expect(handleChangeViewMock).toHaveBeenCalled("play");

  expect(handleChangeViewMock).toHaveBeenCalled("2");
});
