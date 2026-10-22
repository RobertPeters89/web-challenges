import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import { expect } from "vitest";

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={() => {}} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNameInput = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: /create game/i });

  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNameInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={() => {}} />);

  const form = screen.getByRole("form", { name: /create a new game/i });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGameMock = vi.fn();

  render(<GameForm onCreateGame={handleCreateGameMock} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNameInput = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Dodelido");
  await userEvent.type(playerNameInput, "John Doe, Jane Doe");
  await userEvent.click(button);

  expect(handleCreateGameMock).toHaveBeenCalledTimes(1);
  expect(handleCreateGameMock).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGameMock = vi.fn();
  render(<GameForm onCreateGame={handleCreateGameMock} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Dodelido");
  await userEvent.click(button);

  expect(handleCreateGameMock).not.toHaveBeenCalled();
});
