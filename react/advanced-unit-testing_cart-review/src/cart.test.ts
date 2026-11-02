import { beforeEach, describe, expect, test } from "vitest";
import { addItem, getTotal, removeItem, type CartItem } from "./cart";

// const bread = { name: "Bread", price: 3, quantity: 1 };
// const apple = { name: "Apple", price: 2, quantity: 3 };

let bread: CartItem;
let apple: CartItem;

beforeEach(() => {
  bread = { name: "Bread", price: 3, quantity: 1 };
  apple = { name: "Apple", price: 2, quantity: 3 };
});

describe("addItem", () => {
  test("add a item to the cart", () => {
    expect(addItem([], apple)).toEqual([apple]);
  });

  test("add another item to the one inside the cart", () => [
    expect(addItem([apple], bread)).toEqual([apple, bread]),
  ]);

  test("quantity increases of one item that is already inside the cart", () => {
    const cart = addItem([apple], { ...apple, quantity: 2 });
    expect(cart).toEqual([{ name: "Apple", price: 2, quantity: 5 }]);
  });

  test("does not change the cart that was passed in", () => {
    const cart = [apple];
    addItem(cart, { ...apple, quantity: 2 });
    expect(cart).toEqual([{ name: "Apple", price: 2, quantity: 3 }]);
  });
});

describe("removeItem", () => {
  test("remove one item with given name");
  expect(removeItem([apple, bread], "Apple")).toEqual([bread]);

  test("cart stays the same if given name is not inside", () => {
    expect(removeItem([bread], "Milk")).toEqual([bread]);
  });
});

describe("getTotal", () => {
  test("0 return for empty cart", () => {
    expect(getTotal([])).toBe(0);
  });

  test("multiplies price and quantity and gives sum for all itmes", () => {
    expect(getTotal([apple, bread])).toBe(9);
  });

  test.each([
    { coupon: "SAVE10", expected: 8.1 },
    { coupon: "HALF", expected: 4.5 },
  ])("applies the coupon $coupon", ({ coupon, expected }) => {
    expect(getTotal([apple, bread], coupon)).toBeCloseTo(expected);
  });

  test("throws for an unknown coupon", () => {
    expect(() => getTotal([apple], "FREE")).toThrow("Unknown coupon: FREE");
  });
});
/* describe("cart", () => {
  test("works", () => {
    const cart = addItem([], apple);

    expect(cart).toBeDefined();
  });

  test("total", () => {
    const cart = [apple, bread];
    const expected = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    expect(getTotal(cart)).toBe(expected);
  });

  test("remove", () => {
    removeItem([apple, bread], "Apple");
  });

  test("coupon", () => {
    expect(getTotal([apple], "SAVE10")).toBeLessThan(getTotal([apple]));
  });

  test("cart", () => {
    let cart = addItem([], apple);
    expect(cart.length).toBe(1);

    cart = addItem(cart, bread);
    expect(cart.length).toBe(2);

    cart = removeItem(cart, "Apple");
    expect(cart.length).toBe(1);
    expect(getTotal(cart)).toBe(3);
    expect(getTotal(cart, "HALF")).toBeGreaterThan(0);
  });

  test("adding an item that is already in the cart", () => {
    const cart = addItem([apple], apple);

    expect(cart[0].quantity).toBe(6);
  });
}); */
