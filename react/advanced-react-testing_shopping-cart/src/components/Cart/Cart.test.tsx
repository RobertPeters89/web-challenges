import { beforeEach, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../CartItem";
import ShippingEstimate from "../ShippingEstimate";
import Cart from ".";
import type { CartItemProps } from "../CartItem";

// TODO: Replace CartItem and ShippingEstimate with vi.mock.
//
// - ShippingEstimate uses fetch. In these tests it must not send a request.
// - The mocked CartItem (its props are typed with CartItemProps from "../CartItem") should render the item name and two buttons that call
//   onQuantityChange?.(item.id, 3) and onRemove?.(item.id). Then the tests can trigger the handlers
//   without knowing how the real CartItem looks like.
// - Wrap the mock components in vi.fn() so you can look at the props they received
//   (vi.mocked(CartItem).mock.calls).
vi.mock("../CartItem", () => ({
  default: vi.fn(({ item, onQuantityChange, onRemove }: CartItemProps) => (
    <li>
      {item.name}
      <button type="button" onClick={() => onQuantityChange?.(item.id, 3)}>
        set quantity of {item.name}
      </button>
      <button type="button" onClick={() => onRemove?.(item.id)}>
        remove {item.name}
      </button>
    </li>
  )),
}));
vi.mock("../ShippingEstimate", () => ({
  default: vi.fn(() => <p>shipping estimate</p>),
}));

beforeEach(() => {
  vi.mocked(CartItem).mockClear();
  vi.mocked(ShippingEstimate).mockClear();
});

const initialItems = [
  { id: "1", name: "Coffee Grinder", price: 80, quantity: 1 },
  { id: "2", name: "Coffee Beans", price: 12.5, quantity: 2 },
];

test("renders a CartItem for every item", () => {
  // Both item names are on the screen.
  render(<Cart initialItems={initialItems} />);
  expect(screen.getByText("Coffee Grinder")).toBeInTheDocument();
  expect(screen.getByText("Coffee Beans")).toBeInTheDocument();
});

test("passes the item to its CartItem", () => {
  // The second call of the mocked CartItem received the second item as the prop "item".
  render(<Cart initialItems={initialItems} />);
  const secondItem = vi.mocked(CartItem).mock.calls.map(([props]) => props);
  expect(secondItem[1].item).toEqual(initialItems[1]);
});

test("shows the total price of all items", () => {
  // 80 × 1 + 12.5 × 2 = 105.00 €
  render(<Cart initialItems={initialItems} />);
  expect(screen.getByText("Total: 105.00 €")).toBeInTheDocument();
});

test("passes the total to ShippingEstimate", () => {
  // The last call of the mocked ShippingEstimate received { total: 105 }.
  render(<Cart initialItems={initialItems} />);
  const totalShippingEstimate = vi.mocked(ShippingEstimate).mock.lastCall?.[0];
  expect(totalShippingEstimate).toEqual({ total: 105 });
});

test("updates the total when a quantity changes", async () => {
  // Set the quantity of the Coffee Beans to 3 through the mocked CartItem: 80 + 12.5 × 3 = 117.50 €
  const user = userEvent.setup();
  render(<Cart initialItems={initialItems} />);
  await user.click(
    screen.getByRole("button", { name: "set quantity of Coffe Beans to 3" }),
  );
  expect(screen.getByText("Total: 117.50 €")).toBeInTheDocument();
});

test("removes an item when its CartItem calls onRemove", async () => {
  // The item disappears and the total is 25.00 € afterwards.
});

test("shows a message and no ShippingEstimate when the cart is empty", () => {
  // Hint: a mocked component that was never called was never rendered.
});
